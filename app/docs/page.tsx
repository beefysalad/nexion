'use client'

import { Button } from '@/components/ui/button'
import {
  ArrowLeft,
  BookOpen,
  Code2,
  Database,
  ShieldCheck,
  Zap,
  Terminal,
  FileCode,
  Lock,
  Boxes,
  Github,
} from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white dark:bg-neutral-950 dark:text-neutral-50 dark:selection:bg-neutral-50 dark:selection:text-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 flex items-center justify-between">
          <Link href="/">
            <Button
              variant="ghost"
              className="gap-2 rounded-full border border-zinc-200 bg-zinc-50 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <ArrowLeft className="size-4" />
              Back to Home
            </Button>
          </Link>
          <ThemeToggle />
        </div>

        <div className="space-y-20">
          <header className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm font-medium dark:border-neutral-800 dark:bg-neutral-900/50">
              <BookOpen className="size-4" />
              <span>Developer Guide</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              Next.js Prisma Template
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-zinc-600 dark:text-neutral-400">
              A high-performance, full-stack boilerplate designed for speed and
              reliability. Built with Next.js 16, Prisma 7, and Auth.js v5.
            </p>
          </header>

          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
                <Terminal className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">Quick Start</h2>
            </div>

            <div className="grid gap-6">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
                <h3 className="mb-4 text-xl font-bold">1. Project Setup</h3>
                <div className="space-y-4">
                  <p className="text-zinc-600 dark:text-neutral-400">
                    Clone the repo and install dependencies using npm.
                  </p>
                  <pre className="overflow-x-auto rounded-xl bg-zinc-900 p-5 font-mono text-sm text-zinc-300 dark:bg-neutral-900">
                    <code>{`npx create-next-app -e https://github.com/beefysalad/next-prisma-template my-app
cd my-app
npm install`}</code>
                  </pre>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
                <h3 className="mb-4 text-xl font-bold">
                  2. Environment Configuration
                </h3>
                <div className="space-y-4">
                  <p className="text-zinc-600 dark:text-neutral-400">
                    Copy{' '}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 dark:bg-neutral-800">
                      .env.example
                    </code>{' '}
                    to{' '}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 dark:bg-neutral-800">
                      .env.local
                    </code>{' '}
                    and update your secrets.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                      <p className="mb-1 text-xs font-bold tracking-widest text-zinc-400 uppercase">
                        Database
                      </p>
                      <code className="font-mono text-sm break-all">
                        DATABASE_URL
                      </code>
                    </div>
                    <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                      <p className="mb-1 text-xs font-bold tracking-widest text-zinc-400 uppercase">
                        Auth Secret
                      </p>
                      <code className="font-mono text-sm break-all">
                        AUTH_SECRET
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-12">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
                <Boxes className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">Architecture</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-neutral-100">
                  <ShieldCheck className="size-5 text-emerald-500" />
                  Authentication (Auth.js v5)
                </div>
                <p className="text-zinc-600 dark:text-neutral-400">
                  Built on the latest Auth.js v5 (beta) with{' '}
                  <code className="rounded bg-zinc-100 px-1 font-mono text-sm dark:bg-neutral-900">
                    JWT
                  </code>{' '}
                  strategy. It includes a custom Credentials provider for
                  Email/Password login, fully integrated with Prisma.
                </p>
                <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                  <p className="font-mono text-sm text-zinc-500">
                    Protection logic in{' '}
                    <code className="text-zinc-900 italic dark:text-neutral-100">
                      middleware.ts
                    </code>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-neutral-100">
                  <Database className="size-5 text-blue-500" />
                  Database (Prisma 7)
                </div>
                <p className="text-zinc-600 dark:text-neutral-400">
                  PostgreSQL with Prisma 7. Schema includes{' '}
                  <code className="rounded bg-zinc-100 px-1 font-mono text-sm dark:bg-neutral-900">
                    User
                  </code>
                  ,{' '}
                  <code className="rounded bg-zinc-100 px-1 font-mono text-sm dark:bg-neutral-900">
                    Account
                  </code>
                  , and{' '}
                  <code className="rounded bg-zinc-100 px-1 font-mono text-sm dark:bg-neutral-900">
                    Count
                  </code>{' '}
                  models.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="rounded-lg border border-zinc-200 bg-white px-3 py-2 dark:border-neutral-800 dark:bg-neutral-900">
                    <p className="text-xs font-bold text-zinc-400">Studio</p>
                    <code className="text-xs text-zinc-500">
                      npx prisma studio
                    </code>
                  </div>
                  <div className="rounded-lg border border-zinc-200 bg-white px-3 py-2 dark:border-neutral-800 dark:bg-neutral-900">
                    <p className="text-xs font-bold text-zinc-400">Seed</p>
                    <code className="text-xs text-zinc-500">
                      npm run db:seed
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-12">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
                <Code2 className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">Development Patterns</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-4">
                <h4 className="font-bold">Naming Conventions</h4>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-neutral-400">
                  <li>
                    <code className="font-bold text-zinc-900 dark:text-neutral-100">
                      kebab-case
                    </code>{' '}
                    for files and folders.
                  </li>
                  <li>
                    <code className="font-bold text-zinc-900 dark:text-neutral-100">
                      PascalCase
                    </code>{' '}
                    for React components.
                  </li>
                  <li>Named exports are preferred for clarity.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold">Form Management</h4>
                <p className="text-sm text-zinc-600 dark:text-neutral-400">
                  Use{' '}
                  <span className="font-bold text-zinc-900 dark:text-neutral-100">
                    React Hook Form
                  </span>{' '}
                  with{' '}
                  <span className="font-bold text-zinc-900 dark:text-neutral-100">
                    Zod
                  </span>{' '}
                  resolvers.
                </p>
                <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3 font-mono text-xs dark:border-neutral-800 dark:bg-neutral-900/50">
                  schemas in lib/schemas/
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold">Component Architecture</h4>
                <p className="text-sm text-zinc-600 dark:text-neutral-400">
                  Feature-based grouping in{' '}
                  <code className="rounded bg-zinc-100 px-1 dark:bg-neutral-800">
                    components/
                  </code>
                  . Generic primitives stay in{' '}
                  <code className="rounded bg-zinc-100 px-1 dark:bg-neutral-800">
                    ui/
                  </code>
                  .
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
                <FileCode className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">Project Structure</h2>
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/50 dark:border-neutral-800 dark:bg-neutral-900/30">
              <div className="grid grid-cols-1 divide-y divide-zinc-200 md:grid-cols-2 md:divide-x md:divide-y-0 dark:divide-neutral-800">
                <div className="space-y-4 p-8">
                  <div className="font-bold">Core Directories</div>
                  <ul className="space-y-3 text-sm text-zinc-600 dark:text-neutral-400">
                    <li className="flex items-center gap-2">
                      <code className="font-bold text-zinc-900 dark:text-neutral-100">
                        app/
                      </code>{' '}
                      Next.js App Router (Pages & API)
                    </li>
                    <li className="flex items-center gap-2">
                      <code className="font-bold text-zinc-900 dark:text-neutral-100">
                        components/
                      </code>{' '}
                      shadcn/ui & custom components
                    </li>
                    <li className="flex items-center gap-2">
                      <code className="font-bold text-zinc-900 dark:text-neutral-100">
                        lib/
                      </code>{' '}
                      Utils, Auth, Schemas, and API hooks
                    </li>
                    <li className="flex items-center gap-2">
                      <code className="font-bold text-zinc-900 dark:text-neutral-100">
                        prisma/
                      </code>{' '}
                      Database schema & migrations
                    </li>
                  </ul>
                </div>
                <div className="space-y-4 p-8">
                  <div className="font-bold">Critical Files</div>
                  <ul className="space-y-3 text-sm text-zinc-600 dark:text-neutral-400">
                    <li className="flex items-center gap-2">
                      <code className="font-bold text-zinc-900 dark:text-neutral-100">
                        lib/auth.ts
                      </code>{' '}
                      Main NextAuth configuration
                    </li>
                    <li className="flex items-center gap-2">
                      <code className="font-bold text-zinc-900 dark:text-neutral-100">
                        lib/prisma.ts
                      </code>{' '}
                      Prisma client singleton
                    </li>
                    <li className="flex items-center gap-2">
                      <code className="font-bold text-zinc-900 dark:text-neutral-100">
                        lib/routes.ts
                      </code>{' '}
                      Route protection rules
                    </li>
                    <li className="flex items-center gap-2">
                      <code className="font-bold text-zinc-900 dark:text-neutral-100">
                        lib/utils.ts
                      </code>{' '}
                      Utility helpers (cn, etc.)
                    </li>
                    <li className="flex items-center gap-2">
                      <code className="font-bold text-zinc-900 dark:text-neutral-100">
                        middleware.ts
                      </code>{' '}
                      Global auth protection
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-12 border-t border-zinc-200 pt-16 dark:border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500 text-white">
                <Zap className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">Making it yours</h2>
            </div>

            <div className="grid gap-8">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
                <h3 className="mb-4 text-xl font-bold">
                  1. Branding & Styling
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <p className="text-sm text-zinc-600 dark:text-neutral-400">
                      I use{' '}
                      <span className="font-bold text-zinc-900 dark:text-neutral-100">
                        Tailwind CSS 4
                      </span>{' '}
                      with a CSS-first configuration. Customize your theme
                      variables directly in:
                    </p>
                    <div className="rounded-lg border border-zinc-200 bg-white p-3 font-mono text-xs dark:border-neutral-800 dark:bg-neutral-900">
                      app/globals.css
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase">
                      Pro Tip
                    </p>
                    <p className="text-sm text-zinc-500">
                      Update{' '}
                      <code className="text-zinc-900 italic dark:text-neutral-100">
                        --primary
                      </code>{' '}
                      and{' '}
                      <code className="text-zinc-900 italic dark:text-neutral-100">
                        --radius
                      </code>{' '}
                      to instantly change the vibe of the entire app.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
                  <h3 className="mb-4 text-xl font-bold">
                    2. Evolve the Database
                  </h3>
                  <p className="mb-4 text-sm text-zinc-600 dark:text-neutral-400">
                    Add your business models to{' '}
                    <code className="rounded bg-zinc-200 px-1 dark:bg-neutral-800">
                      prisma/schema.prisma
                    </code>
                    . After modifying the schema, run:
                  </p>
                  <pre className="overflow-x-auto rounded bg-zinc-900 p-3 font-mono text-xs text-zinc-300">
                    <code>npx prisma migrate dev</code>
                  </pre>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
                  <h3 className="mb-4 text-xl font-bold">
                    3. Social Authentication
                  </h3>
                  <p className="mb-4 text-sm text-zinc-600 dark:text-neutral-400">
                    Add OAuth providers (GitHub, Google, etc.) by updating the
                    providers array in:
                  </p>
                  <div className="rounded-lg border border-zinc-200 bg-white p-3 font-mono text-xs dark:border-neutral-800 dark:bg-neutral-900">
                    lib/auth.config.ts
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
                <h3 className="mb-4 text-xl font-bold">
                  4. Route Protection Logic
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <p className="text-sm text-zinc-600 dark:text-neutral-400">
                      Manage which routes are public, which require
                      authentication, and which are restricted for logged-in
                      users.
                    </p>
                    <div className="rounded-lg border border-zinc-200 bg-white p-3 font-mono text-xs dark:border-neutral-800 dark:bg-neutral-900">
                      lib/routes.ts
                    </div>
                  </div>
                  <ul className="list-inside list-disc space-y-2 text-sm text-zinc-500">
                    <li>
                      <code className="text-zinc-900 italic dark:text-neutral-100">
                        PUBLIC_ROUTES
                      </code>
                      : Accessible to everyone.
                    </li>
                    <li>
                      <code className="text-zinc-900 italic dark:text-neutral-100">
                        AUTH_ROUTES
                      </code>
                      : Shared routes for login/signup.
                    </li>
                    <li>
                      <code className="text-zinc-900 italic dark:text-neutral-100">
                        API_AUTH_PREFIX
                      </code>
                      : Routes handled by Auth.js.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
                <h3 className="mb-4 text-xl font-bold">
                  5. Production Cleanup
                </h3>
                <p className="mb-4 text-sm text-zinc-600 dark:text-neutral-400">
                  Once you're ready to ship, remove the demo assets and pages:
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900">
                    <p className="text-xs font-bold text-red-500">Delete</p>
                    <code className="text-[10px] text-zinc-500">app/docs/</code>
                  </div>
                  <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900">
                    <p className="text-xs font-bold text-red-500">Update</p>
                    <code className="text-[10px] text-zinc-500">
                      app/page.tsx
                    </code>
                  </div>
                  <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900">
                    <p className="text-xs font-bold text-red-500">Remove</p>
                    <code className="text-[10px] text-zinc-500">
                      prisma/seed.ts
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
              <h3 className="mb-4 text-xl font-bold">
                6. Interactive Dashboard Features
              </h3>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-bold">Global Visitor Counter</h4>
                  <p className="text-sm text-zinc-600 dark:text-neutral-400">
                    The dashboard includes a real-time visitor counter using the{' '}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 dark:bg-neutral-800">
                      Count
                    </code>{' '}
                    model. It demonstrates:
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-neutral-400">
                    <li>
                      <span className="font-bold text-zinc-900 dark:text-neutral-100">
                        TanStack Query
                      </span>{' '}
                      for real-time data fetching (auto-refetch every 5s)
                    </li>
                    <li>
                      <span className="font-bold text-zinc-900 dark:text-neutral-100">
                        Optimistic updates
                      </span>{' '}
                      with mutation hooks
                    </li>
                    <li>
                      Full-stack implementation: API routes (
                      <code className="rounded bg-zinc-100 px-1 dark:bg-neutral-800">
                        /api/counter
                      </code>
                      ), data layer (
                      <code className="rounded bg-zinc-100 px-1 dark:bg-neutral-800">
                        lib/data/counter.ts
                      </code>
                      ), and hooks (
                      <code className="rounded bg-zinc-100 px-1 dark:bg-neutral-800">
                        hooks/useCounter.ts
                      </code>
                      )
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold">User Stats</h4>
                  <p className="text-sm text-zinc-600 dark:text-neutral-400">
                    The dashboard also includes a user stats card that shows:
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-neutral-400">
                    <li>
                      Account email and registration date using{' '}
                      <code className="rounded bg-zinc-100 px-1 dark:bg-neutral-800">
                        date-fns
                      </code>
                    </li>
                  </ul>
                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
                    <p className="text-xs font-bold text-amber-700 dark:text-amber-400">
                      💡 TIP
                    </p>
                    <p className="mt-1 text-xs text-amber-600 dark:text-amber-500">
                      Use the counter implementation as a template for adding
                      your own interactive features with real-time updates!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
              <h3 className="mb-4 text-xl font-bold">
                7. GitHub Workflows & Automation
              </h3>
              <div className="space-y-4">
                <h4 className="font-bold">PR Agent (Qodo Merge)</h4>
                <p className="text-sm text-zinc-600 dark:text-neutral-400">
                  The template includes automated PR review and feedback using{' '}
                  <a
                    href="https://qodo-merge-docs.qodo.ai/"
                    target="_blank"
                    className="font-bold text-zinc-900 underline dark:text-neutral-100"
                  >
                    Qodo Merge (PR Agent)
                  </a>
                  . This GitHub Action automatically:
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-neutral-400">
                  <li>
                    Reviews pull requests and provides intelligent feedback
                  </li>
                  <li>Suggests code improvements and best practices</li>
                  <li>Responds to comments on PRs</li>
                </ul>
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/30">
                  <p className="text-xs font-bold text-blue-700 dark:text-blue-400">
                    ⚙️ SETUP REQUIRED
                  </p>
                  <p className="mt-1 text-xs text-blue-600 dark:text-blue-500">
                    Add your{' '}
                    <code className="rounded bg-blue-100 px-1 dark:bg-blue-900">
                      OPENAI_KEY
                    </code>{' '}
                    to GitHub repository secrets for PR Agent to work.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-8 border-t border-zinc-200 pt-16 dark:border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-500 text-white">
                <Github className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">Contributors</h2>
            </div>
            <p className="text-zinc-600 dark:text-neutral-400">
              Shoutout to everyone below for contributing to this boilerplate!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://github.com/beefysalad"
                target="_blank"
                className="group flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4 transition-all hover:border-zinc-900 hover:bg-white dark:border-neutral-800 dark:bg-neutral-900/30 dark:hover:border-neutral-50 dark:hover:bg-neutral-900"
              >
                <div className="flex size-10 items-center justify-center overflow-hidden rounded-full bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
                  <img
                    src="/ptrck.jpg"
                    alt="beefysalad"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold">beefysalad</div>
                  <div className="text-xs text-zinc-500">Main Contributor</div>
                </div>
              </Link>
            </div>
          </section>

          <footer className="flex flex-col items-center justify-between gap-6 border-t border-zinc-200 pt-12 text-center md:flex-row md:text-left dark:border-neutral-800">
            <Link
              href="https://github.com/beefysalad/next-prisma-template"
              target="_blank"
            >
              <Button className="rounded-full px-8 font-bold">
                Star on GitHub :3
              </Button>
            </Link>
          </footer>
        </div>
      </div>
    </div>
  )
}
