---
title: "Instance-Dependent Regret Bounds for Nonstochastic Linear Partial Monitoring"
collection: publications
category: conferences
permalink: /publication/2025-neurips-partial-monitoring
excerpt: 'Instance-dependent regret bounds for nonstochastic linear partial monitoring problems.'
date: 2025-09-01
venue: 'Conference on Neural Information Processing Systems (NeurIPS)'
authors: 'F. Di Gennaro, K. Eldowa, N. Cesa-Bianchi'
paperurl: 'https://arxiv.org/pdf/2510.19158'
---

[Download paper here](https://www.arxiv.org/abs/2510.19158)

In contrast to the classic formulation of partial monitoring, linear partial monitoring can model infinite outcome spaces, while imposing a linear structure on both the losses and the observations.
This setting can be viewed as a generalization of linear bandits where loss and feedback are decoupled in a flexible manner. In this work, we address a nonstochastic (adversarial), finite-actions version of the problem through a simple instance of the exploration-by-optimization method that is amenable to efficient implementation. We derive regret bounds that depend on the game structure in a more transparent manner than previous theoretical guarantees for this paradigm. Our bounds feature instance-specific quantities that reflect the degree of alignment between observations and losses, and resemble known guarantees in the stochastic setting. 
Notably, they achieve the standard $\sqrt{T}$ rate in easy (locally observable) games and $T^{2/3}$ in hard (globally observable) games, where $T$ is the time horizon. We instantiate these bounds in a selection of old and new partial information settings subsumed by this model, and illustrate that the achieved dependence on the game structure can be tight in interesting cases.
