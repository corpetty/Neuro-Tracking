---
title: Arousal, state regulation, and mind-wandering
description: A deep-dive on the two mechanism axes ADHD shares with anxiety, sleep debt and mood — why they overlap by construction, and what actually discriminates them.
tags:
  - adhd
  - arousal
  - mind-wandering
  - state-regulation
  - differential-diagnosis
---

[[dimensions/orthogonality|The orthogonality map]] claims that ADHD and its mimics are collinear at the phenotype but separable at the mechanism level. This note tests that claim on the two mechanism axes where the overlap is worst — arousal/state regulation and mind-wandering — and the honest answer is more qualified than the map implies. These axes are shared *by construction*. What discriminates is not the state itself but its envelope: how it responds to conditions, when it started, and whether it survives the removal of the rival.

## State regulation: the axis is defined as sleep- and stress-sensitive

The cognitive-energetic model locates ADHD's deficit not in processing but in the energetic pools that support it: *"At this level, the primary deficits of ADHD are associated with the activation pool and (to some extent) effort"* (Sergeant, 2000). Sergeant later argued the inhibition findings may be downstream of this — *"inhibition deficits associated with ADHD may, at least in part, be explained in terms of an energetic dysfunction"* (Sergeant, 2005) — while conceding the model needs direct measures of the pools it posits.

The overlap problem is not incidental to this model; it is in the definition. The energetic pools are *"affected from a number of external and internal factors, such as availability of environmental stimulation, stress, sleep-wake cycle, noise, and, medications"* (Metin, 2013). Sleep debt and anxiety move the very variable ADHD is hypothesised to dysregulate. So an arousal observation, on its own, cannot isolate ADHD — which is exactly why `mechanism:arousal-regulation` carries `confounds` edges from sleep, anxiety and mood in this graph (`hypothesis:arousal-axis-is-shared-by-construction`).

What is claimed to be ADHD-specific is the *regulation*, not the level: the impairment is *"associated with the ability to self-regulate arousal rather than having a constant under or over aroused physiological state"* (Isaac et al., 2023) — with those authors noting the evidence *"continue[s] to show mixed results."* The testable signature is condition-dependence. In a meta-analysis of event-rate effects, ADHD performance diverged from controls in opposite directions depending on pacing: *"significant and disproportionate slowing of reaction time in ADHD relative to controls on trials with slow event rates … For commission errors, the effect sizes were larger on trials with fast event rates"* (Metin, 2013/2012). A deficit that appears and vanishes with task pacing is a regulation failure; a uniformly low level would be something else.

## Mind-wandering: the specificity test it failed

The mind-wandering account proposes that *"altered deactivation of the default mode network, and dysfunctional interaction with the executive control network, leads to excessive and spontaneous MW, which underpins symptoms and impairments of ADHD"* (Bozhilova et al., 2018). Phenomenologically it targets the *form* of thought rather than its content — in adults with ADHD it *"reflects constant mental activity which lacks topic stability and content consistency."* The MEWS operationalises this and performed well, with *"high sensitivity (.9) and specificity (.9) for the ADHD diagnosis,"* and mind-wandering contributed to impairment *"independent of the core ADHD symptoms of inattention and hyperactivity/impulsivity"* (Mowlem et al., 2019).

Then it failed the test that matters here. Figueiredo et al. (2020) found *"no differences in ADHD and non-ADHD groups regarding MW levels"* and concluded *"MW is associated with anxiety levels, independently of an ADHD diagnosis"* — adding that mind-wandering *"cannot be considered a 'hallmark' of ADHD."* Their result is itself a miniature of this notebook's central theme: *"Using clinical diagnosis according to DSM-5 criteria, there are no differences between ADHD and non-ADHD regarding MW. When we use symptoms count (inattention scores on SNAP-IV), there is a correlation between inattention and MW."* Categorically null, dimensionally real (`hypothesis:mind-wandering-is-transdiagnostic`).

The sample was small (n = 78, adolescents) and underpowered, so this is a serious qualification rather than a refutation. But it points the same way as Kandeğer et al. (2024), where *"ADHD symptoms exhibited an indirect, but not a direct, association with the severity of anxiety and depression, mediated by increased excessive mind wandering and rumination"* — mind-wandering behaving as a transdiagnostic bridge rather than an ADHD marker.

## Sleep: a strong rival for inattention, a weak one for restlessness

Sleep and ADHD interact in at least four ways, one of which is that *"sleep problems may cause or mimic ADHD"* (Hvolby, 2015). The mimicry is experimentally demonstrated: in healthy children with no sleep or behavioural problems, *"a cumulative restriction of sleep of 54.04 minutes was associated with detectable deterioration"* on blinded teacher ratings (Gruber et al., 2012), and in adolescents with ADHD, sleep duration is *"a causal contributor to daytime behaviors"* (Becker et al., 2019).

But the rival has a boundary worth recording precisely, because it narrows the differential: *"No experimental study has yet shown that sleep restriction induces hyperactivity, impulsivity or externalizing behaviors in children … despite the perception that 'paradoxical' hyperactivity exists"* (Hvolby, 2015). Becker's ADHD sample likewise reported *less* hyperactivity-impulsivity under restriction. So sleep debt is a live rival for the inattention half of the picture and a demonstrably weaker one for internal restlessness (`hypothesis:sleep-rivals-inattention-not-restlessness`).

## What actually discriminates

Nothing in the *state* does. The discriminators are structural, and two sources converge on them.

Alarachi et al. (2024) found that 41.3% of an adult anxiety-disorder sample screened positive on the ASRS, with the internal-restlessness items behaving worst — *"[t]he ADHD item having difficulty unwinding or relaxing … demonstrated poor specificity with measures of generalized anxiety."* Their proposed test is counterfactual and temporal: assessors should ask *"whether restlessness, problems relaxing, and feeling driven by a motor are still present in the absence of clinical anxiety symptoms or prior to onset of an anxiety or related disorder."*

Cortese et al. (2025) generalise it into three questions — onset, trajectory, and mechanism: consider *"the age of onset of the symptoms,"* examine *"the trajectory of the symptoms,"* and assess *"if the way symptoms manifest is better explained by another mental disorder (e.g., inattention only as a consequence of dysfunctional thoughts/rumination related to performance as in generalized anxiety disorder …)."* They also note that in adults *"hyperactivity … often manifests as inner restlessness, overscheduling, or not being able to relax properly"* — the description that makes `symptom:internal-restlessness` so hard to attribute.

That is the practical upshot for `tension:adhd-vs-anxiety-internal-restlessness`. The tension cannot be resolved by rating the *intensity* of the internal state, because both conditions produce it and the ASRS items measuring it are partly anxiety items. It can potentially be resolved by characterising its *structure*: whether it is worry-content or topic-shifting, whether it is situational or constant, whether it predates any anxiety, and whether it persists when anxiety is low. Those are answerable by careful description — which is what `question:what-is-the-internal-state` has been asking for all along.
