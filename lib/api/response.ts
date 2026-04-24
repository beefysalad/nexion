import { NextResponse } from 'next/server'

export type ApiSuccessResponse<T> = {
  data: T
}

export type ApiErrorResponse = {
  error: string
}

export function apiSuccess<T>(data: T, init?: ResponseInit) {
  return NextResponse.json<ApiSuccessResponse<T>>({ data }, init)
}

export function apiError(message: string, status = 500) {
  return NextResponse.json<ApiErrorResponse>({ error: message }, { status })
}
