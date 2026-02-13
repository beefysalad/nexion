'use client'

import SignUpForm from '@/components/auth/sign-up-form'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function RegisterPage() {
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/dashboard')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-neutral-950">
        <div className="size-8 animate-spin rounded-full border-4 border-zinc-200 border-t-zinc-900 dark:border-neutral-800 dark:border-t-neutral-50" />
      </div>
    )
  }

  if (status === 'authenticated') {
    return null
  }

  return <SignUpForm />
}
