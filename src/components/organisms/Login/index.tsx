'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import RequestButton from 'components/molecules/Button/RequestButton.tsx'
import { HyperLinkButton, Input } from 'components/molecules/index.ts'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLogin = async () => {
    console.log(email, password)
    try {
      await fetch('http://api.career-up.live:8080/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      }).then(async (res) => {
        console.log(await res.text())
      })
    } catch (error) {
      console.error('로그인 중 오류 발생:', error)
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
            type="text"
            placeholder="비밀번호"
            hasBorder
            onChange={(e) => setPassword(e.target.value)}
          />
        </Flex>
      </Flex>

      <Flex flexDirection={'column'} alignItems={'center'} width={'100%'}>
        <Flex marginBottom={'15px'} width={'73.53vw'} maxWidth={'400px'}>
          <RequestButton onClick={handleLogin}>로그인</RequestButton>
        </Flex>
        <Flex>
          <Link href="/signup">
            <HyperLinkButton
              to="/signup"
              variant="clear"
              contents="회원가입하기"
              isTransparent={true}
            />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Login
