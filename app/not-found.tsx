import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-white px-6 text-zinc-900 dark:bg-neutral-950 dark:text-neutral-50">
      <div className="flex max-w-md flex-col items-center gap-4 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-400 dark:text-neutral-500">
          404
        </p>
        <h1 className="text-3xl font-bold tracking-tight">Page not found</h1>
        <p className="text-sm leading-6 text-zinc-500 dark:text-neutral-400">
          The page you were looking for does not exist or may have been moved.
        </p>
        <Button asChild>
          <Link href="/">Back home</Link>
        </Button>
      </div>
    </main>
  )
}
