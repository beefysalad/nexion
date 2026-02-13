'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import {
  Github,
  Mail,
  Lock,
  ArrowRight,
  Loader2,
  ShieldCheck,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { LoginSchema, TLoginSchema } from '@/lib/schemas/auth'
import FormErrorMessage from '../ui/form-error-message'
import { useAuthMutations } from '@/hooks/useAuth'

export const LoginForm = () => {
  const { loginMutation } = useAuthMutations()

  const form = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (values: TLoginSchema) => {
    await loginMutation.mutateAsync(values)
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 selection:bg-zinc-900 selection:text-white dark:bg-neutral-950 dark:selection:bg-neutral-50 dark:selection:text-neutral-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)]" />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-4 relative w-full max-w-[440px] duration-1000">
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-neutral-300"
          >
            <ArrowRight className="size-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">
            Welcome back
          </h1>
        </div>

        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white/50 p-8 shadow-2xl shadow-zinc-200/50 backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-900/50 dark:shadow-none">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-xs font-bold tracking-widest text-zinc-500 uppercase"
              >
                Email Address
              </Label>
              <div className="relative">
                <Input
                  {...form.register('email')}
                  id="email"
                  type="email"
                  placeholder="patrick@example.com"
                  aria-invalid={!!form.formState.errors.email}
                  disabled={loginMutation.isPending}
                  className={cn(
                    'h-11 border-zinc-200 bg-transparent transition-all focus:border-zinc-900 focus:ring-4 focus:ring-zinc-900/5 dark:border-neutral-800 dark:focus:border-neutral-50 dark:focus:ring-neutral-50/5',
                    form.formState.errors.email &&
                      'border-red-500 focus:border-red-500 focus:ring-red-500/10 dark:border-red-500 dark:focus:border-red-500 dark:focus:ring-red-500/10'
                  )}
                />
              </div>
              {form.formState.errors.email && (
                <FormErrorMessage
                  message={form.formState.errors.email.message}
                />
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="password"
                  className="text-xs font-bold tracking-widest text-zinc-500 uppercase"
                >
                  Password
                </Label>
                <Link
                  href="#"
                  className="text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-neutral-300"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative">
               
                <Input
                  {...form.register('password')}
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  aria-invalid={!!form.formState.errors.password}
                  disabled={loginMutation.isPending}
                  className={cn(
                    'h-11 border-zinc-200 bg-transparent transition-all focus:border-zinc-900 focus:ring-4 focus:ring-zinc-900/5 dark:border-neutral-800 dark:focus:border-neutral-50 dark:focus:ring-neutral-50/5',
                    form.formState.errors.password &&
                      'border-red-500 focus:border-red-500 focus:ring-red-500/10 dark:border-red-500 dark:focus:border-red-500 dark:focus:ring-red-500/10'
                  )}
                />
              </div>
              {form.formState.errors.password && (
                <FormErrorMessage
                  message={form.formState.errors.password.message}
                />
              )}
            </div>

            {loginMutation.error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-600 dark:border-red-900/50 dark:bg-red-900/20 dark:text-red-400">
                {loginMutation.error.message === 'CredentialsSignin'
                  ? 'Invalid email or password'
                  : loginMutation.error.message}
              </div>
            )}

            <Button
              type="submit"
              disabled={loginMutation.isPending}
              className="h-12 w-full rounded-full border-2 border-zinc-900 bg-zinc-900 font-bold text-white transition-all hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-900/20 active:scale-[0.98] dark:border-neutral-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              {loginMutation.isPending ? (
                <Loader2 className="mr-2 size-4 animate-spin" />
              ) : (
                'Sign In'
              )}
            </Button>
          </form>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-zinc-100 bg-zinc-50/50 p-4 dark:border-neutral-800 dark:bg-neutral-900/30">
              <div className="mb-2 flex items-center gap-2 text-[10px] font-bold tracking-wider text-zinc-400 uppercase">
                <ShieldCheck className="size-3 text-emerald-500" />
                Sample Account
              </div>
              <div className="flex flex-col gap-1.5 font-mono text-xs text-zinc-500 dark:text-neutral-400">
                <div className="flex justify-between">
                  <span>Email:</span>
                  <span className="text-zinc-900 dark:text-neutral-200">
                    test@test.com
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Pass:</span>
                  <span className="text-zinc-900 dark:text-neutral-200">
                    123456
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-zinc-500">
                Don&apos;t have an account?{' '}
                <Link
                  href="/register"
                  className="font-bold text-zinc-900 transition-colors hover:text-zinc-700 dark:text-neutral-100 dark:hover:text-neutral-300"
                >
                  Create one now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
