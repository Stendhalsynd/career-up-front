'use client'

import { Logo, Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import { Mobile, Tablet } from 'lib/useMediaQuery.tsx'

// 서비스 소개 컨테이너
const IntroTextContainer = () => {
  return (
    <>
      <Mobile>
        <Flex width={'100%'} paddingTop={'100px'} justifyContent={'center'}>
          <Flex
            flexDirection={'column'}
            width={'75vw'}
            height={'fit-content'}
            gap={'20px'}
            alignItems={'center'}
          >
            <Flex flexDirection="column">
              <Text
                fontSize={'mediumLarge'}
                fontWeight={'700'}
                lineHeight={5}
                color={'white'}
                textAlign={'center'}
              >
                개발자 커리어의
              </Text>

              <Text
                fontSize={'mediumLarge'}
                fontWeight={'700'}
                lineHeight={5}
                color={'white'}
                textAlign={'center'}
              >
                성공을 위한 동반자
              </Text>
            </Flex>
            <Logo />
            <Flex flexDirection={'column'}>
              <Text
                variant="smallBold"
                color={'white'}
                lineHeight={3}
                textAlign={'center'}
              >
                1:1 화상채팅
              </Text>
              <Text
                variant="smallBold"
                color={'white'}
                lineHeight={3}
                textAlign={'center'}
              >
                개발자 커리어 상담 서비스
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Mobile>
      <Tablet>
        <Flex width={'100%'} paddingTop={'100px'} justifyContent={'center'}>
          <Flex
            flexDirection={'column'}
            width={'75vw'}
            height={'fit-content'}
            gap={'20px'}
            alignItems={'center'}
          >
            <Flex flexDirection="column">
              <Text
                fontSize={'mediumLarge'}
                fontWeight={'700'}
                lineHeight={5}
                color={'white'}
                textAlign={'center'}
              >
                개발자 커리어의
              </Text>

              <Text
                fontSize={'mediumLarge'}
                fontWeight={'700'}
                lineHeight={5}
                color={'white'}
                textAlign={'center'}
              >
                성공을 위한 동반자
              </Text>
            </Flex>
            <Logo />
            <Flex flexDirection={'column'}>
              <Text
                variant="smallBold"
                color={'white'}
                lineHeight={3}
                textAlign={'center'}
              >
                1:1 화상채팅
              </Text>
              <Text
                variant="smallBold"
                color={'white'}
                lineHeight={3}
                textAlign={'center'}
              >
                개발자 커리어 상담 서비스
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Tablet>
    </>
  )
}

export default IntroTextContainer
