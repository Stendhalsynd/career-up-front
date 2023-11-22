'use client'

import React, { ReactNode } from 'react'
import Button, { ButtonProps } from 'components/molecules/Button/index.tsx'

// 프로퍼티 타입 수정
interface SelectButtonProps extends ButtonProps {
  children: ReactNode
}

const SelectButton: React.FC<SelectButtonProps> = ({ children, ...rest }) => {
  return (
    <Button
      variant="primary"
      width={{ base: 'small' }}
      height={{ base: 'small' }}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default SelectButton
