'use client'

import Image from 'next/image'
import styled from 'styled-components'
import { IconProps } from 'components/atoms/Icon/index.tsx'

// interface OmitProp {
//   alt: string
// }

// type AvatarProps = Omit<ImageProps, keyof OmitProp>

export type AvatarProps = IconProps & {
  avatarName?: string
}

const ImageWithShape = styled(Image)<AvatarProps>`
  border-radius: '50%';
`

/**
 * 셰이프 이미지
 * CHECKLIST : Avatar src 이름이 너무 길어서 줄여서 쓰자
 */
const Avatar = (props: AvatarProps) => {
  const { avatarName, width = 24 } = props
  const avatarPath = `/assets/image/img_${avatarName}.svg`

  return (
    <ImageWithShape
      src={avatarPath}
      alt={`${avatarName} avatar`}
      width={0}
      height={0}
      style={{ width, height: 'auto' }}
    />
  )
}

export default Avatar
