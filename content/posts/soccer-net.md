---
title: "Deep Learning: SoccerNet Jersey Recognition"
date: 2026-03-15
weight: 70
draft: false
featured: false
categories: ["swe", "data"]
tags: ["PyTorch", "Computer Vision", "Python"]
description: "Built a jersey-number recognition pipeline for soccer broadcast footage using ResNet filtering, PARSeq recognition, and Top-K confidence ranking."
system_group: "data"
role_alignment: ["Computer Vision", "Deep Learning", "Sports Analytics"]
ascii_cover: |-
  .-JERSEY--.
  [ 10 ] [ 7 ]
  /_/_/\_/_/\
  SPEED  VISION
---

> `> LOG_ENTRY: SOCCERNET_MODELING`
> `> STATUS: EXPERIMENTAL_PIPELINE`

## Problem
Player identification from broadcast-style soccer footage is noisy because of motion blur, occlusion, camera changes, low-quality frames, and inconsistent player visibility.

## Context
This project focused on extracting stable jersey-level signal in a high-speed visual environment where frame quality and camera angle can change quickly.

## What I Built
I built an end-to-end computer vision pipeline to recognize soccer jersey numbers from broadcast video using sports tracking datasets, frame-level video processing, player detections, and deep learning models.

## Key Decisions
- Prioritized dataset quality and labeling strategy before model complexity.
- Tuned preprocessing for motion and lighting variance to improve model robustness.
- Built the training pipeline for iterative experiments and repeatable comparisons.
- Implemented a ResNet-based legibility classifier to filter low-quality frames before recognition.
- Used a PARSeq sequence recognition model for jersey-number prediction.
- Designed a Top-K confidence ranking system to prioritize the most legible frames.

## Tradeoffs
- Focused on jersey recognition performance rather than full player tracking.
- Chose practical model iterations over heavy architecture exploration.
- Kept scope narrow to ensure meaningful evaluation signal.

## Impact
- Produced a functioning jersey-recognition pipeline on difficult sports footage.
- Reduced noisy inputs by filtering low-legibility frames before recognition.
- Generated structured outputs linking player identities, timestamps, and jersey numbers for downstream sports analytics.
- Created reusable code for future sports analytics experiments.

## Tech Stack
`Python` `PyTorch` `OpenCV` `NumPy` `ResNet` `PARSeq`

## Role Alignment
- `Computer Vision`: Built frame and player-detection workflows for broadcast footage.
- `Deep Learning`: Combined classifier and sequence-recognition stages.
- `Sports Analytics`: Structured recognition outputs for downstream match analysis.
