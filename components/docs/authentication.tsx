import { ShieldCheck } from 'lucide-react'

const Authentication = () => {
  return (
    <section id="authentication" className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
          <ShieldCheck className="size-5" />
        </div>
        <h2 className="text-3xl font-bold">Authentication</h2>
      </div>

      <div className="space-y-6">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30">
          <h3 className="mb-4 text-xl font-bold">Middleware Protection</h3>
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
  )
}

export default Authentication
