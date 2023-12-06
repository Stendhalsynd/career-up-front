import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import { successAlert } from 'lib/sweetAlert.tsx'

interface SideMenuProps {
  closeMenu: () => void
  isLoggedIn: boolean
  roleType: string | null
  isSideMenuOpen?: boolean
}

const SideMenu = ({
  closeMenu,
  isLoggedIn,
  roleType,
  isSideMenuOpen,
}: SideMenuProps) => {
  const [animationActive, setAnimationActive] = useState(false)

  useEffect(() => {
    if (isSideMenuOpen) {
      setAnimationActive(true)
    } else {
      setAnimationActive(false)
    }
  }, [isSideMenuOpen])

  const handleLogout = () => {
    localStorage.removeItem('token')
    successAlert('로그아웃 성공', '로그아웃이 완료되었습니다.', '확인').then(
      () => {
        window.location.reload()
      },
    )
  }

  return (
    <Flex
      position="fixed"
      right="0"
      top="0"
      bottom="0"
      width="100%"
      height={'100%'}
      backgroundColor="white"
      flexDirection="column"
      padding="10px"
      justifyContent="center"
      alignItems="center"
      zIndex={999}
      style={{
        transition: '1s',
        transform: animationActive ? 'translateY(0)' : 'translateY(-50px)',
      }}
      display={!isSideMenuOpen ? 'none' : 'flex'}
    >
      <Flex
        flexDirection="column"
        gap={{ base: '25px', sm: '50px' }}
        alignItems={'center'}
        height={'100%'}
        justifyContent={'center'}
      >
        <Link href="/search" scroll={false}>
          <Text
            variant="smallBold"
            color={'primary'}
            fontSize={{ base: 'medium', sm: 'large' }}
            style={{ transition: '1s' }}
          >
            탐색하기
          </Text>
        </Link>

        <Link
          href={roleType === 'WORKER' ? '/workerChat' : '/seekerChat'}
          scroll={false}
        >
          <Text
            variant="smallBold"
            color={'primary'}
            fontSize={{ base: 'medium', sm: 'large' }}
            fontWeight={'900'}
            style={{ transition: '1s' }}
          >
            나의채팅
          </Text>
        </Link>
        {isLoggedIn ? (
          <>
            <Link
              href={roleType === 'WORKER' ? '/workers/edit' : '/seekers/edit'}
              scroll={false}
            >
              <Text
                variant="smallBold"
                color={'primary'}
                fontSize={{ base: 'medium', sm: 'large' }}
                fontWeight={'900'}
              >
                마이페이지
              </Text>
            </Link>
            <Text
              variant="smallBold"
              color={'primary'}
              fontSize={{ base: 'medium', sm: 'large' }}
              fontWeight={'900'}
              onClick={handleLogout}
              style={{ cursor: 'pointer' }}
            >
              로그아웃
            </Text>
          </>
        ) : (
          <Link href="/login" scroll={false}>
            <Text
              variant="smallBold"
              color={'primary'}
              fontSize={{ base: 'medium', sm: 'large' }}
              fontWeight={'900'}
            >
              로그인
            </Text>
          </Link>
        )}
        <Text
          variant="smallBold"
          onClick={closeMenu}
          fontSize={{ base: 'medium', sm: 'large' }}
          style={{ cursor: 'pointer' }}
          fontWeight={'900'}
        >
          닫기
        </Text>
      </Flex>
    </Flex>
  )
}

export default SideMenu
