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
      width={{ base: '220px', md: '400px' }}
      height={{ base: '40px', md: '50px' }}
      fontSize={{ base: '16px', md: '20px' }}
      {...restProps}
    >
      이동하기
    </Button>
    // </Link>
  )
}

export default HyperLinkButton
