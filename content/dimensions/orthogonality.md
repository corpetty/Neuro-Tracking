---
title: The four levels and their orthogonality
description: A map of what "dimension" means at four levels of ADHD — phenotype, mechanism, nosology, etiology — and where the axes are orthogonal, oblique, or confounded.
tags:
  - dimensional-models
  - orthogonality
  - taxometrics
  - hitop
---

There is an [interactive version of this map](orthogonality-map.html) you can open and explore; this note is the prose companion and the anchor for the knowledge graph. The single organising idea: **orthogonality only means something within a level, and it rarely survives the jump between levels.**

## Three relationships

Throughout, three verdicts recur. Two axes are **orthogonal** when they vary independently, **oblique** when they are correlated and share variance, and **collinear** when they are so confounded that one cannot be separated from the other by the measure at hand.

## Level 1 — Phenotype

What rating scales measure: **inattention (IA)**, **hyperactivity/impulsivity (HI)**, and **severity / trait load**. IA and HI are not orthogonal — they are strongly correlated. In a two-factor model the latent correlation is around *"The correlation between IN and HYIMP=0.78"* in a school sample and 0.68 in a clinical one (Arildskov et al., 2020), and across prior studies it ranges from 0.56 to 0.98. This is why a bifactor model fits best — one dominant general-ADHD factor plus two weak specific factors — and why the DSM presentations (predominantly inattentive / hyperactive / combined) are just positions in a *skewed* 2-D plane. Severity is a third, roughly independent axis: how much is separable from which domain dominates. **Verdict: oblique.**

## Level 2 — Mechanism

The neurocognitive processes underneath: response inhibition, sustained attention / reaction-time variability, working memory, reward / delay aversion, temporal processing, and arousal / state regulation. This is where genuine independence lives — the processes are dissociable, and no single one is present in every case (developed in [[dimensions/measurement|the measurement note]]). **Verdict: near-orthogonal.** These axes are registered in the graph as `mechanism:sustained-attention`, `mechanism:working-memory`, `mechanism:reward-delay-aversion`, `mechanism:arousal-regulation`, `mechanism:reaction-time-variability` and `mechanism:temporal-processing`, alongside the existing `mechanism:response-inhibition`.

## Level 3 — Nosology

Where ADHD sits in the map of all psychopathology. In HiTOP, ADHD is not a box but a set of dimensions (IA, HY, IMP) located under the disinhibited externalizing spectrum, cross-loading to antagonism. The spectra are correlated by design — that correlation is exactly what forces a general *p*-factor on top — so the axes become orthogonal only after a bifactor extraction (*p* ⟂ residual spectra). **Verdict: oblique.**

## Level 4 — Etiology

The liability distribution beneath. Heritability is roughly constant across the trait range and clinical ADHD is the genetic extreme of the population trait — the backbone of the continuum claim, established in [[literature/dimensional-continuum-adhd|the literature survey]]. But liability is not orthogonal across conditions: ADHD's genetic correlations with the rest of externalizing are high, so "the ADHD dimension" is genetically entangled with its neighbours. **Verdict: collinear across disorders.**

## The crux — the cross-level map is many-to-many

Orthogonality inside a level does not carry across levels. One phenotypic axis is fed by several mechanistic ones — inattention can arise from poor sustained attention, working-memory overload, low arousal, *or* motivational disengagement — and one mechanism spills across several phenotypic axes. So you cannot read mechanism off phenotype, and a single rating score collapses all four levels into one number.

Two further orthogonalities sharpen the point. First, **rating and task are themselves orthogonal**: questionnaire and performance measures of the "same" construct correlate only weakly (median r ≈ .19; see [[dimensions/measurement|measurement]]). Second, **the mimics overlap at the mechanism level**: anxiety, sleep debt and mood disturbance share arousal and sustained-attention axes with ADHD, so they look identical at the phenotype and only become separable one level down. Mechanism-level orthogonality is the discriminating lever for the personal `tension:adhd-vs-anxiety-internal-restlessness`.
