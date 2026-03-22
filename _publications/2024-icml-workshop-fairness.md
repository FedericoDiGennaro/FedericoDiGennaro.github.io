---
title: "Post-processing fairness with minimal changes"
collection: publications
category: workshops
permalink: /publication/2024-icml-workshop-fairness
excerpt: 'Post-processing fairness with minimal changes.'
date: 2024-07-01
venue: 'ICML Workshop on Humans, Algorithmic Decision-Making and Society'
authors: 'F. Di Gennaro, T. Laugel, V. Grari, X. Renard, M. Detyniecki'
paperurl: 'https://arxiv.org/pdf/2408.15096'
---

[Download paper here](https://arxiv.org/abs/2408.15096)

In this paper, we introduce a novel post-processing algorithm that is both model-agnostic and does not require the sensitive attribute at test time. In addition, our algorithm is explicitly designed to enforce minimal changes between biased and debiased predictions; a property that, while highly desirable, is rarely prioritized as an explicit objective in fairness literature. Our approach leverages a multiplicative factor applied to the logit value of probability scores produced by a black-box classifier. We demonstrate the efficacy of our method through empirical evaluations, comparing its performance against other four debiasing algorithms on two widely used datasets in fairness research.