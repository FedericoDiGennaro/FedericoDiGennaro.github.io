---
title: "Controlled Model Debiasing through Minimal and Interpretable Updates"
collection: publications
category: journals
permalink: /publication/2025-tmlr-debiasing
excerpt: 'Controlled model debiasing through minimal and interpretable updates.'
date: 2025-02-02
venue: 'Transactions on Machine Learning Research (TMLR)'
authors: 'F. Di Gennaro, T. Laugel, V. Grari, M. Detyniecki'
paperurl: 'https://arxiv.org/pdf/2502.21284'
codeurl: 'https://github.com/axa-rev-research/controlled-model-debiasing'
---

[Download paper here](https://arxiv.org/abs/2502.21284)

Traditional approaches to learning fair machine learning models often require rebuilding models from scratch, typically without considering potentially existing models. In a context where models need to be retrained frequently, this can lead to inconsistent model updates, as well as redundant and costly validation testing. To address this limitation, we introduce the notion of controlled model debiasing, a novel supervised learning task relying on two desiderata: that the differences between the new fair model and the existing one should be (i) minimal and (ii) interpretable. After providing theoretical guarantees to this new problem, we introduce a novel algorithm for algorithmic fairness, COMMOD, that is both model-agnostic and does not require the sensitive attribute at test time. In addition, our algorithm is explicitly designed to enforce minimal and interpretable changes between biased and debiased predictions in a binary classification task, a property that, while highly desirable in high-stakes applications, is rarely prioritized as an explicit objective in fairness literature. Our approach combines a concept-based architecture and adversarial learning and we demonstrate through empirical results that it achieves comparable performance to state-of-the-art debiasing methods while performing minimal and interpretable prediction changes.