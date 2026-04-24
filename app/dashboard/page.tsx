import { redirect } from 'next/navigation'

import { userService } from '@/lib/services/user-service'
import DashboardComponent from '@/components/dashboard'

const DashboardPage = async () => {
  const user = await userService.syncCurrentUserToDatabase()

  if (!user) {
    redirect('/login')
  }

  if (!user.onboardingCompleted) {
    redirect('/onboarding')
  }

  return <DashboardComponent user={user} />
}

export default DashboardPage
