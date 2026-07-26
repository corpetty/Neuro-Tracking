---
title: Knowledge graph
description: A live, typed graph of everything in this notebook — sessions, symptoms, findings, mechanisms, hypotheses and the papers behind them.
tags:
  - graph
  - index
---

Quartz's built-in graph shows which pages link to which. This one shows **what the links mean**: that a session *yielded* a finding, that a mechanism *may explain* a symptom, that a paper *pressure-tests* a hypothesis, that anxiety *confounds* the ADHD thread. Every relation is typed, and every relation between a paper and a claim carries the verbatim quote that justifies it.

<iframe src="viewer.htm" title="Neuro-Tracking knowledge graph" style="width:100%;height:76vh;min-height:560px;border:1px solid var(--lightgray);border-radius:8px;background:var(--light);"></iframe>

<p style="font-size:0.85em;opacity:0.7;margin-top:-0.5em">Not rendering? <a href="viewer.htm" target="_blank">Open the graph full-screen →</a></p>

## How to read it

- **Colour = node type.** Blue notes, teal sessions and findings, red symptoms, amber mechanisms, yellow hypotheses, purple papers, dark red tensions. Toggle any type off with the chips above the canvas.
- **Colour of an edge = predicate category.** Blue is the timeline, red is causal ("may explain"), purple is provenance, orange is dialectical (evidence, confounds, contradictions), yellow is argument structure.
- **Thicker edges carry evidence** — a quote, a page locator and a confidence level, visible when you click either endpoint.
- **Dotted edges are `[[wikilinks]]`**, hidden by default. They are navigation, not argument, and are deliberately kept out of the reasoning graph so link noise never contaminates it.
- Click a node for its detail panel; double-click to zoom into its neighbourhood at the hop distance set in the toolbar.

## What the graph is for

Three things, in order of how often they matter:

1. **Keeping context.** The record of what has been done — every session, every score, every question raised and whether it was ever answered — in a form that survives forgetting.
2. **Keeping the differential honest.** ADHD, anxiety, sleep and mood all sit on the graph as rival explanations via the `confounds` predicate, and the [[graph/ontology|ontology]] will not let a hypothesis quietly swallow its competitors. Contested hypotheses stay contested by construction.
3. **Feeding an AI session without dumping the whole notebook.** `make context CENTER=<id>` projects one node's neighbourhood into a compact, citeable Markdown packet — the claims in scope with their source quotes, the open questions, the tensions, and nothing else.

## Reference

- [[graph/ontology|Ontology reference]] — the node types and predicates the graph is allowed to contain, generated from the schema itself.
- [[graph/how-to-add|How to add to the graph]] — the loop for recording a new session, paper, symptom or hypothesis.

> [!warning] Still not medical advice
> `mayExplain` means *might*. Every causal edge on this graph is a hypothesis to bring to a clinician, not a finding about my health.
