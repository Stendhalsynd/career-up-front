'use client'

import Image from 'next/image'
import styled from 'styled-components'
import { IconProps } from 'components/atoms/Icon/index.tsx'

export type AvatarProps = IconProps & {
  avatarName?: string
  src?: string | undefined
  size?: number
  shape?: 'circle' | 'square'
}

const ImageWithShape = styled(Image)<AvatarProps>`
  ${({ shape }) =>
    shape === 'circle' ? 'border-radius: 50%' : 'border-radius: 0'};
`

/**
 * 셰이프 이미지
 * CHECKLIST : Avatar src 이름이 너무 길어서 줄여서 쓰자
 */
const Avatar = (props: AvatarProps) => {
  const { avatarName, src, size, shape } = props
  const avatarPath = `/assets/image/img_${avatarName}.svg`

  return (
    <ImageWithShape
      src={typeof src == 'undefined' ? avatarPath : src}
      alt={`${avatarName} avatar`}
      width={size}
      height={size}
      style={{
        borderRadius: shape === 'circle' ? '50%' : '0',
        objectFit: 'cover',
        overflow: 'hidden',
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  )
}

export default Avatar
