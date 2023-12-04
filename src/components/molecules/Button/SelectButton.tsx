'use client'

import React, { ReactNode } from 'react'
import Button, { ButtonProps } from 'components/molecules/Button/index.tsx'

// 프로퍼티 타입 수정
interface SelectButtonProps extends ButtonProps {
  children: ReactNode
  isRound?: Boolean
  isSelected?: boolean
}

/**
 * @description
 * isRound - 둥근 모서리인지 여부, false 를 전달시 구직자, 재직자, 시간 버튼과 같이 조금더 각진 사각형
 * variant - 전달하지 않으면 primary, 타입에 따라 white, primary, gray 로 선택 가능
 */
const SelectButton: React.FC<SelectButtonProps> = ({
  children,
  isRound = true,
  // isSelected = false,
  variant,
  ...rest
}) => {
  return (
    <Button
      variant={variant ? variant : 'white'}
      width={'fit-content'}
      height={'fit-content'}
      borderRadius={isRound ? '100px' : '8px'}
      padding={'8px 25px'}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default SelectButton
