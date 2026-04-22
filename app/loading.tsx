import { RouteRenderLoading } from '@/components/loading/route-render-loading'
import { Spinner } from '@/components/ui/spinner'

export default function Loading() {
  return (
    <>
      <RouteRenderLoading />
      <main className="min-h-screen bg-white px-6 py-24 text-zinc-900 dark:bg-neutral-950 dark:text-neutral-50">
        <div className="mx-auto flex max-w-4xl flex-col gap-8">
          <div className="flex items-center gap-3 text-sm font-medium text-zinc-500 dark:text-neutral-400">
            <Spinner className="size-4" />
            Loading page
          </div>

          <div className="space-y-4">
            <div className="h-10 w-2/3 animate-pulse rounded-lg bg-zinc-200 dark:bg-neutral-800" />
            <div className="h-5 w-1/2 animate-pulse rounded-md bg-zinc-100 dark:bg-neutral-900" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="h-48 animate-pulse rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-neutral-800 dark:bg-neutral-900" />
            <div className="h-48 animate-pulse rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-neutral-800 dark:bg-neutral-900" />
          </div>
        </div>
      </main>
    </>
  )
}
