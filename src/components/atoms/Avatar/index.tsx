'use client'

import Image, { ImageProps } from 'next/image'
import styled from 'styled-components'

interface OmitProp {
  alt: string
}

type AvatarProps = Omit<ImageProps, keyof OmitProp>

const ImageWithShape = styled(Image)`
  border-radius: '50%';
`

/**
 * 셰이프 이미지
 */
const Avatar = (props: AvatarProps) => {
  const { ...imageProps } = props

  return <ImageWithShape {...imageProps} alt="프로필 이미지" />
}

export default Avatar
