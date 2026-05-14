---
title: "Eye-Tracking Research: Computer Vision & HCI"
date: 2026-01-15
weight: 20
draft: false
featured: true
categories: ["swe", "data"]
tags: ["Computer Vision", "Human-Computer Interaction", "Eye Tracking", "Research"]
description: "Built a Tobii Pro Glasses research pipeline capturing gaze, fixation, scene-camera, and IMU data for HCI analysis."
system_group: "data"
role_alignment: ["Computer Vision", "Research Systems", "HCI"]
ascii_cover: |-
  .-EYE-TRACK-.
  GAZE  FIX
  HEAT  IMU
  HCI   DATA
---

> `> LOG_ENTRY: EYE_TRACKING_RESEARCH`
> `> SIGNAL_SCOPE: GAZE / FIXATION / SCENE / IMU`

## Problem
Understanding how users navigate visual interfaces requires more than screen recordings or survey answers. The research workflow needed structured biometric gaze data, synchronized context, and repeatable analysis outputs.

## Context
This directed-studies research project used Tobii Pro Glasses to study visual attention and interaction with digital interfaces. The technical challenge was collecting multiple streams reliably enough for later human-computer interaction analysis.

## What I Built
I built a computer vision research pipeline that captures gaze coordinates, fixation points, scene-camera data, and IMU streams, then processes the data into heatmaps, fixation timelines, and attention metrics.

## Key Decisions
- Integrated real-time eye-tracking and IMU streams through a custom API pipeline.
- Structured data collection so experiments could be repeated and compared across participants.
- Generated analysis artifacts that connect raw gaze data to behavioral patterns.
- Focused on practical HCI outputs: heatmaps, fixation timelines, and attention metrics.

## Tradeoffs
- Prioritized reliable data capture and analysis structure over broad experiment scope.
- Kept outputs interpretable for research discussion rather than pushing immediately into black-box prediction.
- Designed around available hardware constraints instead of assuming ideal lab conditions.

## Impact
- Enabled structured collection of gaze, fixation, scene-camera, and IMU data.
- Produced reusable outputs for analyzing how users navigate visual information.
- Created a research pipeline that can support future HCI experiments and interface-evaluation work.

## Tech Stack
`Computer Vision` `Tobii Pro Glasses` `Python` `API Integration` `HCI` `Biometric Data Analysis`

## Role Alignment
- `Computer Vision`: Processed visual-attention and scene-camera data into usable signals.
- `Research Systems`: Built repeatable collection and analysis workflow for experiments.
- `HCI`: Connected technical outputs to user-behavior interpretation.
