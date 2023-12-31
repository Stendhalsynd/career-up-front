'use client'

import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import { HyperLinkButton } from 'components/molecules/index.ts'
import AosContainer from 'containers/AosContainer/index.tsx'
import { Desktop, Mobile, Tablet } from 'lib/useMediaQuery.tsx'
import { notable } from 'utils/styles.ts'

const ChatInfoContainer = () => {
  return (
    <>
      {/* 모바일 */}
      <Mobile>
        <Flex width={'100%'} justifyContent={'center'}>
          <Flex flexDirection={'column'} gap={'20px'} alignItems={'center'}>
            <AosContainer dataAos="fade-down">
              <Flex flexDirection="column" gap={'5px'}>
                <Text
                  className={notable.className}
                  color={'white'}
                  textShadow={'4px 2px 2px #0A7EFE'}
                  textAlign={'right'}
                >
                  FACE TO FACE
                </Text>
                <Text
                  className={notable.className}
                  color={'white'}
                  textShadow={'4px 2px 2px #0A7EFE'}
                  textAlign={'right'}
                >
                  INTERACTION
                </Text>
              </Flex>
            </AosContainer>
            <AosContainer dataAos="fade-down">
              <Flex flexDirection="column">
                <Flex justifyContent={'center'}>
                  <Text
                    variant="smallBold"
                    lineHeight={3}
                    color={'primary'}
                    textAlign={'center'}
                  >
                    화상채팅
                  </Text>
                  <Text
                    variant="smallBold"
                    lineHeight={3}
                    color={'white'}
                    textAlign={'center'}
                  >
                    을 통한 재직자와의 만남으로,
                  </Text>
                </Flex>
                <Text
                  variant="smallBold"
                  lineHeight={3}
                  color={'white'}
                  textAlign={'center'}
                >
                  미래를 함께 설계할 수 있어요.
                </Text>
              </Flex>
            </AosContainer>

            <AosContainer dataAos="zoom-in">
              <HyperLinkButton
                contents="커리업 하러 가기"
                to="/search"
              ></HyperLinkButton>
            </AosContainer>
          </Flex>
        </Flex>
      </Mobile>

      {/* 태블릿 */}
      <Tablet>
        <Flex
          paddingRight={'50px'}
          marginBottom={'50px'}
          justifyContent={'flex-end'}
        >
          <Flex flexDirection={'column'} alignItems={'flex-end'} gap={'50px'}>
            {/* 제목 */}
            <AosContainer dataAos="fade-left">
              <Flex flexDirection="column" gap={'20px'}>
                <Text
                  className={notable.className}
                  fontSize={'large'}
                  color={'white'}
                  textShadow={'4px 2px 2px #0A7EFE'}
                  textAlign={'right'}
                >
                  FACE TO FACE
                </Text>
                <Text
                  className={notable.className}
                  fontSize={'large'}
                  color={'white'}
                  textShadow={'4px 2px 2px #0A7EFE'}
                  textAlign={'right'}
                >
                  INTERACTION
                </Text>
              </Flex>
            </AosContainer>
            {/* 내용 */}
            <AosContainer dataAos="fade-left">
              <Flex flexDirection="column" gap={'20px'}>
                <Flex justifyContent={'center'}>
                  <Text
                    variant="mediumLargeBold"
                    lineHeight={3}
                    color={'primary'}
                  >
                    화상채팅
                  </Text>
                  <Text
                    variant="mediumLargeBold"
                    lineHeight={3}
                    color={'white'}
                  >
                    을 통한 재직자와의 만남으로,
                  </Text>
                </Flex>
                <Text
                  variant="mediumLargeBold"
                  lineHeight={3}
                  color={'white'}
                  textAlign={'right'}
                >
                  미래를 함께 설계할 수 있어요.
                </Text>
              </Flex>
            </AosContainer>
            <AosContainer dataAos="fade-up-left">
              <HyperLinkButton
                contents="커리업 하러 가기"
                to="/search"
              ></HyperLinkButton>
            </AosContainer>
          </Flex>
        </Flex>
      </Tablet>

      {/* 데스크탑 */}
      <Desktop>
        <Flex width={'100%'} paddingRight={'50px'} justifyContent={'flex-end'}>
          <Flex flexDirection={'column'} gap={'50px'} alignItems={'flex-end'}>
            {/* 제목 */}
            <AosContainer dataAos="fade-left">
              <Flex flexDirection="column" gap={'20px'}>
                <Text
                  className={notable.className}
                  fontSize={'large'}
                  color={'white'}
                  textShadow={'4px 2px 2px #0A7EFE'}
                  textAlign={'right'}
                >
                  FACE TO FACE
                </Text>
                <Text
                  className={notable.className}
                  fontSize={'large'}
                  color={'white'}
                  textShadow={'4px 2px 2px #0A7EFE'}
                  textAlign={'right'}
                >
                  INTERACTION
                </Text>
              </Flex>
            </AosContainer>
            {/* 내용 */}
            <AosContainer dataAos="fade-left">
              <Flex flexDirection="column" gap={'20px'}>
                <Flex justifyContent={'center'}>
                  <Text
                    variant="mediumLargeBold"
                    lineHeight={3}
                    color={'primary'}
                  >
                    화상채팅
                  </Text>
                  <Text
                    variant="mediumLargeBold"
                    lineHeight={3}
                    color={'white'}
                  >
                    을 통한 재직자와의 만남으로,
                  </Text>
                </Flex>
                <Text
                  variant="mediumLargeBold"
                  lineHeight={3}
                  color={'white'}
                  textAlign={'right'}
                >
                  미래를 함께 설계할 수 있어요.
                </Text>
              </Flex>
            </AosContainer>
            <AosContainer dataAos="fade-up-left">
              <HyperLinkButton
                contents="커리업 하러 가기"
                to="/search"
              ></HyperLinkButton>
            </AosContainer>
          </Flex>
        </Flex>
      </Desktop>
    </>
  )
}

export default ChatInfoContainer
