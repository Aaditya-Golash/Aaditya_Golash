---
title: "System Architecture: TA Allocation & Management"
date: 2025-08-15
weight: 15
draft: false
featured: true
categories: ["swe", "product", "operations"]
tags: ["Flask", "MySQL", "Docker", "Agile", "RBAC"]
description: "Redesigning UBC CS TA allocation workflows and reducing allocation latency by 70%."
system_group: "academic"
role_alignment: ["APM", "Consulting", "SWE", "Data / Analytics"]
ascii_cover: |-
  .-TA-ALLOC--.
  TA  TA  TA
  SLOT  RBAC
  TEST  DEPLOY
---

> `> LOG_ENTRY: CAPSTONE_PROJECT_04`
> `> STATUS: DEPLOYED / 3RD_PLACE_AWARD`
> `> CLIENT: UBC COMPUTER SCIENCE DEPARTMENT`

## Problem
TA allocation was managed through spreadsheets and long email threads. Conflict checks were mostly manual, which made scheduling errors and delays common.

## Context
The department handled more than 250 applications each term, with multiple stakeholders needing visibility into decisions. Manual coordination made the process slow and hard to audit.

## What I Built
I led backend infrastructure and testing in a 6-person Agile team. We built a full workflow platform for application review, role assignment, conflict checks, and administrative tracking.

## Key Decisions
- We used `Flask + MySQL + Docker` so the stack stayed simple to deploy and maintain in a university environment.
- We implemented `RBAC` early to keep faculty/admin/student permissions clear.
- We automated schedule conflict detection so reviewers could focus on selection quality instead of manual validation.
- We set a strict testing bar (`Pytest` + `Vitest`) to reduce failure risk during peak submission periods.

## Tradeoffs
- We prioritized reliability and access control over advanced optimization features in v1.
- We chose a conventional architecture over novelty so onboarding would stay easy for future contributors.
- We focused on allocation workflow depth rather than building broad reporting modules in the same release.

## Impact
- Reduced allocation administration time by **70%**.
- Centralized and processed **250+ applications** through one system.
- Delivered **36+ stakeholder requirements** within capstone constraints.
- Awarded **3rd Place Overall** at the UBC Okanagan Capstone Competition.

## Tech Stack
`Python` `Flask` `MySQL` `Docker` `Pytest` `Vitest` `RBAC`

## Role Alignment
- `APM`: Balanced stakeholder requirements, delivery scope, and release quality.
- `Consulting`: Mapped messy institutional workflow into an operational system.
- `SWE`: Built and tested production-ready backend infrastructure.
- `Data / Analytics`: Used structured data and validation logic to improve allocation decisions.

Source code: [github.com/Aaditya-Golash/ta-allocation-system-capstone](https://github.com/Aaditya-Golash/ta-allocation-system-capstone)
