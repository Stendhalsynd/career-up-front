'use client'

import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import RequestButton from 'components/molecules/Button/RequestButton.tsx'
import { Input } from 'components/molecules/index.ts'

// TODO: Flex 컴포넌트에 box-shadow 속성 추가해야 한다.
// TODO: Button 컴포넌트에 maxWidth 속성 추가해야 한다.
const Login = () => {
  return (
    <Flex
      backgroundColor={'white'}
      alignItems={'center'}
      flexDirection={'column'}
      width={{ base: '88.325vw' }}
      maxWidth={'500px'}
      height={'415px'}
      padding={'30px'}
      borderRadius={'30px'}
      border={'1px solid black'}
      // TODO: border 대신에 box-shadow를 넣어야 한다.
    >
      <Text marginBottom={'60px'}>로그인</Text>

      <Flex
        flexDirection={'column'}
        width={{ base: '73.53vw' }}
        maxWidth={'400px'}
        marginBottom={'60px'}
      >
        <Flex marginBottom={'15px'}>
          <Input name="email" type="text" placeholder="이메일" hasBorder />
        </Flex>
        <Flex>
          <Input name="password" type="text" placeholder="비밀번호" hasBorder />
        </Flex>
      </Flex>

      <Flex flexDirection={'column'} alignItems={'center'} width={'100%'}>
        <Flex marginBottom={'15px'} width={'100%'}>
          <RequestButton>로그인</RequestButton>
        </Flex>
        <Flex>
          <RequestButton
            variant="clear"
            // width={{ base: '73.53vw', sm: '400px' }}
            // height={'50px'}
          >
            회원가입하기
          </RequestButton>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Login
