'use client'

import React from 'react'
import Button, { ButtonProps } from 'components/molecules/Button/index.tsx'

export interface TagButtonProps extends ButtonProps {
  tag: string
}

const TagButton: React.FC<TagButtonProps> = ({ tag, ...buttonProps }) => {
  return <Button {...buttonProps}>{tag}</Button>
}

/** 현직 / 직군 / 스킬 */
export const InfoTagButton: React.FC<TagButtonProps> = ({
  ...tagButtonProps
}) => {
  return (
    <TagButton
      {...tagButtonProps}
      variant="gray"
      color="black"
      width={'fit-content'}
      height={'fit-content'}
      padding={'2px 11px'}
      borderRadius={'20px'}
      fontSize={{ base: 'Small' }}
    />
  )
}

/** 보유 스킬 */
export const SkillTagButton: React.FC<TagButtonProps> = ({
  ...tagButtonProps
}) => {
  return (
    <TagButton
      {...tagButtonProps}
      variant="border"
      borderRadius="4px"
      width={'fit-content'}
      height={'fit-content'}
      padding={'1px 17px'}
      fontSize={{ base: 'extraSmall' }}
    />
  )
}

/** 직무 분야 */
export const IntroTagButton: React.FC<TagButtonProps> = ({
  ...tagButtonProps
}) => {
  const { variant, ...rest } = tagButtonProps
  return (
    <TagButton
      {...rest}
      variant={variant ? variant : 'white'}
      width={'fit-content'}
      height={'fit-content'}
      padding={'5px 35px'}
      fontSize={{ base: 'extraSmall' }}
    />
  )
}

export default TagButton
