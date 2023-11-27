'use client'

import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import { HyperLinkButton } from 'components/molecules/index.ts'
import { Mobile, Tablet } from 'lib/useMediaQuery.tsx'

// 커리업 홍보 멘트 + 가입하기(회원가입 페이지로 넘어가는 버튼)
const PromoteTextContainer = () => {
  return (
    <>
      <Mobile>
        <Flex flexDirection={'column'} gap={'20px'} alignItems={'center'}>
          <Flex flexDirection="column">
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

          <HyperLinkButton contents="가입하기" to=""></HyperLinkButton>
        </Flex>
      </Mobile>
      <Tablet>
        <Flex flexDirection={'column'} gap={'20px'} alignItems={'center'}>
          <Flex flexDirection="column">
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

          <HyperLinkButton contents="가입하기" to=""></HyperLinkButton>
        </Flex>
      </Tablet>
    </>
  )
}

export default PromoteTextContainer
