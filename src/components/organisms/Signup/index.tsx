'use client'

import React, { useState } from 'react'
import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import RequestButton from 'components/molecules/Button/RequestButton.tsx'
import SelectButton from 'components/molecules/Button/SelectButton.tsx'
import { HyperLinkButton, Input } from 'components/molecules/index.ts'

const Signup = () => {
  // 구직자 또는 재직자 여부를 추적하는 상태
  const [roleType, setRoleType] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [checkPassword, setCheckPassword] = useState<string>('')
  const [company, setCompany] = useState<string>('')

  const handleUserTypeChange = (type: string) => {
    setRoleType(type)
  }

  const handleSignup = async () => {
    try {
      if (!email || !password || !checkPassword || !roleType) {
        console.error('모든 필드를 작성하세요.')
        return
      }

      if (password !== checkPassword) {
        console.error('비밀번호가 일치하지 않습니다.')
        return
      }

      const data = {
        email,
        password,
        roleType,
        company: roleType === 'WORKER' ? company : undefined,
      }

      const response = await fetch('http://api.career-up.live:8080/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      console.log(response.status)

      if (response.ok) {
        console.log('회원가입 성공!')
        window.location.reload()
      } else {
        console.error('회원가입 실패:', await response.json())
      }
    } catch (error) {
      console.error('회원가입 중 오류 발생:', error)
    }
  }

  return (
    <Flex
      backgroundColor={'white'}
      alignItems={'center'}
      flexDirection={'column'}
      width={'88.325vw'}
      maxWidth={'500px'}
      height={'600px'}
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
          <Input
            name="email"
            type="text"
            placeholder="이메일"
            hasBorder
            onChange={(e) => setEmail(e.target.value)}
          />
        </Flex>
        {/* 비밀번호 */}
        <Flex marginBottom={'20px'}>
          <Input
            name="password"
            type="text"
            placeholder="비밀번호"
            hasBorder
            onChange={(e) => setPassword(e.target.value)}
          />
        </Flex>
        {/* 비밀번호 재확인 */}
        <Flex marginBottom={'20px'}>
          <Input
            name="checkPassword"
            type="text"
            placeholder="비밀번호 재확인"
            hasBorder
            onChange={(e) => setCheckPassword(e.target.value)}
          />
        </Flex>
        {/* 구직자, 재직자 */}
        <Flex marginBottom={'20px'} justifyContent="center">
          <Text fontSize={{ base: 'small', sm: 'medium' }}>
            구직자인가요? 재직자인가요?
          </Text>
        </Flex>
        <Flex marginBottom={'15px'} gap={'10px'} width={'100%'}>
          <SelectButton
            width={'50%'}
            borderRadius={'8px'}
            onClick={() => handleUserTypeChange('SEEKER')}
          >
            구직자
          </SelectButton>
          <SelectButton
            width={'50%'}
            borderRadius={'8px'}
            onClick={() => handleUserTypeChange('WORKER')}
          >
            재직자
          </SelectButton>
        </Flex>
        {/* 소속 */}
        {roleType === 'WORKER' && (
          <Flex marginBottom={'45px'}>
            <Input
              name="company"
              type="text"
              placeholder="소속"
              hasBorder
              onChange={(e) => setCompany(e.target.value)}
            />
          </Flex>
        )}
      </Flex>

      <Flex
        flexDirection={'column'}
        alignItems={'center'}
        width={'73.53vw'}
        maxWidth={'400px'}
      >
        <Flex marginBottom={'15px'} width={'100%'}>
          <RequestButton onClick={handleSignup}>회원가입</RequestButton>
        </Flex>

        <Flex width={'100%'} justifyContent="center">
          <HyperLinkButton
            to="/login"
            variant="clear"
            contents="로그인하기"
            isTransparent={true}
          ></HyperLinkButton>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Signup
