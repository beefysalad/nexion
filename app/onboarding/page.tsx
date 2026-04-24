import { redirect } from 'next/navigation'

import OnboardingComponent from '@/components/onboarding'
import { userService } from '@/lib/services/user-service'

export default async function OnboardingPage() {
  const user = await userService.syncCurrentUserToDatabase()

  if (!user) {
    redirect('/login')
  }

  if (user.onboardingCompleted) {
    redirect('/dashboard')
  }

  return <OnboardingComponent user={user} />
}
