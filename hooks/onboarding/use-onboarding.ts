import { useMutation } from '@tanstack/react-query'

import { completeOnboarding } from '@/lib/api/onboarding'

export const useCompleteOnboarding = () => {
  return useMutation({
    mutationFn: completeOnboarding,
  })
}
