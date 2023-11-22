'use client'

import React from 'react'
import Button, { ButtonProps } from 'components/molecules/Button/index.tsx'
interface StatusButtonProps extends ButtonProps {
  wait?: boolean
  approved?: boolean
  rejected?: boolean
}

const StatusButton: React.FC<StatusButtonProps> = ({
  children,
  ...buttonProps
}) => {
  // let variant = 'primary'

  // if (approved) {
  //   variant = 'primary'
  // } else if (rejected) {
  //   variant = 'dark'
  // } else if (wait) {
  //   variant = 'gray'
  // }

  return (
    <Button
      variant="primary"
      width={{ base: 'medium' }}
      height={{ base: 'medium' }}
      fontSize={{ base: 'extraSmall' }}
      {...buttonProps}
    >
      {children}
    </Button>
  )
}

export default StatusButton
