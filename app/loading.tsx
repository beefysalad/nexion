import { Spinner } from '@/components/ui/spinner'

export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-white/70 px-6 text-zinc-900 dark:bg-neutral-950/70 dark:text-neutral-50">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="relative grid size-16 place-items-center">
          <div className="absolute inset-0 rounded-full border-2 border-violet-500 opacity-20" />
          <Spinner className="size-10 text-violet-500" />
        </div>
        <div>
          <p className="text-sm font-semibold">Loading page</p>
          <p className="mt-1 text-xs text-zinc-500 dark:text-neutral-400">
            Please wait a moment.
          </p>
        </div>
      </div>
    </main>
  )
}
