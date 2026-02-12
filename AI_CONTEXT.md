# AI Context & Project Source of Truth

This file serves as the primary source of truth for AI agents working on this project. It outlines the technology stack, project structure, coding conventions, and key commands.

## Project Overview

**Name**: Next.js Prisma Boilerplate
**Description**: A modern full-stack web application boilerplate built with Next.js 16, Prisma ORM, and Tailwind CSS 4.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI + shadcn/ui
- **Authentication**: Auth.js (NextAuth v5) with Prisma Adapter
- **State Management**: TanStack Query (React Query)
- **Form Management**: React Hook Form
- **Validation**: Zod
- **Theming**: next-themes (Dark Mode)

## Project Structure

```
├── app/                  # Next.js App Router (pages, layouts, api)
│   ├── api/              # API Routes (including auth)
│   ├── login/            # Login page route
│   ├── layout.tsx        # Root layout with providers
│   └── page.tsx          # Home page
├── components/           # React Components
│   ├── auth/             # Authentication specific components (forms)
│   ├── ui/               # Reusable UI primitives (shadcn/ui)
│   └── theme-toggle.tsx  # Dark mode toggle
├── hooks/                # Custom React Hooks
├── lib/                  # Utilities and Libraries
│   ├── schemas/          # Zod validation schemas
│   ├── auth.ts           # Auth.js configuration
│   ├── prisma.ts         # Prisma client singleton
│   └── utils.ts          # Helper functions (cn, etc.)
├── prisma/               # Database Schema and Migrations
└── public/               # Static Assets
```

## Key Conventions

### Naming

- **Files**: `kebab-case.tsx` or `kebab-case.ts`
- **Directories**: `kebab-case`
- **Components**: `PascalCase`
- **Exports**: Named exports preferred for components.

### Component Architecture

- **UI Primitives**: Place reusable, generic UI components in `components/ui`.
- **Feature Components**: Group components by feature (e.g., `components/auth`).
- **Pages**: Keep `app` directory files minimal; import logic/components from `components/`.

### Authentication

- Use `Auth.js` (NextAuth v5).
- Configuration is in `lib/auth.ts`.
- Protected routes should use middleware or session checks.

### Forms & Validation

- Use **React Hook Form** for form state management.
- Use **Zod** for schema validation.
- Define schemas in `lib/schemas/`.

### Styling

- Use **Tailwind CSS** for styling.
- Use `cn()` utility for class merging.
- Support Dark Mode via `next-themes` and `dark:` variant.

## Database

- Schema defined in `prisma/schema.prisma`.
- Always run `npx prisma generate` after schema changes.
- Use `npx prisma migrate dev` for migrations.

## Common Commands

- `npm run dev`: Start development server.
- `npm run build`: Build for production.
- `npm run lint`: Run ESLint.
- `npm run db:seed`: Seed the database.
- `npx prisma studio`: Open Prisma Studio.
