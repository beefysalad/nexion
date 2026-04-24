import type { WebhookEvent } from '@clerk/nextjs/server'
import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'

import { apiError, apiSuccess } from '@/lib/api/response'
import { userService } from '@/lib/services/user-service'

export async function POST(request: NextRequest) {
  let event: WebhookEvent

  try {
    event = await verifyWebhook(request)
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unable to verify webhook'

    return apiError(message, 400)
  }

  try {
    switch (event.type) {
      case 'user.created':
      case 'user.updated':
        await userService.syncWebhookUserToDatabase(event.data)
        break
      case 'user.deleted':
        if (event.data.id) {
          await userService.deleteClerkUserFromDatabase(event.data.id)
        }
        break
      default:
        break
    }

    return apiSuccess({ ok: true })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unable to process webhook'

    return apiError(message)
  }
}
