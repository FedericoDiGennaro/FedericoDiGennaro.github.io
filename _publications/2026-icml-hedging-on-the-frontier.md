---
title: "Hedging on the Frontier: Learning New Tasks with Few Samples"
collection: publications
category: conferences
permalink: /publication/2026-icml-hedging-on-the-frontier
excerpt: 'Hedging on the frontier for learning new tasks with few samples.'
date: 2026-05-29
venue: 'International Conference on Machine Learning (ICML), Spotlight (top 2.2%)'
authors: 'T. Wegel, F. Di Gennaro, G. So, F. Yang'
paperurl: 'https://arxiv.org/pdf/2605.30997'
codeurl: 'https://github.com/FedericoDiGennaro/Hedging-on-the-Frontier'
---

When a learner faces a new task with few samples, it must leverage any available side information. In practice, this often comes in the form of model evaluations on related tasks in public benchmarks. A key question then is how to model task relatedness such that it is both realistic and the benchmark evaluations lead to provable gains. Empirically, we observe that weak monotonicity is often approximately satisfied: if a model dominates another on many benchmarks, it also tends to outperform on the new task. We explore the statistical complexity of learning under (approximate) weak monotonicity, leveraging it within two learning paradigms: transfer learning and model selection aggregation. We show that not only can we prune the model class based on monotonicity, but we can also further adapt to the geometry of the available trade-offs by hedging on the frontier.
