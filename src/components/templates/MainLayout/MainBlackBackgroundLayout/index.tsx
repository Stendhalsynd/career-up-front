// 메인페이지 배경 레이아웃

'use client'

import Picture from 'components/atoms/Picture/index.tsx'
import { Box, Flex } from 'components/layout/index.ts'
import Layout from 'components/templates/Layout/index.tsx'
import FloatingComponent from 'containers/FloatingContainer/index.tsx'
import { Desktop, Mobile, Tablet } from 'lib/useMediaQuery.tsx'

interface ChildrenProps {
  children: React.ReactNode
}

const MainBlackBackgroundLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Layout>
        {/* 모바일 */}
        <Mobile>
          <Flex
            width={'100%'}
            flexDirection={'column'}
            gap={'350px'}
            padding={'100px calc((100% - 1400px) / 2)'}
            alignItems={'center'}
            position={'relative'}
            overflow={'hidden'}
          >
            <Box position={'absolute'} zIndex={-1} right={'-250px'}>
              <FloatingComponent>
                <Picture pictureName="cube" width={355} />
              </FloatingComponent>
            </Box>
            <Box
              position={'absolute'}
              zIndex={-1}
              top={'250px'}
              left={'-200px'}
            >
              <FloatingComponent>
                <Picture pictureName="roundcube1" width={355} />
              </FloatingComponent>
            </Box>
            <Box
              position={'absolute'}
              zIndex={-1}
              top={'600px'}
              right={'-100px'}
            >
              <FloatingComponent>
                <Picture pictureName="supertoroid1" width={300} />
              </FloatingComponent>
            </Box>
            <Box
              position={'absolute'}
              zIndex={-1}
              top={'1200px'}
              left={'-100px'}
            >
              <FloatingComponent>
                <Picture pictureName="sphere" width={300} />
              </FloatingComponent>
            </Box>
            <Box position={'absolute'} zIndex={-1} top={'1900px'}>
              <FloatingComponent>
                <Picture pictureName="workvideoconference" width={300} />
              </FloatingComponent>
            </Box>
            <Box
              position={'absolute'}
              zIndex={-1}
              top={'2000px'}
              right={'-100px'}
            >
              <FloatingComponent>
                <Picture pictureName="cone" width={300} />
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
            gap={'350px'}
            padding={'100px calc((100% - 1400px) / 2)'}
            alignItems={'center'}
            position={'relative'}
            overflow={'hidden'}
          >
            <Box position={'absolute'} zIndex={-1} top={'0px'} right={'-100px'}>
              <FloatingComponent>
                <Picture pictureName="cube" width={400} />
              </FloatingComponent>
            </Box>
            <Box
              position={'absolute'}
              zIndex={-1}
              top={'350px'}
              left={'-100px'}
            >
              <FloatingComponent>
                <Picture pictureName="roundcube1" width={400} />
              </FloatingComponent>
            </Box>
            <Box
              position={'absolute'}
              zIndex={-1}
              top={'600px'}
              right={'-100px'}
            >
              <FloatingComponent>
                <Picture pictureName="supertoroid1" width={400} />
              </FloatingComponent>
            </Box>
            <Box
              position={'absolute'}
              zIndex={-1}
              top={'1000px'}
              left={'-100px'}
            >
              <FloatingComponent>
                <Picture pictureName="sphere" width={400} />
              </FloatingComponent>
            </Box>
            <Box position={'absolute'} zIndex={-1} top={'1900px'}>
              <FloatingComponent>
                <Picture pictureName="workvideoconference" width={400} />
              </FloatingComponent>
            </Box>
            <Box
              position={'absolute'}
              zIndex={-1}
              top={'2000px'}
              right={'-100px'}
            >
              <FloatingComponent>
                <Picture pictureName="cone" width={400} />
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
            gap={'350px'}
            padding={'100px calc((100% - 1400px) / 2)'}
            alignItems={'center'}
            position={'relative'}
            overflow={'hidden'}
          >
            <Box position={'absolute'} zIndex={-1} top={'0px'} right={'-100px'}>
              <FloatingComponent>
                <Picture pictureName="cube" width={500} />
              </FloatingComponent>
            </Box>
            <Box
              position={'absolute'}
              zIndex={-1}
              top={'400px'}
              left={'-100px'}
            >
              <FloatingComponent>
                <Picture pictureName="roundcube1" width={500} />
              </FloatingComponent>
            </Box>
            <Box
              position={'absolute'}
              zIndex={-1}
              top={'600px'}
              right={'-100px'}
            >
              <FloatingComponent>
                <Picture pictureName="supertoroid1" width={500} />
              </FloatingComponent>
            </Box>
            <Box
              position={'absolute'}
              zIndex={-1}
              top={'1100px'}
              left={'-100px'}
            >
              <FloatingComponent>
                <Picture pictureName="sphere" width={500} />
              </FloatingComponent>
            </Box>
            <Box
              position={'absolute'}
              zIndex={-1}
              top={'1800px'}
              left={'100px'}
            >
              <FloatingComponent>
                <Picture pictureName="workvideoconference" width={500} />
              </FloatingComponent>
            </Box>
            <Box
              position={'absolute'}
              zIndex={-1}
              top={'1900px'}
              right={'-100px'}
            >
              <FloatingComponent>
                <Picture pictureName="cone" width={500} />
              </FloatingComponent>
            </Box>
            {children}
          </Flex>
        </Desktop>
      </Layout>
    </>
  )
}

export default MainBlackBackgroundLayout
