'use client'

import { useEffect } from 'react'

import { useLoading } from '@/app/providers/loading-provider'

export function RouteRenderLoading() {
  const { startLoading, stopLoading } = useLoading()

  useEffect(() => {
    startLoading('render', 'Loading page')

    return () => {
      stopLoading('render')
    }
  }, [startLoading, stopLoading])

  return null
}
