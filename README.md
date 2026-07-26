# Neuro-Tracking

A personal digital garden for tracking, summarizing, and connecting scientific research
in neuroscience and cognitive science. Built with [Quartz v5](https://quartz.jzhao.xyz/)
and published to GitHub Pages.

## Structure

- `content/` — all notes (Markdown). This is what gets published.
  - `content/index.md` — site home page.
  - `content/literature/` — papers + summaries.
    - `content/literature/index.md` — running index of everything read/summarized.
- `quartz.config.yaml` — site configuration (title, base URL, plugins).

## Adding a new paper

1. Drop the source PDF into `content/literature/`.
2. Create a summary note `content/literature/<topic>.md` with frontmatter
   (`title`, `description`, `tags`).
3. Add a row to the table in `content/literature/index.md` and link the summary
   with a `[[wikilink]]`.

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
