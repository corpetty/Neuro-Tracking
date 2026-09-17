---
title: "ADHD interventions — what works, and why response is not proof"
description: The evidence base for ADHD treatment — stimulant medication, cognitive behavioural therapy, and mindfulness — and the diagnostic caution that a positive stimulant response does not confirm ADHD, because it helps people without the disorder too.
tags:
  - adhd
  - interventions
  - treatment
  - medication
  - cbt
  - literature-review
---

This notebook is about a differential, not a treatment plan — nothing has been started, and the personal record contains no interventions ([[about-me/diagnostics|diagnostic history]]). So this note does two things: it catalogues the main evidence-based options so the layer is not empty, and it carries the one fact from the treatment literature that bears directly on the diagnostic question — **a treatment that helps does not prove what it was treating.** Every quotation below is verbatim from the cited source and is carried as an evidence triple in `interpretive/adhd-interventions.jsonl`.

> [!note] These are options on the table, not treatments in progress
> The three interventions below are catalogued as `seed` — available and evidence-based, but not begun. None reflects anything currently being done.

## 1. The treatments work

The efficacy evidence is strong and worth stating plainly (`hypothesis:adhd-treatments-are-efficacious`), so that the diagnostic caution in §2 is not misread as "treatment is pointless."

- **Medication** (`intervention:stimulant-medication`) has the largest short-term effects. Cortese et al.'s (2018) network meta-analysis of 133 double-blind randomised trials concluded that *"evidence from this meta-analysis supports methylphenidate in children and adolescents, and amphetamines in adults, as preferred first-choice medications for the short-term treatment of ADHD."* The same paper is candid that long-term effects are under-studied.
- **CBT** (`intervention:cbt-adult-adhd`) is the best-supported psychological option for adults. Knouse et al. (2017), meta-analysing 32 studies, found that *"[c]urrent CBTs for adult ADHD show comparable effect sizes to behavioral treatments for children with ADHD, which are considered well-established treatments."*
- **Mindfulness** (`intervention:mindfulness`) is a promising adjunct, held more tentatively. Cairncross & Miller (2020) reported moderate effects (inattention d = −.66; hyperactivity/impulsivity d = −.53) but framed the takeaway carefully: *"Results of this study highlight the possible benefits of MBTs in reducing symptoms of ADHD."*

## 2. Why a good response is not a diagnosis

Here is the point that matters for a notebook built around a differential. It is tempting to reason: *if I try a stimulant and my focus improves, that confirms ADHD.* It does not. The classic demonstration is Rapoport et al. (1978), who gave a single dose of dextroamphetamine to fourteen **normal** prepubertal boys: *"When amphetamine was given, the group showed a marked decrease in motor activity and reaction time and improved performance on cognitive tests."* Their conclusion is the one to keep: *"[t]he similarity of the response observed in normal children to that reported in children with 'hyperactivity' or minimal brain dysfunction casts doubt on pathophysiological models of minimal brain dysfunction which assume that children with this syndrome have a clinically specific or 'paradoxical' response to stimulants."*

In other words, stimulants improve attention and reduce activity in people *without* ADHD too. So a positive medication trial is not evidence for the diagnosis (`hypothesis:stimulant-response-not-diagnostic`). In the graph, `intervention:stimulant-medication` therefore `confounds` the load-bearing `hypothesis:adhd-explains-internal-restlessness`: it is one more rival explanation of an observation — feeling better — that would otherwise look like confirmation. It sits alongside the mechanistic rivals (anxiety, sleep, mood, cognitive disengagement) already tracked in [[literature/adhd-and-anxiety|ADHD & anxiety]] and [[dimensions/arousal-and-mind-wandering|Arousal, state regulation, and mind-wandering]].

## Where this leaves the personal case

Two things, and they do not conflict. First, if a full evaluation ([[literature/adult-adhd-assessment|the adult assessment]]) does establish ADHD, the treatments here are effective and worth pursuing. Second, the reverse inference is invalid: a trial of medication is a treatment decision, not a diagnostic test, and should not be used to settle the ADHD-versus-anxiety-versus-mood question. That question is decided by the structural evidence — onset, trajectory, and the differential — not by whether a stimulant helps.

## References

- Cairncross, M., & Miller, C. J. (2020). The Effectiveness of Mindfulness-Based Therapies for ADHD: A Meta-Analytic Review. *Journal of Attention Disorders, 24*(5), 627–643. doi:10.1177/1087054715625301
- Cortese, S., Adamo, N., Del Giovane, C., et al. (2018). Comparative efficacy and tolerability of medications for attention-deficit hyperactivity disorder in children, adolescents, and adults: a systematic review and network meta-analysis. *Lancet Psychiatry, 5*(9), 727–738. doi:10.1016/S2215-0366(18)30269-4
- Knouse, L. E., Teller, J., & Brooks, M. A. (2017). Meta-analysis of cognitive-behavioral treatments for adult ADHD. *Journal of Consulting and Clinical Psychology, 85*(7), 737–750. doi:10.1037/ccp0000216
- Rapoport, J. L., Buchsbaum, M. S., Zahn, T. P., Weingartner, H., Ludlow, C., & Mikkelsen, E. J. (1978). Dextroamphetamine: cognitive and behavioral effects in normal prepubertal boys. *Science, 199*(4328), 560–563. doi:10.1126/science.341313
