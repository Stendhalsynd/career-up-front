'use client'

import React, { ReactNode } from 'react'
import styled from 'styled-components'

import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import { Responsive } from 'types/styles'
import { FontSize, toPropValue } from 'utils/styles.ts'

// TODO: Label 의 color 에 Responsive<Color> 를 넣을때는 안되고 string 을 넣을때만 되는 이유 찾기
interface LabelProps {
  children: ReactNode
  fontSize?: Responsive<FontSize>
  /**
   * 만약 하위 모든 Text 에 같은 색상을 넣고 싶다면 color의 값을 직접 넣어줘야 한다.
   * */
  color?: string
  flexDirection?: string
}

const StyledLabel = styled(Flex)<LabelProps>`
  & > ${Text} {
    ${(props) => toPropValue('font-size', props.fontSize, props.theme)}
    ${(props) => toPropValue('color', props.color, props.theme)}
  }
`

/**
 * 라벨
 * @description 내부에 ReactNode 유형의 children 을 받을 수 있다. 전체적인 font-size 를 조절하려면 Label 의 prop 에 fontSize 를 전달하고 세부적으로 조절하려면 내부의 각각 Text 에 fontSize 를 조절한다.
 * @example 
 *  // 전체적인 fontSize 를 조절할때
 *  <Label fontSize={'large'}>
      <Text color={'white'}>
        실력있는 개발자들이 모였습니다. 나의 고민을 해결해줄 수 있는&nbsp;
      </Text>
      <Text color={'primary'}>파트너</Text>
      <Text color={'white'}>를 찾아보세요.</Text>
    </Label>
    
    // 세부적인 fontSize 를 조절할때
    <Label >
      <Text color={'white'}>
        실력있는 개발자들이 모였습니다. 나의 고민을 해결해줄 수 있는&nbsp;
      </Text>
      <Text color={'primary'} fontSize={'large'}>파트너</Text>
      <Text color={'white'}>를 찾아보세요.</Text>
    </Label>
 */
const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return (
    <StyledLabel as={'p'} {...props}>
      {children}
    </StyledLabel>
  )
}

export default Label
