'use client'

import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * 최소 행 수
   */
  minRows?: number
  /**
   * 최대 행 수
   */
  maxRows?: number
  /**
   * 변형 에러 플래그r
   */
  hasError?: boolean
}

const StyledTextArea = styled.textarea<{ hasError?: boolean }>`
  color: ${({ theme }) => theme.colors.inputText};
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? theme.colors.red : theme.colors.primary};
  border-radius: 30px;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  padding: 30px;
  resize: none;
  overflow: auto;
  height: auto;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`

/**
 * 텍스트 영역
 * @description 여러줄의 입력을 처리할 수 있습니다.
 * @example <TextArea
        minRows={3}
        maxRows={10}
        hasError={true}
        placeholder="텍스트를 입력하세요"
      >
        입력값
      </TextArea>

      or 

      <TextArea minRows={3} maxRows={10} placeholder="텍스트를 입력하세요">
        입력값
      </TextArea>
 */
const TextArea = (props: TextAreaProps) => {
  const {
    rows = 20,
    minRows = 20,
    maxRows = 30,
    children,
    hasError,
    onChange,
    ...rest
  } = props
  const [textareaRows, setTextareaRows] = useState(Math.min(rows, minRows))

  console.assert(
    !(rows < minRows),
    'TextArea: rows should be greater than minRows.',
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const textareaLineHeight = 24
      const previousRows = e.target.rows

      e.target.rows = minRows // 행 수 초기화

      // 현재 행 수
      const currentRows = Math.floor(e.target.scrollHeight / textareaLineHeight)

      if (currentRows === previousRows) {
        e.target.rows = currentRows
      }

      if (currentRows >= maxRows) {
        e.target.rows = maxRows
        e.target.scrollTop = e.target.scrollHeight
      }

      // 최대를 넘지 않도록 행 수 초기화
      setTextareaRows(currentRows < maxRows ? currentRows : maxRows)
      onChange && onChange(e)
    },
    [onChange, minRows, maxRows],
  )

  return (
    <StyledTextArea
      hasError={hasError}
      onChange={handleChange}
      aria-label={rest.placeholder}
      rows={textareaRows}
      {...rest}
    >
      {children}
    </StyledTextArea>
  )
}

export default TextArea
