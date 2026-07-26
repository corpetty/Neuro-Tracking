# graph/ — the Neuro-Tracking knowledge graph

A vendored copy of [corpus-graph](https://github.com/corpetty/corpus-graph) (commit
`45d1027`), configured with a `neuro` profile that reads this repository's own
`content/` tree.

It turns the notebook into a **typed semantic-triple graph**, and projects that graph
two ways:

- **into the site** — `content/graph/graph-data.json` feeds the live viewer at `/graph`
- **into an AI session** — `make context CENTER=<id>` emits a compact, citeable
  Markdown packet: one node's neighbourhood, with the evidence quotes attached

```bash
make site       # rebuild the graph + export graph-data.json and the ontology page
make build      # rebuild only
make check      # strict build (warnings fatal) — the CI gate
make test       # golden snapshot + structural invariants
make doctor     # health check without rebuilding
make context CENTER=hypothesis:adhd-explains-internal-restlessness
make refs       # pdftotext the registered PDFs into profiles/neuro/refs/ (gitignored)
make help       # everything else
```

Node ≥ 20, GNU Make, zero runtime dependencies. `make refs` additionally wants
`pdftotext` (poppler-utils).

## Layout

```
config/                 upstream defaults — inherited by any profile that doesn't override
core/                   the engine (build, bundle, harvest, extract, triage, diff, doctor)
export-site.js          graph -> content/graph/{graph-data.json,ontology.md,stats.json}
extract-refs.js         PDFs -> profiles/<p>/refs/*.txt
profiles/neuro/         THIS notebook
  profile.json            points contentDir at ../../../content; site base URL
  ontology.json           the schema contract: 13 node types, 7 predicate categories
  render-spec.json        what a context bundle emits, in what order
  catalogs/*.json         the hand-authored nodes and their relations
  interpretive/*.jsonl    evidence triples: paper -> claim, with verbatim quotes
  expected-stats.json     golden snapshot (bless changes with `make accept-stats`)
profiles/software-docs/ upstream's worked example — kept so the engine's own tests run
data/<profile>/         derived output (gitignored; rebuilt in under a second)
```

## The two axes

The ontology joins a **case timeline** to a **research argument**:

```
Instrument ─administeredIn→ Session ─yielded→ Finding
                              ↑ observedIn        ↓ mayExplain ←─ Mechanism ←─supports─ Paper
                           Symptom  ←──mayExplain── Hypothesis ←─confounds── (rival Mechanism)
```

Facts about what happened are kept structurally separate from what they might mean.
`mayExplain` is always hypothetical; `confounds` records the rival explanation that
has to be ruled out first, and the context bundle refuses to drop it.

## Local modifications to upstream

Deliberately small, and marked `LOCAL PATCH` in the source:

| File | Change | Why |
|---|---|---|
| `core/lib/config.js` | optional `profile.json` with `contentDir` | read the Quartz `content/` tree instead of duplicating prose into `profiles/neuro/content/` |
| `core/lib/config.js` | default profile is `neuro` | this repo has one real corpus |
| `core/build-graph.js` | strip code fences/spans before scanning wikilinks | a `[[wikilink]]` written as an example in a how-to page isn't a link |
| `core/build-graph.js` | recursive orphan-content scan | the Quartz corpus is nested, upstream's check was top-level only |
| `core/build-graph.js` | `sourceType`/`documentType` read from the ontology | upstream hardcoded `Source`/`Document`, which this profile renames |
| `core/context-bundle.js` | `sec.nodeType` honoured in the sources section | same reason |
| `core/context-bundle.js` | `claimExtras` + `rivalPredicate` | surface `confounds` / `mayExplain` / `tensionWith` on a claim, so a bundle can't present a hypothesis while quietly dropping its competitors |

To pull upstream changes: diff against a fresh clone of corpus-graph and re-apply the
table above. Everything under `profiles/neuro/` is ours and never conflicts.

## The rebuild guarantee

The graph is **derived, never stored**. Every command rebuilds it from the catalogs,
the prose and the evidence files, in well under a second, so it cannot drift from its
inputs and there is no cache to invalidate. The two gatekeepers (`addNode`, `addEdge`)
refuse anything the ontology doesn't declare, so a backwards or off-contract relation
is unauthorable rather than merely discouraged.

See [`content/graph/how-to-add.md`](../content/graph/how-to-add.md) for the maintenance
loop, and `docs/` for upstream's methodology, mapping and integration notes.
