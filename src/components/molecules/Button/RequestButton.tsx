'use client'

import PropTypes from 'prop-types'
import React, { ReactNode } from 'react'
import { Icon } from 'components/atoms/index.ts'
import Button, { ButtonProps } from 'components/molecules/Button/index.tsx'

type RequestButtonProps = {
  iconName?: string
  children?: ReactNode
} & ButtonProps

const RequestButton: React.FC<RequestButtonProps> = ({
  iconName,
  children,
  ...rest
}) => {
  return (
    <Button variant="primary" width={'100%'} height={'fit-content'} {...rest}>
      {/* iconName이 있으면 아이콘 추가 */}
      {iconName && <Icon iconName={iconName} width={20} height={20} />}

      {/* children이 있으면 직접 렌더링 */}
      {children}
    </Button>
  )
}

RequestButton.propTypes = {
  iconName: PropTypes.string,
  children: PropTypes.node,
}

export default RequestButton
