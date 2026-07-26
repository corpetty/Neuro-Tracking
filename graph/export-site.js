#!/usr/bin/env node
// export-site — project the built graph into the Quartz site.
//
// Emits three things into content/graph/:
//   graph-data.json  the typed graph the live viewer renders (nodes, edges,
//                    evidence payloads, node type/predicate metadata, hrefs).
//                    NOT graph.json: Quartz slugifies content/graph/graph.json
//                    to graph/index.json, colliding with the folder index.
//   ontology.md  a generated human reference for the schema contract, so the
//                published ontology can never drift from ontology.json
//   stats.json   small build summary the graph page footer reads
//
// Run after `make build`. `make site` does both.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadContext } from './core/lib/config.js';
import { buildGraph } from './core/build-graph.js';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = join(REPO, 'content', 'graph');

const ctx = loadContext();
const { ontology, renderSpec, profileMeta } = ctx;
const { nodes, edges, stats, warnings } = buildGraph(ctx);

// ---------------------------------------------------------------- site links
// A Note links to its own page. Everything else borrows the page of the note
// that documents/defines/covers it, so clicking a Symptom lands on the symptom
// log rather than nowhere.
const pathPrefix = (() => {
  try {
    return new URL(profileMeta.siteBaseUrl || 'https://example.com').pathname.replace(/\/$/, '');
  } catch {
    return '';
  }
})();

const noteHref = (node) =>
  node.file ? `${pathPrefix}/${node.file.replace(/\.md$/, '').replace(/\/index$/, '/')}` : null;

const homeNote = new Map(); // non-note id -> note id
for (const e of edges) {
  if (!['documentedIn', 'definedIn'].includes(e.predicate)) continue;
  if (!homeNote.has(e.source)) homeNote.set(e.source, e.target);
}
const NOTE = ontology.documentType || 'Note';
for (const e of edges) {
  if (!['covers', 'argues', 'flagsOpenQuestion', 'cites'].includes(e.predicate)) continue;
  if (!homeNote.has(e.target)) homeNote.set(e.target, e.source);
}
// Anything still homeless (an author, an instrument only referenced by a paper)
// inherits the page of a neighbour that has one, one hop at a time.
const weak = new Set(
  Object.entries(ontology.predicates).filter(([, p]) => p.category === 'weak').map(([k]) => k),
);
const isNote = (id) => nodes.get(id)?.type === NOTE;
for (let pass = 0; pass < 3; pass++) {
  for (const e of edges) {
    if (weak.has(e.predicate)) continue;
    for (const [a, b] of [[e.source, e.target], [e.target, e.source]]) {
      if (homeNote.has(a) || isNote(a)) continue;
      const home = isNote(b) ? b : homeNote.get(b);
      if (home) homeNote.set(a, home);
    }
  }
}

const nodeList = [...nodes.values()].map((n) => {
  const home = n.type === (ontology.documentType || 'Note') ? n : nodes.get(homeNote.get(n.id));
  return {
    ...n,
    label: n.label || n.title || n.id,
    href: home ? noteHref(home) : null,
    degree: 0,
  };
});
const byId = new Map(nodeList.map((n) => [n.id, n]));
for (const e of edges) {
  if (byId.has(e.source)) byId.get(e.source).degree++;
  if (byId.has(e.target)) byId.get(e.target).degree++;
}

// Nodes nothing connects to (an unused lifecycle status, say) carry no
// information on a canvas — drop them from the site view. They stay in the
// graph proper, and the count is reported in meta.
const isolated = nodeList.filter((n) => n.degree === 0).map((n) => n.id);
const visibleNodes = nodeList.filter((n) => n.degree > 0);

const edgeList = edges.map((e) => ({
  ...e,
  category: ontology.predicates[e.predicate]?.category || 'weak',
}));

mkdirSync(OUT_DIR, { recursive: true });

