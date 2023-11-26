'use client'

import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import RequestButton from 'components/molecules/Button/RequestButton.tsx'
import SelectButton from 'components/molecules/Button/SelectButton.tsx'
import { Input } from 'components/molecules/index.ts'

const Signup = () => {
  return (
    <Flex
      backgroundColor={'white'}
      alignItems={'center'}
      flexDirection={'column'}
      width={{ base: '88.325vw' }}
      maxWidth={'500px'}
      height={'660px'}
      padding={'15px'}
      borderRadius={'30px'}
      boxShadow={'0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}
    >
      <Text marginTop={'20px'} marginBottom={'45px'}>
        회원가입
      </Text>

      <Flex
        flexDirection={'column'}
        width={{ base: '73.53vw' }}
        maxWidth={'400px'}
      >
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
        <Flex marginBottom={'15px'} gap={'10px'}>
          <SelectButton borderRadius={'8px'}>구직자</SelectButton>
          <SelectButton borderRadius={'8px'}>재직자</SelectButton>
        </Flex>
        {/* 소속 */}
        <Flex marginBottom={'45px'}>
          <Input name="" type="text" placeholder="비밀번호" hasBorder />
        </Flex>
      </Flex>

      <Flex
        flexDirection={'column'}
        alignItems={'center'}
        width={'73.53vw'}
        maxWidth={'400px'}
      >
        <Flex marginBottom={'15px'} width={'100%'}>
          <RequestButton>회원가입</RequestButton>
        </Flex>

        <Flex width={'100%'}>
          <RequestButton variant="clear">로그인하기</RequestButton>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Signup
