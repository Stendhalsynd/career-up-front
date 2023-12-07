'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Picture from 'components/atoms/Picture/index.tsx'
import { Avatar, Text } from 'components/atoms/index.ts'
import { Box, Flex } from 'components/layout/index.ts'
import { SkillTagButton } from 'components/molecules/Button/TagButton.tsx'
import { HyperLinkButton } from 'components/molecules/index.ts'
import Layout from 'components/templates/Layout/index.tsx'
import { warningAlert } from 'lib/sweetAlert.tsx'
import { theme } from 'themes/index.ts'
import { selectedNicknameState } from 'utils/state.ts'

interface InfoItemProps {
  tag: string
  text: string
  color?: string
}
function InfoItem(props: InfoItemProps) {
  return (
    <Flex gap="12px">
      <Text variant="extraSmall" color="gray">
        {props.tag}
      </Text>
      <Text
        variant="extraSmallBold"
        color={props.color ? props.color : 'darkGray'}
      >
        {props.text}
      </Text>
    </Flex>
  )
}

function WorkerMyPageInfo() {
  const selectedNickname = useRecoilValue(selectedNicknameState)

  const [workerData, setWorkerData] = useState<any>({})
  const [profileImage, setProfileImageUrl] = useState<string | undefined>(
    undefined,
  )

  const handleClickMentoring = (e: React.MouseEvent) => {
    const token = localStorage.getItem('token')

    if (!token) {
      e.preventDefault()
      warningAlert('로그인 필요', '로그인 후 이용해주세요.', '확인').then(
        () => {
          window.location.href = '/login'
        },
      )
    }
  }

  useEffect(() => {
    const fetchWorkerData = async () => {
      try {
        const response = await axios.get(
          `https://api.career-up.live:8080/workers/${selectedNickname}`,
        )
        setProfileImageUrl(response.data.profile)
        setWorkerData(response.data)
      } catch (error) {
        console.error('Error fetching worker data:', error)
      }
    }

    if (selectedNickname) {
      fetchWorkerData()
    }
  }, [selectedNickname, profileImage])

  const setSelectedNickname = useSetRecoilState(selectedNicknameState)

  return (
    <Layout>
      <Flex width={{ base: '100%', md: '100vw' }} justifyContent="center">
        <Flex
          width="100%"
          flexDirection={{ base: 'column', sm: 'row' }}
          maxWidth="1200px"
        >
          {/* 상단 */}
          <Flex
            backgroundColor="white"
            padding={{ base: '40px 20px', sm: '40px 46px' }}
            gap={{ base: '18px', sm: '25px' }}
            justifyContent={{ base: 'center', sm: 'flex-start' }}
            alignItems="center"
            flexDirection={{ base: 'row', sm: 'column' }}
            height={{ base: 'fit-content', sm: '100vh' }}
            minWidth={{ base: 'fit-content', sm: '300px' }}
            maxWidth={{ md: '400px' }}
            width={{ sm: '35vw' }}
            borderRadius={{ base: '0', md: '30px' }}
            margin={{ base: '0', md: '30px' }}
            maxHeight={{ md: '800px' }}
          >
            <Flex alignSelf={{ base: 'flex-start', sm: 'center' }}>
              {workerData.profile && (
                <>
                  <Box display={{ base: 'block', sm: 'none' }}>
                    <Avatar size={100} shape="circle" src={profileImage} />
                  </Box>
                  <Box display={{ base: 'none', sm: 'block' }}>
                    <Avatar size={100} shape="circle" src={profileImage} />
                  </Box>
                </>
              )}
              {!workerData.profile && (
                <Box>
                  <Avatar avatarName="avatar" size={100} />
                </Box>
              )}
            </Flex>
            <Flex flexDirection="column" gap={{ base: '10px', sm: '15px' }}>
              <Text variant="mediumBold" textAlign="center">
                {workerData.nickname}
              </Text>
              <InfoItem tag="현직" text={workerData.company} color="primary" />
              <InfoItem tag="직군" text={workerData.fields?.join(', ') || ''} />
            </Flex>
            <Flex display={{ base: 'none', sm: 'flex' }}>
              <HyperLinkButton
                to="/meeting"
                width="fit-content"
                contents="멘토링 신청"
                hasBorder
                onClick={handleClickMentoring}
              />
            </Flex>
            <Flex display={{ base: 'none', sm: 'flex' }} marginTop="100px">
              <Picture pictureName="computer" width={235} />
            </Flex>
          </Flex>
          {/* 하단 */}
          <Flex
            flexDirection="column"
            padding={{ base: '20px 25px', sm: '30px 40px', md: '0' }}
            gap="29px"
            margin={{ base: '0', md: '30px' }}
            alignItems={'center'}
          >
            <Flex
              border={`1px solid ${theme.colors.primary}`}
              borderRadius={'20px'}
              padding={'20px'}
              flexDirection={'column'}
              backgroundColor={'white'}
              alignItems={'center'}
              alignSelf={'center'}
              width={{ base: '460px', sm: '400px', md: '500px' }}
            >
              <Picture pictureName="vector" width={27} />
              <Text variant="smallBold">
                {workerData.fields && workerData.fields.length > 0
                  ? `${workerData.fields[0]} 개발 분야가 궁금하다면, 저와 커리업 어떠세요?`
                  : ''}
              </Text>
            </Flex>
            <Flex
              flexDirection="column"
              alignItems="flex-start"
              gap={{ base: '10px', sm: '15px' }}
              width="100%"
              maxWidth="460px"
            >
              <Flex flexDirection="column" gap={{ base: '10px', sm: '15px' }}>
                <Text
                  fontSize={{ base: 'extraSmall', sm: 'small' }}
                  fontWeight="700"
                  color="primary"
                >
                  커리업 파트너 {workerData.nickname} 입니다:)
                </Text>
                <Text variant="extraSmall" color="white" lineHeight={'every'}>
                  {workerData.contents &&
                    workerData.contents
                      .split('\n\n')
                      .map((paragraph: string, i: number) => (
                        <React.Fragment key={i}>
                          {paragraph}
                          <br />
                          <br />
                        </React.Fragment>
                      ))}
                </Text>
              </Flex>
              <Flex flexDirection="column" gap={{ base: '10px', sm: '15px' }}>
                <Text
                  fontSize={{ base: 'extraSmall', sm: 'small' }}
                  fontWeight="700"
                  color="primary"
                >
                  자신있게 설명할 수 있는 분야는
                </Text>
                {workerData.skills && (
                  <Flex gap="17px" flexWrap="wrap">
                    {workerData.skills.map((skill: string) => (
                      <SkillTagButton
                        key={skill}
                        backgroundColor="transparent"
                        tag={`#${skill}`}
                      />
                    ))}
                  </Flex>
                )}
              </Flex>
            </Flex>

            <Flex
              justifyContent="center"
              marginTop="15px"
              display={{ base: 'flex', sm: 'none' }}
              onClick={() => {
                setSelectedNickname(selectedNickname)
              }}
              alignSelf="center"
            >
              <HyperLinkButton
                to="/meeting"
                width="60vw"
                maxWidth="300px"
                contents="멘토링 신청"
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  )
}
export default WorkerMyPageInfo
