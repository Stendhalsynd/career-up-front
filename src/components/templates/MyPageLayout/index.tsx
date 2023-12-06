import Picture from 'components/atoms/Picture/index.tsx'
import { Box, Flex } from 'components/layout/index.ts'
import Layout from 'components/templates/Layout/index.tsx'

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
            height={'fit-content'}
            minHeight={'190px'}
            flexDirection={'column'}
            justifyContent={'center'}
            position={'relative'}
            overflow={'hidden'}
            style={{ transition: '1s' }}
          >
            <Box position={'absolute'} top={'367px'} left={'-10px'}>
              <Picture pictureName="supertoroid2" width={143} />
            </Box>
            <Box
              position={'absolute'}
              right={{ sm: '-60px', md: '100px' }}
              bottom={'1600px'}
              width={{ base: '200px', md: '252px' }}
              display={{ base: 'none', sm: 'block' }}
            >
              <Picture pictureName="cube" width={252} />
            </Box>
            <Box
              position={'absolute'}
              right={'50px'}
              top={'500px'}
              width={{ sm: '200px', md: '252px' }}
              display={{ base: 'none', sm: 'block' }}
            >
              <Picture pictureName="supertoroid1" width={252} />
            </Box>
            {children}
          </Flex>
        </Flex>
      </Layout>
    </>
  )
}

export default MyPageLayout
