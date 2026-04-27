# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

### Added

- Cart page (`/cart`) with product list, quantity controls, and order summary
- Order confirmation page (`/confirmation`) with order number and delivery info
- Floating chat widget (bottom-right, global across all pages)
- Cart icon with item count badge in the header
- `Electrolize` font applied globally as `--font-sans` and `--font-display`
- `docs/` folder: ARCHITECTURE.md, DEPLOYMENT.md, CONTRIBUTING.md, CHANGELOG.md
- `.github/` workflows: CI pipeline (lint + type-check + build)
- `.github/` templates: PR template, bug report, feature request
- `Dockerfile` + `docker-compose.yml` for containerized deployment
- `.env.example` for environment variable reference
- `.vscode/settings.json` to suppress Tailwind v4 CSS false-positive linter errors

### Changed

- Replaced `@lovable.dev/vite-tanstack-config` with standard `@tanstack/react-start/config`
- All `SITE_URL` references updated from `luma-clone-buddy.lovable.app` → `luminabeauty.com`
- `robots.txt` and `sitemap.xml` updated with canonical domain
- `sitemap.xml` extended to include `/cart` route
