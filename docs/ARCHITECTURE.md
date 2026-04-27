# Architecture

## Overview

Lumina Beauty is a **server-side rendered** luxury e-commerce UI built on:

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) v1 (SSR) |
| Router | [TanStack Router](https://tanstack.com/router) v1 (file-based) |
| UI | React 19 + Tailwind CSS v4 |
| Build | Vite 7 |
| Deployment | Cloudflare Workers (edge SSR) |
| Font | Electrolize (Google Fonts) |

---

## Routing

TanStack Router uses **file-based routing**. Every file in `src/routes/` becomes a route:

```
src/routes/
├── __root.tsx        → layout shell (head, ChatWidget)
├── index.tsx         → /
├── cart.tsx          → /cart
├── confirmation.tsx  → /confirmation
├── products.tsx      → /products
├── shop.tsx          → /shop
├── about.tsx         → /about
├── blog.tsx          → /blog
└── contact.tsx       → /contact
```

The route tree is auto-generated into `src/routeTree.gen.ts` at dev/build time.

---

## Rendering

TanStack Start handles SSR. On the first request, the server renders full HTML. After hydration, navigation is client-side SPA.

```
Request → Cloudflare Worker
         → TanStack Start SSR
         → React renderToString
         → HTML streamed to client
         → React hydrates
         → SPA navigation takes over
```

---

## Styling Architecture

All design tokens live in `src/styles.css` using **Tailwind CSS v4 CSS-first config**:

- `:root {}` — raw CSS custom properties (colors, fonts, radii)
- `@theme inline {}` — registers tokens as Tailwind utilities
- `@layer base {}` — global resets and font assignments
- `@layer utilities {}` — custom utility classes (`.glass-card`, `.shine-btn`, `.reveal`, etc.)

---

## Components

| Component | Purpose |
|---|---|
| `ChatWidget` | Floating bottom-right live chat bubble |
| `Reveal` | Intersection Observer scroll-reveal wrapper |
| `SmartImage` | LQIP blur-up progressive image loader |

---

## State

Currently stateless (no global store). Cart state is UI-local. Future: add Zustand or TanStack Query for persistent cart.
