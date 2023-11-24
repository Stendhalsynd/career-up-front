'use client'

import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import RequestButton from 'components/molecules/Button/RequestButton.tsx'
import { Input } from 'components/molecules/index.ts'

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
      boxShadow={'0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}
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
        <Flex marginBottom={'15px'} width={'73.53vw'} maxWidth={'400px'}>
          <RequestButton>로그인</RequestButton>
        </Flex>
        <Flex>
          <RequestButton variant="clear">회원가입하기</RequestButton>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Login
