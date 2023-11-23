'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

interface ResponsiveProps {
  children: ReactNode
}

// eslint-disable-next-line react/prop-types
export const Mobile: React.FC<ResponsiveProps> = ({ children }) => {
  const [mobile, setMobile] = useState<boolean>(false)
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const checkResize = () => {
    if (isMobile) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }

  useEffect(() => {
    checkResize()
  }, [isMobile])

  return mobile ? children : null
}

// eslint-disable-next-line react/prop-types
export const Tablet: React.FC<ResponsiveProps> = ({ children }) => {
  const [tablet, setTablet] = useState<boolean>(false)
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 900 })

  const checkResize = () => {
    if (isTablet) {
      setTablet(true)
    } else {
      setTablet(false)
    }
  }

  useEffect(() => {
    checkResize()
  }, [isTablet])

  return tablet ? children : null
}

// eslint-disable-next-line react/prop-types
export const Desktop: React.FC<ResponsiveProps> = ({ children }) => {
  const [desktop, setDesktop] = useState<boolean>(false)
  const isDesktop = useMediaQuery({ minWidth: 901 })

  const checkResize = () => {
    if (isDesktop) {
      setDesktop(true)
    } else {
      setDesktop(false)
    }
  }

  useEffect(() => {
    checkResize()
  }, [isDesktop])

  return desktop ? children : null
}
