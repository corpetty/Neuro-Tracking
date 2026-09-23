---
title: "ADHD biotypes — brain-first subtyping, not a brain-scan diagnosis"
description: A 2026 JAMA Psychiatry study clustered children's structural-MRI network deviations into three ADHD "biotypes" that roughly track the DSM presentations. It is a credible advance on heterogeneity, but a group-level, child-only, partly replicated result that can't classify or treat an individual.
tags:
  - adhd
  - neuroimaging
  - biotypes
  - heterogeneity
  - literature-review
---

In early 2026 a *JAMA Psychiatry* study was widely reported as "there might be 3 different types of ADHD" (National Geographic, re-shared on Instagram). This note reads the study against its own text and against a second three-subtype paper. It then asks what any of it means for a single adult with one positive screen. The starting point was a Claude research summary of the coverage, kept as-is in [[literature/adhd-biotypes-research-summary|the source document]]. Every quotation below is verbatim from the primary papers (PubMed abstract, or PMC full text for Pan et al.) and is carried as an evidence triple in `interpretive/adhd-biotypes.jsonl`.

This note extends [[literature/adhd-neurobiology-imaging|neurobiology & imaging]], which established that group-level brain differences in ADHD are real but small, and that no scan diagnoses an individual. The biotype work doesn't overturn that. It asks a different question: *within* ADHD, does the brain variation have structure?

## 1. What the study did — brain first, symptoms second

Pan et al. (2026) built a morphometric-similarity network from each child's structural (T1) MRI. They used normative models, a kind of "growth chart" built from typically developing children, to score how far each child with ADHD deviated in network hub properties. They then clustered those deviations with a semi-supervised algorithm (HYDRA). Crucially, **no symptom data went into the clustering**. The discovery cohort was 446 children with ADHD and 708 controls, and validation used 554 children with ADHD and 123 controls from the Healthy Brain Network.

Across all the children with ADHD, the shared signal sat in one place: *"significant case-control differences primarily localized to a covarying multimetric component in the orbitofrontal cortex."* Then: *"Three biotypes emerged: severe-combined with emotional dysregulation (widespread medial prefrontal cortex-pallidum alterations, n = 142), predominantly hyperactive/impulsive (anterior cingulate cortex-pallidum circuit alterations, n = 177), and predominantly inattentive (superior frontal gyrus alterations, n = 127)"* (`hypothesis:adhd-heterogeneity-has-brain-derived-biotypes`).

The authors' headline interpretation is that the brain-only clusters landed close to the familiar clinical picture: *"This convergence provides compelling evidence that these presentations reflect genuine neurobiological entities, biologically validating these long-observed clinical distinctions."* This is the study's real novelty. The DSM inattentive, hyperactive/impulsive and combined split was built from behavioural checklists, and this is some of the first evidence that it has a brain-level counterpart.

## 2. The emotional-dysregulation biotype is the one that persists

Symptom trajectories over four years (medication-naive subset) were broadly parallel across biotypes, with one exception. For deficient emotional self-regulation, *"biotype 1 showed more persistent symptoms compared to the marked decreases observed in biotypes 2 and 3."* Biotype 1 also had a higher rate of mood-disorder comorbidity during follow-up (25.0% vs 9.8% vs 5.0%), but that difference was not statistically significant. Emotional dysregulation also showed up as a separable, persistent axis in [[literature/adhd-and-mood|mood]] and [[literature/adhd-and-anxiety|anxiety]] (`mechanism:emotional-dysregulation`). Here it tracks a distinct brain profile rather than being spread evenly across ADHD.

## 3. The authors' own limits — which are the important part

The paper is unusually candid, and its limitations section is where a reader in my position should spend time.

