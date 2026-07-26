# Neuro-Tracking

A personal digital garden for tracking, summarizing, and connecting scientific research
in neuroscience and cognitive science. Built with [Quartz v5](https://quartz.jzhao.xyz/)
and published to GitHub Pages.

Underneath the notes sits a **typed knowledge graph** ([corpus-graph](https://github.com/corpetty/corpus-graph),
vendored in `graph/`) that records what has actually been done — sessions, findings,
symptoms, hypotheses, the papers behind them, and the rival explanations that haven't
been ruled out. It renders live at `/graph` and projects into citeable context packets
for AI sessions.

## Structure

- `content/` — all notes (Markdown). This is what gets published.
  - `content/index.md` — site home page.
  - `content/literature/` — papers + summaries.
    - `content/literature/index.md` — running index of everything read/summarized.
  - `content/about-me/` — personal case: profile, symptoms, diagnostics, sessions.
  - `content/graph/` — the live graph page, the generated ontology reference, and
    `graph-data.json` (generated — do not hand-edit).
- `graph/` — the knowledge-graph engine and the `neuro` profile (ontology, catalogs,
  evidence). See [`graph/README.md`](graph/README.md).
- `quartz.config.yaml` — site configuration (title, base URL, plugins).

## Adding a new paper

1. Drop the source PDF into `content/literature/`.
2. Create a summary note `content/literature/<topic>.md` with frontmatter
   (`title`, `description`, `tags`).
3. Add a row to the table in `content/literature/index.md` and link the summary
   with a `[[wikilink]]`.
4. Register it in the graph: an entry in `graph/profiles/neuro/catalogs/papers.json`
   (plus `authors.json`), the note in `notes.json`, and the claims it supports or
   pressure-tests as evidence lines in `graph/profiles/neuro/interpretive/<paper>.jsonl`
   — each with a verbatim quote.
5. `cd graph && make site && make check`, then commit the regenerated
   `content/graph/graph-data.json` and `content/graph/ontology.md`.

The full loop is documented at [`content/graph/how-to-add.md`](content/graph/how-to-add.md)
and published at `/graph/how-to-add`.

## Working with the graph

```bash
cd graph
make site        # rebuild + export into content/graph/
make check       # strict build (warnings fatal) + tests — what CI enforces
make context CENTER=hypothesis:adhd-explains-internal-restlessness
make help        # everything else
```

## Local development

```bash
npm ci                                  # install dependencies
npx quartz plugin install --from-config # install community plugins
npx quartz build --serve                # preview at http://localhost:8080
```

## Publishing

Pushing to the `main` branch triggers `.github/workflows/deploy.yml`, which builds
the site and deploys it to GitHub Pages at
`https://corpetty.github.io/Neuro-Tracking`.

In the repo's **Settings → Pages**, set **Source** to **GitHub Actions** once.
