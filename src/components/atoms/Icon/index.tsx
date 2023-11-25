'use client'

import Image from 'next/image'
import styled from 'styled-components'

export type IconProps = {
  /** 아이콘 태그에서 icon_ 뒤에 오는 이름을 붙인다. */
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
 * 아이콘
 * @description
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
      />
 */
const Icon = (props: IconProps) => {
  const { iconName, width = 24 } = props

  const iconPath = `/assets/icon/icon_${iconName}.svg`

  return (
    <IconWrapper>
      <IconComponent
        src={iconPath}
        alt={`${iconName} icon`}
        width={0}
        height={0}
        style={{ width, height: 'auto' }}
      />
    </IconWrapper>
  )
}

export default Icon
