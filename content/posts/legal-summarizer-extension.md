---
title: "ChatGPT Legal Summarizer: Chrome Extension"
date: 2024-08-15
weight: 84
draft: false
featured: false
categories: ["swe", "product"]
tags: ["Chrome Extension", "ChatGPT API", "JavaScript", "UX", "Legal Tech"]
description: "Built a Chrome extension using the ChatGPT API to summarize Terms & Conditions and surface user-facing risks."
system_group: "academic"
role_alignment: ["Chrome Extension", "ChatGPT API", "UX"]
ascii_cover: |-
  .-LEGAL----.
  TERMS -> TLDR
  RISK  EXPORT
  API   UX
---

> `> LOG_ENTRY: LEGAL_SUMMARIZER_EXTENSION`
> `> USER_SCOPE: TERMS_AND_CONDITIONS_REVIEW`

## Problem
Users often accept Terms & Conditions without understanding key risks because the text is long, legal-heavy, and hard to scan. The workflow problem was clear: turn dense agreements into fast, actionable review outputs inside the browser.

## Context
This personal project explored how an AI-assisted browser tool could translate dense legal text into clearer summaries and categorized risk signals before a user agrees to a service.

## What I Built
I designed and built a Chrome extension using the ChatGPT API with manual text input, automated webpage scraping, categorized risk summaries, and PDF export for saving or sharing results. The extension connected browser content extraction, prompt orchestration, API calls, and a lightweight review UI into one workflow.

## Key Decisions
- Supported both manual text and webpage scraping so users could work with different content sources.
- Added PDF export to make summaries portable.
- Focused the interface on categorized risks and safeguards instead of generic summaries.
- Handled API key usage and data flow carefully to reduce unnecessary exposure of sensitive text.

## Tradeoffs
- Built a focused extension rather than a broad legal-document platform.
- Prioritized clarity and user comprehension over exhaustive legal interpretation.
- Kept the system assistive because legal advice requires professional review.

## Impact
- Delivered a working AI-powered Chrome extension for Terms & Conditions review.
- Integrated webpage scraping, manual input, ChatGPT API summarization, categorized risk outputs, and PDF export.
- Translated complex legal text into user-friendly, actionable summaries that reduced review friction.
- Built experience with browser APIs, AI integration, prompt design, UX design, and collaborative Git workflows.

## Tech Stack
`JavaScript` `Chrome API` `ChatGPT API` `Node.js` `HTML` `CSS` `GitHub`

## Role Alignment
- `Chrome Extension`: Built browser UI, content intake, and export workflows around a real user problem.
- `ChatGPT API`: Connected summarization prompts and API responses to a browser-based review flow.
- `UX`: Converted dense legal text into categorized user-facing summaries.
