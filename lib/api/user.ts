import api from '@/lib/axios'
import { handleApiError } from '../error-handler'
import { TLoginSchema, TRegisterSchema } from '../schemas/auth'
import { signIn } from 'next-auth/react'

export const registerUser = async (data: TRegisterSchema): Promise<void> => {
  try {
    const response = await api.post('/register', data)
    return response.data
  } catch (error) {
    return handleApiError(error)
  }
}

export const loginUser = async (data: TLoginSchema) => {
  const response = await signIn('credentials', {
    redirect: false,
    email: data.email,
    password: data.password,
  })

  if (response?.error) {
    throw new Error(response.error)
  }

  window.location.href = '/dashboard'

  return response
}
