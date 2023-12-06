'use client'
import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import Picture from 'components/atoms/Picture/index.tsx'
import { Avatar, Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import SelectButton from 'components/molecules/Button/SelectButton.tsx'
import { InfoBlock } from 'components/molecules/Input/index.tsx'

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
  const [profileImage, setProfileImage] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

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
      setUserData(response.data)
      setEditedPassword(response.data.password)
      setProfileImageUrl(response.data.profile)
    } catch (error) {
      console.error('사용자 데이터를 가져오는 중 오류 발생:', error)
    }
  }
  const handleSaveClick = async () => {
    try {
      const data = {
        email: userData?.email,
        password: editedPassword,
      }
      const formData = new FormData()
      formData.append(
        'user',
        new Blob([JSON.stringify(data)], { type: 'application/json' }),
      )

      if (fileInputRef.current && fileInputRef.current.files) {
        if (!profileImage) {
          formData.append('profile', '') // 빈 값으로 설정하거나 원하는 값으로 설정 가능
          console.log('Profile Image not modified')
        }
      }

      if (profileImage) {
        formData.append('profile', profileImage)
        console.log('Profile Image to be Uploaded:', profileImage)
      }

      const apiUrl = 'https://api.career-up.live:8080/mypage'
      const requestConfig = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      }
      if (userData?.roleType?.toUpperCase() === 'WORKER') {
        // roleType이 'worker'이면 PUT 메서드 사용
        await axios.put(apiUrl, formData, requestConfig)
      } else if (userData?.roleType?.toUpperCase() === 'SEEKER') {
        // roleType이 'seeker'이면 PATCH 메서드 사용
        const response = await axios.patch(apiUrl, formData, requestConfig)
        if (response.data === true) {
          window.location.reload()
        }
      }

      console.log('사용자 데이터가 성공적으로 업데이트되었습니다:')
    } catch (error) {
      console.error('[ERROR] 사용자 데이터 업데이트 중 오류 발생:', error)
    }
  }

  // 미리보기 이미지 URL을 저장하는 state
  const [profileImageUrl, setProfileImageUrl] = useState<string>(
    userData ? userData.profile : '',
  )

  const handleProfileImageChange = (files: FileList | null) => {
    if (files && files.length > 0) {
      setProfileImage(files[0])

      const reader = new FileReader()
      reader.onload = () => {
        const result = reader.result as string
        setProfileImageUrl(result)
      }
      reader.readAsDataURL(files[0])
    } else {
      setProfileImage(null) // 이미지를 선택하지 않았으므로 null로 설정
      setProfileImageUrl(userData ? userData.profile : '') // 기존 이미지로 되돌림
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
            <Flex gap={'33px'} marginTop={'23px'} position={'relative'}>
              <Flex
                width={{ base: 'fit-content', sm: '150px' }}
                height={{ base: 'fit-content', sm: '150px' }}
                minWidth={'100px'}
                maxWidth={'100px'}
                overflow={'hidden'}
              >
                <Avatar
                  key={profileImageUrl || 'default'}
                  avatarName={profileImageUrl || 'avatar'}
                  size={100}
                  shape="circle"
                  src={profileImageUrl ? profileImageUrl : undefined}
                />
              </Flex>
              <Flex
                width={'100%'}
                height={'100%'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <label htmlFor="input-file">
                  <input
                    id="input-file"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleProfileImageChange(e.target.files)}
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                  />
                  <SelectButton
                    variant="dark"
                    maxWidth={'200px'}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    변경
                  </SelectButton>
                </label>
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
                placeholder="********"
                onChange={(e) => setEditedPassword(e.target.value)}
                readOnly={false}
              />
            }
            {
              <InfoBlock
                text="소속"
                placeholder={userData.company || '회사 정보 없음'}
                readOnly={true}
                // onChange={(e) => setEditedCompany(e.target.value)}
              />
            }
            <Flex
              justifyContent={'center'}
              marginTop={'15px'}
              display={isUser ? 'flex' : 'none'}
            >
              <SelectButton
                variant="primary"
                padding={{ base: '8px 15vw', sm: '8px 6vw' }}
                onClick={handleSaveClick}
                width={'100%'}
              >
                저장하기
              </SelectButton>
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
