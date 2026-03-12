# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains the LAi Design Associates website — a modern, SEO-optimized architectural firm website for Fort Myers, Florida.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM (available, not yet used)
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── lai-design/         # Main LAi Design Associates website (React + Vite)
│   └── api-server/         # Express API server (backend)
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── tsconfig.json
└── package.json
```

## LAi Design Associates Website

### Features
- **Hero**: Full-screen parallax architecture photography
- **Portfolio Grid**: Asymmetric 12-column editorial grid with lightbox modal, 8 projects
- **About / The Studio**: 3D flip cards for architect profiles (Marco Alvarez, Sofia Chen, James Whitfield) — hover to reveal personality collage
- **Drone View**: Cinematic section with animated play button, modal for drone footage (client to supply video URL)
- **Contact Footer**: Validated contact form (name, email, project type, message)
- **SEO**: Full meta tags, Open Graph, Twitter Cards, JSON-LD LocalBusiness/ProfessionalService/ArchitecturalService schema, geo tags, robots.txt, sitemap.xml

### SEO Targeting
Keywords: "architects Fort Myers FL", "architects Southwest Florida", "architecture firm Fort Myers", "residential architect SWFL", "commercial architect Fort Myers"

### Key Frontend Packages
- `framer-motion` — parallax, scroll animations, flip cards, lightbox
- `react-helmet-async` — SEO meta tag management
- `react-hook-form` + `@hookform/resolvers` + `zod` — contact form validation

### Backend Routes
- `POST /api/contact` — contact form submission (logs to console, ready for email integration)

### Media
- All project images from Unsplash (lazy loaded)
- Generated: `public/images/topographic-lines.png`, `public/images/architectural-sketch.png`
- Drone video: placeholder — client to supply Vimeo/YouTube embed URL in `DroneView.tsx`

### Architect Card Flip
Uses CSS 3D transforms defined as Tailwind utility classes in `index.css`:
- `.perspective-1000`, `.transform-style-3d`, `.backface-hidden`, `.rotate-y-180`
- Hover triggers `group-hover:rotate-y-180` on the card container

## Packages

### `artifacts/lai-design` (`@workspace/lai-design`)
React + Vite frontend. Served at `/` (root).

### `artifacts/api-server` (`@workspace/api-server`)
Express 5 API server. Routes at `/api`.

### `lib/db` (`@workspace/db`)
Drizzle ORM with PostgreSQL. Database not yet provisioned — provision when needed.
