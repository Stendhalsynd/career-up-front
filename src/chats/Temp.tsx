'use client'

import React, { useEffect } from 'react'
import registerServiceWorker from './registerServiceWorker'
import App from 'chat/App.tsx'

const OtherComponent: React.FC = () => {
  useEffect(() => {
    // Call the service worker registration when the component mounts
    registerServiceWorker()
  }, [])

  return (
    <div>
      <App />
    </div>
  )
}

export default OtherComponent
