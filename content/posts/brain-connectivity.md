---
title: "EEG Brain Connectivity Analysis"
date: 2026-03-20
weight: 10
draft: false
featured: true
categories: ["data", "swe"]
tags: ["EEG", "Signal Processing", "Python", "Network Analysis", "wPLI"]
description: "Built a robust EEG pipeline turning noisy 64-channel data into usable connectivity networks."
system_group: "data"
role_alignment: ["Data / Analytics", "Quant-Adjacent", "SWE", "Consulting"]
ascii_cover: |-
  .--BRAIN--.
  (  o  o   )
  ( o  o  o )
  (   o  o  )
  '--NET----'
---

> `> LOG_ENTRY: EEG_CONNECTIVITY_PIPELINE`
> `> SIGNAL_STATE: NOISY_TO_STRUCTURED`

## Problem
Raw EEG data is high-dimensional and noisy. Without a stable preprocessing and connectivity pipeline, the outputs are too inconsistent for analysis or decision-making.

## Context
The dataset involved 64-channel recordings where artifacts, drift, and synchronization noise could dominate results. The goal was to extract connectivity patterns that were actually interpretable.

## What I Built
I built an end-to-end EEG analysis workflow: preprocessing, artifact rejection, band filtering, weighted Phase Lag Index (wPLI) connectivity computation, adjacency matrix generation, and network visualization.

## Key Decisions
- Used `wPLI` to reduce zero-lag and noise-sensitive phase bias.
- Treated preprocessing as a first-class stage instead of a quick cleanup step.
- Built outputs as reusable adjacency/network artifacts so downstream analysis stayed consistent.

## Tradeoffs
- Prioritized signal integrity and interpretability over fast experimentation loops.
- Chose transparent analytics over black-box modeling for this phase.
- Focused on connectivity structure quality before extending to predictive tasks.

## Impact
- Produced stable connectivity networks from noisy physiological data.
- Established a reusable analysis workflow for repeated EEG experiments.
- Improved reliability of downstream insight generation from biological signals.

## Tech Stack
`Python` `NumPy` `SciPy` `MNE` `NetworkX` `Matplotlib`

## Role Alignment
- `Data / Analytics`: Built analysis quality from raw signal to interpretable network output.
- `Quant-Adjacent`: Worked with noisy time-series and statistical signal features.
- `SWE`: Structured the pipeline for repeatability and reliable outputs.
- `Consulting`: Framed technical work around usable decision support, not only model complexity.
