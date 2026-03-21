# Aaditya Golash - Portfolio

Personal portfolio built with Hugo and PaperMod.

The site is designed to feel clean, technical, and direct: a project-focused portfolio with a terminal-inspired visual layer, a grounded About page, and case-study style work samples across software engineering, data, and product.

## Site Focus

- Clear homepage with measurable impact
- Grounded About page with personal context
- Work organized by category: software engineering, quant and data, product and strategy
- Project pages written around practical work and outcomes rather than abstract branding
- Contact form powered by Formspree with bot checks
- Dark mode by default with a supported light mode toggle

## Structure

```text
content/
├── about.md
├── contact.md
├── categories/
│   ├── data/_index.md
│   ├── product/_index.md
│   └── swe/_index.md
└── posts/
    ├── brain-connectivity.md
    ├── certifications.md
    ├── food-program-lead.md
    ├── soccer-net.md
    ├── suo-governance.md
    ├── ta-allocation-system.md
    ├── ubc-it-analyst.md
    └── venueworks.md

assets/
└── css/
    └── extended/
        └── custom.css

layouts/
├── _default/
│   └── list.html
└── contact/
    └── single.html
```

## Local Development

```bash
hugo server -D
```

## Production Build

```bash
hugo --minify
```

## Deployment

- Repository: `Aaditya-Golash/my-portfolio`
- Branch: `main`
- URL: `https://aadityagolash.github.io/`

Publishing is done by pushing to the repository's deployment branch/workflow setup.

## Contact

- Website contact form: Formspree-backed form on the contact page
- LinkedIn: [linkedin.com/in/aaditya-golash](https://linkedin.com/in/aaditya-golash)
- GitHub: [github.com/Aaditya-Golash](https://github.com/Aaditya-Golash)

## Form Security Setup

The contact form supports two anti-bot layers:

1. Built-in honeypot + math challenge (enabled by default)
2. Cloudflare Turnstile (recommended for stronger protection)

Configure Formspree endpoint and Turnstile site key in `hugo.toml`:

```toml
[params.contact]
formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID"
turnstileSiteKey = "YOUR_TURNSTILE_SITE_KEY"
```

If `turnstileSiteKey` is empty, the form still works with honeypot + math check.
