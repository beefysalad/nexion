import { counterService } from '@/lib/services/counter-service'
import { apiError, apiSuccess } from '@/lib/api/response'
import { withApiAuth } from '@/lib/api/with-auth'
import { z } from 'zod'
import { fromZodError } from 'zod-validation-error'

const counterSchema = z.object({
  value: z.number().int().min(0),
})

export const GET = withApiAuth(async () => {
  try {
    const counter = await counterService.GetGlobalCounter()
    return apiSuccess(counter)
  } catch {
    return apiError('Failed to fetch counter')
  }
})

export const POST = withApiAuth(async () => {
  try {
    const counter = await counterService.incrementGlobalCounter()
    return apiSuccess(counter)
  } catch {
    return apiError('Failed to increment counter')
  }
})

export const PATCH = withApiAuth(async (req: Request) => {
  try {
    const body = await req.json()
    const result = counterSchema.safeParse(body)

    if (!result.success) {
      return apiError(fromZodError(result.error).message, 400)
    }

    const counter = await counterService.setGlobalCounter(result.data.value)
    return apiSuccess(counter)
  } catch {
    return apiError('Failed to update counter')
  }
})
