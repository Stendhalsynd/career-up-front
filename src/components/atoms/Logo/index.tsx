// TODO: image 태그에 반응형 웹 적용 가능한 방법 찾아보기

import Image from 'next/image'
import React from 'react'

// 이미지 경로를 상수로 선언
const LOGO_IMAGE_PATH = '/assets/image/img_logo.svg'

export type LogoProps = {
  width?: number
  height?: number
}

/**
 * 로고
 * @description
 * width, height: Integer만 작성
 * next.js에서 제공하는 Image 태그에는 src, alt, width, height 속성이 필수적으로 명시되어 있어야 한다.
 * Type
 * src: String
 * width: Integer(px)
 * height: Integer(px)
 * alt: string
 * @example <Logo width={60} />
 */
// eslint-disable-next-line react/prop-types
const Logo = (props: LogoProps) => {
  const { width = 200 } = props

  return (
    <Image
      src={LOGO_IMAGE_PATH}
      alt="Logo"
      width={0}
      height={0}
      style={{ width, height: 'auto' }}
      priority
    />
  )
}

export default Logo
