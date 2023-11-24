'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

interface ResponsiveProps {
  children: ReactNode
}

const useResponsive = (query: object) => {
  const [matches, setMatches] = useState<boolean>(false)
  const isMatch = useMediaQuery(query)

  useEffect(() => {
    setMatches(isMatch)
  }, [isMatch])

  return matches
}

export const IsMobile = () => {
  return useResponsive({ maxWidth: 767 })
}

export const Mobile: React.FC<ResponsiveProps> = ({ children }) => {
  const isMobile = useResponsive({ maxWidth: 767 })
  return isMobile ? children : null
}

export const IsTablet = () => {
  return useResponsive({ minWidth: 768, maxWidth: 900 })
}

export const Tablet: React.FC<ResponsiveProps> = ({ children }) => {
  const isTablet = useResponsive({ minWidth: 768, maxWidth: 900 })
  return isTablet ? children : null
}

export const IsDesktop = () => {
  return useResponsive({ minWidth: 901 })
}

export const Desktop: React.FC<ResponsiveProps> = ({ children }) => {
  const isDesktop = useResponsive({ minWidth: 901 })
  return isDesktop ? children : null
}
