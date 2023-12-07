import React, { ReactNode } from 'react'
import styled, { keyframes } from 'styled-components'

const floatingAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`

const FloatingContainer = styled.div`
  animation: ${floatingAnimation} 2s infinite ease-in-out;
`

interface FloatingComponentProps {
  children: ReactNode
}

const FloatingComponent: React.FC<FloatingComponentProps> = ({ children }) => {
  return <FloatingContainer>{children}</FloatingContainer>
}

export default FloatingComponent
