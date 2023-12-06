'use client'

import axios from 'axios'
import React, { useState } from 'react'
import styles from '../../molecules/Button/RequestButton.module.css'
import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import RequestButton from 'components/molecules/Button/RequestButton.tsx'
import { HyperLinkButton, Input } from 'components/molecules/index.ts'
import { successAlert, warningAlert } from 'lib/sweetAlert.tsx'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleLogin = async () => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://api.career-up.live:8080/signin',
        data: { email, password },
      })

      if (response.data !== 'no') {
        localStorage.setItem('token', response.data)
        successAlert('로그인 성공', '환영합니다!', '확인').then(() => {
          window.location.href = '/'
        })
      } else {
        setErrorMessage('이메일 또는 비밀번호가 올바르지 않습니다.')
      }
    } catch (error) {
      warningAlert('로그인 실패', '로그인 중 오류가 발생했습니다.', '확인')
    }
  }

  return (
    <Flex
      backgroundColor={'white'}
      alignItems={'center'}
      flexDirection={'column'}
      width={'88.325vw'}
      maxWidth={'500px'}
      height={'430px'}
      padding={'30px'}
      borderRadius={'30px'}
      boxShadow={'0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}
    >
      <Text marginBottom={'60px'}>로그인</Text>

      <Flex
        flexDirection={'column'}
        width={'73.53vw'}
        maxWidth={'400px'}
        marginBottom={'60px'}
      >
        <Flex marginBottom={'15px'}>
          <Input
            name="email"
            type="text"
            placeholder="이메일"
            hasBorder
            onChange={(e) => setEmail(e.target.value)}
          />
        </Flex>
        <Flex>
          <Input
            name="password"
            type="password"
            placeholder="비밀번호"
            hasBorder
            onChange={(e) => setPassword(e.target.value)}
          />
        </Flex>
      </Flex>

      <Flex flexDirection={'column'} alignItems={'center'} width={'100%'}>
        {errorMessage && (
          <Flex marginBottom="20px" marginTop="-30px">
            <Text color={'red'} fontSize="extraSmall">
              {errorMessage}{' '}
            </Text>
          </Flex>
        )}

        <Flex marginBottom={'15px'} width={'73.53vw'} maxWidth={'400px'}>
          <RequestButton onClick={handleLogin} hasBorder>
            <Text variant={'extraSmall'} className={styles.text}>
              로그인
            </Text>
          </RequestButton>
        </Flex>
        <Flex>
          <HyperLinkButton
            to="/signup"
            variant="clear"
            contents="회원가입하기"
            isTransparent={true}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Login
