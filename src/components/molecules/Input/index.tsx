'use client'

import React from 'react'
import styled, { css } from 'styled-components'
import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'

/**
 * 텍스트 입력
 * @description 인풋 박스
 * @example <Input
        name="email"
        type="text"
        placeholder="이메일"
        hasBorder
        hasDarkBackground
      />
 */
const Input = styled.input<{
  hasBorder?: boolean
  hasDarkBackground?: boolean
}>`
  background-color: ${({ theme, hasDarkBackground }) =>
    hasDarkBackground ? theme.colors.inputDarkGray : 'transparent'};
  ${({ theme, hasBorder }) => {
    if (hasBorder) {
      return css`
        border: 1px solid ${theme.colors.gray};
        color: ${theme.colors.inputGray};
        border-radius: 5px;
      `
    } else {
      return css`
        border: none;
        color: ${theme.colors.inputGray};
        border-radius: 5px;
      `
    }
  }}
  padding: 12px 16px;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  height: fit-content;
  font-size: 14px;
  line-height: 19px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -webkit-moz-appearance: textfield;
  }
`

Input.defaultProps = {
  hasBorder: false,
}

const ForwardedInput = React.forwardRef<
  HTMLInputElement,
  {
    hasBorder?: boolean
    hasDarkBackground?: boolean
  } & React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => <Input {...props} ref={ref} />)

ForwardedInput.displayName = 'ForwardedInput'

export default ForwardedInput

interface InfoBlockProps {
  text: string
  placeholder: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  readOnly: boolean
}

export const InfoBlock: React.FC<InfoBlockProps> = ({
  text,
  placeholder,
  onChange,
  readOnly,
}) => (
  <Flex gap={'15px'} flexDirection={'column'} width={'100%'} zIndex={1}>
    <Text color={'white'} variant={'smallBold'}>
      {text}
    </Text>
    <ForwardedInput
      hasDarkBackground
      placeholder={placeholder}
      readOnly={readOnly}
      onChange={onChange}
    />
  </Flex>
)
