import { loginUser, registerUser } from '@/lib/api/user'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export function useAuthMutations() {
  const router = useRouter()
  const registerMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      router.push('/login')
      toast.success('User registered successfully')
    },
  })

  const loginMutation = useMutation({
    mutationFn: loginUser,
  })

  return {
    registerMutation,
    loginMutation,
  }
}
