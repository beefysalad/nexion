import { Metadata } from 'next'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import {
  ArrowLeft,
  BookOpen,
  Boxes,
  Code2,
  Database,
  FileCode,
  Github,
  ShieldCheck,
  Terminal,
  Zap,
  Server,
  Palette,
  FileText,
  Rocket,
  Wrench,
  LifeBuoy,
  GitMerge,
  Trash2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Documentation | Next.js Prisma Boilerplate',
  description: 'Complete documentation for the Next.js Prisma Boilerplate',
}

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

          <nav className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
            <h2 className="mb-6 text-xl font-bold">Quick Navigation</h2>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              <a
                href="#getting-started"
                className="flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                <Terminal className="size-4" />
                Getting Started
              </a>
              <a
                href="#authentication"
                className="flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                <ShieldCheck className="size-4" />
                Authentication
              </a>
              <a
                href="#workflows"
                className="flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                <GitMerge className="size-4" />
                Workflows
              </a>
              <a
                href="#usage"
                className="flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                <LifeBuoy className="size-4" />
                Using this Template
              </a>
              <a
                href="#architecture"
                className="flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                <Boxes className="size-4" />
                Architecture
              </a>
              <a
                href="#api-routes"
                className="flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                <Server className="size-4" />
                API Routes
              </a>
              <a
                href="#database"
                className="flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                <Database className="size-4" />
                Database & Prisma
              </a>
              <a
                href="#components"
                className="flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                <Code2 className="size-4" />
                Components
              </a>
              <a
                href="#styling"
                className="flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                <Palette className="size-4" />
                Styling Guide
              </a>
              <a
                href="#forms"
                className="flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                <FileText className="size-4" />
                Forms & Validation
              </a>
              <a
                href="#deployment"
                className="flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                <Rocket className="size-4" />
                Deployment
              </a>
              <a
                href="#troubleshooting"
                className="flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                <Wrench className="size-4" />
                Troubleshooting
              </a>
            </div>
          </nav>

          {/* Getting Started */}
          <section id="getting-started" className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
                <Terminal className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">Getting Started</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
                <h3 className="mb-4 text-xl font-bold">1. Project Setup</h3>
                <div className="space-y-4">
                  <p className="text-zinc-600 dark:text-neutral-400">
                    Clone the repo and verify prerequisites: Node 18+ and
                    PostgreSQL.
                  </p>
                  <pre className="overflow-x-auto rounded-xl bg-zinc-900 p-5 font-mono text-sm text-zinc-300 dark:bg-neutral-950">
                    <code className="block break-all whitespace-pre-wrap">{`git clone <repo-url>
cd my-app
npm install`}</code>
                  </pre>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
                <h3 className="mb-4 text-xl font-bold">2. Environment & DB</h3>
                <div className="space-y-4">
                  <p className="text-zinc-600 dark:text-neutral-400">
                    Copy{' '}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 dark:bg-neutral-800">
                      .env.example
                    </code>{' '}
                    to{' '}
                    <code className="rounded bg-zinc-200 px-1.5 py-0.5 dark:bg-neutral-800">
                      .env
                    </code>{' '}
                    and run migrations.
                  </p>
                  <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                    <pre className="overflow-x-auto text-sm">
                      <code>{`npx prisma migrate dev
npm run dev`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
              <h3 className="mb-4 text-xl font-bold">Environment Variables</h3>
              <p className="mb-4 text-zinc-600 dark:text-neutral-400">
                Ensure your{' '}
                <code className="rounded bg-zinc-200 px-1.5 py-0.5 dark:bg-neutral-800">
                  .env
                </code>{' '}
                file has the following:
              </p>
              <div className="rounded-xl bg-zinc-900 p-5 font-mono text-sm text-zinc-300 dark:bg-neutral-950">
                <div className="space-y-1">
                  <div>DATABASE_URL="postgresql://..."</div>
                  <div>NEXTAUTH_URL="http://localhost:3000"</div>
                  <div>AUTH_SECRET="your-secret-key"</div>
                </div>
              </div>
            </div>
          </section>

          {/* Authentication */}
          <section id="authentication" className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
                <ShieldCheck className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">Authentication</h2>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
                <h3 className="mb-4 text-xl font-bold">
                  Middleware Protection
                </h3>
                <p className="mb-4 text-zinc-600 dark:text-neutral-400">
                  Route protection is handled centrally in{' '}
                  <code className="font-mono">middleware.ts</code>. Instead of
                  checking auth in every component, define your routes in{' '}
                  <code className="font-mono">lib/routes.ts</code>:
                </p>
                <div className="overflow-hidden rounded-xl bg-zinc-900 p-4 dark:bg-neutral-950">
                  <pre className="overflow-x-auto text-sm text-zinc-300">
                    <code>{`// lib/routes.ts

export const publicRoutes = ['/', '/docs'];
export const authRoutes = ['/login', '/register'];
export const apiAuthPrefix = '/api/auth';
export const DEFAULT_LOGIN_REDIRECT = '/dashboard';`}</code>
                  </pre>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
                  <h4 className="mb-2 font-bold">Server-Side Access</h4>
                  <p className="mb-4 text-sm text-zinc-500">
                    Access session data in Server Components.
                  </p>
                  <div className="overflow-hidden rounded-xl bg-zinc-900 p-3 font-mono text-xs text-zinc-300 dark:bg-neutral-950">
                    {`import { auth } from '@/lib/auth';

export default async function Page() {
  const session = await auth();
  return <div>{session?.user?.name}</div>;
}`}
                  </div>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
                  <h4 className="mb-2 font-bold">Client-Side Access</h4>
                  <p className="mb-4 text-sm text-zinc-500">
                    Use hooks for interactivity.
                  </p>
                  <div className="overflow-hidden rounded-xl bg-zinc-900 p-3 font-mono text-xs text-zinc-300 dark:bg-neutral-950">
                    {`'use client';
import { useSession } from 'next-auth/react';

export function Profile() {
  const { data: session } = useSession();
  return <div>{session?.user?.name}</div>;
}`}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Workflows */}
          <section id="workflows" className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
                <GitMerge className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">Workflows</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/30">
                <h3 className="mb-2 font-bold">Branch Cleanup</h3>
                <p className="text-sm text-zinc-600 dark:text-neutral-400">
                  A GitHub Action automatically deletes feature branches after
                  they are merged into <code className="font-mono">main</code>,
                  keeping your repository clean.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/30">
                <h3 className="mb-2 font-bold">PR Agent</h3>
                <p className="text-sm text-zinc-600 dark:text-neutral-400">
                  AI-powered code review and PR descriptions are generated
                  automatically for every pull request to assist with
                  maintenance.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/30">
                <h3 className="mb-2 font-bold">Database Seeding</h3>
                <p className="mb-4 text-sm text-zinc-600 dark:text-neutral-400">
                  Populate your database with initial data for development.
                </p>
                <code className="block rounded bg-zinc-200 p-2 text-xs dark:bg-neutral-800">
                  npm run db:seed
                </code>
              </div>
            </div>
          </section>

          {/* Template Usage */}
          <section id="usage" className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
                <LifeBuoy className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">Using this Template</h2>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
              <p className="mb-6 text-zinc-600 dark:text-neutral-400">
                Follow these steps to clean up the template and make it your
                own:
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 font-bold">
                      <Trash2 className="size-4 text-red-500" />
                      Delete Assets
                    </h4>
                    <ul className="list-inside list-disc space-y-1 text-sm text-zinc-600 dark:text-neutral-400">
                      <li>
                        <code className="rounded bg-zinc-200 px-1 dark:bg-neutral-800">
                          public/file.svg
                        </code>
                      </li>
                      <li>
                        <code className="rounded bg-zinc-200 px-1 dark:bg-neutral-800">
                          public/globe.svg
                        </code>
                      </li>
                      <li>
                        <code className="rounded bg-zinc-200 px-1 dark:bg-neutral-800">
                          public/window.svg
                        </code>
                      </li>
                      <li>
                        <code className="rounded bg-zinc-200 px-1 dark:bg-neutral-800">
                          public/ptrck.jpg
                        </code>{' '}
                        (Replace with your own)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold">Clean Components</h4>
                    <p className="text-sm text-zinc-600 dark:text-neutral-400">
                      Remove{' '}
                      <code className="rounded bg-zinc-200 px-1 dark:bg-neutral-800">
                        components/dashboard/whats-new-modal.tsx
                      </code>{' '}
                      if you don't need the feature announcement system.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-bold">Update Metadata</h4>
                    <ul className="list-inside list-disc space-y-1 text-sm text-zinc-600 dark:text-neutral-400">
                      <li>
                        Modify{' '}
                        <code className="rounded bg-zinc-200 px-1 dark:bg-neutral-800">
                          app/layout.tsx
                        </code>{' '}
                        metadata.
                      </li>
                      <li>
                        Update{' '}
                        <code className="rounded bg-zinc-200 px-1 dark:bg-neutral-800">
                          public/site.webmanifest
                        </code>
                        .
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold">Update Content</h4>
                    <ul className="list-inside list-disc space-y-1 text-sm text-zinc-600 dark:text-neutral-400">
                      <li>
                        Customize{' '}
                        <code className="rounded bg-zinc-200 px-1 dark:bg-neutral-800">
                          app/page.tsx
                        </code>{' '}
                        (Landing Page).
                      </li>
                      <li>
                        Update or delete{' '}
                        <code className="rounded bg-zinc-200 px-1 dark:bg-neutral-800">
                          app/docs/
                        </code>{' '}
                        (Documentation).
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Architecture */}
          <section id="architecture" className="space-y-12">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
                <Boxes className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">Architecture</h2>
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/50 dark:border-neutral-800 dark:bg-neutral-900/30">
              <div className="grid gap-8 p-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold">Core Structure</h3>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-neutral-400">
                    <li className="flex gap-2">
                      <span className="font-mono font-bold text-zinc-900 dark:text-neutral-100">
                        app/
                      </span>{' '}
                      Next.js App Router structure
                    </li>
                    <li className="flex gap-2">
                      <span className="font-mono font-bold text-zinc-900 dark:text-neutral-100">
                        lib/
                      </span>{' '}
                      Utilities & Logic
                    </li>
                    <li className="flex gap-2">
                      <span className="font-mono font-bold text-zinc-900 dark:text-neutral-100">
                        lib/routes.ts
                      </span>{' '}
                      Route definitions
                    </li>
                    <li className="flex gap-2">
                      <span className="font-mono font-bold text-zinc-900 dark:text-neutral-100">
                        middleware.ts
                      </span>{' '}
                      Edge-compatible route protection
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold">Edge Compatibility</h3>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-neutral-400">
                    <li>
                      <strong>Auth Split:</strong> Auth logic is separated into{' '}
                      <code className="font-mono font-bold text-zinc-900 dark:text-neutral-100">
                        auth.ts
                      </code>{' '}
                      (Node.js runtime) and{' '}
                      <code className="font-mono font-bold text-zinc-900 dark:text-neutral-100">
                        auth.config.ts
                      </code>{' '}
                      (Edge runtime).
                    </li>
                    <li>
                      <strong>Middleware:</strong> Uses{' '}
                      <code className="font-mono font-bold text-zinc-900 dark:text-neutral-100">
                        auth.config.ts
                      </code>{' '}
                      to validate sessions on the Edge without needing the full
                      database adapter.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* API Routes */}
          <section id="api-routes" className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
                <Server className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">API Routes</h2>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
                <h3 className="mb-4 text-xl font-bold">Creating Routes</h3>
                <p className="mb-4 text-zinc-600 dark:text-neutral-400">
                  Define API endpoints in{' '}
                  <code className="rounded bg-zinc-200 px-1 dark:bg-neutral-800">
                    app/api/
                  </code>{' '}
                  directories using <code className="font-mono">route.ts</code>.
                </p>
                <div className="overflow-hidden rounded-xl bg-zinc-900 p-4 dark:bg-neutral-950">
                  <pre className="overflow-x-auto text-sm text-zinc-300">
                    <code>{`import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, name: true, email: true },
    });
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const user = await prisma.user.create({ data: body });
  return NextResponse.json(user, { status: 201 });
}`}</code>
                  </pre>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
                <h3 className="mb-4 text-xl font-bold">
                  Client-Side API Calls
                </h3>
                <p className="mb-4 text-zinc-600 dark:text-neutral-400">
                  Use <code className="font-mono">@tanstack/react-query</code>{' '}
                  with the API wrapper:
                </p>
                <div className="overflow-hidden rounded-xl bg-zinc-900 p-4 dark:bg-neutral-950">
                  <pre className="overflow-x-auto text-sm text-zinc-300">
                    <code>{`import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';

function UsersList() {
  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => api.get('/api/users'),
  });
  
  if (isLoading) return <div>Loading...</div>;
  return <div>{/* Render users */}</div>;
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Database */}
          <section id="database" className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
                <Database className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">Database & Prisma</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
                <h3 className="mb-4 text-xl font-bold">Workflow</h3>
                <ul className="space-y-3 text-sm text-zinc-600 dark:text-neutral-400">
                  <li>
                    1. Modify{' '}
                    <code className="font-mono">prisma/schema.prisma</code>
                  </li>
                  <li>
                    2. Run{' '}
                    <code className="font-mono">npx prisma migrate dev</code>
                  </li>
                  <li>
                    3. Use generated client:{' '}
                    <code className="font-mono">prisma.user.findMany()</code>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
                <h3 className="mb-4 text-xl font-bold">Useful Commands</h3>
                <div className="space-y-2 font-mono text-xs">
                  <div className="flex justify-between rounded bg-zinc-200 p-2 dark:bg-neutral-800">
                    <span>npx prisma studio</span>
                    <span className="text-zinc-500"># GUI</span>
                  </div>
                  <div className="flex justify-between rounded bg-zinc-200 p-2 dark:bg-neutral-800">
                    <span>npx prisma generate</span>
                    <span className="text-zinc-500"># Regen Client</span>
                  </div>
                  <div className="flex justify-between rounded bg-zinc-200 p-2 dark:bg-neutral-800">
                    <span>npm run db:seed</span>
                    <span className="text-zinc-500"># Seed Data</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
              <h3 className="mb-4 text-xl font-bold">Data Access Patterns</h3>
              <p className="mb-4 text-zinc-600 dark:text-neutral-400">
                Create specific data access functions in{' '}
                <code className="font-mono">lib/data/</code> instead of writing
                raw queries in components.
              </p>
              <div className="overflow-hidden rounded-xl bg-zinc-900 p-4 dark:bg-neutral-950">
                <pre className="overflow-x-auto text-sm text-zinc-300">
                  <code>{`// lib/data/user.ts
import { prisma } from '@/lib/prisma';

export async function getUserById(id: string) {
  return await prisma.user.findUnique({
    where: { id },
    include: { posts: true },
  });
}`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Components */}
          <section id="components" className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
                <Code2 className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">Components</h2>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
              <p className="mb-4 text-zinc-600 dark:text-neutral-400">
                Built with <strong>shadcn/ui</strong>. Components are located in{' '}
                <code className="font-mono">components/ui/</code>.
              </p>
              <div className="mb-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <h4 className="mb-1 font-bold">Button</h4>
                  <code className="text-xs text-zinc-500">
                    components/ui/button.tsx
                  </code>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="mb-1 font-bold">Input</h4>
                  <code className="text-xs text-zinc-500">
                    components/ui/input.tsx
                  </code>
                </div>
              </div>
              <div className="inline-block rounded-lg bg-zinc-900 px-4 py-2 font-mono text-sm text-white dark:bg-neutral-950">
                npx shadcn@latest add button dialog
              </div>
            </div>
          </section>

          {/* Styling */}
          <section id="styling" className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
                <Palette className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">Styling</h2>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
                <h3 className="mb-2 font-bold">Tailwind CSS 4</h3>
                <p className="mb-4 text-sm text-zinc-600 dark:text-neutral-400">
                  Utility-first CSS framework with design tokens.
                </p>
                <div className="rounded-xl bg-zinc-900 p-4 font-mono text-sm text-zinc-300 dark:bg-neutral-950">
                  <div className="text-zinc-500">// lib/utils.ts</div>
                  {`import { cn } from '@/lib/utils';
// Merge classes safely
className={cn('px-4 py-2 bg-primary', className)}`}
                </div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
                <h3 className="mb-2 font-bold">Dark Mode</h3>
                <p className="text-sm text-zinc-600 dark:text-neutral-400">
                  Built-in support with{' '}
                  <code className="font-mono">next-themes</code> and CSS
                  variables in <code className="font-mono">globals.css</code>.
                </p>
              </div>
            </div>
          </section>

          {/* Forms */}
          <section id="forms" className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
                <FileText className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">Forms & Validation</h2>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
              <p className="mb-6 text-zinc-600 dark:text-neutral-400">
                Robust forms using <strong>React Hook Form</strong> paired with{' '}
                <strong>Zod</strong> schemas.
              </p>
              <div className="overflow-hidden rounded-xl bg-zinc-900 p-4 dark:bg-neutral-950">
                <pre className="overflow-x-auto text-sm text-zinc-300">
                  <code>{`// lib/schemas/user.ts
export const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

// Component
const { register, handleSubmit } = useForm({
  resolver: zodResolver(userSchema)
});`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Deployment */}
          <section id="deployment" className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
                <Rocket className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">Deployment</h2>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
              <h3 className="mb-4 text-xl font-bold">Vercel (Recommended)</h3>
              <div className="space-y-2 text-sm text-zinc-600 dark:text-neutral-400">
                <p>1. Push to GitHub</p>
                <p>2. Import in Vercel</p>
                <p>
                  3. Add Environment Variables (DATABASE_URL, AUTH_SECRET, etc)
                </p>
                <p>4. Deploy!</p>
              </div>
              <div className="mt-6 border-l-4 border-blue-500 bg-blue-50 p-4 text-sm text-blue-900 dark:bg-blue-900/20 dark:text-blue-100">
                <strong>Important:</strong> Set a secure{' '}
                <code className="font-mono">AUTH_SECRET</code> in production
                settings.
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section id="troubleshooting" className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
                <Wrench className="size-5" />
              </div>
              <h2 className="text-3xl font-bold">Troubleshooting</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/30">
                <h4 className="font-bold">Prisma Client missing?</h4>
                <p className="mb-2 text-sm text-zinc-500">
                  Error: Cannot find module '@prisma/client'
                </p>
                <code className="block rounded bg-zinc-200 p-2 text-xs dark:bg-neutral-800">
                  npx prisma generate
                </code>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/30">
                <h4 className="font-bold">Build errors?</h4>
                <p className="mb-2 text-sm text-zinc-500">
                  Type errors or strange artifacts
                </p>
                <code className="block rounded bg-zinc-200 p-2 text-xs dark:bg-neutral-800">
                  rm -rf .next && npm install
                </code>
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
            <p className="text-sm text-zinc-500">
              Built by{' '}
              <Link
                href="https://patr1ck.dev"
                className="underline underline-offset-4"
                target="_blank"
              >
                patr1ck.dev
              </Link>
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}
