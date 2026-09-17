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

## Serving live/interactive HTML pages (learned the hard way)

Quartz only treats `.md` as pages; every other file under `content/` is copied verbatim
by the `Assets` emitter (`quartz/plugins/emitters/assets.ts`). Two traps make a raw
interactive page *download* instead of render, and one makes it invisible to search/LLMs:

1. **Use the `.htm` extension, never `.html`.** The asset emitter runs every filename
   through `slugifyFilePath`, which **strips a trailing `.html`** — so
   `foo/map.html` is emitted as extension-less `foo/map`, served as an octet-stream, and
   the browser downloads it. `.htm` is left intact and serves as `text/html`. (This is the
   same slugify quirk noted in `graph/export-site.js`.)
2. **Embed it in a note via `<iframe>`, don't link to it.** `enableSPA: true` means
   `spa.inline.ts` intercepts internal link clicks, fetches the target, and only swaps it in
   when the response is `text/html`; otherwise it does a full navigation that can download.
   An `<iframe src="…​.htm">` inside a markdown note bypasses the SPA entirely. Always add a
   `<a href="…​.htm" target="_blank">` fallback. The canonical example is
   `content/graph/index.md` embedding `content/graph/viewer.htm`; the dimensions map follows
   the same pattern (`content/dimensions/orthogonality.md` → `orthogonality-map.htm`).
3. **Keep the page crawlable / LLM-readable.** Author the interactive `.htm` as *progressive
   enhancement*: render all real content as static HTML in the file, with `<title>` +
   `<meta name="description">`, and let JS only add interactivity (e.g. an accordion enabled
   by adding a `pe` class to `<body>`). A JS-that-builds-the-DOM page is empty to non-JS
   crawlers. The parent markdown note should also carry the same content in prose, so the
   text is indexable at the note level regardless of the iframe.

**Checking they render locally.** The viewer does `fetch("./graph-data.json")`, so `file://`
fails on CORS — serve `content/` first: from that dir, `python3 -m http.server 8765`, then open
`http://localhost:8765/graph/viewer.htm` (or `/dimensions/orthogonality-map.htm`). Confirm zero
console errors. For the graph viewer, `content/graph/graph-data.json` must be committed and current
(`make site`); verify it actually drew from the live Cytoscape instance —
`document.getElementById("cy")._cyreg.cy` — checking `cy.nodes().length` / `cy.edges().length`
against the build's counts and that a given id is present and `.visible()` (the viewer's node total
excludes the `Status` hub nodes, so it runs a few below `make stats`). The dimensions map is
self-contained (no fetch); confirm JS enhancement ran via `document.body.classList.contains("pe")`.
The viewer shows a *recoverable* "canvas has no size yet" banner while its container is still
unsized and clears it once drawn (a ResizeObserver plus a 400 ms safety net): a banner that
persists over a **drawn** graph is a bug; a banner with **no** graph means the embedding really is
giving the iframe zero height.

## Layout

| Path | What |
|---|---|
| `content/` | published notes |
| `content/graph/viewer.htm` | the live Cytoscape graph (hand-written, loads `graph-data.json`) |
| `content/dimensions/orthogonality-map.htm` | interactive dimensions map (`.htm` + iframe pattern above) |
| `graph/profiles/neuro/ontology.json` | the schema: node types, predicates, catalog loaders |
| `graph/profiles/neuro/catalogs/` | the hand-authored nodes and relations |
| `graph/profiles/neuro/interpretive/` | evidence triples with quotes |
| `graph/export-site.js` | graph → `content/graph/{graph-data.json,ontology.md,stats.json}` |
| `graph/README.md` | engine docs + the list of local patches to upstream |

Site build: `npm ci && npx quartz plugin install --from-config && npx quartz build --serve`.
