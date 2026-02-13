'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { User, Mail, Lock, ArrowRight, Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { RegisterSchema, TRegisterSchema } from '@/lib/schemas/auth'
import FormErrorMessage from '../ui/form-error-message'
import { useAuthMutations } from '@/hooks/useAuth'

const SignUpForm = () => {
  const { registerMutation } = useAuthMutations()
  const form = useForm<TRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = (values: TRegisterSchema) => {
    registerMutation.mutateAsync(values)
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 selection:bg-zinc-900 selection:text-white dark:bg-neutral-950 dark:selection:bg-neutral-50 dark:selection:text-neutral-900">
      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)]" />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-4 relative w-full max-w-[480px] duration-1000">
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-neutral-300"
          >
            <ArrowRight className="size-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">
            Create account
          </h1>
        </div>

        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white/50 p-8 shadow-2xl shadow-zinc-200/50 backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-900/50 dark:shadow-none">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-xs font-bold tracking-widest text-zinc-500 uppercase"
              >
                Full Name
              </Label>
              <div className="relative">
                <Input
                  {...form.register('name')}
                  id="name"
                  type="text"
                  placeholder="John Patrick Ryan"
                  aria-invalid={!!form.formState.errors.name}
                  disabled={registerMutation.isPending}
                  className={cn(
                    'h-11 border-zinc-200 bg-transparent transition-all focus:border-zinc-900 focus:ring-4 focus:ring-zinc-900/5 dark:border-neutral-800 dark:focus:border-neutral-50 dark:focus:ring-neutral-50/5',
                    form.formState.errors.name &&
                      'border-red-500 focus:border-red-500 focus:ring-red-500/10 dark:border-red-500 dark:focus:border-red-500 dark:focus:ring-red-500/10'
                  )}
                />
              </div>
              {form.formState.errors.name && (
                <FormErrorMessage
                  message={form.formState.errors.name.message}
                />
              )}
            </div>

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
                  placeholder="name@example.com"
                  aria-invalid={!!form.formState.errors.email}
                  disabled={registerMutation.isPending}
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

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-xs font-bold tracking-widest text-zinc-500 uppercase"
                >
                  Password
                </Label>
                <div className="relative">
                  <Input
                    {...form.register('password')}
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    aria-invalid={!!form.formState.errors.password}
                    disabled={registerMutation.isPending}
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

              <div className="space-y-2">
                <Label
                  htmlFor="confirmPassword"
                  className="text-xs font-bold tracking-widest text-zinc-500 uppercase"
                >
                  Confirm
                </Label>
                <div className="relative">
                  <Input
                    {...form.register('confirmPassword')}
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    aria-invalid={!!form.formState.errors.confirmPassword}
                    disabled={registerMutation.isPending}
                    className={cn(
                      'h-11 border-zinc-200 bg-transparent transition-all focus:border-zinc-900 focus:ring-4 focus:ring-zinc-900/5 dark:border-neutral-800 dark:focus:border-neutral-50 dark:focus:ring-neutral-50/5',
                      form.formState.errors.confirmPassword &&
                        'border-red-500 focus:border-red-500 focus:ring-red-500/10 dark:border-red-500 dark:focus:border-red-500 dark:focus:ring-red-500/10'
                    )}
                  />
                </div>
                {form.formState.errors.confirmPassword && (
                  <FormErrorMessage
                    message={form.formState.errors.confirmPassword.message}
                  />
                )}
              </div>
            </div>

            {registerMutation.error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-600 dark:border-red-900/50 dark:bg-red-900/20 dark:text-red-400">
                {registerMutation.error.message}
              </div>
            )}

            <Button
              type="submit"
              disabled={registerMutation.isPending}
              className="mt-2 h-12 w-full rounded-full border-2 border-zinc-900 bg-zinc-900 font-bold text-white transition-all hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-900/20 active:scale-[0.98] dark:border-neutral-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              {registerMutation.isPending ? (
                <Loader2 className="mr-2 size-4 animate-spin" />
              ) : (
                'Create Account'
              )}
            </Button>
          </form>

          <div className="mt-8 pt-6 text-center">
            <p className="text-sm text-zinc-500">
              Already have an account?{' '}
              <Link
                href="/login"
                className="font-bold text-zinc-900 transition-colors hover:text-zinc-700 dark:text-neutral-100 dark:hover:text-neutral-300"
              >
                Sign in instead
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm
