'use client'

import styled from 'styled-components'
import type { Responsive } from 'types/styles'
import { toPropValue, Color } from 'utils/styles'

export type BoxProps = {
  color?: Responsive<Color>
  backgroundColor?: Responsive<Color>
  width?: Responsive<string>
  height?: Responsive<string>
  minWidth?: Responsive<string>
  minHeight?: Responsive<string>
  maxWidth?: Responsive<string>
  maxHeight?: Responsive<string>
  boxShadow?: Responsive<string>
  gap?: Responsive<string>
  display?: Responsive<string>
  border?: Responsive<string>
  borderRadius?: Responsive<string>
  borderBottom?: Responsive<string>
  overflow?: Responsive<string>
  margin?: Responsive<string>
  marginTop?: Responsive<string>
  marginRight?: Responsive<string>
  marginBottom?: Responsive<string>
  marginLeft?: Responsive<string>
  padding?: Responsive<string>
  paddingTop?: Responsive<string>
  paddingRight?: Responsive<string>
  paddingBottom?: Responsive<string>
  paddingLeft?: Responsive<string>
  position?: Responsive<string>
  top?: Responsive<string>
  bottom?: Responsive<string>
  left?: Responsive<string>
  right?: Responsive<string>
  zIndex?: number
  boxSizing?: string
}

/**
 * Box 컴포넌트
 * 레이아웃 조정에 사용한다
 * @description 기본적인 style 에 대해 반응형 적용 가능
 * @example <Box
        width={'120px'}
        height={'120px'}
        backgroundColor={'red'}
        margin={3}
        border={'5px solid blue'}
        borderRadius={'50%'}
      ></Box>
 */
const Box = styled.div<BoxProps>`
  ${(props) => toPropValue('color', props.color, props.theme)}
  ${(props) =>
    toPropValue('background-color', props.backgroundColor, props.theme)}
  ${(props) => toPropValue('width', props.width, props.theme)}
  ${(props) => toPropValue('height', props.height, props.theme)}
  ${(props) => toPropValue('min-width', props.minWidth, props.theme)}
  ${(props) => toPropValue('min-height', props.minHeight, props.theme)}
  ${(props) => toPropValue('max-width', props.maxWidth, props.theme)}
  ${(props) => toPropValue('box-shadow', props.boxShadow, props.theme)}
  ${(props) => toPropValue('gap', props.gap, props.theme)}
  ${(props) => toPropValue('max-height', props.maxHeight, props.theme)}
  ${(props) => toPropValue('display', props.display, props.theme)}
  ${(props) => toPropValue('border', props.border, props.theme)}
  ${(props) => toPropValue('border-radius', props.borderRadius, props.theme)}
  ${(props) => toPropValue('border-bottom', props.borderBottom, props.theme)}
  ${(props) => toPropValue('overflow', props.overflow, props.theme)}
  ${(props) => toPropValue('margin', props.margin, props.theme)}
  ${(props) => toPropValue('margin-top', props.marginTop, props.theme)}
  ${(props) => toPropValue('margin-left', props.marginLeft, props.theme)}
  ${(props) => toPropValue('margin-bottom', props.marginBottom, props.theme)}
  ${(props) => toPropValue('margin-right', props.marginRight, props.theme)}
  ${(props) => toPropValue('padding', props.padding, props.theme)}
  ${(props) => toPropValue('padding-top', props.paddingTop, props.theme)}
  ${(props) => toPropValue('padding-left', props.paddingLeft, props.theme)}
  ${(props) => toPropValue('padding-bottom', props.paddingBottom, props.theme)}
  ${(props) => toPropValue('padding-right', props.paddingRight, props.theme)}
  ${(props) => toPropValue('position', props.position, props.theme)}
  ${(props) => toPropValue('top', props.top, props.theme)}
  ${(props) => toPropValue('bottom', props.bottom, props.theme)}
  ${(props) => toPropValue('left', props.left, props.theme)}
  ${(props) => toPropValue('right', props.right, props.theme)}
  ${(props) => toPropValue('z-index', props.zIndex, props.theme)}
  ${(props) =>
    toPropValue('box-sizing', props.boxSizing || 'border-box', props.theme)}
`

export default Box
