'use client'

import { Logo, Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import AosContainer from 'containers/AosContainer/index.tsx'
import { Desktop, Mobile, Tablet } from 'lib/useMediaQuery.tsx'

// 서비스 소개 컨테이너
const IntroTextContainer = () => {
  return (
    <>
      {/* 모바일 */}
      <Mobile>
        <AosContainer dataAos="fade-up">
          <Flex width={'100%'} justifyContent={'center'}>
            <Flex flexDirection={'column'} gap={'20px'} alignItems={'center'}>
              <Flex flexDirection="column" gap={'5px'}>
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
              <Logo width={250} />
              <Flex flexDirection={'column'} gap={'5px'}>
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
        </AosContainer>
      </Mobile>

      {/* 태블릿 */}
      <Tablet>
        <AosContainer dataAos="fade-up">
          <Flex width={'100%'} justifyContent={'center'}>
            <Flex
              flexDirection={'column'}
              width={'80vw'}
              height={'fit-content'}
              gap={'20px'}
              alignItems={'center'}
            >
              <Text
                fontSize={'large'}
                fontWeight={'700'}
                lineHeight={5}
                color={'white'}
                textAlign={'center'}
                style={{ wordBreak: 'keep-all' }}
              >
                개발자 커리어의 성공을 위한 동반자
              </Text>

              <Logo width={400} />

              <Text
                variant="mediumLargeBold"
                color={'white'}
                lineHeight={3}
                textAlign={'left'}
              >
                1:1 화상채팅 개발자 커리어 상담 서비스
              </Text>
            </Flex>
          </Flex>
        </AosContainer>
      </Tablet>

      {/* 데스크탑 */}
      <Desktop>
        <AosContainer dataAos="fade-up">
          <Flex width={'100%'} justifyContent={'center'}>
            <Flex
              flexDirection={'column'}
              width={'75vw'}
              height={'fit-content'}
              gap={'20px'}
              alignItems={'center'}
            >
              <Text
                fontSize={'large'}
                fontWeight={'700'}
                lineHeight={5}
                color={'white'}
                textAlign={'center'}
              >
                개발자 커리어의 성공을 위한 동반자
              </Text>

              <Logo width={400} />

              <Text
                variant="mediumLargeBold"
                color={'white'}
                lineHeight={3}
                textAlign={'center'}
              >
                1:1 화상채팅 개발자 커리어 상담 서비스
              </Text>
            </Flex>
          </Flex>
        </AosContainer>
      </Desktop>
    </>
  )
}

export default IntroTextContainer
