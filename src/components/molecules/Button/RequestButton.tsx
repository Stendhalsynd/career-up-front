'use client'

import PropTypes from 'prop-types'
import React, { ReactNode } from 'react'
//import Icon from 'components/atoms/Icon/index.tsx'
import Button, { ButtonProps } from 'components/molecules/Button/index.tsx'
import { Responsive } from 'types/styles'

type RequestButtonProps = {
  iconName?: string
  width?: Responsive<string>
  height?: Responsive<string>
  children?: ReactNode
} & ButtonProps

const RequestButton: React.FC<RequestButtonProps> = ({
  // iconName,
  width = { base: 'small' },
  height = { base: 'small' },
  children,
  ...rest
}) => {
  return (
    <Button variant="primary" width={width} height={height} {...rest}>
      {/* iconName이 있으면 아이콘 추가 */}
      {/* {iconName && <Icon iconName={iconName} width={20} height={20} />} */}

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
