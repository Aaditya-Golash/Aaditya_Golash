# Aaditya Golash - Narrative Portfolio

Hugo + PaperMod portfolio positioned around one core idea:
systems thinking applied across engineering, operations, product, and analytics.

## Positioning

- Not a blog-first site.
- Home is a recruiter-facing narrative page.
- Projects page is the primary map of flagship work.
- All Work (`/posts/`) holds the broader project archive.

## Core Routes

- `/` Home (role fit, proof points, curated featured projects)
- `/systems/` Grouped project work (technical builds, operational impact, research/data, product/growth)
- `/posts/` All Work index
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
    |-- _index.md  (All Work page)
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

Current production hardening note: `turnstileSiteKey` is intentionally empty, so the form uses the honeypot and math challenge only. Add a Cloudflare Turnstile site key before expecting heavy public traffic or spam exposure.

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

The default `baseURL` targets GitHub Pages at `/Aaditya_Golash/`. If the site moves to a custom domain or a different project path, override it during build:

```bash
hugo --minify --baseURL https://example.com/
```

## Production Build

```bash
npm run build
```

## Regression Checks

```bash
npm test
```
