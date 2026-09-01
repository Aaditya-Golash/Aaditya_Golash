---
title: "JOB-HELPR: Agentic Job Search Pipeline"
date: 2026-07-10
weight: 15
draft: false
featured: true
categories: ["swe", "product"]
tags: ["MCP", "Claude Code", "Next.js", "TypeScript", "Workflow Automation"]
description: "Built a job-search system combining a deployed MCP document server with a confirmation-gated Claude Code plugin for research, tailoring, outreach, and tracking."
system_group: "academic"
role_alignment: ["Agent Tooling", "Workflow Design", "Safety Boundaries"]
ascii_cover: |-
  .--JOB-HELPR--.
  SEARCH  TAILOR
  DRAFT -> APPROVE
  APPLY   TRACK
---

> `> LOG_ENTRY: JOB_HELPR`
> `> ARCHITECTURE: MCP_SERVER + CLAUDE_PLUGIN`
> `> SAFETY: CONFIRM_BEFORE_EXTERNAL_ACTION`

## Problem
Job searches become fragmented across role research, resume tailoring, cover letters, outreach, application forms, and tracking. Automating that workflow without clear boundaries creates a second problem: an agent can send messages or submit forms before the user has reviewed them.

## Context
JOB-HELPR combines two complementary surfaces. A deployed MCP server generates consistent documents and stores application state. A Claude Code plugin coordinates the broader workflow through focused skills for setup, search, tailoring, applications, outreach, and tracking.

## What I Built
I built a Next.js MCP server with tools for generating resumes and cover letters, saving and listing applications, and retrieving the source profile used by generation. The server can persist application data through Vercel Blob.

I also assembled and hardened a Claude Code plugin from attributed open-source workflow patterns. The plugin keeps a strict confirmation gate around every action that would send a message or submit a form.

## Key Decisions
- Kept `mcp/lib/profile.ts` as the single source of truth for generated resume and cover-letter content.
- Split deterministic document and tracking tools from the higher-level agent workflow.
- Required explicit, per-action confirmation before external communication or form submission.
- Documented source conflicts and third-party attribution instead of hiding the merged origins.
- Added tests, smoke checks, and context/connectors validation around the deployed MCP surface.

## Tradeoffs
- Vercel Blob is required for persistent application tracking; generation tools can run without storage.
- The plugin assists with the workflow but deliberately stops short of autonomous applications or outreach.
- Generated material is calibrated to one profile rather than presented as a universal job-search product.

## Impact
- Consolidated document generation, opportunity research, application workflow, outreach preparation, and tracking into one inspectable system.
- Reduced content drift by grounding generation in a single structured profile.
- Made human approval a system boundary rather than an optional instruction.
- Deployed the MCP server and documented both local and hosted connection paths.

## Tech Stack
`TypeScript` `Next.js` `Model Context Protocol` `Claude Code Plugins` `Vercel Blob` `Zod` `Vitest`

## Role Alignment
- `Agent Tooling`: Built callable MCP tools and a skill-based Claude Code workflow.
- `Workflow Design`: Connected research, document tailoring, outreach preparation, and application tracking.
- `Safety Boundaries`: Designed confirmation gates around every representational external action.

Deployed MCP server: [job-pipeline-mcp.vercel.app](https://job-pipeline-mcp.vercel.app)

Source code: [github.com/Aaditya-Golash/JOB-HELPR](https://github.com/Aaditya-Golash/JOB-HELPR)
