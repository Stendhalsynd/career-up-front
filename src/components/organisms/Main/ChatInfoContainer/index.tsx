'use client'

import Picture from 'components/atoms/Picture/index.tsx'
import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import { HyperLinkButton } from 'components/molecules/index.ts'
import { Mobile, Tablet } from 'lib/useMediaQuery.tsx'
import { notable } from 'utils/styles.ts'

const ChatInfoContainer = () => {
  return (
    <>
      <Mobile>
        <Flex width={'100%'} justifyContent={'center'}>
          <Flex flexDirection={'column'} gap={'20px'} alignItems={'center'}>
            <Flex flexDirection="column">
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
            <Flex width={'100vw'} justifyContent={'start'}>
              <Picture pictureName="workvideoconference" width={200}></Picture>
            </Flex>

            <HyperLinkButton
              width={'fit-content'}
              height={'fit-content'}
              contents="커리업 하러 가기"
              to=""
            ></HyperLinkButton>
          </Flex>
        </Flex>
      </Mobile>
      <Tablet>
        <Flex width={'100%'} justifyContent={'center'}>
          <Flex flexDirection={'column'} gap={'20px'} alignItems={'center'}>
            <Flex flexDirection="column">
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
            <Flex width={'100vw'} justifyContent={'start'}>
              <Picture pictureName="workvideoconference" width={200}></Picture>
            </Flex>

            <HyperLinkButton
              width={'fit-content'}
              height={'fit-content'}
              contents="커리업 하러 가기"
              to=""
            ></HyperLinkButton>
          </Flex>
        </Flex>
      </Tablet>
    </>
  )
}

export default ChatInfoContainer
