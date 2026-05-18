---
title: "TSX Quantitative Portfolio Optimization"
date: 2026-04-05
weight: 75
draft: false
featured: false
categories: ["data", "swe", "product"]
tags: ["Portfolio Optimization", "Finance", "Data Analysis", "Modern Portfolio Theory", "Solver"]
description: "Built a TSX portfolio optimization engine that converted 37 months of equity prices into calibrated risk-return models and efficient-frontier insights."
system_group: "data"
role_alignment: ["Quantitative Analysis", "Data Systems", "Financial Modeling"]
ascii_cover: |-
  .--TSX-OPT--.
  PRICE -> RISK
  COV   -> MPT
  WEIGHT-> EDGE
---

> `> LOG_ENTRY: TSX_PORTFOLIO_OPTIMIZATION`
> `> MODEL_STATE: RAW_PRICES_TO_DECISION_SUPPORT`

## Problem
Portfolio decisions can look precise while still being driven by incomplete data preparation, unstable assumptions, or spreadsheet outputs that are hard to audit. The core challenge was to turn historical equity prices into a transparent risk-return model that could support portfolio construction decisions.

## Context
This project focused on Canadian public-market equities listed on the TSX. The work required clean return calculations, covariance modeling, optimization logic, and visual outputs that made diversification tradeoffs understandable for a small project team.

## What I Built
I built a quantitative portfolio optimization workflow that processed **37 months** of historical prices across **10 equities**, converted raw price data into calibrated log returns, modeled variance-covariance relationships, and generated Markowitz-style portfolio weights for risk-return comparison.

## Key Decisions
- Used log returns to make period-to-period performance comparisons more stable and mathematically consistent.
- Built and validated an **11x11 variance-covariance matrix** before optimization so risk estimates were traceable.
- Treated data integrity as the first constraint instead of optimizing around preferred outputs.
- Used Solver-backed optimization to make the model inspectable and repeatable for team review.
- Produced frontier-style visualizations to show efficiency and diversification tradeoffs rather than only reporting final weights.

## Tradeoffs
- Prioritized transparent quantitative reasoning over a black-box investment model.
- Kept the initial universe constrained to **10 equities** so validation and explanation stayed manageable.
- Focused on historical risk-return structure, not prediction, because the goal was portfolio analysis rather than market timing.

## Impact
- Converted **37 months** of raw TSX pricing data into usable return and risk inputs.
- Led the data-engine track for a **3-person team**, creating shared model outputs for portfolio evaluation.
- Built risk-return frontier visualizations that clarified portfolio efficiency and diversification tradeoffs.
- Created a repeatable workflow for comparing optimized weights against baseline allocation assumptions.

## Tech Stack
`Excel Solver` `Python` `Financial Modeling` `Modern Portfolio Theory` `Variance-Covariance Modeling` `Data Visualization`

## Role Alignment
- `Quantitative Analysis`: Translated price history into risk, return, covariance, and allocation decisions.
- `Data Systems`: Built a repeatable workflow from raw market data to model-ready inputs.
- `Financial Modeling`: Used Modern Portfolio Theory to evaluate diversification and efficiency tradeoffs.
