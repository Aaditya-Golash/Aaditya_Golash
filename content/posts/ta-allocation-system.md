---
title: "System Architecture: TA Allocation & Management"
date: 2025-08-15
weight: 15
draft: false
categories: ["swe", "product"]
tags: ["Flask", "MySQL", "Docker", "Agile"]
description: "Redesigning administrative workflows for the UBC CS Department: 70% reduction in allocation latency."
ascii_cover: |
    +----------------------+
    | TA | TA | TA | TA   |
    +----------------------+
    | [] | <> | OK | !!   |
    +----------------------+
    | RBAC | SLOT | TEST  |
    +----------------------+
---

> `> LOG_ENTRY: CAPSTONE_PROJECT_04`
> `> STATUS: DEPLOYED / 3RD_PLACE_AWARD`
> `> CLIENT: UBC COMPUTER SCIENCE DEPARTMENT`

### 1. The Friction (Tamas)

The existing TA allocation process relied on fragmented spreadsheets, manual email chains, and human-led conflict detection for **250+ applications per term**.

- **Operational Debt:** High risk of scheduling overlaps and administrative burnout.
- **The Goal:** Eliminate manual data entry and standardize the selection logic.

### 2. The Architecture (Rajas)

I led the **backend infrastructure and testing** in a 6-member Agile team to build a full-stack governance platform.

- **Stack:** Flask (Python), MySQL, and Docker for containerized deployment.
- **Governance Logic:** Engineered a secure **RBAC (Role-Based Access Control)** system and automated scheduling conflict detection.
- **Resilience:** Achieved **100% test coverage** using Pytest and Vitest, ensuring zero-fail deployments during high-traffic application windows.
- **Accessibility:** Designed a drag-and-drop interface compliant with **WCAG 2.1 AA standards**, ensuring the system was usable by all faculty and students.

### 3. The Result (Sattva)

The system transformed a multi-week manual process into a centralized digital operation.

- **Efficiency:** **70% reduction** in administrative allocation time.
- **Scale:** Successfully managed **250+ applications** and resolved **36+ feature requirements** identified by stakeholders.
- **Validation:** Awarded **3rd Place Overall** in the UBC Okanagan Capstone Competition for technical rigor and real-world impact.

---

`> SOURCE_CODE: https://github.com/Aaditya-Golash/ta-allocation-system-capstone`
