'use client'

import Image from 'next/image'
import styled from 'styled-components'
// import type { Responsive } from 'types/styles'

export type IconProps = {
  iconName?: string
  width?: number
  height?: number
}

const IconWrapper = styled.button`
  display: inline-block;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const IconComponent = styled(Image)<IconProps>``

/**
 * 아이콘 컴포넌트
 * @description 아이콘
 * iconName: /assets/icon/icon_{iconName}.svg
 * width, height: Integer만 작성
 * next.js에서 제공하는 Image 태그에는 src, alt, width, height 속성이 필수적으로 명시되어 있어야 한다.
 * Type
 * src: String
 * width: Integer(px)
 * height: Integer(px)
 * alt: string
 * @example <Icon
        iconName="close"
        width={24}
        height={24}
      />
 */

const Icon = (props: IconProps) => {
  const { iconName, width, height } = props
  const iconPath = `/assets/icon/icon_${iconName}.svg`

  return (
    <IconWrapper>
      <IconComponent
        src={iconPath}
        alt={`${iconName} icon`}
        width={width}
        height={height}
      />
    </IconWrapper>
  )
}

Icon.defaultProps = {
  width: 24,
  height: 24,
}

export default Icon
