# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

Start the development server with Turbopack:

```bash
npm run dev
```

Build the production application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

Run ESLint on the codebase:

```bash
npm run lint
```

Format code with Prettier (via lint-staged):

```bash
npx prettier --editorconfig --write --ignore-unknown <files>
```

## Architecture Overview

This is a Next.js 16 application using the App Router architecture with TypeScript and Tailwind CSS v4.

### Routing Structure

The application uses Next.js App Router with route groups:

- `app/layout.tsx` - Root layout that configures fonts (Lato, Geist Mono) and dark mode support
- Pages in the `(site)` route group automatically use the DefaultLayout component

### Layout System

The layout architecture uses a nested composition pattern:

1. Root layout (`app/layout.tsx`) provides HTML shell, fonts, and base styling
2. Site layout (`app/(site)/layout.tsx`) wraps pages with DefaultLayout
3. DefaultLayout (`components/PageLayouts/DefaultLayout/index.tsx`) composes Header and main content
4. Header (`components/PageLayouts/Header/index.tsx`) is a client component with mobile menu functionality

### Component Organization

Components are organized by function:

- Path alias `@/*` maps to the project root

### Styling

- Tailwind CSS v4 is configured via `app/globals.css` using `@import "tailwindcss"` and `@theme inline`
- Dark mode is supported via `prefers-color-scheme`
- Custom CSS variables: `--background`, `--foreground`
- Tailwind theme extends font families from Next.js font variables
- EditorConfig enforces 2-space indentation and 180 character line length
- **Dynamic ClassNames**: Use the `classnames` library (imported as `cx`) for conditional, concatenation, or dynamic className application

  ```typescript
  import cx from "classnames";

  // Example usage:
  <div className={cx("base-class", "concatenate", { "conditional-class": condition })} />
  ```

### Key Dependencies

- **UI Components**: @headlessui/react (Dialog, etc.), @heroicons/react for icons
- **Styling**: Tailwind CSS v4 with PostCSS
- **Code Quality**: ESLint (Next.js config + Tailwind plugin), Prettier with Tailwind plugin, Husky + lint-staged for pre-commit hooks

### Configuration Notes

- ESLint uses flat config format (`eslint.config.mjs`)
- Tailwind CSS v4 plugin workaround: config points to `app/globals.css` instead of traditional config file
- TypeScript path alias: `@/*` for imports from root
- Turbopack is used for both dev and build
- Husky is configured via `npm run prepare` for git hooks
