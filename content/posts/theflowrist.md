---
title: "TheFlowrist: Concierge Gifting System"
date: 2026-07-09
weight: 20
draft: false
featured: true
categories: ["swe", "product", "operations"]
tags: ["Node.js", "Stripe", "Supabase", "Workflow Automation", "MVP"]
description: "Built a concierge-first flower gifting MVP with protected dates, scheduled orders, test-mode Stripe payments, Supabase boundaries, and operator automation endpoints."
system_group: "growth"
role_alignment: ["Product Systems", "Payments", "Operational Automation"]
ascii_cover: |-
  .-THEFLOWRIST-.
  DATE -> REMIND
  PLAN -> ORDER
  APPROVE -> SEND
---

> `> LOG_ENTRY: THEFLOWRIST`
> `> PRODUCT_MODE: CONCIERGE_FIRST_PILOT`
> `> PAYMENTS: STRIPE_TEST_MODE_ONLY`

## Problem
Milestone gifting is easy to forget and operationally difficult to coordinate. A useful service needs to remember important dates, prepare orders early enough for a florist, obtain payment consent, and keep the customer informed without implying random or uncontrolled charges.

## Context
TheFlowrist is a concierge-first MVP for milestone flower gifting. It supports one-time deliveries, a free datekeeper, annual relationship plans, and an optional monthly gesture workflow for eligible members. The product is intentionally framed as a staged pilot rather than a finished marketplace.

## What I Built
I built a Node.js application with customer and admin dashboards, protected-date management, one-time and plan-based order generation, and internal automation endpoints for reminders, florist coordination, status events, and charge execution.

The system supports Stripe Checkout and PaymentIntents in test mode, a JSON-backed development store, an optional Supabase storage and authentication boundary, Resend-powered reminder scripts, Docker packaging, and Node test coverage.

## Key Decisions
- Treated membership as the memory and concierge layer while charging flowers per delivery.
- Used Stripe-hosted Checkout so card details never pass through the application server.
- Made charge execution idempotent and fail closed when payment state or a protected date is invalid.
- Added a storage adapter boundary so pilot JSON data can migrate to Supabase without rewriting product logic.
- Protected internal automation routes with a shared secret and documented the workflows they support.
- Kept pilot assumptions, unit economics, and stage-gate validation separate from claims about a scaled business.

## Tradeoffs
- JSON storage and pilot authentication are development conveniences, not production-ready customer infrastructure.
- Stripe is restricted to test mode; no live payment keys are wired into the repository.
- Scheduling endpoints exist, but an external scheduler is still required to call them.
- Shopify, n8n, and MCP are not enabled in the current product.

## Impact
- Built an end-to-end pilot workflow from saved milestone through scheduled order, reminder, payment, and operator handoff.
- Created explicit readiness and health checks for local, JSON, and Supabase-backed environments.
- Added migration and smoke-test paths for moving pilot data into persistent infrastructure.
- Documented operational and security boundaries so the prototype does not overstate production readiness.

## Tech Stack
`Node.js` `JavaScript` `Stripe` `Supabase` `Resend` `Docker` `Node Test Runner`

## Role Alignment
- `Product Systems`: Turned a gifting concept into defined offers, state transitions, and pilot constraints.
- `Payments`: Implemented consent, annual plan checkout, and guarded off-session charging in Stripe test mode.
- `Operational Automation`: Exposed protected endpoints for reminders, order events, florist handoff, and exception handling.

Source code: [github.com/Aaditya-Golash/TheFlowrist](https://github.com/Aaditya-Golash/TheFlowrist)
