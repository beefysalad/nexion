'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import {
  LayoutDashboard,
  LogOut,
  BookOpen,
  ExternalLink,
  Settings,
} from 'lucide-react'
import { Button } from '../ui/button'
import { WhatsNewModal } from './whats-new-modal'
import { ThemeToggle } from '../theme-toggle'

const DashboardComponent = () => {
  const { data: session } = useSession()
  const userName = session?.user?.name || 'Developer'

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white dark:bg-neutral-950 dark:text-neutral-50 dark:selection:bg-neutral-50 dark:selection:text-neutral-900">
      <WhatsNewModal />

      <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-neutral-50 dark:text-neutral-950">
              <LayoutDashboard className="size-4" />
            </div>
            <span className="font-bold tracking-tight">:3</span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/docs"
              className="flex h-9 items-center gap-2 rounded-full px-4 text-sm font-medium text-zinc-500 transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-neutral-900 dark:hover:text-neutral-100"
            >
              <BookOpen className="size-4" />
            </Link>
            <div className="h-4 w-px bg-zinc-200 dark:bg-neutral-800" />
            <ThemeToggle />
            <div className="h-4 w-px bg-zinc-200 dark:bg-neutral-800" />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => signOut()}
              className="h-9 gap-2 rounded-full px-4 text-zinc-500 transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-neutral-900 dark:hover:text-neutral-100"
            >
              <LogOut className="size-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome,{' '}
            <span className="text-zinc-500 dark:text-neutral-400">
              {userName}
            </span>
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-neutral-400">
            Everything looks good today. Here's what you can do next.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <DashboardCard
            title="Explore Docs"
            description="Deep dive into the technical architecture and project structure."
            href="/docs"
            icon={<BookOpen className="size-5" />}
          />
          <DashboardCard
            title="Manage Database"
            description="Use Prisma Studio to browse and edit your local data."
            href="https://www.prisma.io/studio"
            isExternal
            icon={<Settings className="size-5" />}
          />
        </div>
      </main>
    </div>
  )
}

function DashboardCard({
  title,
  description,
  href,
  icon,
  isExternal,
}: {
  title: string
  description: string
  href: string
  icon: React.ReactNode
  isExternal?: boolean
}) {
  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-900 hover:shadow-xl hover:shadow-zinc-200/50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-50 dark:hover:shadow-none"
    >
      <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-zinc-50 text-zinc-500 transition-colors group-hover:bg-zinc-900 group-hover:text-white dark:bg-neutral-800 dark:text-neutral-400 dark:group-hover:bg-neutral-50 dark:group-hover:text-neutral-900">
        {icon}
      </div>
      <h3 className="mb-2 flex items-center gap-2 text-lg font-bold">
        {title}
        {isExternal && <ExternalLink className="size-3 text-zinc-400" />}
      </h3>
      <p className="text-sm leading-relaxed text-zinc-500 dark:text-neutral-400">
        {description}
      </p>
    </Link>
  )
}

export default DashboardComponent
