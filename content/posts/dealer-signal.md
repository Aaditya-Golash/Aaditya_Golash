---
title: "DealerSignal: Dealership Sales Intelligence"
date: 2026-09-01
weight: 5
draft: false
featured: true
categories: ["swe", "product", "operations"]
tags: ["Angular", "TypeScript", "Express", "Sales Intelligence", "Workflow Systems"]
description: "Built and deployed a dealership sales-intelligence prototype that prioritizes follow-up, explains server-owned scores, and detects inventory listing mismatches."
system_group: "academic"
role_alignment: ["Full-Stack Systems", "Business Logic", "Product Engineering"]
ascii_cover: |-
  .-DEALER-SIGNAL-.
  LEAD -> SCORE
  SOLD != LISTED
  ACT -> RESCORE
---

> `> LOG_ENTRY: DEALER_SIGNAL`
> `> STATUS: DEPLOYED_VERTICAL_SLICE`
> `> DOMAIN: DEALERSHIP_SALES_OPERATIONS`

{{< ascii-panel label="DealerSignal automotive system" >}}
          ______
     ____/|_||_`.__
    (   _    _ _\  \
    =`-(_)--(_)-'  /
      LEAD -> ACTION
{{< /ascii-panel >}}

## Problem
Sales teams need to know which customer deserves attention next and whether the vehicle attached to that lead is still available. Those decisions become unreliable when follow-up signals are scattered or internal inventory status drifts from the public listing state.

## Context
I built DealerSignal as a focused dealership workflow rather than a generic CRUD demo. The prototype uses synthetic customers and modeled inventory states, including a deliberately seeded sold-versus-listed Ferrari Roma exception. It does not claim that a real August Luxury Motorcars listing is stale.

## What I Built
I built and deployed an Angular 20 frontend backed by a Node.js and Express API. The server scores and sorts the lead queue, detects inventory mismatches, and handles a `Log Contact` state transition through `PATCH /api/leads/:name/contact`.

The browser presents the current queue and sends user actions to the API. It does not calculate or duplicate the score.

{{< ascii-panel label="DealerSignal request and state flow" >}}
Lead enters queue
        |
        v
Express API -> scoring + inventory rules
        |
        v
Angular queue -> salesperson logs contact
        |
        v
PATCH contact -> update -> rescore -> resort
{{< /ascii-panel >}}

## Key Decisions
- Kept scoring deterministic because the prototype has no historical won-and-lost deal dataset to justify predictive claims.
- Kept scoring and mismatch rules on the server so every client works from one source of truth.
- Framed the score as current attention priority, not purchase probability.
- Added concise score explanations so a salesperson can see which real rules contributed.
- Used a deliberately seeded inventory mismatch to demonstrate the exception workflow without implying a real dealership data issue.
- Built one complete operational loop instead of adding a manual lead form that would not reflect how dealership leads usually enter a CRM.

## Tradeoffs
- Lead state is in memory and resets with the backend process.
- Inventory synchronization is modeled rather than connected to a live DMS, CRM, or website feed.
- Customer and vehicle records are synthetic.
- There is no authentication, persistent database, event queue, or background reconciliation worker in the current prototype.

## Impact
- Shipped a live, responsive vertical slice spanning frontend state, API orchestration, business rules, tests, and deployment.
- Demonstrated the complete loop: `detect -> prioritize -> act -> update -> reprioritize`.
- Made operational exceptions visible before a salesperson continues follow-up on an unavailable vehicle.
- Established a transparent scoring baseline that future historical outcome data could be measured against.

## Tech Stack
`Angular 20` `TypeScript` `Node.js` `Express` `Vitest` `Firebase Hosting` `Render`

## Role Alignment
- `Full-Stack Systems`: Connected a responsive Angular interface to a stateful Express API and deployed both layers.
- `Business Logic`: Centralized explainable scoring, sorting, and inventory exception rules on the server.
- `Product Engineering`: Chose a narrow operational loop and documented what is shipped, modeled, and deliberately out of scope.

Live demo: [dealersignal-14f5c.web.app](https://dealersignal-14f5c.web.app/)

Source code: [github.com/Aaditya-Golash/dealer-signal](https://github.com/Aaditya-Golash/dealer-signal)
