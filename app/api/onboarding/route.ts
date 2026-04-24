import { apiError, apiSuccess } from '@/lib/api/response'
import { withApiAuth } from '@/lib/api/with-auth'
import { userService } from '@/lib/services/user-service'

export const GET = withApiAuth(async (_request, auth) => {
  try {
    const user = await userService.getUserByClerkId(auth.userId)

    if (!user) {
      return apiError('User not found', 404)
    }

    return apiSuccess(user)
  } catch {
    return apiError('Failed to fetch onboarding profile')
  }
})

export const PATCH = withApiAuth(async (_request, auth) => {
  try {
    const user = await userService.completeOnboardingByClerkId(auth.userId)

    return apiSuccess(user)
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to complete onboarding'

    return apiError(message)
  }
})
