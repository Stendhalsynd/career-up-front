'use client'

import React, { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import styled from 'styled-components'
import { ChatInfoDataType } from 'app/workerChat/page.tsx'
import Picture from 'components/atoms/Picture/index.tsx'
import { Text } from 'components/atoms/index.ts'
import { Box, Flex } from 'components/layout/index.ts'
import { Header, Label } from 'components/molecules/index.ts'
import AlertComponent from 'components/organisms/AlertContainer/index.tsx'
import ChatInfoCard from 'components/organisms/ChatInfoCard/index.tsx'
import { TodayChatInfo } from 'components/organisms/index.ts'
import FloatingComponent from 'containers/FloatingContainer/index.tsx'
import useRequest, { GetRequest } from 'lib/useRequest.ts'

const useWidth = () => {
  const [width, setWidth] = React.useState(0)

  const handleResize = () => setWidth(window.innerWidth)

  React.useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // 빈 배열

  return width
}

// 투데이챗인포 슬라이드 설정
const TodayChatInfoSlider = styled(Slider)`
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  scroll-snap-type: x mandatory;
  max-width: 1000px;

  .slick-slide {
    padding: 0 5px;
    box-sizing: border-box;
    scroll-snap-align: center;
    gap: 20px;
  }

  .slick-list {
    transition: transform 0.5s ease;
  }

  .slick-track {
    display: flex;
    gap: 20px;
  }
`

const SeekerChatInfo = () => {
  const width = useWidth()

  const minImageWidth = 100
  const maxImageWidth = 300

  const textSize = width < 768 ? 'medium' : 'mediumLarge'

  const imageWidth = Math.min(maxImageWidth, Math.max(minImageWidth, width / 2))

  const [chatData, setChatData] = useState<ChatInfoDataType[]>()
  const { data } = useRequest<ChatInfoDataType[]>({
    method: 'get',
    url: '/chats',
  } as GetRequest)

  useEffect(() => {
    // 챗 인포 데이터
    setChatData(data)
  }, [data])

  // const chatInfoData = chatData?.filter((item) => item.status !== 'REJECTED')
  const chatInfoData = chatData

  // 투데이챗인포 데이터
  const today = new Date()
  const todayChatInfoData = chatInfoData?.filter((item) => {
    const itemDate = new Date(item.date)
    const isSameDate = itemDate.toDateString() === today.toDateString()
    const isApproved = item.status === 'APPROVED'
    const isFinished = item.status === 'FINISHED'

    return isSameDate && (isApproved || isFinished)
  })

  const todayChatInfoSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow:
      todayChatInfoData && todayChatInfoData.length >= 3
        ? 3
        : todayChatInfoData?.length,
    slidesToScroll: 1,
    draggable: true,
    responsive: [
      {
        breakpoint: 845,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const showTodayChatInfoSlider =
    todayChatInfoData && todayChatInfoData.length > 0 ? true : false

  return (
    <Box overflow={'hidden'}>
      <Header />
      <Flex flexDirection="column" width={'100%'}>
        <Flex flexDirection="column" width={'100%'} alignItems={'center'}>
          <Flex margin="60px" justifyContent={'center'}>
            <Label>
              <Text color="darkGray" marginRight="10px" fontSize={textSize}>
                나의
              </Text>
              <Text color="white" fontSize={textSize}>
                커리업 리스트
              </Text>
            </Label>
          </Flex>
          <Flex
            justifyContent={'center'}
            width="100%"
            maxWidth={'1000px'}
            flexWrap={'wrap'}
            gap={'20px'}
            zIndex={2}
          >
            {chatInfoData?.map(({ id, status, date, time, otherNickname }) => (
              <ChatInfoCard
                key={id}
                id={id}
                status={status}
                role={'SEEKER'}
                dateContent={date}
                timeContent={time}
                nicknameContent={otherNickname}
              />
            ))}
          </Flex>
        </Flex>

        <Flex flexDirection="column" width={'100%'} alignItems={'center'}>
          <Flex
            margin="40px"
            justifyContent={{ base: 'center', sm: 'flex-start' }}
            zIndex={3}
          >
            <Text
              color="white"
              fontSize={textSize}
              marginLeft="10px"
              marginTop="60px"
            >
              오늘의 커피챗
            </Text>
          </Flex>

          <Flex width={'100%'} justifyContent="center" zIndex={2}>
            {showTodayChatInfoSlider ? (
              <TodayChatInfoSlider {...todayChatInfoSettings}>
                {todayChatInfoData?.map(
                  ({
                    id,
                    status,
                    otherNickname,
                    date,
                    time,
                    myNickname,
                    sessionId,
                  }) => (
                    <TodayChatInfo
                      key={id}
                      status={status}
                      myNickname={myNickname}
                      nicknameContent={otherNickname}
                      dateContent={date}
                      timeContent={time}
                      sessionId={sessionId}
                    />
                  ),
                )}
              </TodayChatInfoSlider>
            ) : (
              <AlertComponent />
            )}
          </Flex>
        </Flex>
      </Flex>
      <Flex
        width={'100%'}
        height={'fit-content'}
        minHeight={'190px'}
        position={'relative'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Flex>
          <Flex
            maxWidth={'1000px'}
            height={'fit-content'}
            minHeight={'190px'}
            position={'relative'}
            flexDirection={'column'}
            justifyContent={'center'}
            width={{ base: '450px', sm: '768px', md: '901px' }}
            style={{ transition: '1s' }}
          >
            <Box
              position={'absolute'}
              right={{ base: '-100px', sm: '-200px ' }}
              bottom={{ base: '300px', sm: '400px ' }}
              width={{ base: '200px', sm: '300px ' }}
            >
              <FloatingComponent>
                <Picture pictureName="cube" width={imageWidth} />
              </FloatingComponent>
            </Box>
            <Box
              position={'absolute'}
              left={{ base: '-60px', sm: '-180px' }}
              bottom={'80px'}
              width={{ base: '200px', sm: '300px ' }}
            >
              <FloatingComponent>
                <Picture pictureName="roundcube2" width={imageWidth} />
              </FloatingComponent>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default SeekerChatInfo