- **Biotypes are probably regions on a continuum, not kinds.** *"Third, our putative biotypes may represent salient points along underlying dimensional continua rather than qualitatively distinct diagnostic entities"* (`hypothesis:adhd-biotypes-are-regions-on-continua`). That fits the [[literature/dimensional-continuum-adhd|dimensional view]] this notebook already takes (`hypothesis:clinical-adhd-extreme-of-continuous-trait`). "Three types" is a convenient cut through graded variation, not a discovery of three diseases.
- **Cases and controls still overlap.** *"the overlap in topological deviations between ADHD and TDCs underscores the subtle and complex nature of ADHD-related brain alterations"*. This is the same message as ENIGMA's small effect sizes (`hypothesis:brain-differences-small-not-diagnostic`). The clustering's agreement statistics were modest as well (adjusted Rand index ≈ 0.21, per the research summary).
- **The inattentive profile replicated least well.** In the validation cohort, the hyperactive/impulsive gradient held, *"although inattention profiles could not be fully reproduced, likely due to confounding factors including younger participant age, different recruitment strategies, and cross-cultural variations."* The "predominantly inattentive" biotype, the one closest to an inattentive-leaning adult, is the least-secure part of the result.
- **The neurochemistry is not a treatment map.** The receptor-map correlations *"provides preliminary evidence that these neurotransmitter systems may be differentially involved across biotypes, but they cannot represent actual alterations in receptor systems themselves or inform treatment approaches"* (`hypothesis:adhd-biotypes-not-yet-clinically-actionable`).
- Other limits: samples were not medication-naive, comorbidities were excluded (unlike real clinics), and all participants were children aged 6–18 from China and the US.

## 4. A second "three subtypes" paper, and where the media claims came from

Chen et al. (2025, *Translational Psychiatry*) used a different measure, cortical thickness, in 6,509 adolescents from the ABCD study. They also found three groups: *"We identified three distinct subtypes of ADHD with abnormal cortical thickness (CT) compared to the controls, namely, the under-developed (lower CT), over-developed (higher CT), and mixed subtypes."* Two methods both landing on a three-way split strengthens the case that ADHD's heterogeneity has brain structure. But the groups *are not the same groups*: one study split on network topology, the other on thickness. So "three types" names no specific set of three.

Chen et al. is also where the treatment and genetics claims in some coverage actually come from: *"the over-developed subtype had the worst response to stimulant medication"*, together with gene-expression differences between subtypes. The research summary judged these to be media over-extrapolation from Pan et al. More likely, the outlets merged two papers. The claim is real, but it belongs to a different, retrospective analysis, and it pressure-tests the "not actionable" reading rather than overturning it. It is one retrospective signal in one cohort, not a prospective test showing that a subtype predicts which drug works.

## Where this leaves the personal case

- **No scan, and no "type" to find out.** Nothing here changes the conclusion of [[literature/adhd-neurobiology-imaging|the imaging note]] or [[literature/adult-adhd-assessment|the adult assessment]]. Diagnosis remains clinical, and no MRI or SPECT test can assign an individual to a biotype. That includes commercial "ADHD type" SPECT scans, which rest on far weaker evidence than this study. Every participant here was a child, while the question on record is about an adult.
- **The DSM presentations get some biological backing.** The positive ASRS screen leans inattentive. It is mildly reassuring that brain-derived clusters echo the inattentive/hyperactive/combined split, so "inattentive-leaning" is not just a checklist artifact. But the inattentive biotype replicated worst, so this is framing, not confirmation.
- **Heterogeneity is expected.** A picture that doesn't match the stereotype (internal rather than visible restlessness, emotional churn, mostly inattention) is the normal case, not evidence against ADHD. This is the same point as the [[literature/adhd-and-executive-function|multiple-pathways]] and [[literature/adhd-and-impulsivity|impulsivity]] notes, now at the brain level.
- **The emotional axis matters more than it looks.** If emotional dysregulation is prominent, the biotype-1 finding says it may be the most persistent component and the one most tied to later mood problems. That's a reason to name it explicitly at an evaluation. It is not a reason to assume a subtype.
- **What would change this:** independent replication by other groups, prospective evidence that a biotype predicts treatment response, and reliable assignment of *individuals*. None of these exists yet.

## References

- Chen, Y., Li, M., Zhao, Z., et al. (2025). Distinct neuroimaging subtypes of ADHD among adolescents based on semi-supervised learning. *Translational Psychiatry, 15*(1), 476. doi:10.1038/s41398-025-03662-3
- Pan, N., Long, Y., Qin, K., et al. (2026). Mapping ADHD Heterogeneity and Biotypes by Topological Deviations in Morphometric Similarity Networks. *JAMA Psychiatry, 83*(5), 478–490. doi:10.1001/jamapsychiatry.2026.0001
- Secondary (context only, not evidence triples): Bradshaw, H. (2026, March 3). "There might be 3 different types of ADHD, new brain study suggests." *National Geographic*. Plus the expert commentary (Sultan; ADHD Evidence Project) summarised in [[literature/adhd-biotypes-research-summary|the research summary]].
