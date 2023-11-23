'use client'

import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import RequestButton from 'components/molecules/Button/RequestButton.tsx'
import SelectButton from 'components/molecules/Button/SelectButton.tsx'
import { Input } from 'components/molecules/index.ts'

// TODO: Flex 컴포넌트에 box-shadow, maxWidth, gap 속성 추가해야 한다.
// TODO: Button 컴포넌트에 maxWidth 속성 추가해야 한다.
const Signup = () => {
  return (
    <Flex
      backgroundColor={'white'}
      alignItems={'center'}
      flexDirection={'column'}
      width={{ base: '88.325vw', sm: '500px' }}
      height={'660px'}
      padding={'15px'}
      borderRadius={'30px'}
      border={'1px solid black'}
      // TODO: border 대신에 box-shadow를 넣어야 한다.
    >
      <Text marginTop={'20px'} marginBottom={'45px'}>
        회원가입
      </Text>

      <Flex flexDirection={'column'} width={{ base: '73.53vw', sm: '400px' }}>
        {/* 이메일 */}
        <Flex marginBottom={'20px'}>
          <Input name="email" type="text" placeholder="이메일" hasBorder />
        </Flex>
        {/* 비밀번호 */}
        <Flex marginBottom={'20px'}>
          <Input name="password" type="text" placeholder="비밀번호" hasBorder />
        </Flex>
        {/* 비밀번호 재확인 */}
        <Flex marginBottom={'20px'}>
          <Input
            name="checkPassword"
            type="text"
            placeholder="비밀번호 재확인"
            hasBorder
          />
        </Flex>
        {/* 구직자, 재직자 */}
        <Flex marginBottom={'20px'}>
          <Text fontSize={{ base: 'small', sm: 'medium' }}>
            구직자인가요? 재직자인가요?
          </Text>
        </Flex>
        <Flex justifyContent={'space-evenly'} marginBottom={'15px'}>
          <SelectButton
            // width={{ base: '35.29vw', sm: '175px' }}
            // height={'48px'}
            borderRadius={'8px'}
          >
            구직자
          </SelectButton>
          <SelectButton
            // width={{ base: '35.29vw', sm: '175px' }}
            // height={'48px'}
            borderRadius={'8px'}
          >
            재직자
          </SelectButton>
        </Flex>
        {/* 소속 */}
        <Flex marginBottom={'45px'}>
          <Input name="" type="text" placeholder="비밀번호" hasBorder />
        </Flex>
      </Flex>

      <Flex flexDirection={'column'} alignItems={'center'}>
        <Flex marginBottom={'15px'}>
          <RequestButton
          // width={{ base: '73.53vw', sm: '400px' }}
          // height={'50px'}
          >
            회원가입
          </RequestButton>
        </Flex>

        <Flex>
          <RequestButton
            variant="clear"
            // width={{ base: '73.53vw', sm: '400px' }}
            // height={'50px'}
          >
            로그인하기
          </RequestButton>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Signup
