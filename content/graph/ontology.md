---
title: Ontology reference
description: The typed vocabulary this notebook is allowed to use — generated from the ontology, never hand-edited.
tags:
  - graph
  - reference
---

> [!info] Generated file
> Built from `graph/profiles/neuro/ontology.json` by `make site`. Edit the ontology, not this page.

Ontology for Neuro-Tracking: a personal neuro/cognitive research notebook. Two axes meet here. The CASE axis is temporal — Sessions happen, Instruments are administered in them, they yield Findings, Symptoms are observed, Interventions are started and affect things. The RESEARCH axis is argumentative — Papers support or pressure-test Hypotheses and Mechanisms, Mechanisms may explain Symptoms and Findings, Tensions and Questions stay open. This file is the single contract the build, the exporter, the site graph, and the tests all read. 'directed', 'subjectTypes', 'objectTypes' and 'carriesEvidence' are READ by the engine, not just documentation.

## Node types

| Type | Id prefix | Is… | Count |
|---|---|---|---|
| **Note** | `note:` | A page in the garden — a paper summary, a symptom log, a session note, an index. The only type that owns prose on the site. | 25 |
| **Session** | `session:` | A dated event in the case: a self-administered test, a therapy conversation, a clinical appointment, a deliberate journalling pass. The unit of 'what we did and when'. | 1 |
| **Symptom** | `symptom:` | An experienced pattern being tracked — described phenomenologically, not diagnostically. | 3 |
| **Instrument** | `instrument:` | A measurement tool: a screener, a questionnaire, a cognitive task, a lab panel, a wearable metric. | 12 |
| **Finding** | `finding:` | A concrete result produced by a Session — a score, a clinician's observation, a lab value. Facts about the case, distinct from what they might mean. | 3 |
| **Intervention** | `intervention:` | Something deliberately changed and tracked over time: medication, sleep protocol, therapy, exercise, caffeine, environment. | 3 |
| **Mechanism** | `mechanism:` | A named cognitive/neural construct the notebook reuses: response inhibition, statistical learning, mind-wandering, executive function. | 19 |
| **Hypothesis** | `hypothesis:` | A load-bearing assertion the notebook is trying to defend or falsify. Never a diagnosis — always something that can be pressure-tested. | 33 |
| **Question** | `question:` | An open problem the notebook is working on; can gate a Note, a Hypothesis, or a next Session. | 4 |
| **Paper** | `paper:` | An external work cited: journal article, preprint, book, clinical guideline. | 81 |
| **Author** | `author:` | Who produced a Paper. | 73 |
| **Tension** | `tension:` | A competing-explanation or trade-off held open on purpose — e.g. ADHD vs. anxiety as the source of the same symptom. Reified so it cannot quietly resolve itself. | 10 |
| **Status** | `status:` | Lifecycle status (a hub-transit type: reachable but never traversed through). | 9 |

## Predicates

Predicates are grouped into categories. The **weak** category (navigation links) is deliberately kept out of the argument graph so link noise never contaminates retrieval.

### structural

_Where a thing sits: containment, coverage, what measures what._

| Predicate | Shape | Means | Count |
|---|---|---|---|
| `partOf` | Note → Note | Note belongs to a parent Note (section index). | 24 |
| `covers` | Note → Symptom \| Finding \| Session \| Instrument \| Intervention \| Mechanism \| Hypothesis \| Question \| Tension | This note is where the thing is written up. | 35 |
| `measures` | Instrument → Symptom \| Mechanism | Instrument is designed to measure this symptom domain or construct. | 23 |
| `hasStatus` | Note \| Hypothesis \| Question \| Intervention → Status | Node has this lifecycle status. | 61 |

### temporal

_The case timeline: what happened when, in what order, and what it produced._

| Predicate | Shape | Means | Count |
|---|---|---|---|
| `administeredIn` | Instrument → Session | Instrument was administered during this session. | 1 |
| `yielded` | Session → Finding | Session produced this finding. | 3 |
| `observedIn` | Symptom → Session | Symptom was reported/observed in this session. | 3 |
| `startedIn` | Intervention → Session | Intervention began at this session. | 0 |
| `precedes` | Session → Session | Session comes before another session — the timeline spine. | 0 |

### causal

_What might explain or affect what. Always hypothetical in this corpus._

| Predicate | Shape | Means | Count |
|---|---|---|---|
| `mayExplain` | Mechanism \| Hypothesis \| Intervention → Symptom \| Finding | Candidate explanation for an experience or result. HYPOTHETICAL by construction — never a diagnosis. | 28 |
| `affects` | Intervention → Symptom \| Mechanism \| Finding | Intervention is being tracked for its effect on this. | 0 |
| `derivesFrom` | Mechanism \| Hypothesis → Mechanism \| Hypothesis | X is built on / specialises Y. | 4 |

