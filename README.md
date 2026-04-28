# Lumina Beauty

> Luxury natural skincare e-commerce — built with Vite, React 19, React Router, Tailwind CSS v4, and Cloudflare Workers.

[![CI](https://github.com/your-org/luma-mirror-clone/actions/workflows/ci.yml/badge.svg)](https://github.com/your-org/luma-mirror-clone/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## ✨ Features

- **Full e-commerce flow** — browsing, cart, checkout confirmation
- **Electrolize font** — consistent brand typography across all pages
- **Dark luxury aesthetic** — rose gold & champagne design system
- **Live chat widget** — bottom-right floating support chat
- **Before/after image comparison** — interactive drag slider
- **Scroll animations** — reveal, clip, zoom, and stagger effects
- **Modern Routing** — React Router for seamless client-side navigation
- **SEO-ready** — per-page meta, Open Graph, structured data (JSON-LD), sitemap, robots.txt
- **PWA Ready** — installable as a native app with offline capabilities (vite-plugin-pwa)
- **Highly Optimized** — throttled scroll listeners, native passive touch events, memory-efficient IntersectionObservers, and GPU-accelerated animations

---

## 🗂 Project Structure

```
├── src/
│   ├── assets/          # Product & hero images (WebP)
│   ├── components/
│   │   ├── ChatWidget.tsx   # Floating support chat (bottom-right)
│   │   ├── Reveal.tsx       # Scroll-reveal wrapper
│   │   └── SmartImage.tsx   # LQIP blur-up image loader
│   ├── routes/
│   │   ├── __root.tsx       # Root shell (head, scripts, ChatWidget)
│   │   ├── index.tsx        # Home page (hero → products → newsletter)
│   │   ├── cart.tsx         # Shopping cart
│   │   ├── confirmation.tsx # Order confirmation
│   │   ├── products.tsx     # Products listing
│   │   ├── shop.tsx         # Shop all
│   │   ├── about.tsx        # Brand story
│   │   ├── blog.tsx         # Beauty journal
│   │   └── contact.tsx      # Contact
│   ├── styles.css           # Tailwind v4 CSS-first config + design tokens
│   └── App.tsx              # Main React Router setup
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── docs/                    # Project documentation
├── .github/                 # CI/CD workflows & PR templates
├── Dockerfile
├── docker-compose.yml
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 20
- **npm** ≥ 10

### Install & Run

```bash
npm install
npm run dev
```

The dev server starts at **http://localhost:3000**.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🐳 Docker

```bash
# Build image
docker build -t lumina-beauty .

# Run container (port 3000)
docker-compose up
```

See [`docker-compose.yml`](./docker-compose.yml) for full configuration.

---

## ☁️ Deployment (Cloudflare Workers)

This project is configured for **Cloudflare Workers** via `wrangler.jsonc`.

```bash
npx wrangler deploy
```

See [`docs/DEPLOYMENT.md`](./docs/DEPLOYMENT.md) for a full deployment guide.

---

## 🎨 Design System

All design tokens are defined in [`src/styles.css`](./src/styles.css):

| Token                   | Value           | Usage                    |
| ----------------------- | --------------- | ------------------------ |
| `--background`          | `#0A0A0A`       | Deep black base          |
| `--primary` / rose gold | `#E8B4B8`       | Buttons, badges, accents |
| `--champagne`           | `#E8D5B8`       | Prices, headings         |
| `--burgundy`            | `#8B2F4E`       | Deep accent              |
| `--font-sans`           | `"Electrolize"` | All body text            |
| `--font-display`        | `"Electrolize"` | All headings             |

---

## 📄 Documentation

- [Architecture](./docs/ARCHITECTURE.md)
- [Deployment](./docs/DEPLOYMENT.md)
- [Contributing](./docs/CONTRIBUTING.md)

---

## 📜 License

MIT © Lumina Beauty
