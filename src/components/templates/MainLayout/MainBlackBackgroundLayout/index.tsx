// 메인페이지 배경 레이아웃

import Picture from 'components/atoms/Picture/index.tsx'
import { Box, Flex } from 'components/layout/index.ts'
import Layout from 'components/templates/Layout/index.tsx'

interface ChildrenProps {
  children: React.ReactNode
}

const MainBlackBackgroundLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Layout>
        <Flex
          width={'100vw'}
          flexDirection={'column'}
          gap={'150px'}
          position={'relative'}
          overflow={'hidden'}
        >
          <Box position={'absolute'} zIndex={-1} right={'-250px'}>
            <Picture pictureName="cube" width={355} />
          </Box>
          <Box position={'absolute'} zIndex={-1} top={'100px'} left={'-250px'}>
            <Picture pictureName="roundcube1" width={355} />
          </Box>
          <Box position={'absolute'} zIndex={-1} top={'500px'} right={'-100px'}>
            <Picture pictureName="supertoroid1" width={300} />
          </Box>
          <Box position={'absolute'} zIndex={-1} top={'800px'} left={'-100px'}>
            <Picture pictureName="sphere" width={280} />
          </Box>
          <Box
            position={'absolute'}
            zIndex={-1}
            top={'1550px'}
            right={'-100px'}
          >
            <Picture pictureName="cone" width={280} />
          </Box>
          {children}
        </Flex>
      </Layout>
    </>
  )
}

export default MainBlackBackgroundLayout
