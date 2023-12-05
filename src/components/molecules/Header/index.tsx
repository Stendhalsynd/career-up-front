'use client'

import { useState } from 'react'
import { Icon, Logo, Text } from 'components/atoms/index.ts'
import Flex from 'components/layout/Flex/index.tsx'
import { Box } from 'components/layout/index.ts'

/**
 * 헤더
 * @description
 * 헤더 내 로고, 텍스트, 아이콘 컴포넌트들 가운데 정렬
 * 반응형 웹 적용: viewport가 모바일 사이즈인 경우, 텍스트 컴포넌트 display: none / 901px부터 텍스트 컴포넌트 display: flex
 * @example <Header />
 */

const Header = () => {
  const [isHovered, setHovered] = useState(false)
  const [menuName, setMenuName] = useState('menu')

  return (
    <Flex
      backgroundColor={'black'}
      justifyContent={'space-between'}
      alignItems={'center'}
      height={{ base: '40px', md: '50px' }}
      padding={'10px'}
    >
      <Flex>
        <Logo width={60} />
      </Flex>

      <Flex
        justifyContent={'space-evenly'}
        width={'300px'}
        display={{ base: 'none', md: 'flex' }}
      >
        <Text variant="smallBold" color={'white'}>
          멘토 찾기
        </Text>

        <Text variant="smallBold" color={'white'}>
          나의 채팅
        </Text>

        <Text variant="smallBold" color={'white'}>
          로그인
        </Text>
      </Flex>

      {/* <Flex>
        <Icon iconName="menu" width={28} height={28} />
      </Flex> */}
      <Flex
        onMouseEnter={() => {
          setHovered(true)
          setMenuName('menu_black')
        }}
        onMouseLeave={() => {
          setHovered(false)
          setMenuName('menu')
        }}
        position={'relative'}
        justifyContent={'center'}
        alignItems={'center'}
        style={{ transition: '0.6s' }}
      >
        <div
          style={{
            position: 'absolute',
            width: `${isHovered ? '40px' : '0'}`,
            height: `${isHovered ? '40px' : '0'}`,
            borderRadius: '50%',
            backgroundColor: 'white',
            zIndex: 1,
            pointerEvents: 'none',
            transition: '0.6s',
          }}
        />
        <Box zIndex={2}>
          <Icon iconName={menuName} width={28} height={28} />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Header
