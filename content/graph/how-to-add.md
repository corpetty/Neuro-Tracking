---
title: How to add to the graph
description: The maintenance loop — record what happened, connect it, rebuild, query.
tags:
  - graph
  - reference
---

The graph is **derived, never stored**: it is rebuilt from scratch on every run (well under a second), so it can't drift from its inputs. There is no database to keep in sync. You edit two kinds of thing — prose in `content/`, and catalog entries in `graph/profiles/neuro/catalogs/*.json` — and rebuild.

```bash
cd graph
make build      # rebuild the graph, print warnings
make site       # rebuild + regenerate content/graph/graph-data.json and ontology.md
make check      # strict build (warnings fatal) + tests — what CI runs
make doctor     # health check without rebuilding
```

## The loop

### 1. Write the note first

Prose lives in `content/`, as it always has. Nothing about the graph changes how you write.

### 2. Register the note

Add an entry to `catalogs/notes.json`. The id must be the slugified path, so `[[wikilinks]]` resolve:

```json
{
  "id": "note:about-me-sessions-2026-09-01-gp-visit",
  "label": "2026-09-01 — GP visit",
  "file": "about-me/sessions/2026-09-01-gp-visit.md",
  "summary": "One line, for the AI context bundle.",
  "partOf": ["note:about-me-index"],
  "hasStatus": ["stable"]
}
```

A note that exists on disk but in no catalog is reported as *orphan content* by the build. That warning is the point: it stops the graph silently falling behind the garden.

### 3. Record what actually happened

Case facts go in their own catalogs, and they are kept separate from what those facts might mean:

| You did this | Add to | Connect with |
|---|---|---|
| Took a test, saw a clinician, had a relevant conversation | `sessions.json` | `yielded`, `documentedIn`, `precedes`, `flagsOpenQuestion` |
| Got a score, a lab value, an observation | `findings.json` | `documentedIn`, `supersedes` |
| Noticed a new symptom or a change | `symptoms.json` | `observedIn`, `documentedIn` |
| Started a medication, sleep protocol, therapy | `interventions.json` | `startedIn`, `affects`, `hasStatus` |
| Used a new screener or task | `instruments.json` | `measures`, `administeredIn` |

Sessions chain with `precedes`, which is what makes the timeline a spine you can walk rather than a pile of dated notes.

### 4. Only then, interpret

| The thought | Add to | Connect with |
|---|---|---|
| A named construct from the literature | `mechanisms.json` | `definedIn`, `derivesFrom`, `mayExplain` |
| Something you're trying to establish or falsify | `hypotheses.json` | `argues` (from a note), `dependsOn`, `mayExplain` |
| Something you don't know yet | `questions.json` | referenced by `flagsOpenQuestion` |
| Two explanations that both fit | `tensions.json` | `tensionWith` |
| A rival explanation that must be ruled out | any of the above | `confounds` → the hypothesis |

`confounds` is the load-bearing honesty predicate. Every time you write down a personal hypothesis, ask what else would produce the same observation and add that mechanism with a `confounds` edge. The context bundle surfaces contested hypotheses as live trade-offs, so the alternative can't quietly disappear.

### 5. Add a paper

Add it to `papers.json` (with its authors in `authors.json`), then record what it actually says as evidence triples in `interpretive/<paper>.jsonl` — one line per claim, each with a **verbatim quote**, a page locator, a confidence and a rationale:

```json
{"subject":"paper:<id>","predicate":"supports","object":"hypothesis:<id>","quote":"…exact words from the paper…","pageApprox":"Discussion","confidence":"high","rationale":"why this quote backs that claim"}
```

Use `pressureTests` for anything that qualifies, limits or contradicts a claim — including the paper's own limitations section. Because the evidence lives on the edge, the fact and its justification are retrieved together, and a claim can be cited without reopening the PDF.

### 6. Rebuild and check

```bash
make site && make check
```

The build refuses anything off-contract: an unknown node type or predicate throws, and a backwards relation (`Symptom → measures → Instrument`, say) is dropped with a warning, because direction is enforced from the `subjectTypes`/`objectTypes` declared in the [[graph/ontology|ontology]]. Warnings also catch unresolved wikilinks, dangling edges, orphan notes, and papers registered with a source file but no evidence yet.

## Querying context

To bring an AI session up to speed on one thread without pasting the whole notebook:

```bash
cd graph
make context CENTER=hypothesis:adhd-explains-internal-restlessness
make context CENTER=session:2026-07-26-asrs-screening ARGS="--hop=1"
make context CENTER=note:about-me-symptoms ARGS="-o /tmp/bundle.md"
```

The bundle is one node's neighbourhood, type-aware-rendered in this order: what happened (sessions, findings, symptoms), then what's being tested (hypotheses with their evidence quotes), what's contested, what's open, and the papers in range. Its size is bounded by the node's local degree, not by how big the notebook has grown.

Other useful entry points:

```bash
make catalog    # the closed-world list of valid ids, for grounding an agent
make harvest    # scan prose for candidate claims into a gitignored inbox
make stats      # node/edge counts as JSON
```

## Changing the schema itself

Add a node type or predicate in `graph/profiles/neuro/ontology.json`, then run `make site` to regenerate [[graph/ontology|the reference page]] and `make accept-stats` to bless the new counts as the golden snapshot. The schema is a contract on purpose: widen it deliberately, in one file, rather than letting ad-hoc relations accumulate.
