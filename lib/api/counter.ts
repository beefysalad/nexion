import { api } from '@/lib/axios'
import type { ApiSuccessResponse } from '@/lib/api/response'

export interface Counter {
  id: number
  key: string
  value: number
  modifiedAt: string
}

export const getCounter = async (): Promise<Counter> => {
  const response = await api.get<ApiSuccessResponse<Counter>>('/counter')
  return response.data.data
}

export const incrementCounter = async (): Promise<Counter> => {
  const response = await api.post<ApiSuccessResponse<Counter>>('/counter')
  return response.data.data
}

export const updateCounter = async (value: number): Promise<Counter> => {
  const response = await api.patch<ApiSuccessResponse<Counter>>('/counter', {
    value,
  })
  return response.data.data
}