### provenance

_Where a thing came from: which note records it, which paper, which author._

| Predicate | Shape | Means | Count |
|---|---|---|---|
| `documentedIn` | Session \| Finding \| Symptom \| Intervention \| Tension → Note | The case fact is written up in this note. | 22 |
| `definedIn` | Mechanism → Note | Mechanism has its primary development in this note. | 19 |
| `cites` | Note → Paper | Note cites a paper (a deliberate act, never inferred from prose). | 84 |
| `authoredBy` | Paper → Author | Paper authored by Author. | 104 |

### dialectical

_What is contested: evidence, confounds, contradictions, supersession, open questions._

| Predicate | Shape | Means | Count |
|---|---|---|---|
| `supports` | Paper → Hypothesis \| Mechanism · carries evidence | Paper supports this hypothesis/mechanism. The edge carries the verbatim quote + page locator + confidence + rationale, so a fact and its justification travel together. | 92 |
| `pressureTests` | Paper → Hypothesis \| Mechanism · carries evidence | Paper challenges/qualifies this hypothesis/mechanism. Same evidence payload. | 11 |
| `confounds` | Mechanism \| Symptom \| Intervention → Hypothesis | A rival explanation that must be ruled out before the hypothesis can stand. The honesty predicate of this ontology. | 6 |
| `contradicts` | Hypothesis \| Mechanism \| Finding → Hypothesis \| Mechanism \| Finding (undirected) | Direct contradiction. | 0 |
| `tensionWith` | Hypothesis \| Mechanism \| Symptom \| Finding \| Tension → Hypothesis \| Mechanism \| Symptom \| Finding (undirected) | In unresolved tension with (both endpoints stay live). | 18 |
| `supersedes` | Hypothesis \| Finding \| Note → Hypothesis \| Finding \| Note | Replaces a prior version — later screening supersedes an earlier one, a revised hypothesis supersedes its draft. | 0 |
| `flagsOpenQuestion` | Note \| Hypothesis \| Session \| Finding \| Symptom → Question | Flags an open question the node rests on. | 23 |

### claim

_Argument structure: arguing, depending._

| Predicate | Shape | Means | Count |
|---|---|---|---|
| `argues` | Note → Hypothesis | Note argues this hypothesis. | 35 |
| `dependsOn` | Hypothesis → Hypothesis \| Question \| Finding | Hypothesis rests on another hypothesis, on a question resolving a particular way, or on a finding holding up. | 9 |

### weak

_Casual cross-links for navigation only — deliberately kept out of the argument graph._

| Predicate | Shape | Means | Count |
|---|---|---|---|
| `wikiLinks` | Note → Note \| Session \| Symptom \| Finding \| Instrument \| Intervention \| Mechanism \| Hypothesis \| Question \| Paper \| Tension \| Author | Wiki-style link parsed from prose. Navigation only — kept out of the argument graph. | 88 |
| `mentions` | Note → Mechanism \| Hypothesis \| Paper \| Symptom | Free-text mention — navigation, not argument. | 0 |

## Lifecycle statuses

`seed` · `active` · `stable` · `open` · `being-tested` · `supported` · `challenged` · `resolved` · `superseded`

## Catalog files

Each node type is authored in one JSON file under `graph/profiles/neuro/catalogs/`:

| File | Node type | Edge fields you can use |
|---|---|---|
| `catalogs/notes.json` | Note | `partOf`, `covers`, `argues`, `cites`, `flagsOpenQuestion`, `hasStatus` |
| `catalogs/sessions.json` | Session | `yielded`, `precedes`, `documentedIn`, `flagsOpenQuestion` |
| `catalogs/instruments.json` | Instrument | `measures`, `administeredIn` |
| `catalogs/findings.json` | Finding | `documentedIn`, `supersedes`, `flagsOpenQuestion`, `tensionWith` |
| `catalogs/symptoms.json` | Symptom | `observedIn`, `documentedIn`, `confounds`, `flagsOpenQuestion`, `tensionWith` |
| `catalogs/interventions.json` | Intervention | `affects`, `startedIn`, `mayExplain`, `confounds`, `documentedIn`, `hasStatus` |
| `catalogs/mechanisms.json` | Mechanism | `definedIn`, `derivesFrom`, `mayExplain`, `confounds`, `tensionWith` |
| `catalogs/hypotheses.json` | Hypothesis | `argues`, `dependsOn`, `mayExplain`, `supersedes`, `flagsOpenQuestion`, `tensionWith`, `contradicts`, `hasStatus` |
| `catalogs/questions.json` | Question | — |
| `catalogs/papers.json` | Paper | `authoredBy` |
| `catalogs/authors.json` | Author | — |
| `catalogs/tensions.json` | Tension | `tensionWith`, `documentedIn` |

_276 nodes · 693 edges · ontology v0.1.0._
