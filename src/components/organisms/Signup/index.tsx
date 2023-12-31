'use client'

import React, { useState } from 'react'
import styles from '../../molecules/Button/HyperLinkButton.module.css'
import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import RequestButton from 'components/molecules/Button/RequestButton.tsx'
import SelectButton from 'components/molecules/Button/SelectButton.tsx'
import { ButtonVariant } from 'components/molecules/Button/index.tsx'
import { HyperLinkButton, Input } from 'components/molecules/index.ts'
import { successAlert, warningAlert } from 'lib/sweetAlert.tsx'

const Signup = () => {
  //const [errorMessage, setErrorMessage] = useState<string>('')
  //const [successMessage, setSuccessMessage] = useState<string>('')

  const [roleType, setRoleType] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [checkPassword, setCheckPassword] = useState<string>('')
  const [company, setCompany] = useState<string>('')
  const [selectedUserType, setSelectedUserType] = useState<string>('')
  const [seekerVariant, setSeekerVariant] = useState<ButtonVariant>('white')
  const [workerVariant, setWorkerVariant] = useState<ButtonVariant>('white')

  const handleUserTypeChange = (type: string) => {
    setRoleType(type)
    setSelectedUserType(type)

    if (type === 'SEEKER') {
      setSeekerVariant('primary')
      setWorkerVariant('white')
    } else if (type === 'WORKER') {
      setSeekerVariant('white')
      setWorkerVariant('primary')
    }
  }

  const handleSignup = async () => {
    try {
      // 이메일 유효성 검사
      if (!/^[a-zA-Z0-9-_]+@[a-zA-Z0-9]+\.[A-Za-z]{2,4}$/.test(email)) {
        warningAlert(
          '회원가입 실패',
          '올바른 이메일 주소를 입력하세요.',
          '확인',
        )
        return
      }

      // 비밀번호 유효성 검사
      if (!/^[a-zA-Z0-9-_]+$/.test(password)) {
        warningAlert(
          '회원가입 실패',
          '비밀번호는 영문자, 숫자, 대시, 언더스코어만 허용됩니다.',
          '확인',
        )
        return
      }

      if (!email || !password || !checkPassword || !roleType) {
        warningAlert('회원가입 실패', '모든 필드를 작성하세요.', '확인')
        return
      }

      if (password !== checkPassword) {
        warningAlert('회원가입 실패', '비밀번호가 일치하지 않습니다.', '확인')
        return
      }

      //setErrorMessage('')

      const data = {
        email,
        password,
        roleType,
        company: roleType === 'WORKER' ? company : undefined,
      }

      const response = await fetch('https://api.career-up.live:8080/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        successAlert(
          '회원가입 성공',
          '회원가입이 완료되었습니다!',
          '확인',
        ).then(() => {
          window.location.href = '/login'
        })
        setEmail('')
        setPassword('')
        setCheckPassword('')
        setCompany('')
        //window.location.href = '/login'
      } else {
        //setErrorMessage(`회원가입 실패: ${await response.json()}`)
      }
    } catch (error) {
      //setErrorMessage(`회원가입 중 오류 발생: ${error}`)
    }
  }

  return (
    <Flex
      backgroundColor={'white'}
      alignItems={'center'}
      flexDirection={'column'}
      width={'88.325vw'}
      maxWidth={'500px'}
      height={'fit-content'}
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
            type="password"
            placeholder="비밀번호"
            hasBorder
            onChange={(e) => setPassword(e.target.value)}
          />
        </Flex>
        {/* 비밀번호 재확인 */}
        <Flex marginBottom={'20px'}>
          <Input
            name="checkPassword"
            type="password"
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
            variant={seekerVariant}
            isSelected={selectedUserType === 'SEEKER'}
            onClick={() => handleUserTypeChange('SEEKER')}
          >
            구직자
          </SelectButton>
          <SelectButton
            width={'50%'}
            borderRadius={'8px'}
            variant={workerVariant}
            isSelected={selectedUserType === 'WORKER'}
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
        {/* 오류 메시지 (구직자 선택 시)
        {errorMessage && roleType === 'SEEKER' && (
          <Flex marginBottom="10px">
            <Text color={'red'} fontSize="extraSmall">
              {errorMessage}
            </Text>
          </Flex>
        )}

        {/* 성공 메시지 (구직자 선택 시) */}
        {/* {successMessage && roleType === 'SEEKER' && (
          <Flex marginBottom="10px">
            <Text color={'green'} fontSize="extraSmall">
              {successMessage}
            </Text>
          </Flex>
        )} */}

        {/* 오류 메시지 (재직자 선택 시) */}
        {/* {errorMessage && roleType === 'WORKER' && (
          <Flex marginTop="-30px" marginBottom="10px">
            <Text color={'red'} fontSize="extraSmall">
              {errorMessage}
            </Text>
          </Flex>
        )} */}

        {/* 성공 메시지 (재직자 선택 시) */}
        {/* {successMessage && roleType === 'WORKER' && (
          <Flex marginTop="-30px" marginBottom="10px">
            <Text color={'green'} fontSize="extraSmall">
              {successMessage}
            </Text>
          </Flex>
        )} */}

        <Flex marginBottom={'15px'} width={'100%'}>
          <RequestButton onClick={handleSignup} hasBorder>
            <Text
              fontSize={{ base: 'extraSmall', md: 'small' }}
              className={styles.text}
            >
              회원가입
            </Text>
          </RequestButton>
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
