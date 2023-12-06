'use client'

import PropTypes from 'prop-types'
import React, { ReactNode } from 'react'
import styles from './RequestButton.module.css'
import { Icon } from 'components/atoms/index.ts'
import Button, { ButtonProps } from 'components/molecules/Button/index.tsx'
import colors from 'themes/colors.ts'

type RequestButtonProps = {
  iconName?: string
  children?: ReactNode
  hasBorder?: boolean
} & ButtonProps

/**
 * @param iconName 요청 버튼에 아이콘을 쓸 경우 넣기 Optional
 * @param children
 * @returns RequestButton
 * @descritpion width 를 100% 로 해두었으니 길이가 다를 경우 자체적으로 조율해야 함
 * @example
 * // 글자가 들어가는 요청 버튼의 경우
 * <RequestButton >로그인</RequestButton>
 *
 * // 아이콘이 들어가는 요청 버튼의 경우
 * <RequestButton iconName={'mic'}/>
 */
const RequestButton: React.FC<RequestButtonProps> = ({
  iconName,
  children,
  hasBorder,
  ...rest
}) => {
  return (
    <Button
      variant="primary"
      width={iconName ? 'fit-content' : '100%'}
      height={'fit-content'}
      padding={iconName && '10px'}
      className={styles.button}
      border={hasBorder ? `1px solid ${colors.primary}` : 'none'}
      {...rest}
    >
      <span className={styles.circle}></span>
      <span className={styles.circle}></span>
      <span className={styles.circle}></span>
      <span className={styles.circle}></span>
      <span className={styles.circle}></span>
      <span className={styles.circle}></span>
      <span className={styles.circle}></span>
      <span className={styles.circle}></span>
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
