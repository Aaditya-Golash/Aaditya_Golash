---
title: "EEG Brain Connectivity Analysis"
date: 2026-03-20
weight: 80
draft: false
featured: false
categories: ["data", "swe"]
tags: ["EEG", "Signal Processing", "Python", "Network Analysis", "wPLI"]
description: "Processed 64-channel EEG data into wPLI connectivity matrices and graph metrics comparing meditation and thinking conditions."
system_group: "data"
role_alignment: ["Signal Processing", "Network Science", "Python"]
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
The dataset involved 64-channel EEG recordings where artifacts, drift, and synchronization noise could dominate results. The goal was to extract interpretable connectivity patterns across meditation and thinking states in Alpha and Beta frequency bands.

## What I Built
I built an end-to-end EEG analysis workflow: preprocessing, artifact rejection, band filtering, weighted Phase Lag Index (wPLI) connectivity computation, adjacency matrix generation, graph thresholding, network visualization, and metric comparison across six cognitive conditions.

## Key Decisions
- Used `wPLI` to reduce zero-lag and noise-sensitive phase bias.
- Treated preprocessing as a first-class stage instead of a quick cleanup step.
- Built outputs as reusable adjacency/network artifacts so downstream analysis stayed consistent.
- Applied proportional density thresholding from **10-25%** to reduce noise while preserving strong network connections.
- Computed graph metrics including mean strength, clustering coefficient, modularity, and betweenness centrality.
- Adapted the analysis approach after identifying the dataset as EEG rather than fMRI, redesigning thresholding and graph construction for stable EEG network structure.

## Tradeoffs
- Prioritized signal integrity and interpretability over fast experimentation loops.
- Chose transparent analytics over black-box modeling for this phase.
- Focused on connectivity structure quality before extending to predictive tasks.

## Impact
- Produced stable connectivity networks from noisy physiological data.
- Established a reusable analysis workflow for repeated EEG experiments.
- Improved reliability of downstream insight generation from biological signals.
- Identified hub electrodes using degree, strength, and betweenness centrality on **15% density graphs**.
- Observed stronger global synchronization in Alpha meditation and more segregated neural processing during thinking conditions.

## Tech Stack
`Python` `NumPy` `SciPy` `MNE` `NetworkX` `Matplotlib` `wPLI`

## Role Alignment
- `Signal Processing`: Built usable structure from noisy EEG recordings.
- `Network Science`: Converted connectivity matrices into interpretable graph metrics.
- `Python`: Automated repeated computation and visualization workflows.
