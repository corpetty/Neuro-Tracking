# Neuro-Tracking — working notes for AI sessions

A Quartz v5 digital garden (`content/`) with a typed knowledge graph underneath it
(`graph/`, a vendored copy of [corpus-graph](https://github.com/corpetty/corpus-graph)).
Published to GitHub Pages from `main`.

## Before answering anything about this notebook

Load the relevant context bundle instead of reading the whole corpus:

```bash
cd graph
make context CENTER=<node-id>            # default hop=2
make context CENTER=<node-id> ARGS="--hop=1"
make catalog                             # the closed-world list of valid ids
```

Useful centers: `note:about-me-symptoms`, `session:2026-07-26-asrs-screening`,
`hypothesis:adhd-explains-internal-restlessness`, `paper:horvath-2026-adhd-traits`.
A bundle carries the case facts, the hypotheses with their verbatim source quotes,
the rival explanations, the open questions and the tensions — and nothing else.

## When you change anything

1. Prose goes in `content/`. Graph facts go in `graph/profiles/neuro/catalogs/*.json`.
   Every note on disk must be registered in `notes.json` with an id equal to its
   slugified path (`about-me/profile.md` → `note:about-me-profile`), or the build
   warns about orphan content and unresolved wikilinks.
2. Run `cd graph && make site && make check`. `make check` is strict: warnings fail.
3. Commit the regenerated `content/graph/graph-data.json` and `content/graph/ontology.md` —
   CI fails if they're stale.
4. If node/edge counts changed on purpose, `make accept-stats` to bless the snapshot.

`content/graph/ontology.md` and `content/graph/graph-data.json` are **generated**. Edit
`graph/profiles/neuro/ontology.json` instead.

## Rules that matter more than convenience here

- **Facts and interpretation stay separate.** What happened goes in `sessions.json` /
  `findings.json` / `symptoms.json`. What it might mean goes in `hypotheses.json` /
  `mechanisms.json`, connected with `mayExplain` — which always means *might*.
- **Never write a diagnosis.** There is no formal diagnosis on record; there is one
  positive ASRS v1.1 screen. Everything downstream of it is hypothesis.
- **Rival explanations are mandatory.** Any personal hypothesis needs `confounds`
  edges from the mechanisms that would produce the same observation (anxiety, sleep
  debt, mood). The context bundle flags a hypothesis whose rivals aren't ruled out.
- **Evidence must be verbatim.** Lines in `interpretive/*.jsonl` carry an exact quote
  from the source, a page/section locator, a confidence and a rationale. Do not
  paraphrase into the `quote` field. `make refs` extracts PDF text to check against.
- **The ontology is a contract.** Adding a relation type means editing
  `ontology.json`, not inventing a predicate at the call site — off-contract edges
  throw or are dropped with a warning.

## Layout

| Path | What |
|---|---|
| `content/` | published notes |
| `content/graph/viewer.htm` | the live Cytoscape graph (hand-written, loads `graph-data.json`) |
| `graph/profiles/neuro/ontology.json` | the schema: node types, predicates, catalog loaders |
| `graph/profiles/neuro/catalogs/` | the hand-authored nodes and relations |
| `graph/profiles/neuro/interpretive/` | evidence triples with quotes |
| `graph/export-site.js` | graph → `content/graph/{graph-data.json,ontology.md,stats.json}` |
| `graph/README.md` | engine docs + the list of local patches to upstream |

Site build: `npm ci && npx quartz plugin install --from-config && npx quartz build --serve`.
