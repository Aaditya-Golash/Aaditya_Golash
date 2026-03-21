---
title: "Deep Learning: SoccerNet Jersey Recognition"
date: 2026-03-15
weight: 10
draft: false
featured: false
categories: ["swe", "data"]
tags: ["PyTorch", "Computer Vision", "Python"]
description: "Developed a jersey-recognition pipeline for fast-paced sports footage using PyTorch and custom data preparation."
system_group: "data"
role_alignment: ["SWE", "Data / Analytics", "Quant-Adjacent"]
ascii_cover: |-
  .-JERSEY--.
  [ 10 ] [ 7 ]
  /_/_/\_/_/\
  SPEED  VISION
---

> `> LOG_ENTRY: SOCCERNET_MODELING`
> `> STATUS: EXPERIMENTAL_PIPELINE`

## Problem
Player identification from broadcast-style soccer footage is noisy because of motion blur, occlusion, and camera changes.

## Context
This project focused on extracting stable jersey-level signal in a high-speed visual environment where frame quality and camera angle can change quickly.

## What I Built
I built a deep learning workflow for jersey recognition with custom data preparation, training loops, and evaluation across challenging visual conditions.

## Key Decisions
- Prioritized dataset quality and labeling strategy before model complexity.
- Tuned preprocessing for motion and lighting variance to improve model robustness.
- Built the training pipeline for iterative experiments and repeatable comparisons.

## Tradeoffs
- Focused on jersey recognition performance rather than full player tracking.
- Chose practical model iterations over heavy architecture exploration.
- Kept scope narrow to ensure meaningful evaluation signal.

## Impact
- Produced a functioning jersey-recognition pipeline on difficult sports footage.
- Improved understanding of computer vision tradeoffs under real-world constraints.
- Created reusable code for future sports analytics experiments.

## Tech Stack
`Python` `PyTorch` `OpenCV` `NumPy`

## Role Alignment
- `SWE`: Built and iterated on model training infrastructure.
- `Data / Analytics`: Structured data and evaluation loops for usable model signal.
- `Quant-Adjacent`: Worked with noisy, high-frequency visual data and performance metrics.
