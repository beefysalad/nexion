'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

import type { User } from '@/app/generated/prisma/client'
import { useLoading } from '@/app/providers/loading-provider'
import { Button } from '@/components/ui/button'
import FormErrorMessage from '@/components/ui/form-error-message'
import { useCompleteOnboarding } from '@/hooks/onboarding/use-onboarding'

type OnboardingComponentProps = {
  user: User
}

export default function OnboardingComponent({
  user,
}: OnboardingComponentProps) {
  const router = useRouter()
  const { startLoading } = useLoading()
  const completeOnboardingMutation = useCompleteOnboarding()
  const userName = user.name ?? 'there'

  const handleCompleteOnboarding = async () => {
    try {
      await completeOnboardingMutation.mutateAsync()
      startLoading('redirect', 'Opening dashboard')
      router.push('/dashboard')
      router.refresh()
    } catch (error) {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.error || error.message
        : error instanceof Error
          ? error.message
          : 'Failed to complete onboarding'

      console.error(message)
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-neutral-950 dark:text-neutral-50">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16">
        <div className="grid w-full gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="flex flex-col justify-between rounded-3xl bg-zinc-900 p-8 text-white dark:bg-neutral-900">
            <div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight">
                Welcome to your new app.
              </h1>
              <p className="mt-3 max-w-md text-sm leading-6 text-zinc-300">
                This onboarding template is intentionally lightweight. It gives
                you a real first-run gate while keeping the user model clean.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">
                  01
                </div>
                <div>
                  <p className="text-sm font-semibold">Welcome screen</p>
                  <p className="text-xs text-zinc-400">
                    Show this once before users enter the dashboard
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">
                  <CheckCircle2 className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Completion tracking</p>
                  <p className="text-xs text-zinc-400">
                    Store only onboarding status and completion time
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <div className="mb-8">
              <p className="text-sm font-medium text-zinc-500 dark:text-neutral-400">
                Onboarding
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                Good to see you, {userName}.
              </h2>
            </div>

            <div className="space-y-8">
              <div className="space-y-4 text-sm leading-6 text-zinc-600 dark:text-neutral-400">
                <p>
                  This is a boilerplate-friendly onboarding gate. It gives you a
                  clean place to welcome users or explain what comes next.
                </p>
                <p>
                  Completing this screen only marks the user as onboarded and
                  records when they finished. Nothing else is stored.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
                <FormErrorMessage
                  message={completeOnboardingMutation.error?.message}
                />
                <Button
                  type="button"
                  onClick={handleCompleteOnboarding}
                  disabled={completeOnboardingMutation.isPending}
                >
                  {completeOnboardingMutation.isPending
                    ? 'Finishing...'
                    : 'Finish onboarding'}
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
