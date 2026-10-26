---
title: "LLM-to-Flow Distillation: Teaching Natural Language Goals to Scientific Generators"
collection: publications
category: manuscripts
permalink: /publication/2026-arxiv-llm-to-flow-distillation
excerpt: 'A frozen LLM teaches a domain-specific flow generator to reach natural-language discovery goals.'
date: 2026-10-12
venue: 'arXiv preprint'
authors: 'R. De Santi*, F. Di Gennaro*, A. Gnazzo*, S. Tang, P. Chatterjee, F. Yang, İ. İ. Ceylan, M. M. Bronstein, A. Krause'
authors_note: '* Equal contribution, alphabetical order'
institutions: [eth, eth-ai-center, tu-wien, aithyra, penn, oxford]
paperurl: 'https://arxiv.org/abs/2610.17246'
codeurl: 'https://github.com/FedericoDiGennaro/LLM-to-Flow-Distillation'
projecturl: 'https://llm-to-flow-distillation.github.io/'
---

Generative discovery in science requires coupling high-level scientific reasoning with the ability to generate samples respecting the structure of a design space. Yet these capabilities remain largely separated: foundation LLMs encode broad chemical and biological knowledge, while domain-specific flow- and diffusion-based generators capture the priors needed to produce valid sequences and geometries. We study how to align such scientific generators to high-level natural-language discovery goals without requiring an explicit proxy reward, which is often unavailable or poorly captured by learned predictors in experimental sciences. We introduce LLM-to-Flow Distillation (LFD), where a frozen LLM acts as an adaptive teacher for a domain-specific generator. Given a goal such as 'generate peptides with promising anticancer activity', the teacher constructs a curriculum of intermediate sub-goals aware of the flow's current capabilities, and progressively directs them toward the original discovery goal. At each round, the LLM judges sampled candidates under the current objective. These judgments induce preferences that are iteratively distilled into the generator through DPO. This procedure provides dense learning signals even when the initial model places negligible probability on designs satisfying the final goal, enabling adaptation toward poorly covered, out-of-distribution regions. Experiments on therapeutic peptides and small-molecule structure design demonstrate that LFD enables a new form of generative control: aligning arbitrary domain-specific scientific generators to scientific discovery tasks expressed via high-level natural-language goals.