// NOTE: nothing here may include a timestamp. These files are committed, and CI
// fails the build if re-running `make site` produces a diff — a clock in the
// output would make that check fire on every run.
const payload = {
  meta: {
    profile: ctx.profileName,
    ontologyVersion: ontology.version,
    counts: stats,
    warnings: warnings.length,
    isolatedDropped: isolated,
  },
  nodeTypes: ontology.nodeTypes,
  predicates: ontology.predicates,
  predicateCategories: ontology.predicateCategories,
  hubTransitTypes: ontology.hubTransitTypes || [],
  neverRender: renderSpec.neverRender || [],
  nodes: visibleNodes,
  edges: edgeList,
};
writeFileSync(join(OUT_DIR, 'graph-data.json'), JSON.stringify(payload));
writeFileSync(join(OUT_DIR, 'stats.json'), JSON.stringify(stats, null, 2) + '\n');

// ------------------------------------------------------------- ontology page
const esc = (s) => String(s ?? '').replace(/\|/g, '\\|');
const md = [];
md.push('---');
md.push('title: Ontology reference');
md.push(
  'description: The typed vocabulary this notebook is allowed to use — generated from the ontology, never hand-edited.',
);
md.push('tags:\n  - graph\n  - reference');
md.push('---');
md.push('');
md.push(
  '> [!info] Generated file\n> Built from `graph/profiles/neuro/ontology.json` by `make site`. Edit the ontology, not this page.',
);
md.push('');
md.push(ontology.description);
md.push('');
md.push('## Node types');
md.push('');
md.push('| Type | Id prefix | Is… | Count |');
md.push('|---|---|---|---|');
for (const [type, def] of Object.entries(ontology.nodeTypes)) {
  md.push(`| **${type}** | \`${def.ns}:\` | ${esc(def.description)} | ${stats.byNodeType[type] || 0} |`);
}
md.push('');
md.push('## Predicates');
md.push('');
md.push(
  'Predicates are grouped into categories. The **weak** category (navigation links) is deliberately kept out of the argument graph so link noise never contaminates retrieval.',
);
for (const [cat, cdef] of Object.entries(ontology.predicateCategories)) {
  const preds = Object.entries(ontology.predicates).filter(([, p]) => p.category === cat);
  if (!preds.length) continue;
  md.push('');
  md.push(`### ${cat}`);
  md.push('');
  md.push(`_${esc(cdef.description)}_`);
  md.push('');
  md.push('| Predicate | Shape | Means | Count |');
  md.push('|---|---|---|---|');
  for (const [name, p] of preds) {
    const shape = `${(p.subjectTypes || ['*']).join(' \\| ')} → ${(p.objectTypes || ['*']).join(' \\| ')}${
      p.directed === false ? ' (undirected)' : ''
    }${p.carriesEvidence ? ' · carries evidence' : ''}`;
    md.push(`| \`${name}\` | ${shape} | ${esc(p.description)} | ${stats.byPredicate[name] || 0} |`);
  }
}
md.push('');
md.push('## Lifecycle statuses');
md.push('');
md.push((ontology.statuses || []).map((s) => `\`${s}\``).join(' · '));
md.push('');
md.push('## Catalog files');
md.push('');
md.push('Each node type is authored in one JSON file under `graph/profiles/neuro/catalogs/`:');
md.push('');
md.push('| File | Node type | Edge fields you can use |');
md.push('|---|---|---|');
for (const l of ontology.catalogLoaders || []) {
  const fields = Object.keys(l.arrayFieldEdges || {});
  md.push(
    `| \`${l.file}\` | ${l.nodeType} | ${fields.length ? fields.map((f) => `\`${f}\``).join(', ') : '—'} |`,
  );
}
md.push('');
md.push(`_${stats.nodes} nodes · ${stats.edges} edges · ontology v${ontology.version}._`);
md.push('');
writeFileSync(join(OUT_DIR, 'ontology.md'), md.join('\n'));

console.log(
  `[site] content/graph/graph-data.json — ${stats.nodes} nodes, ${stats.edges} edges; ontology.md regenerated`,
);
if (!existsSync(join(OUT_DIR, 'viewer.htm'))) {
  console.error('  warn: content/graph/viewer.htm is missing — the graph page has nothing to render');
}
