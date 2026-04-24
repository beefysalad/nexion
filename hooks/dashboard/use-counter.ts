import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { getCounter, incrementCounter } from '@/lib/api/counter'

const counterQueryKey = ['counter'] as const

export const useCounter = () => {
  return useQuery({
    queryKey: counterQueryKey,
    queryFn: getCounter,
    refetchInterval: 5000,
  })
}

export const useIncrementCounter = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: incrementCounter,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: counterQueryKey })
    },
  })
}
