# Deployment Guide

## Cloudflare Workers (Primary)

This project deploys to **Cloudflare Workers** for edge SSR.

### Prerequisites

- Cloudflare account
- `wrangler` CLI: `npm install -g wrangler`
- Authenticated: `wrangler login`

### Deploy

```bash
npm run build
npx wrangler deploy
```

The worker name is configured in `wrangler.jsonc`:

```jsonc
{
  "name": "lumina-beauty",
  "compatibility_date": "2025-09-24",
  "compatibility_flags": ["nodejs_compat"],
  "main": "dist/index.html",
}
```

---

## Docker (Self-Hosted)

```bash
docker build -t lumina-beauty .
docker-compose up -d
```

App will be available at **http://localhost:3000**.

---

## Environment Variables

Copy `.env.example` to `.env` before running locally:

```bash
cp .env.example .env
```

| Variable                 | Required | Description                     |
| ------------------------ | -------- | ------------------------------- |
| `VITE_SITE_URL`          | Yes      | Canonical URL for SEO meta tags |
| `VITE_GA_MEASUREMENT_ID` | No       | Google Analytics 4 ID           |
| `VITE_CONTACT_EMAIL`     | No       | Contact form recipient          |

For Cloudflare Workers, set secrets via:

```bash
wrangler secret put VITE_SITE_URL
```

---

## CI/CD

GitHub Actions workflow is at `.github/workflows/ci.yml`. It runs on every push and pull request:

1. **Lint** — ESLint + Prettier check
2. **Type-check** — `tsc --noEmit`
3. **Build** — `npm run build`

Deployment to Cloudflare is triggered manually or can be added as a separate workflow step.
