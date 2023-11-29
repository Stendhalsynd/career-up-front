'use client'

import React, { useEffect } from 'react'

import registerServiceWorker from '../chat/src/registerServiceWorker.js'

export default function OpenViduClient({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Call the service worker registration when the component mounts
    registerServiceWorker()
  }, [])

  return <div>{children}</div>
}
