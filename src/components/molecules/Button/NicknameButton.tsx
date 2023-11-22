'use client'

import React from 'react'
import Button, { ButtonProps } from 'components/molecules/Button/index.tsx'

interface NicknameButtonProps extends ButtonProps {
  nickname: string
}

const NicknameButton: React.FC<NicknameButtonProps> = ({
  nickname,
  ...buttonProps
}) => {
  return (
    <Button
      variant="dark"
      width={{ base: 'medium', md: 'nicknameMedium' }}
      height={{ base: 'medium' }}
      fontSize={{ base: 'xxSmall', md: 'extraSmall' }}
      {...buttonProps}
    >
      {nickname}
    </Button>
  )
}

export default NicknameButton
