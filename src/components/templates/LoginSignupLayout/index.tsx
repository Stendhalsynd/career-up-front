import Picture from 'components/atoms/Picture/index.tsx'
import { Logo, Text } from 'components/atoms/index.ts'
import { Box, Flex } from 'components/layout/index.ts'
import Layout from 'components/templates/Layout/index.tsx'
import { Desktop, Mobile, Tablet } from 'lib/useMediaQuery.tsx'

interface ChildrenProps {
  children: React.ReactNode
}

const LoginSignupLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      {/* Mobile */}
      <Mobile>
        <Layout>
          <Flex
            width={'100%'}
            height={'calc(100vh - 40px)'}
            position={'relative'}
            justifyContent={'center'}
            alignItems={'center'}
            overflow={'hidden'}
          >
            <Box position={'absolute'} top={'500px'} left={'20px'}>
              <Picture pictureName="supertoroid2" width={200} />
            </Box>
            <Box position={'absolute'} top={'80px'} right={'-50px'}>
              <Picture pictureName="cube" width={230} />
            </Box>
            {children}
          </Flex>
        </Layout>
      </Mobile>
      {/* Tablet */}
      <Tablet>
        <Layout>
          <Flex
            width={'100%'}
            height={'calc(100vh - 40px)'}
            position={'relative'}
            justifyContent={'center'}
            alignItems={'center'}
            overflow={'hidden'}
          >
            <Box position={'absolute'} top={'500px'} left={'20px'}>
              <Picture pictureName="supertoroid2" width={300} />
            </Box>
            <Box position={'absolute'} top={'80px'} right={'-50px'}>
              <Picture pictureName="cube" width={300} />
            </Box>
            {children}
          </Flex>
        </Layout>
      </Tablet>
      {/* Desktop */}
      <Desktop>
        <Layout>
          <Flex height={'calc(100vh - 50px)'} overflow={'hidden'}>
            <Flex
              width={'40%'}
              backgroundColor={'black'}
              position={'relative'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Flex
                flexDirection={'column'}
                gap={'25px'}
                justifyContent={'center'}
                alignItems={'center'}
                zIndex={1}
              >
                <Text color={'white'} variant="mediumLargeBold">
                  커리어의 안내서
                </Text>
                <Logo width={250} />
                <Flex flexDirection={'column'} gap={'10px'}>
                  <Text
                    color={'white'}
                    textAlign={'center'}
                    variant="mediumBold"
                  >
                    1:1 화상채팅
                  </Text>
                  <Text
                    color={'white'}
                    textAlign={'center'}
                    variant="mediumBold"
                  >
                    개발자 커리어 상담 서비스
                  </Text>
                </Flex>
              </Flex>
              <Box position={'absolute'} top={'300px'} right={'10px'}>
                <Picture pictureName="supertoroid1" width={200} />
              </Box>
              <Box position={'absolute'} top={'100px'} left={'10px'}>
                <Picture pictureName="roundcube1" width={200} />
              </Box>
            </Flex>
            <Flex
              width={'60%'}
              backgroundColor={'lightGray'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              {children}
            </Flex>
          </Flex>
        </Layout>
      </Desktop>
    </>
  )
}

export default LoginSignupLayout
