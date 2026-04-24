import { api } from '@/lib/axios'
import type { ApiSuccessResponse } from '@/lib/api/response'
import type { User } from '@/app/generated/prisma/client'

export const completeOnboarding = async (): Promise<User> => {
  const response = await api.patch<ApiSuccessResponse<User>>('/onboarding')
  return response.data.data
}
