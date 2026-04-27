# Contributing

Thank you for your interest in contributing to Lumina Beauty!

## Getting Started

```bash
git clone https://github.com/your-org/luma-mirror-clone.git
cd luma-mirror-clone
npm install
npm run dev
```

## Workflow

1. **Branch** — create a feature branch from `main`: `git checkout -b feat/your-feature`
2. **Code** — make your changes following the conventions below
3. **Lint** — run `npm run lint` and fix all issues
4. **Format** — run `npm run format`
5. **PR** — open a pull request against `main` using the PR template

## Conventions

### Styling

- All design tokens are in `src/styles.css` — do **not** use inline hex colors
- Use existing utility classes (`.glass-card`, `.shine-btn`, `.rose-gold-glow`, etc.)
- Font is always `Electrolize` via `--font-sans` / `--font-display`
- Never add `!important` unless overriding a third-party reset

### Components

- One component per file
- Named exports for utilities, default export for pages
- Use `Reveal` wrapper for all new sections that should animate in

### Routes

- All routes go in `src/routes/`
- Each route must have a `head()` with `title` and `description` meta
- Replace `SITE_URL` using the constant — never hardcode the domain

### Commits

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` new feature
- `fix:` bug fix
- `style:` CSS/design changes
- `docs:` documentation only
- `chore:` build, deps, config

## Code of Conduct

Be respectful. Focus on the work. See [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).
