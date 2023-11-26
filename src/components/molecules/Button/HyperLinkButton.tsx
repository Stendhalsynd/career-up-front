'use client'

import React from 'react'
//import { Link } from 'react-router-dom'
import { Text } from 'components/atoms/index.ts'
import Button, { ButtonProps } from 'components/molecules/Button/index.tsx'

interface HyperLinkButtonProps extends ButtonProps {
  to: string
  contents?: string
  isTransparent?: boolean
}

const HyperLinkButton: React.FC<HyperLinkButtonProps> = ({
  // to,
  contents,
  isTransparent = false,
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
      <Text color={isTransparent ? 'black' : 'whtie'}>
        {contents ? contents : '이동하기'}
      </Text>
    </Button>
    // </Link>
  )
}

export default HyperLinkButton
