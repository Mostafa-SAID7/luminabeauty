# Architecture

## Overview

Lumina Beauty is a **single-page application (SPA)** luxury e-commerce UI built on:

| Layer      | Technology                                                     |
| ---------- | -------------------------------------------------------------- |
| Framework  | [Vite](https://vitejs.dev/) + React SPA                       |
| Router     | [React Router DOM](https://reactrouter.com/) v6 (client-side) |
| UI         | React 18 + Tailwind CSS v3                                    |
| Build      | Vite 5                                                         |
| Deployment | Netlify (static hosting)                                       |
| Font       | Cormorant Garamond + Inter (Google Fonts)                     |

---

## Routing

React Router DOM uses **component-based routing**. Routes are defined in `src/App.tsx`:

```
src/pages/
├── HomePage.tsx         → /
├── CartPage.tsx         → /cart
├── ConfirmationPage.tsx → /confirmation
└── NotFoundPage.tsx     → /* (404)
```

All routing is client-side with `BrowserRouter` for clean URLs.

---

## Rendering

Standard React SPA rendering. The server serves static HTML, CSS, and JS. React hydrates on the client and handles all navigation:

```
Request → Static Server (Netlify)
         → index.html + assets
         → React mounts to #root
         → Client-side routing takes over
```

---

## Styling Architecture

All design tokens live in `src/styles.css` using **Tailwind CSS v3**:

- `@layer base {}` — CSS custom properties and global resets
- `tailwind.config.js` — Tailwind configuration with custom colors and animations
- `@layer utilities {}` — custom utility classes (`.glass-card`, `.shine-btn`, `.reveal`, etc.)

---

## Components

| Component    | Purpose                                     |
| ------------ | ------------------------------------------- |
| `ChatWidget` | Floating bottom-right live chat bubble      |
| `Reveal`     | Intersection Observer scroll-reveal wrapper |
| `SmartImage` | LQIP blur-up progressive image loader       |

---

## State Management

Uses React Context for global state:

- **CartContext**: Shopping cart state with localStorage persistence
- **LanguageContext**: i18n language switching with RTL support

No external state management library needed for this application size.

---

## Internationalization

Full i18n support with:

- English (default)
- Arabic (Egyptian dialect) with RTL layout
- Language switching persisted in localStorage
- Cairo font for Arabic text
- Automatic direction switching (LTR/RTL)

---

## Build & Deployment

```bash
# Development
npm run dev

# Production build
npm run build  # → dist/

# Deploy to Netlify
# Automatically deploys dist/ folder
# Includes _redirects for SPA routing
```

The build outputs a static SPA that can be deployed to any static hosting service.