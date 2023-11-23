'use client'

import React from 'react'
//import { Link } from 'react-router-dom'
import Button, { ButtonProps } from 'components/molecules/Button/index.tsx'

interface HyperLinkButtonProps extends ButtonProps {
  to: string
}

const HyperLinkButton: React.FC<HyperLinkButtonProps> = ({
  // to,
  ...restProps
}) => {
  return (
    // <Link to={to}>
    <Button
      width={{ base: 'mediumLarge', md: 'large' }}
      height={{ base: 'mediumLarge', md: 'large' }}
      fontSize={{ base: 'extraSmall', md: 'small' }}
      {...restProps}
    >
      이동하기
    </Button>
    // </Link>
  )
}

export default HyperLinkButton
