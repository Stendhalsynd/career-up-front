'use client'

import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import { HyperLinkButton } from 'components/molecules/index.ts'
import AosContainer from 'containers/AosContainer/index.tsx'
// import AosContainer from 'containers/AosContainer/index.tsx'
import { Desktop, Mobile, Tablet } from 'lib/useMediaQuery.tsx'

// 커리업 홍보 멘트 + 가입하기(회원가입 페이지로 넘어가는 버튼)
const PromoteTextContainer = () => {
  return (
    <>
      {/* 모바일 */}
      <Mobile>
        <Flex flexDirection={'column'} gap={'20px'} alignItems={'center'}>
          <AosContainer dataAos="fade-down">
            <Flex flexDirection="column" gap={'5px'}>
              <Text
                fontSize={'mediumLarge'}
                fontWeight={'700'}
                lineHeight={5}
                color={'white'}
                textAlign={'center'}
              >
                커리업에서 재직자와
              </Text>
              <Text
                fontSize={'mediumLarge'}
                fontWeight={'700'}
                lineHeight={5}
                color={'white'}
                textAlign={'center'}
              >
                1:1 상담을 통해
              </Text>
              <Text
                fontSize={'mediumLarge'}
                fontWeight={'700'}
                lineHeight={5}
                color={'white'}
                textAlign={'center'}
              >
                당신의 미래를
              </Text>
              <Text
                fontSize={'mediumLarge'}
                fontWeight={'700'}
                lineHeight={5}
                color={'white'}
                textAlign={'center'}
              >
                디자인하세요.
              </Text>
            </Flex>
          </AosContainer>
          <AosContainer dataAos="zoom-in">
            <HyperLinkButton contents="가입하기" to="/signup"></HyperLinkButton>
          </AosContainer>
        </Flex>
      </Mobile>

      {/* 태블릿 */}
      <Tablet>
        <Flex flexDirection={'column'} gap={'40px'} alignItems={'center'}>
          <AosContainer dataAos="fade-down">
            <Flex flexDirection={'column'} gap={'10px'}>
              <Text
                fontSize={'mediumLarge'}
                fontWeight={'700'}
                lineHeight={5}
                color={'white'}
                textAlign={'center'}
              >
                커리업에서 재직자와 1:1 상담을 통해
              </Text>
              <Text
                fontSize={'mediumLarge'}
                fontWeight={'700'}
                lineHeight={5}
                color={'white'}
                textAlign={'center'}
              >
                당신의 미래를 디자인하세요.
              </Text>
            </Flex>
          </AosContainer>
          <AosContainer dataAos="zoom-in">
            <HyperLinkButton contents="가입하기" to="/signup"></HyperLinkButton>
          </AosContainer>
        </Flex>
      </Tablet>

      {/* 데스크탑 */}
      <Desktop>
        <Flex flexDirection={'column'} gap={'50px'} alignItems={'center'}>
          <AosContainer dataAos="zoom-in">
            <Flex flexDirection={'column'} gap={'10px'}>
              <Text
                fontSize={'mediumLarge'}
                fontWeight={'700'}
                lineHeight={5}
                color={'white'}
                textAlign={'center'}
              >
                커리업에서 재직자와 1:1 상담을 통해
              </Text>
              <Text
                fontSize={'mediumLarge'}
                fontWeight={'700'}
                lineHeight={5}
                color={'white'}
                textAlign={'center'}
              >
                당신의 미래를 디자인하세요.
              </Text>
            </Flex>
          </AosContainer>
          <AosContainer dataAos="zoom-in">
            <HyperLinkButton contents="가입하기" to="/signup"></HyperLinkButton>
          </AosContainer>
        </Flex>
      </Desktop>
    </>
  )
}

export default PromoteTextContainer
