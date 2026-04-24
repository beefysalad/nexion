'use client'

import { useEffect } from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

type ErrorPageProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="grid min-h-screen place-items-center bg-white px-6 text-zinc-900 dark:bg-neutral-950 dark:text-neutral-50">
      <div className="flex max-w-md flex-col items-center gap-4 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-400 dark:text-neutral-500">
          Something went wrong
        </p>
        <h1 className="text-3xl font-bold tracking-tight">We hit an unexpected error.</h1>
        <p className="text-sm leading-6 text-zinc-500 dark:text-neutral-400">
          Try the action again, or head back home if the problem keeps showing up.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button onClick={reset}>Try again</Button>
          <Button asChild variant="outline">
            <Link href="/">Back home</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
