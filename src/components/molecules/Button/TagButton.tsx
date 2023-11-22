'use client'

import React from 'react'
import Button, { ButtonProps } from 'components/molecules/Button/index.tsx'

export interface TagButtonProps extends ButtonProps {
  tag: string
}

const TagButton: React.FC<TagButtonProps> = ({ tag, ...buttonProps }) => {
  return <Button {...buttonProps}>{tag}</Button>
}

export const InfoTagButton: React.FC<TagButtonProps> = ({
  ...tagButtonProps
}) => {
  return (
    <TagButton
      {...tagButtonProps}
      variant="gray"
      color="black"
      width={{ base: 'extraSmall' }}
      height={{ base: 'small' }}
      fontSize={{ base: 'Small' }}
    />
  )
}

export const SkillTagButton: React.FC<TagButtonProps> = ({
  ...tagButtonProps
}) => {
  return (
    <TagButton
      {...tagButtonProps}
      variant="border"
      borderRadius="4px"
      width={{ base: 'small' }}
      height={{ base: 'small' }}
      fontSize={{ base: 'extraSmall' }}
    />
  )
}

export const IntroTagButton: React.FC<TagButtonProps> = ({
  ...tagButtonProps
}) => {
  return (
    <TagButton
      {...tagButtonProps}
      variant="white"
      width={{ base: 'nicknameMedium' }}
      height={{ base: 'small' }}
      fontSize={{ base: 'extraSmall' }}
    />
  )
}

export default TagButton
