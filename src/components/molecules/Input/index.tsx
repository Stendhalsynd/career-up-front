'use client'

import styled, { css } from 'styled-components'

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
      `
    }
  }}
  padding: 16px 12px 11px 9px;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  height: 50px;
  font-size: 16px;
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
    -moz-appearance: textfield;
  }
`

Input.defaultProps = {
  hasBorder: false,
}

export default Input
