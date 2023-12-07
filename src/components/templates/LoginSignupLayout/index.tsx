import Picture from 'components/atoms/Picture/index.tsx'
import { Logo, Text } from 'components/atoms/index.ts'
import { Box, Flex } from 'components/layout/index.ts'
import Layout from 'components/templates/Layout/index.tsx'
import FloatingComponent from 'containers/FloatingContainer/index.tsx'
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
            <Flex
              position={'relative'}
              width={'100%'}
              height={'1000px'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Box position={'absolute'} top={'700px'} left={'20px'}>
                <FloatingComponent>
                  <Picture pictureName="supertoroid2" width={250} />
                </FloatingComponent>
              </Box>
              <Box position={'absolute'} top={'80px'} right={'-50px'}>
                <FloatingComponent>
                  <Picture pictureName="cube" width={250} />
                </FloatingComponent>
              </Box>
              {children}
            </Flex>

            {/* {children} */}
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
            <Flex
              position={'relative'}
              width={'100%'}
              height={'1000px'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Box position={'absolute'} top={'700px'} left={'20px'}>
                <FloatingComponent>
                  <Picture pictureName="supertoroid2" width={300} />
                </FloatingComponent>
              </Box>
              <Box position={'absolute'} top={'80px'} right={'-50px'}>
                <FloatingComponent>
                  <Picture pictureName="cube" width={300} />
                </FloatingComponent>
              </Box>
              {children}
            </Flex>
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
                position={'relative'}
                width={'500px'}
                height={'1000px'}
                justifyContent={'center'}
              >
                {/* 텍스트 */}
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
                {/* 3d shape */}
                <Box position={'absolute'} top={'500px'} right={'10px'}>
                  <FloatingComponent>
                    <Picture pictureName="supertoroid1" width={200} />
                  </FloatingComponent>
                </Box>
                <Box position={'absolute'} top={'300px'} left={'10px'}>
                  <FloatingComponent>
                    <Picture pictureName="roundcube1" width={200} />
                  </FloatingComponent>
                </Box>
              </Flex>
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
