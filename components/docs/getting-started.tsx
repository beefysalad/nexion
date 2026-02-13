import { Terminal } from 'lucide-react'

const GettingStarted = () => {
  return (
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
              Clone the repo and verify prerequisites: Node 18+ and PostgreSQL.
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
  )
}

export default GettingStarted
