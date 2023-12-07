'use client'

import Picture from 'components/atoms/Picture/index.tsx'
import { Box, Flex } from 'components/layout/index.ts'
import Layout from 'components/templates/Layout/index.tsx'
import FloatingComponent from 'containers/FloatingContainer/index.tsx'

interface MyPageLayoutProps {
  children: React.ReactNode
}

const MyPageLayout = ({ children }: MyPageLayoutProps) => {
  return (
    <>
      <Layout>
        <Flex
          width={'100%'}
          height={'fit-content'}
          minHeight={'190px'}
          position={'relative'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Flex
            width={{ base: '95%', sm: '99%', md: '100%' }}
            maxWidth={'1200px'}
            height={'fit-content'}
            minHeight={'190px'}
            flexDirection={'column'}
            justifyContent={'center'}
            position={'relative'}
            overflow={'hidden'}
            style={{ transition: '1s' }}
          >
            <Box position={'absolute'} top={'367px'} left={'10px'}>
              <FloatingComponent>
                <Picture pictureName="supertoroid2" width={300} />
              </FloatingComponent>
            </Box>
            <Box
              position={'absolute'}
              right={{ sm: '-60px', md: '100px' }}
              bottom={'1600px'}
              width={{ base: '200px', md: '252px' }}
              display={{ base: 'none', sm: 'block' }}
            >
              <FloatingComponent>
                <Picture pictureName="cube" width={252} />
              </FloatingComponent>
            </Box>
            <Box
              position={'absolute'}
              right={'50px'}
              top={'500px'}
              width={{ sm: '200px', md: '252px' }}
              display={{ base: 'none', sm: 'block' }}
            >
              <FloatingComponent>
                <Picture pictureName="supertoroid3" width={300} />
              </FloatingComponent>
            </Box>
            {children}
          </Flex>
        </Flex>
      </Layout>
    </>
  )
}

export default MyPageLayout
