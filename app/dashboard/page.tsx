import { syncCurrentUserToDatabase } from '@/lib/clerk-user'
import DashboardComponent from '@/components/dashboard'

const DashboardPage = async () => {
  const user = await syncCurrentUserToDatabase()

  return <DashboardComponent user={user} />
}

export default DashboardPage
