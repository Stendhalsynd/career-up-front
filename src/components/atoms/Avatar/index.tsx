'use client'

/* eslint-disable prettier/prettier */
import Image from 'next/image'
import styled, { StyledComponent } from 'styled-components'

import { toPropValue } from 'utils/styles'

export type AvatarVariant = 'mobile' | 'desktop'

export type AvatarProps = {
  variant: AvatarVariant
  src: string
  alt?: string
}

const variants = {
  mobile: {
    width: '84px',
    height: '84px',
  },
  desktop: {
    width: '113px',
    height: '113px',
  },
}

const StyledAvatar: StyledComponent<'span', any, AvatarProps> =
  styled.span<AvatarProps>`
    ${({ variant, theme }) => {
      // 변형 스타일에 적용
      if (variant && variants[variant]) {
        const styles = []
        styles.push(toPropValue('width', variants[variant].width, theme))
        styles.push(toPropValue('height', variants[variant].height, theme))
        return styles.join('\n')
      }
    }}
    ${(props) => toPropValue('src', props.src, props.theme)}
  `

StyledAvatar.defaultProps = {
  variant: 'mobile',
  src: '/assets/image/img_avatar.svg',
  alt: '프로필 이미지',
}

const Avatar = styled(Image)<AvatarProps>`
  ${StyledAvatar}
`

export default Avatar
