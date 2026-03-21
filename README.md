# Aaditya Golash - Narrative Portfolio

Hugo + PaperMod portfolio positioned around one core idea:
systems thinking applied across engineering, operations, product, and analytics.

## Positioning

- Not a blog-first site.
- Home is a recruiter-facing narrative page.
- Systems page is the primary map of flagship work.
- Lab (`/posts/`) holds experiments, implementation logs, and secondary work.

## Core Routes

- `/` Home (identity, how I think, curated featured projects)
- `/systems/` Grouped system work (academic, organizational, data/analytical, growth/distribution)
- `/posts/` Lab index
- `/about/` Background and context
- `/contact/` Formspree contact form with anti-bot checks
- `/contact-success/` Post-submit success page

## Content Structure

```text
content/
|-- about.md
|-- contact.md
|-- contact-success.md
|-- systems.md
|-- categories/
|   |-- data/_index.md
|   |-- operations/_index.md
|   |-- product/_index.md
|   `-- swe/_index.md
`-- posts/
    |-- _index.md  (Lab page)
    `-- *.md       (case-study style entries)
```

## Front Matter Conventions (Posts)

Each post supports:

- `featured: true|false` for homepage featured cards
- `system_group: academic|organizational|data|growth` for `/systems/`
- `role_alignment: []` for role-fit badges
- `ascii_cover: |-` for list/home visual identity

## Post Template

Use `archetypes/default.md` when creating new posts.  
Standard sections:

1. Problem
2. Context
3. What I Built
4. Key Decisions
5. Tradeoffs
6. Impact
7. Tech Stack
8. Role Alignment

## Contact Security

Contact flow includes:

- Honeypot field
- Client-side human math check
- Optional Cloudflare Turnstile (if configured)
- Formspree submission via AJAX with redirect to `/contact-success/`

Configure in `hugo.toml`:

```toml
[params.contact]
formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID"
turnstileSiteKey = "YOUR_TURNSTILE_SITE_KEY"
```

## Local Development

```bash
hugo server -D
```

## Production Build

```bash
hugo --minify
```
