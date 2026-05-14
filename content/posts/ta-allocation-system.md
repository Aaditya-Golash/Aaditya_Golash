---
title: "System Architecture: TA Allocation & Management"
date: 2025-08-15
weight: 10
draft: false
featured: true
categories: ["swe", "product", "operations"]
tags: ["Flask", "MySQL", "Docker", "Agile", "RBAC"]
description: "Built backend and workflow infrastructure for UBC CS TA allocation, processing 250+ applications and reducing admin time by 70%."
system_group: "academic"
role_alignment: ["Backend", "Workflow Automation", "Testing"]
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
TA allocation was managed through spreadsheets and long email threads. Conflict checks, reporting, permissions, and scheduling decisions were mostly manual, which made errors and delays common during peak allocation periods.

## Context
The department handled more than 250 applications each term, with multiple stakeholders needing visibility into decisions. Manual coordination made the process slow and hard to audit.

## What I Built
I led backend term/course management and testing modules in a 6-person Agile team. We built a full-stack platform for application review, role assignment, conflict checks, analytics dashboards, reporting, and administrative tracking.

## Key Decisions
- We used `Flask + MySQL + Docker` so the stack stayed simple to deploy and maintain in a university environment.
- We implemented secure `RBAC` early to keep faculty/admin/student permissions clear.
- We automated schedule conflict detection so reviewers could focus on selection quality instead of manual validation.
- We set a strict testing bar (`Pytest` + `Vitest`) to reduce failure risk during peak submission periods.
- We designed export paths for CSV/PDF reporting so administrators could keep existing review and recordkeeping habits.

## Tradeoffs
- We prioritized reliability and access control over advanced optimization features in v1.
- We chose a conventional architecture over novelty so onboarding would stay easy for future contributors.
- We focused on allocation workflow depth rather than building broad reporting modules in the same release.

## Impact
- Reduced allocation administration time by **70%**.
- Centralized and processed **250+ applications** through one system.
- Delivered **36+ stakeholder requirements** within capstone constraints.
- Delivered **100% test coverage** with `Pytest` and `Vitest`, with more than **95% pass rate** across 50 unit and integration tests.
- Awarded **3rd Place Overall** at the UBC Okanagan Capstone Competition.

## Tech Stack
`Python` `Flask` `MySQL` `Docker` `SQLAlchemy` `Pytest` `Vitest` `RBAC` `Tailwind CSS`

## Role Alignment
- `Backend`: Built core term/course management and allocation infrastructure.
- `Workflow Automation`: Replaced spreadsheet/email handoffs with structured review flows.
- `Testing`: Raised reliability through unit and integration test coverage.

Source code: [github.com/Aaditya-Golash/ta-allocation-system-capstone](https://github.com/Aaditya-Golash/ta-allocation-system-capstone)
