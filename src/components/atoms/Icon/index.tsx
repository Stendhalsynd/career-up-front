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
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const IconImage = styled(Image)<IconProps>`
  width: ${({ width }) => (width ? width : 24)};
  height: ${({ height }) => (height ? height : 24)};
`

/**
 * 아이콘 컴포넌트
 * @description 아이콘 
 * @example <Icon
        iconName="close"
        width="24px"
        height="24px"
      />
 */

// const Icon = ({ iconName, width, height }: IconProps) => {
const Icon = (props: IconProps) => {
  const { iconName, width, height } = props
  const iconPath = `/assets/icon/icon_${iconName}.svg`

  return (
    <IconWrapper>
      <IconImage
        src={iconPath}
        alt={`${iconName} icon`}
        width={width}
        height={height}
      />
    </IconWrapper>
  )
}

export default Icon
