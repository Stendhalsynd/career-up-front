'use client'

import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'
import Picture from 'components/atoms/Picture/index.tsx'
import { Text } from 'components/atoms/index.ts'
import { Box, Flex } from 'components/layout/index.ts'
import { InfoTagButton } from 'components/molecules/Button/TagButton.tsx'
import { countDataState, selectedNicknameState } from 'utils/state.ts'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface WorkerInfoItemProps {
  tag: string
  text: string
}

// 배포된 DB 서버에서 재직자 리스트 불러오기 위해 설정한 interface
interface WorkerInfo {
  nickname: string
  company: string
  skills: string[]
  fields: string[]
}

const WorkerInfoItem = (props: WorkerInfoItemProps) => {
  return (
    <Flex flexDirection="column" gap={'7.67px'}>
      <InfoTagButton tag={props.tag}></InfoTagButton>
      <Text variant={'extraSmall'} color="black">
        {props.text}
      </Text>
    </Flex>
  )
}

// 경력 '주니어', '미들', '시니어'로 랜덤으로 설정
const getRandomCareer = () => {
  const careers = ['주니어(1~4년)', '미들(5~8년)', '시니어(9~12년)']
  const randomIndex = Math.floor(Math.random() * careers.length)
  return careers[randomIndex]
}

// 사람 이미지 'male' 또는 'female'로 랜덤으로 설정
const getRandomGender = () => {
  const genders = ['male', 'female']
  const randomIndex = Math.floor(Math.random() * genders.length)
  return genders[randomIndex]
}

const CustomSlider = styled(Slider)`
  width: 100vw;
  max-width: 1200px;
  .slick-slide {
    display: flex;
    box-sizing: border-box;
    justify-content: center;
  }
`

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 4, // 한 화면에 보여질 컨텐츠 개수
  slidesToScroll: 1, // 스크롤 한 번에 움직일 컨텐츠 개수
  autoplay: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
}

const WorkerInfoCard = () => {
  // 재직자 데이터 불러오기
  const [workerData, setWorkerData] = useState<WorkerInfo[]>()
  const setCountData = useSetRecoilState(countDataState)

  const fetchData = async () => {
    try {
      const url = 'https://api.career-up.live:8080/workers'

      const response = await axios.get(url)
      const data = response.data
      setCountData(data.length)
      setWorkerData(data)
    } catch (error) {
      console.error('사용자 데이터를 가져오는 중  오류 발생: ', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // 선택한 WorkerInfoCard의 닉네임 저장
  const setSelectedNickname = useSetRecoilState(selectedNicknameState)

  return (
    <CustomSlider {...settings}>
      {workerData?.map((value: any, index: number) => (
        <Flex
          flexDirection="column"
          position={'relative'}
          width={'fit-content'}
          minWidth={'260px'}
          height={'fit-content'}
          scrollSnapAlign="center"
          key={index}
          onClick={() => {
            setSelectedNickname(value.nickname)
          }}
        >
          <Link href={'/workers/info'}>
            <Flex
              backgroundColor="primary"
              width={'100%'}
              height={'170px'}
              borderRadius={'20px 20px 0 0'}
              flexDirection={'column'}
              padding={'25px'}
              gap={'15px'}
            >
              {/* 닉네임 */}
              <Box zIndex={3} maxWidth={'60%'}>
                <Text
                  variant={'mediumBold'}
                  color="white"
                  style={{ wordBreak: 'keep-all' }}
                  lineHeight={1.5}
                >
                  {value.nickname}
                </Text>
              </Box>

              {/* 경력 */}
              <Box zIndex={3}>
                <Text variant={'extraSmall'} color="white">
                  {getRandomCareer()}
                </Text>
              </Box>
            </Flex>

            {/* 사용자 이미지 */}
            <Flex right={'15px'} top={'23px'} position={'absolute'} zIndex={1}>
              <Picture pictureName={getRandomGender()} width={83} />
            </Flex>

            <Flex
              backgroundColor="white"
              width={'100%'}
              height={'230px'}
              flexDirection={'column'}
              gap={'15.32px'}
              padding={'25px'}
              borderRadius={'0 0 20px 20px'}
            >
              <Box zIndex={3}>
                <WorkerInfoItem tag="현직" text={value.company} />
              </Box>
              <Box zIndex={3}>
                <WorkerInfoItem tag="직군" text={formatFields(value.fields)} />
              </Box>
              <Box zIndex={3}>
                <WorkerInfoItem tag="스킬" text={formatSkills(value.skills)} />
              </Box>
            </Flex>
          </Link>
        </Flex>
      ))}
    </CustomSlider>
  )
}

// fields 불러오는 형태 설정: "프론트엔드 외 1개"
const formatFields = (fields: string[]) => {
  if (fields.length > 1) {
    return `${fields[0]} 외 ${fields.length - 1}개`
  } else if (fields.length === 1) {
    return fields[0]
  } else {
    return '입력 예정'
  }
}

// skills 불러오는 형태 설정: "html/css 외 1개"
const formatSkills = (skills: string[]) => {
  if (skills.length > 1) {
    return `${skills[0]} 외 ${skills.length - 1}개`
  } else if (skills.length === 1) {
    return skills[0]
  } else {
    return '입력 예정'
  }
}

export default WorkerInfoCard
