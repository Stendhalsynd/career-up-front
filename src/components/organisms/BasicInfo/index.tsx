'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Picture from 'components/atoms/Picture/index.tsx'
import { Avatar, Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import SelectButton from 'components/molecules/Button/SelectButton.tsx'
import { InfoBlock } from 'components/molecules/Input/index.tsx'
import { RequestButton } from 'components/molecules/index.ts'
interface User {
  profile: string
  nickname: string
  email: string
  password: string
  company: string
  contents: string
  roleType: string
  fields: string
  skills: string
}
export interface BasicInfoProps {
  isUser: boolean
}
export const BasicInfo: React.FC<BasicInfoProps> = (props) => {
  const { isUser } = props
  const [userData, setUserData] = useState<User | null>(null)
  const [editedPassword, setEditedPassword] = useState('')
  // const [editedCompany, setEditedCompany] = useState('')
  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        'https://api.career-up.live:8080/mypage',
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
      console.log(response)
      setUserData(response.data)
      setEditedPassword(response.data.password)
      // setEditedCompany(response.data.company)
    } catch (error) {
      console.error('사용자 데이터를 가져오는 중 오류 발생:', error)
    }
  }
  const handleSaveClick = async () => {
    try {
      const data = {
        password: editedPassword,
      }
      const formData = new FormData()
      formData.append(
        'user',
        new Blob([JSON.stringify(data)], { type: 'application/json' }),
      )
      console.log(data)

      const response = await axios({
        method: 'patch',
        url: 'https://api.career-up.live:8080/mypage',
        data: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log(response)
      console.log(
        '사용자 데이터가 성공적으로 업데이트되었습니다:',
        response.data,
      )
    } catch (error) {
      console.error('[ERROR] 사용자 데이터 업데이트 중 오류 발생:', error)
    }
  }
  useEffect(() => {
    fetchUserData()
  }, [])
  if (!userData) {
    return <div>로딩 중...</div>
  }
  return (
    <Flex width={'100%'} justifyContent={'center'} paddingBottom={'50px'}>
      <Flex
        flexDirection={'row'}
        justifyContent={{ base: 'center', sm: 'flex-start' }}
        padding={'61px 60px 0 60px'}
        gap={'52px'}
        width={'100%'}
        maxWidth={'1000px'}
      >
        <Flex
          flexDirection={'column'}
          alignItems={'flex-start'}
          width={'100%'}
          maxWidth={{ base: '100%', sm: '350px' }}
        >
          <Text color={'white'} variant="mediumLargeBold">
            회원 정보 수정
          </Text>
          <Flex
            flexDirection={'column'}
            alignContent={'flex-start'}
            marginTop={'30px'}
            width={'100%'}
          >
            <Text color={'white'} variant={'smallBold'}>
              프로필 이미지
            </Text>
            <Flex gap={'33px'} marginTop={'23px'}>
              <Avatar avatarName="avatar" width={80} />
              <Flex
                width={'100%'}
                height={'100%'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <SelectButton variant="dark" maxWidth={'200px'}>
                  변경
                </SelectButton>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            width={'100%'}
            maxWidth={{ base: '100%', sm: '400px' }}
            gap={'20px'}
            flexDirection={'column'}
            marginTop={'34px'}
          >
            {
              <InfoBlock
                text="닉네임"
                placeholder={userData.nickname}
                readOnly={true}
              />
            }
            {
              <InfoBlock
                text="이메일"
                placeholder={userData.email}
                readOnly={true}
              />
            }
            {
              <InfoBlock
                text="비밀번호"
                placeholder={userData.password}
                onChange={(e) => setEditedPassword(e.target.value)}
                readOnly={false}
              />
            }
            {
              <InfoBlock
                text="소속"
                placeholder={userData.company}
                readOnly={false}
                // onChange={(e) => setEditedCompany(e.target.value)}
              />
            }
            <Flex
              justifyContent={'center'}
              marginTop={'15px'}
              display={isUser ? 'flex' : 'none'}
            >
              <RequestButton
                variant="primary"
                padding={{ base: '8px 15vw', sm: '8px 6vw' }}
                onClick={handleSaveClick}
              >
                저장하기
              </RequestButton>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          display={{ base: 'none', sm: 'flex' }}
          width={'fit-conent'}
          flexDirection={'column-reverse'}
          position={'relative'}
          bottom={isUser ? '50px' : '0'}
        >
          <Picture pictureName="male" width={216} />
        </Flex>
      </Flex>
    </Flex>
  )
}
