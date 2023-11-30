'use client'

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'
import Picture from 'components/atoms/Picture/index.tsx'
import { Text } from 'components/atoms/index.ts'
import { Box, Flex } from 'components/layout/index.ts'
import { Header, Label } from 'components/molecules/index.ts'
import AlertComponent from 'components/organisms/AlertContainer/index.tsx'
import ChatInfoCard from 'components/organisms/ChatInfoCard/index.tsx'
import { TodayChatInfo } from 'components/organisms/index.ts'
import useRequest, { GetRequest } from 'lib/useRequest.ts' // useRequest 파일 경로에 맞게 수정하세요

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

const ChatInfo = () => {
  const width = useWidth()

  const minImageWidth = 100
  const maxImageWidth = 300

  const textSize = width < 768 ? 'medium' : 'mediumLarge'

  const imageWidth = Math.min(maxImageWidth, Math.max(minImageWidth, width / 2))

  // 챗 인포 임시 데이터
  const chatInfoData = [
    {
      id: 1,
      isStatus: false,
      nicknameContent: '춤추는 달빛12',
      dateContent: '2023.11.27',
      timeContent: '12:30',
    },
    {
      id: 2,
      isStatus: false,
      nicknameContent: '춤추는 달빛127',
      dateContent: '2023.11.27',
      timeContent: '12:30',
    },
    {
      id: 3,
      isStatus: false,
      nicknameContent: '춤추는 달빛126',
      dateContent: '2023.11.27',
      timeContent: '12:30',
    },
    {
      id: 4,
      isStatus: false,
      nicknameContent: '춤추는 달빛125',
      dateContent: '2023.11.27',
      timeContent: '12:30',
    },
    {
      id: 5,
      isStatus: false,
      nicknameContent: '춤추는 달빛123',
      dateContent: '2023.11.27',
      timeContent: '12:30',
    },
    {
      id: 6,
      isStatus: false,
      nicknameContent: '춤추는 달빛124',
      dateContent: '2023.11.27',
      timeContent: '12:30',
    },
  ]

  // 투데이챗인포 임시 데이터
  const todayChatInfoData = [
    {
      id: 1,
      nicknameContent: '춤추는 달빛123',
      dateContent: '2023.11.27',
      timeContent: '12:30',
    },
    {
      id: 2,
      nicknameContent: '춤추는 달빛124',
      dateContent: '2023.11.27',
      timeContent: '12:30',
    },
    {
      id: 3,
      nicknameContent: '춤추는 달빛125',
      dateContent: '2023.11.27',
      timeContent: '12:30',
    },
    {
      id: 4,
      nicknameContent: '춤추는 달빛126',
      dateContent: '2023.11.27',
      timeContent: '12:30',
    },
    {
      id: 5,
      nicknameContent: '춤추는 달빛127',
      dateContent: '2023.11.27',
      timeContent: '12:30',
    },
    {
      id: 6,
      nicknameContent: '춤추는 달빛128',
      dateContent: '2023.11.27',
      timeContent: '12:30',
    },
  ]

  // 챗 인포 슬라이드 스타일
  const CustomSlider = styled(Slider)`
    margin-left: 130px;
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
    scroll-snap-type: x mandatory;

    .slick-slide {
      padding: 0 5px;
      box-sizing: border-box;
      scroll-snap-align: center;
      gap: 20px;
    }

    .slick-list {
      transition: transform 0.5s ease;
    }
  `

  // 챗 인포 슬라이드 설정
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

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

  // 투데이챗인포 슬라이드 설정
  const TodayChatInfoSlider = styled(Slider)`
    margin: 10px;
    margin-left: 30px;
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
    scroll-snap-type: x mandatory;

    .slick-slide {
      padding: 0 5px;
      box-sizing: border-box;
      scroll-snap-align: center;
      gap: 20px;
    }

    .slick-list {
      transition: transform 0.5s ease;
    }
  `

  const todayChatInfoSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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

  //조건
  const showTodayChatInfoSlider = true

  const { data, response, error, isValidating } = useRequest({
    method: 'get',
    url: '/mypage',
  } as GetRequest)

  // 결과 사용 예시
  if (isValidating) {
    console.log('Loading...')
  } else if (error) {
    console.error('Error:', error)
  } else if (response) {
    console.log('Response:', response)
    console.log('Data:', data)
    // 여기에서 데이터를 처리하는 로직을 추가하세요
  }

  return (
    <Box>
      <Header />
      <Flex flexDirection="column">
        <Flex flexDirection="column">
          <Flex
            margin="60px"
            justifyContent={{ base: 'center', sm: 'flex-start' }}
          >
            <Label>
              <Text color="darkGray" marginRight="10px" fontSize={textSize}>
                나의
              </Text>
              <Text color="white" fontSize={textSize}>
                커피챗 리스트
              </Text>
            </Label>
          </Flex>
          <Flex justifyContent="center" width="100%" gap="20px">
            <CustomSlider {...settings}>
              {chatInfoData.map((chatInfoItem) => (
                <ChatInfoCard key={chatInfoItem.id} {...chatInfoItem} />
              ))}
            </CustomSlider>
          </Flex>
        </Flex>

        <Flex flexDirection="column">
          <Flex
            margin="40px"
            justifyContent={{ base: 'center', sm: 'flex-start' }}
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

          <Flex
            margin="100px"
            marginTop="20px"
            justifyContent="center"
            zIndex={2}
          >
            {showTodayChatInfoSlider ? (
              <TodayChatInfoSlider {...todayChatInfoSettings}>
                {todayChatInfoData.map((todayChatInfoItem) => (
                  <TodayChatInfo
                    key={todayChatInfoItem.id}
                    {...todayChatInfoItem}
                  />
                ))}
              </TodayChatInfoSlider>
            ) : (
              <AlertComponent />
            )}
          </Flex>
        </Flex>
      </Flex>

      <Flex justifyContent="flex-end" marginTop="-200px">
        <Picture width={imageWidth} pictureName="cube" />
      </Flex>
      <Flex marginTop="-400px" marginLeft="20px">
        <Picture width={180} pictureName="roundcube" />
      </Flex>
    </Box>
  )
}

export default ChatInfo
