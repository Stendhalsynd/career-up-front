// 메인페이지 배경 레이아웃

'use client'

import Picture from 'components/atoms/Picture/index.tsx'
import { Box, Flex } from 'components/layout/index.ts'
import FloatingComponent from 'containers/FloatingContainer/index.tsx'
import { Desktop, Mobile, Tablet } from 'lib/useMediaQuery.tsx'

interface ChildrenProps {
  children: React.ReactNode
}

const MainBlueBackgroundLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      {/* 모바일 */}
      <Mobile>
        <Flex
          width={'100%'}
          flexDirection={'column'}
          gap={'150px'}
          padding={'100px calc((100% - 1400px) / 2)'}
          position={'relative'}
          backgroundColor={'primary'}
          overflow={'hidden'}
        >
          <Box position={'absolute'} top={'50px'} left={'-100px'}>
            <FloatingComponent>
              <Picture pictureName="roundcube2" width={280} />
            </FloatingComponent>
          </Box>
          <Box position={'absolute'} top={'900px'} right={'-100px'}>
            <FloatingComponent>
              <Picture pictureName="roundcube1" width={280} />
            </FloatingComponent>
          </Box>
          {children}
        </Flex>
      </Mobile>

      {/* 태블릿 */}
      <Tablet>
        <Flex
          width={'100%'}
          flexDirection={'column'}
          gap={'150px'}
          padding={'100px calc((100% - 1400px) / 2)'}
          position={'relative'}
          backgroundColor={'primary'}
          overflow={'hidden'}
        >
          <Box position={'absolute'} top={'50px'} left={'-100px'}>
            <FloatingComponent>
              <Picture pictureName="roundcube2" width={400} />
            </FloatingComponent>
          </Box>
          <Box position={'absolute'} top={'900px'} right={'-100px'}>
            <FloatingComponent>
              <Picture pictureName="roundcube1" width={400} />
            </FloatingComponent>
          </Box>
          {children}
        </Flex>
      </Tablet>

      {/* 데스크탑 */}
      <Desktop>
        <Flex
          width={'100%'}
          flexDirection={'column'}
          gap={'150px'}
          padding={'100px calc((100% - 1400px) / 2)'}
          position={'relative'}
          backgroundColor={'primary'}
          overflow={'hidden'}
        >
          <Box position={'absolute'} top={'50px'} left={'-100px'}>
            <FloatingComponent>
              <Picture pictureName="roundcube2" width={500} />
            </FloatingComponent>
          </Box>
          <Box position={'absolute'} top={'300px'} right={'-100px'}>
            <FloatingComponent>
              <Picture pictureName="roundcube1" width={500} />
            </FloatingComponent>
          </Box>
          {children}
        </Flex>
      </Desktop>
    </>
  )
}

export default MainBlueBackgroundLayout
