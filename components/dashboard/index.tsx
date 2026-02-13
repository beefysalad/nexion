'use client'

import { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import {
  LayoutDashboard,
  LogOut,
  BookOpen,
  ExternalLink,
  Settings,
  Users,
  Calendar,
  Mail,
  TrendingUp,
  Loader2,
} from 'lucide-react'
import { Button } from '../ui/button'
import { WhatsNewModal } from './whats-new-modal'
import { ThemeToggle } from '../theme-toggle'
import { useCounter, useIncrementCounter } from '@/hooks/useCounter'
import { formatDistanceToNow } from 'date-fns'

const DashboardComponent = () => {
  const { data: session } = useSession()
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const userName = session?.user?.name || 'Developer'
  const userEmail = session?.user?.email || ''
  const { data: counter, isLoading: counterLoading } = useCounter()
  const incrementMutation = useIncrementCounter()

  const handleIncrement = () => {
    incrementMutation.mutate()
  }

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
              onClick={() => {
                setIsLoggingOut(true)
                signOut({ callbackUrl: '/login' })
              }}
              disabled={isLoggingOut}
              className="h-9 gap-2 rounded-full px-4 text-zinc-500 transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-neutral-900 dark:hover:text-neutral-100"
            >
              {isLoggingOut ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <LogOut className="size-4" />
              )}
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

        {/* Stats Grid */}
        <div className="mb-8 grid gap-6 md:grid-cols-2">
          {/* User Stats Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-900 hover:shadow-xl hover:shadow-zinc-200/50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-50 dark:hover:shadow-none">
            <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-zinc-50 text-zinc-500 transition-colors group-hover:bg-zinc-900 group-hover:text-white dark:bg-neutral-800 dark:text-neutral-400 dark:group-hover:bg-neutral-50 dark:group-hover:text-neutral-900">
              <Users className="size-5" />
            </div>
            <h3 className="mb-4 text-lg font-bold">Your Account</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="size-4 text-zinc-400" />
                <span className="text-zinc-600 dark:text-neutral-400">
                  {userEmail}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="size-4 text-zinc-400" />
                <span className="text-zinc-600 dark:text-neutral-400">
                  Member since{' '}
                  {session?.user?.createdAt
                    ? formatDistanceToNow(new Date(session.user.createdAt), {
                        addSuffix: true,
                      })
                    : 'recently'}
                </span>
              </div>
            </div>
          </div>

          {/* Visitor Counter Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 transition-all hover:border-zinc-900 hover:shadow-xl hover:shadow-zinc-200/50 dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-900/50 dark:hover:border-neutral-50 dark:hover:shadow-none">
            <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-950 dark:text-emerald-400 dark:group-hover:bg-emerald-400 dark:group-hover:text-neutral-900">
              <TrendingUp className="size-5" />
            </div>
            <h3 className="mb-2 text-lg font-bold">Global Visitor Count</h3>
            <div className="mb-4">
              <div className="text-4xl font-bold tabular-nums">
                {counterLoading ? (
                  <span className="animate-pulse text-zinc-300 dark:text-neutral-700">
                    ---
                  </span>
                ) : (
                  counter?.value.toLocaleString()
                )}
              </div>
              {counter?.modifiedAt && (
                <p className="mt-1 text-xs text-zinc-500 dark:text-neutral-500">
                  Last updated{' '}
                  {formatDistanceToNow(new Date(counter.modifiedAt), {
                    addSuffix: true,
                  })}
                </p>
              )}
            </div>
            <Button
              onClick={handleIncrement}
              disabled={incrementMutation.isPending}
              className="w-full gap-2 bg-zinc-900 text-white transition-all hover:bg-zinc-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              {incrementMutation.isPending
                ? 'Counting...'
                : 'Click to imprint your visit!'}
            </Button>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-bold">Resources</h2>
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
