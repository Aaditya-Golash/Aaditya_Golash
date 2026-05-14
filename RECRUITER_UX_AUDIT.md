# Recruiter UX Audit

Audience lens: recruiter, HR screener, hiring manager, senior manager, or cross-functional interviewer spending 30-90 seconds deciding whether to keep reading.

## Executive Read

The site has a memorable systems/terminal identity, but the current experience asks the reader to learn the theme before they get the candidate signal. A recruiter needs role fit, strongest proof, resume, and contact paths immediately. Right now, the homepage foregrounds "systems" language, ASCII styling, and repeated framing more than specific outcomes, role targets, and proof.

The strongest material is already present: UBC CS + Management, TA allocation system with 70% reduction, $1.9M budget oversight, funded VenueWorks MVP, EEG/data pipeline, operations experience. The main issue is packaging.

## Top Pain Points

1. The homepage does not state target roles clearly.
   - Current: "I build practical systems across product, operations, data, and engineering."
   - Recruiter question left open: Is this person targeting SWE, APM, consulting, ops, data, or all of them?
   - Fix: Add a role-fit line near the hero: "CS + Management student targeting APM, SWE, data/analytics, and operations roles."

2. The theme creates cognitive overhead.
   - Terminal phrases like `VIEW_SYSTEMS`, `OPEN_LAB`, `detecting friction`, `IDENTITY_LOG`, and `INITIALIZE_SEND` are memorable but slow down HR readers.
   - Fix: Keep the theme visually, but use plain labels: "Projects", "Experiments", "Resume", "Contact", "Send Message".

3. "Systems" and "Lab" are not intuitive enough as primary navigation.
   - A hiring reader expects "Projects", "Experience", "Resume", "About", "Contact".
   - "Systems" sounds conceptual. "Lab" sounds experimental, which can weaken credibility for professional work.
   - Fix: Rename "Systems" to "Projects" or "Case Studies"; rename "Lab" to "All Work" or "Experiments".

4. The first screen is brand-heavy but proof-light.
   - The hero establishes personality, but not enough evidence.
   - Fix: Add 3 proof chips immediately under the subtitle:
     - "Reduced TA allocation admin time by 70%"
     - "Oversaw $1.9M operating budget"
     - "Built funded marketplace MVP"

5. Too many projects compete equally.
   - Eight cards on the homepage is high for a recruiter scan.
   - Certifications as a project weakens the project set.
   - Fix: Homepage should show 3-4 strongest proof points only. Move certifications to About or Resume.

6. Repeated case study structure becomes predictable and generic.
   - Most pages use: Problem, Context, What I Built, Key Decisions, Tradeoffs, Impact, Tech Stack, Role Alignment.
   - This is clear, but every page sounds similar.
   - Fix: Keep structure, but make the first 3 lines of each case study sharper: role, scope, measurable result.

7. Impact claims vary in strength.
   - Strong: "Reduced allocation administration time by 70%"; "$1.9M operating budget"; "$1,500 seed funding"; "250+ applications".
   - Weaker: "Improved service consistency"; "Created reusable operating structure"; "Improved understanding".
   - Fix: Put quantified or concrete outcomes first. Move softer learning outcomes lower or remove them.

8. Role alignment pills are too broad.
   - Many projects say APM, Consulting, SWE, Operations, Data. This makes targeting feel unfocused.
   - Fix: Limit each project to 2-3 role signals. Use sharper labels: "Backend", "Workflow Automation", "Financial Ops", "Product Discovery", "Signal Processing".

9. About page has personal warmth, but it delays professional positioning.
   - The personal story is useful, but the first paragraph should still anchor professional value.
   - Fix: Start About with a short professional summary, then the background.

10. Contact page labels are too stylized.
    - `ID_IDENTIFIER`, `RETURN_PATH`, `TRANSMISSION`, and `INITIALIZE_SEND` add friction.
    - Fix: Use "Name", "Email", "Message", and "Send Message".

## Stress Test Results

### 10-Second Recruiter Scan

Likely takeaway: "Interesting CS/Management student with a systems theme."

Missing takeaway: "This candidate is a fit for X roles because they have Y proof."

