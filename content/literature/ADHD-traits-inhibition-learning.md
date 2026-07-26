---
title: "ADHD-like traits reshape the balance between inhibitory control and predictive processes"
description: Summary of Horváth et al. (2026), a bioRxiv preprint on how ADHD-like traits alter the interplay between response inhibition and statistical learning.
tags:
  - adhd
  - cognitive-neuroscience
  - statistical-learning
  - inhibitory-control
  - paper-summary
---

**Authors:** Karolina Horváth, Bianka Brezóczki, Adrienn Holczer, Teodóra Vékony, Dezső Németh
**Source:** bioRxiv preprint, posted March 2, 2026 · doi: [10.1101/2025.10.28.685045](https://doi.org/10.1101/2025.10.28.685045) · CC-BY-NC-ND 4.0
**File:** `2025.10.28.685045.full.pdf`

## One-line takeaway

In a large non-clinical sample, higher ADHD-like traits went hand-in-hand with weaker response inhibition, and — critically — reshaped the normal trade-off between inhibition and statistical (habit) learning: the "learning advantage" that usually comes with weaker inhibition progressively broke down as ADHD symptom load rose.

## Background & question

Adaptive behavior depends on balancing flexible, goal-directed control against efficient, automatic processes. ADHD is understood as a disruption of this balance and is increasingly viewed as a continuum of traits spread across the general population rather than a strict category. Prior work has typically studied response inhibition and statistical learning (SL) in isolation. This study asked how ADHD-like traits modulate the *interaction* between the two, using a paradigm that measures both at once. The hypothesis, based on the "competition hypothesis," was an antagonistic relationship — weaker inhibition allowing stronger SL — that would itself vary systematically across the trait spectrum.

## Methods

- **Sample:** 226 university students (from 317 recruited; 71.6% retention after exclusions). Mean age 21.4; 183 female, 42 male, 1 unspecified. Online experiment for course credit.
- **Task — Cognitive Trade-off Task (CTT):** Combines the Alternating Serial Reaction Time Task (ASRT, a visuomotor statistical-learning paradigm) with a Go/No-Go component (response inhibition). Participants pressed keys for "go" stimuli and withheld responses for "No-Go" stimuli. A hidden 8-element probabilistic sequence let high- vs. low-probability triplets index statistical learning; No-Go accuracy indexed inhibition. 30 blocks, 80 trials each, 12.5% No-Go.
- **ADHD measure:** Adult ADHD Self-Report Scale (ASRS v1.1), 18 items. Scores ranged 6–57 (M = 31.66, SD = 10.04) — treated dimensionally, not as a clinical cutoff.
- **Analysis:** Linear mixed-effects models in R. Model 1: No-Go accuracy ~ Block × ASRS. Model 2: Go RT ~ Block × Triplet type × ASRS × No-Go accuracy.

## Key findings

1. **Higher ADHD-like traits → weaker response inhibition.** No-Go accuracy fell significantly as ASRS scores rose (b = −0.003, *p* = .004). This deficit held even in a demanding dual-task setting and below clinical thresholds. Inhibition also declined over the course of the task.

2. **Statistical learning was intact overall.** Participants responded faster to high-probability than low-probability triplets (b = −3.067, *p* < .001), confirming learning.

3. **Antagonism between inhibition and learning.** Weaker inhibition (lower No-Go accuracy) was linked to a *larger* statistical-learning effect. The learning effect was largest at low No-Go accuracy (b = −9.40) and shrank as accuracy rose (b = −2.92 at high accuracy).

4. **ADHD traits reshape that trade-off (the core result).** The inhibition–learning antagonism was moderated by ASRS score (three-way interaction, *p* = .037). For low and average ADHD-trait individuals, learning declined steeply as inhibition improved — the expected pattern. But at the high end of the ADHD continuum this relationship flattened and became non-significant: high-symptom individuals did **not** show the usual learning advantage even when their inhibition was poor.

## Interpretation

The authors frame this via animal "sign-tracker vs. goal-tracker" research: for high-ADHD-trait individuals, the No-Go cue may act as a "motivational magnet" that triggers automatic responding their top-down systems can't override — so the compensatory learning benefit seen in others breaks down. Mind-wandering is offered as a second, transdiagnostic candidate mechanism. The findings support a dimensional, spectrum-based view of ADHD, with neurocognitive shifts appearing before symptoms reach clinical significance — arguing for early detection and targeted intervention.

## Limitations

Narrow, highly-educated university sample; strong gender imbalance (81% women), limiting generalizability especially for inhibition; unsupervised online testing; reliance on a single self-report measure (ASRS) for ADHD traits.

## Why it matters

Rather than treating inhibition and learning as separate deficits, the study shows ADHD-like traits alter the *dynamic interaction* between cognitive systems — a change detectable even in subclinical individuals. This supports moving from binary case–control models toward dimensional frameworks relevant to transdiagnostic psychiatry and precision mental health.
