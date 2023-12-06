'use client'

import Link from 'next/link'
import React, { ReactNode } from 'react'
import styles from './HyperLinkButton.module.css'
import { Text } from 'components/atoms/index.ts'
import Button, { ButtonProps } from 'components/molecules/Button/index.tsx'
import colors from 'themes/colors.ts'

interface HyperLinkButtonProps extends ButtonProps {
  to: string
  contents?: string
  isTransparent?: boolean
  children?: ReactNode
  hasBorder?: boolean
}

const HyperLinkButton: React.FC<HyperLinkButtonProps> = ({
  to,
  contents,
  isTransparent = false,
  children,
  hasBorder,
  ...restProps
}) => {
  return (
    <Link href={to} scroll={false}>
      <Button
        height={'fit-content'}
        fontSize={{ base: '16px', md: '20px' }}
        {...restProps}
        className={styles.button}
        border={hasBorder ? `1px solid ${colors.primary}` : 'none'}
      >
        <span className={styles.circle}></span>
        <span className={styles.circle}></span>
        <span className={styles.circle}></span>
        <span className={styles.circle}></span>
        <span className={styles.circle}></span>
        <span className={styles.circle}></span>
        <span className={styles.circle}></span>
        <span className={styles.circle}></span>
        <Text
          color={isTransparent ? 'black' : 'white'}
          fontSize={{ base: 'extraSmall', md: 'small' }}
          className={styles.text}
        >
          {contents ? contents : ''}
          {children}
        </Text>
      </Button>
    </Link>
  )
}

export default HyperLinkButton