Needed above the fold:
- Target role cluster
- Top 3 outcomes
- Resume link
- Projects link
- Contact link

### HR Keyword Scan

Good signals:
- CS, Management, UBC
- React, TypeScript, Python, Flask, MySQL, Docker, PyTorch
- Product, operations, governance, data, automation

Weakness:
- Keywords are spread across pages, not summarized in one recruiter-friendly block.

Fix:
- Add a compact "Role Fit" or "Snapshot" section:
  - "Technical: Python, TypeScript, React, Flask, MySQL, Docker"
  - "Product/Ops: workflow design, stakeholder discovery, governance, forecasting"
  - "Data: signal processing, analytics pipelines, financial modeling"

### Senior Manager Scan

Senior managers will respond to scope and judgment:
- 70% admin reduction
- $1.9M budget
- 250+ applications
- stakeholder requirements
- governance and process reliability

Pain point:
- The strongest management signals are mixed with smaller experiments, which dilutes seniority.

Fix:
- Group by "Operational Impact", "Technical Builds", and "Product/Growth" instead of abstract system categories.

### Mobile Scan

No horizontal overflow was detected in the test viewport. The bigger issue is density: the same amount of copy appears on mobile, and the ASCII blocks consume valuable vertical space.

Fix:
- Hide or shrink ASCII art on mobile cards.
- Show only title, one metric, one role tag, and one CTA per card.

## Copy To Cut Or Simplify

Cut/reduce:
- `detecting friction... mapping system... executing solution...`
- `IDENTITY`, `HOW I THINK`, and repeated terminal divider labels
- Repeated "systems that reduce friction" phrasing
- Certifications as a homepage project
- Generic impact bullets like "Improved understanding"

Replace:
- `VIEW_SYSTEMS` -> `View Projects`
- `OPEN_LAB` -> `All Work`
- `Read Case Study` -> `View Project`
- `RETURN_TO_PREVIOUS` -> `Back`
- `INITIALIZE_SEND` -> `Send Message`

## Recommended Homepage Structure

1. Hero
   - Name
   - Target role sentence
   - 3 proof chips
   - CTAs: Projects, Resume, Contact

2. Featured Impact
   - TA Allocation: 70% admin reduction, 250+ applications
   - Fiscal Oversight: $1.9M budget
   - VenueWorks: funded MVP, 2nd place

3. Role Fit Snapshot
   - Product / APM
   - SWE / Systems
   - Data / Analytics
   - Operations / Consulting

4. Selected Work
   - 4 cards max

5. About preview
   - 2-3 sentences, then link to full About

## Highest-Leverage Changes

1. Rename nav labels to recruiter-standard language.
2. Add role targets and proof metrics above the fold.
3. Reduce homepage projects from 8 to 4.
4. Move certifications off the homepage.
5. Convert terminal-style CTA/form labels to plain English.
6. Rewrite project descriptions to lead with scope + outcome.
7. Add a compact skills/role-fit section for keyword scanning.

## Example Hero Rewrite

```text
Aaditya Golash
CS + Management student at UBC building workflow, data, and product systems for real operational problems.

Selected proof:
- Reduced TA allocation administration time by 70%
- Oversaw $1.9M in operating funds and governance workflows
- Built a funded marketplace MVP for commercial space booking

[View Projects] [Resume] [Contact]
```

## Example Card Rewrite

Current:
"Redesigning UBC CS TA allocation workflows and reducing allocation latency by 70%."

Sharper:
"Built backend and workflow infrastructure for UBC CS TA allocation, processing 250+ applications and reducing admin time by 70%."

Current:
"Built a marketplace concept from zero to funded MVP and validated demand with early users."

Sharper:
"Founded and built a commercial-space marketplace MVP, secured $1,500 seed funding, and placed 2nd in a UBC entrepreneurship competition."

## Implementation Priority

P0:
- Hero role clarity
- Nav label clarity
- Homepage project reduction
- Plain-language CTAs

P1:
- Project card rewrites
- Role-fit snapshot
- Contact form label cleanup

P2:
- Case study intro rewrites
- Mobile ASCII reduction
- About page tightening
