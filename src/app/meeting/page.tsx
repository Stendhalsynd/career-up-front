'use client'

// import { useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import SelectButton from 'components/molecules/Button/SelectButton.tsx'
import Calendar from 'components/molecules/Calendar/index.tsx'
import { RequestButton, TextArea } from 'components/molecules/index.ts'
import MeetingApplyLayout from 'components/templates/MeetingLayout/index.tsx'
import useRequest, { GetRequest } from 'lib/useRequest.ts'
import { selectedDateState, selectedNicknameState } from 'utils/state.ts'

type ReservationData = {
  date: string
  time: string[]
}

const MeetingApply = () => {
  const selectedNickname = useRecoilValue(selectedNicknameState)
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState)
  const [reservedTimes, setReservedTimes] = useState<string[]>([])
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [consult, setConsult] = useState<string>()

  const { data } = useRequest<ReservationData[]>({
    method: 'get',
    url: `/reservation/${selectedNickname}`,
  } as GetRequest)

  const today = dayjs().startOf('day')

  useEffect(() => {
    if (data) {
      const selectedDateData = data.find((info) => info.date === selectedDate)
      if (selectedDateData) {
        setReservedTimes(selectedDateData.time)
      }
    } else {
      setSelectedDate(today.format('YYYY-MM-DD'))
    }
  })

  const isTimeReserved = (time: string) => reservedTimes.includes(time)

  const handleButtonClick = (time: string) => {
    if (!isTimeReserved(time) && !selectedTime) {
      setSelectedTime(time)
    } else if (!isTimeReserved(time) && selectedTime) {
      setSelectedTime('')
    }
  }

  const handleReservationClick = async () => {
    try {
      const data = {
        date: selectedDate,
        time: selectedTime,
        consult,
      }

      const response = await axios.post(
        `https://api.career-up.live:8080/reservation/${selectedNickname}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )

      if (response) {
        window.location.href = '/'
      }
    } catch (error) {
      console.error('[ERROR] 예약을 요청하는 중 오류 발생', error)
    }
  }

  return (
    <Flex flexDirection={'column'}>
      <MeetingApplyLayout>
        <Flex
          width={'100%'}
          zIndex={1}
          flexDirection={'column'}
          alignItems={'center'}
          gap={'20px'}
          position={'relative'}
          height={'100%'}
        >
          <Text variant={'mediumLargeBold'} color={'white'}>
            커리업 신청
          </Text>
          <Text variant={'mediumBold'} color={'white'}>
            멘토와 함께, 커리업 해보세요!
          </Text>
        </Flex>
      </MeetingApplyLayout>
      <Flex
        backgroundColor={'white'}
        width={'100%'}
        height={'fit-content'}
        minHeight={'80vh'}
        padding={{ base: '49px 40px 30px 40px', sm: '55px 80px 40px 80px' }}
        flexDirection={'column'}
        alignItems={'center'}
        zIndex={1}
        gap={'21px'}
      >
        <Flex
          flexDirection={{ base: 'column', sm: 'row' }}
          gap={'21px'}
          width={'100%'}
          maxWidth={'900px'}
        >
          <Flex flexDirection={'column'} gap={'21px'}>
            <Text variant={'smallBold'}>원하는 날짜를 선택해주세요.</Text>
            <Calendar />
          </Flex>
          <Flex flexDirection={'column'} gap={'21px'}>
            <Text variant={'smallBold'}>원하는 시간을 선택해주세요.</Text>
            <Flex flexWrap={'wrap'} gap={'10px'} alignSelf={'center'}>
              {['18:00', '19:00', '20:00', '21:00', '22:00', '23:00'].map(
                (time) => (
                  <SelectButton
                    key={time}
                    variant={
                      isTimeReserved(time)
                        ? 'dark'
                        : time === selectedTime
                          ? 'primary'
                          : 'white'
                    }
                    isRound={false}
                    onClick={() => handleButtonClick(time)}
                    disabled={isTimeReserved(time)}
                  >
                    {time}
                  </SelectButton>
                ),
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flexDirection={'column'}
          width={'100%'}
          gap={'21px'}
          maxWidth={'900px'}
        >
          <Text variant={'smallBold'}>원하는 상담 내용을 작성해주세요.</Text>
          <TextArea
            value={consult}
            onChange={(e) => setConsult(e.target.value)}
          />
          <Flex width={'100%'} justifyContent={'center'}>
            <RequestButton
              width={'50vw'}
              maxWidth={'350px'}
              onClick={handleReservationClick}
            >
              신청하기
            </RequestButton>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default MeetingApply
