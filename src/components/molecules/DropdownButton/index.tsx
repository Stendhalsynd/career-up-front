'use client'

import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'
import Text from 'components/atoms/Text'
import { Icon } from 'components/atoms/index.ts'
import Flex from 'components/layout/Flex'
import { Box } from 'components/layout/index.ts'
import { selectedFieldState } from 'utils/state.ts'

const DropdownRoot = styled.div`
  position: relative;
  height: 38px;
`

// 드롭다운 형태
const DropdownControl = styled.div<{ hasError?: boolean }>`
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid black;
  // border-radius: 5px;
  box-sizing: border-box;
  cursor: default;
  outline: none;
  padding: 8px 18px 8px 12px;
  display: flex;
  justify-content: space-between;
`

const DropdownValue = styled.div`
  color: ${({ theme }) => theme.colors.text};
`

// 드롭다운 플레이스홀더
const DropdownPlaceholder = styled.div`
  color: black;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  min-height: 20px;
  line-height: 20px;
`

const DropdownMenu = styled.div`
  background-color: #ffffff;
  border: ${({ theme }) => theme.colors.gray};
  box-shadow:
    0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 10%),
    0px 3px 14px 2px rgb(0 0 0 / 12%);
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: -1px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1000;
`

const DropdownOption = styled.div`
  padding: 8px 12px 8px 12px;
  &:hover {
    background-color: #f9f9f9;
  }
`

interface DropdownItemProps {
  item: DropdownItem
}

const DropdownItem = (props: DropdownItemProps) => {
  const { item } = props

  return (
    <Flex alignItems="center">
      <Text margin={'0px'} variant="small">
        {item.label ?? item.value}
      </Text>
    </Flex>
  )
}

type LabelTag =
  | '프론트엔드'
  | '백엔드'
  | '안드로이드'
  | 'IOS'
  | '게임'
  | 'AI'
  | ''

export interface DropdownItem {
  value: string | number | null
  label?: LabelTag
}

interface DropdownProps {
  /**
   * 드롭다운 선택지
   */
  options: DropdownItem[]
  /**
   * 드롭다운 값
   */
  value?: string | number
  /**
   * <input />의 name 속성
   */
  name?: string
  /**
   * 플레이스홀더
   */
  placeholder?: string
  /**
   * 변형 에러 플래그
   */
  hasError?: boolean
  /**
   * 값이 변화했을 때의 이벤트 핸들러
   */
  onChange?: (selected?: DropdownItem) => void
}

/**
 * 드롭다운 버튼
 * @description useWidth() 함수 반응형시 참고
 * // TODO: options 는 고정적이니 따로 입력받지 않도록 수정
 */
const DropdownButton = (props: DropdownProps) => {
  const { onChange, name, value, options, hasError } = props
  const [isOpen, setIsOpenValue] = useState(false)
  const initialItem = options.find((i) => i.value === value)
  const [selectedItem, setSelectedItem] = useState(initialItem)
  const setSelectedField = useSetRecoilState(selectedFieldState)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const useWidth = () => {
    const [width, setWidth] = useState(0)
    const handleResize = () => setWidth(window.innerWidth)
    useEffect(() => {
      //make sure it set properly on the first load (before resizing)
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
      // the next line for linters, so they won't give a warning
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) // empty
    return width
  }

  const handleDocumentClick = useCallback(
    (e: MouseEvent | TouchEvent) => {
      // 자신을 클릭시 아무 동작하지 않는다.
      if (dropdownRef.current) {
        const elems = dropdownRef.current.querySelectorAll('*')

        for (let i = 0; i < elems.length; i++) {
          if (elems[i] == e.target) {
            return
          }
        }
      }

      setIsOpenValue(false)
    },
    [dropdownRef],
  )

  const handleMouseDown = (e: React.SyntheticEvent) => {
    setIsOpenValue((isOpen) => !isOpen)
    e.stopPropagation()
  }

  const handleSelectValue = (
    e: React.FormEvent<HTMLDivElement>,
    item: DropdownItem,
  ) => {
    e.stopPropagation()

    setSelectedItem(item)
    setSelectedField(item !== null ? item.label : '')
    setIsOpenValue(false)

    onChange && onChange(item)
  }

  useEffect(() => {
    // 화면 밖을 클릭하거나 터치시 이벤트 설정
    document.addEventListener('click', handleDocumentClick, false)
    document.addEventListener('touchend', handleDocumentClick, false)

    return function cleanup() {
      document.removeEventListener('click', handleDocumentClick, false)
      document.removeEventListener('touchend', handleDocumentClick, false)
    }
    // 첫 렌더링 이후에만 호출
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <DropdownRoot ref={dropdownRef}>
      {useWidth() < 768 ? (
        <DropdownControl
          hasError={hasError}
          onMouseDown={handleMouseDown}
          onTouchEnd={handleMouseDown}
          data-testid="dropdown-control"
        >
          {selectedItem && (
            <DropdownValue>
              <DropdownItem item={selectedItem} />
            </DropdownValue>
          )}
          {/* 아무것도 선택하지 않았을때 placeholder 표시 */}
          {!selectedItem && (
            <DropdownPlaceholder>{props?.placeholder}</DropdownPlaceholder>
          )}
          {/* 더미 input */}
          <input
            type="hidden"
            name={name}
            value={selectedItem?.value ?? ''}
            onChange={() => onChange && onChange(selectedItem)}
          />
          <Icon iconName="dropdown" />
        </DropdownControl>
      ) : (
        <DropdownControl
          hasError={hasError}
          onMouseDown={handleMouseDown}
          onTouchEnd={handleMouseDown}
          data-testid="dropdown-control"
        >
          <Flex>
            <Box paddingRight={'11px'}>
              <Icon iconName="business_bag" />
            </Box>
            {selectedItem && (
              <DropdownValue>
                <DropdownItem item={selectedItem} />
              </DropdownValue>
            )}
            {/* 아무것도 선택하지 않았을때 placeholder 표시 */}
            {!selectedItem && (
              <DropdownPlaceholder>{props?.placeholder}</DropdownPlaceholder>
            )}
            {/* 더미 input */}
            <input
              type="hidden"
              name={name}
              value={selectedItem?.value ?? ''}
              onChange={() => onChange && onChange(selectedItem)}
            />
          </Flex>
          <Icon iconName="dropdown" />
        </DropdownControl>
      )}
      {/* 드롭다운을 표시 */}
      {isOpen && (
        <DropdownMenu>
          {props.options.map((item, idx) => (
            <DropdownOption
              key={idx}
              onMouseDown={(e) => handleSelectValue(e, item)}
              onClick={(e) => handleSelectValue(e, item)}
              data-testid="dropdown-option"
            >
              <DropdownItem item={item} />
            </DropdownOption>
          ))}
        </DropdownMenu>
      )}
    </DropdownRoot>
  )
}

export default DropdownButton
