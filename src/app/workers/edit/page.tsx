'use client'
import axios from 'axios'
import React, { useEffect, useState, useRef, ReactNode } from 'react'
import Picture from 'components/atoms/Picture/index.tsx'
import { Avatar, Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import SelectButton from 'components/molecules/Button/SelectButton.tsx'
import { IntroTagButton } from 'components/molecules/Button/TagButton.tsx'
import Input, { InfoBlock } from 'components/molecules/Input/index.tsx'
import { RequestButton, TextArea } from 'components/molecules/index.ts'
import MyPageLayout from 'components/templates/MyPageLayout/index.tsx'

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
interface InfoItemProps {
  title: string
  children: ReactNode
}
const jobFields = ['프론트엔드', '백엔드', '안드로이드', 'iOS', 'AI', '게임']

const InfoItem = (props: InfoItemProps) => {
  return (
    <Flex gap={'33px'} flexDirection={'column'}>
      <Text variant={'smallBold'}>{props.title}</Text>
      {props.children}
    </Flex>
  )
}

const WorkerMyPageEdit = () => {
  const [userData, setUserData] = useState<User | null>(null)
  const [editedPassword, setEditedPassword] = useState('')
  const [editedCompany, setEditedCompany] = useState('')
  const [profileImage, setProfileImage] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const skillInputRef = useRef<HTMLInputElement>(null)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [skillInput, setSkillInput] = useState<string>('')
  const [contents, setContents] = useState('')

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
      console.log('response : ', response)
      setUserData(response.data)
      setProfileImageUrl(response.data.profile)
      setContents(response.data.contents || '')
      setEditedPassword(response.data.password)
      setSkillInput(response.data.skills)
      setSelectedTags(response.data.fields)
      setEditedCompany(response.data.company)
    } catch (error) {
      console.error('사용자 데이터를 가져오는 중 오류 발생:', error)
    }
  }

  const handleSaveClick = async () => {
    try {
      const data = {
        email: userData?.email,
        password: editedPassword,
        fields: selectedTags,
        skills: selectedTags,
        contents: contents,
        company: editedCompany,
      }
      const formData = new FormData()
      formData.append(
        'user',
        new Blob([JSON.stringify(data)], { type: 'application/json' }),
      )

      if (fileInputRef.current && fileInputRef.current.files) {
        console.log('file[0] : ', fileInputRef.current.files[0])

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

      console.log('userData : ', userData)

      const response = await axios({
        method: 'put',
        url: apiUrl,
        data: formData,
        headers: requestConfig.headers,
      })

      console.log('요청 형태 : ', {
        method: 'put',
        url: apiUrl,
        data: formData,
        headers: requestConfig.headers,
      })

      console.log(response)
      if (response.data === true) {
        console.log('사용자 데이터가 성공적으로 업데이트되었습니다.')
        window.location.reload()
      } else {
        console.error('사용자 데이터 업데이트 실패:', response.data)
      }
    } catch (error) {
      console.error('사용자 데이터 업데이트 중 오류 발생:', error)
    }
  }

  // 미리보기 이미지 URL을 저장하는 state
  const [profileImageUrl, setProfileImageUrl] = useState<string>(
    userData ? userData.profile : '',
  )

  const handleProfileImageChange = (files: FileList | null) => {
    if (files && files.length > 0) {
      console.log('Files selected:', files[0])
      setProfileImage(files[0])

      const reader = new FileReader()
      reader.onload = () => {
        const result = reader.result as string
        console.log('Profile Image URL:', result)
        setProfileImageUrl(result)
      }
      reader.readAsDataURL(files[0])
    } else {
      setProfileImage(null) // 이미지를 선택하지 않았으므로 null로 설정
      setProfileImageUrl(userData ? userData.profile : '') // 기존 이미지로 되돌림
    }
  }

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  const handleSkillInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSkillInput(event.target.value)
  }

  const handleSkillInputEnter = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter' && skillInput.trim() !== '') {
      setSelectedTags([...selectedTags, skillInput.trim()])
      setSkillInput('')
      skillInputRef.current!.value = ''
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])
  if (!userData) {
    return <div>로딩 중...</div>
  }

  return (
    <MyPageLayout>
      <Flex
        width={'100%'}
        justifyContent={'center'}
        paddingBottom={'50px'}
        flexDirection="column"
        alignItems={'center'}
      >
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
            </Flex>
          </Flex>
          <Flex
            display={{ base: 'none', sm: 'flex' }}
            width={'fit-conent'}
            flexDirection={'column-reverse'}
            position={'relative'}
          >
            <Picture pictureName="male" width={216} />
          </Flex>
        </Flex>
        <Flex
          marginTop="100px"
          width={'100%'}
          backgroundColor={'white'}
          padding={{
            base: '49px 40px 30px 40px',
            sm: '55px 80px 40px 80px',
          }}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Flex flexDirection={'column'} width={'100%'} maxWidth={'900px'}>
            <Text variant={'mediumLargeBold'}>자기소개</Text>

            <Flex marginTop={'33px'} gap={'33px'} flexDirection={'column'}>
              <InfoItem title={'직무 분야'}>
                <Flex gap={'7px'} flexWrap={'wrap'}>
                  {jobFields.map((field) => (
                    <IntroTagButton
                      key={field}
                      tag={field}
                      variant={
                        selectedTags.includes(field) ? 'primary' : 'white'
                      }
                      onClick={() => handleTagClick(field)}
                    />
                  ))}
                </Flex>
              </InfoItem>
              <InfoItem title={'보유스킬'}>
                <Input
                  hasDarkBackground={true}
                  placeholder="보유스킬을 입력하세요."
                  ref={skillInputRef}
                  onChange={handleSkillInputChange}
                  onKeyDown={handleSkillInputEnter}
                />

                <Flex gap={'7px'} flexWrap={'wrap'}>
                  {selectedTags.map((tag) => (
                    <IntroTagButton
                      key={tag}
                      tag={tag}
                      variant="white"
                      onClick={() => handleTagClick(tag)}
                    />
                  ))}
                </Flex>
              </InfoItem>
              <InfoItem title={'자기소개 작성'}>
                <TextArea
                  value={contents}
                  onChange={(e) => setContents(e.target.value)}
                />
              </InfoItem>
            </Flex>

            <Flex justifyContent={'center'} marginTop={'32px'}>
              <RequestButton
                width={'50vw'}
                maxWidth={'350px'}
                onClick={handleSaveClick}
              >
                저장하기
              </RequestButton>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </MyPageLayout>
  )
}
export default WorkerMyPageEdit
