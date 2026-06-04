---
title: "Fast Unlearning at Scale via Margin Self-Correction"
collection: publications
category: preprints
permalink: /publication/2026-arxiv-fast-unlearning-margin-self-correction
excerpt: 'Fast unlearning at scale via margin self-correction.'
date: 2026-06-01
venue: 'arXiv preprint'
authors: 'F. Di Gennaro, A. Shevchenko, F. Yang'
paperurl: 'https://arxiv.org/pdf/2606.02920'
codeurl: 'https://github.com/FedericoDiGennaro/Fast-LLM-Unlearning-MarginSelfCorrection'
---

[Download paper here](https://arxiv.org/abs/2606.02920)

Language-model unlearning updates a trained model to behave as if it had not seen selected training examples, while preserving utility and avoiding costly retraining. Existing approaches typically fine-tune the pretrained model with a fixed training budget and select the final model afterwards by evaluating several saved checkpoints on downstream validation data. Two sources of unnecessary computation limit scalability: training beyond the desired forget-retain trade-off, and checkpoint selection that requires extra storage and repeated evaluations. To address these limitations, we introduce MArgin Self-Correction (MASC), an efficient unlearning method with an online stopping rule that does not require downstream evaluation. Given a text sequence to be forgotten, MASC actively reduces the logit gap between the original next token and the most likely alternatives. It outputs a final model once this gap is small on average over a sufficiently large proportion of token positions across all forget sequences. On TOFU, MUSE News, and MUSE Books, MASC achieves a competitive forget-retain trade-off at a fraction of the computational cost of existing baselines. We further observe that as we increase model size (a.k.a. number of parameters), the trade-offs improve for both MASC and SimNPO -- the forget metrics remain comparable while retain utility increases.
