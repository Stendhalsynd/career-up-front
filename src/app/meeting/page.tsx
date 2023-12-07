'use client'

import axios from 'axios'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { SweetAlertResult } from 'sweetalert2'
import styles from '../../components/molecules/Button/RequestButton.module.css'
import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import SelectButton from 'components/molecules/Button/SelectButton.tsx'
import Calendar from 'components/molecules/Calendar/index.tsx'
import { RequestButton, TextArea } from 'components/molecules/index.ts'
import MeetingApplyLayout from 'components/templates/MeetingLayout/index.tsx'
import { confirmAlert, successAlert, warningAlert } from 'lib/sweetAlert.tsx'
import useRequest, { GetRequest } from 'lib/useRequest.ts'
import { selectedDateState, selectedNicknameState } from 'utils/state.ts'

type ReservationData = {
  date: string
  time: string[]
}

const MeetingApply = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDesktop(window.innerWidth >= 768)
      const handleResize = () => setIsDesktop(window.innerWidth >= 768)
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

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
      } else {
        setReservedTimes([])
      }
    } else {
      setSelectedDate(today.format('YYYY-MM-DD'))
    }
  }, [data, selectedDate])

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
      if (!selectedDate) {
        //console.warn('[WARN] 예약을 요청하기 전에 날짜를 선택해주세요.')
        warningAlert(
          '예약 실패',
          '예약을 요청하기 전에 날짜를 선택해주세요.',
          '확인',
        )
        return
      }

      if (!selectedTime) {
        //console.warn('[WARN] 예약을 요청하기 전에 시간을 선택해주세요.')
        warningAlert(
          '예약 실패',
          '예약을 요청하기 전에 시간을 선택해주세요.',
          '확인',
        )
        return
      }

      const data = {
        date: selectedDate,
        time: selectedTime,
        consult,
      }

      confirmAlert(
        '카메라 환경 설정 안내',
        '화상 채팅을 하기 위해서 카메라가 설치된 디바이스가 필요합니다.\n 디바이스에 카메라가 존재합니까?',
        '네',
        '아니오',
      ).then(async (result: SweetAlertResult<any>) => {
        if (result.isConfirmed) {
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
            // Reservation was successful
            successAlert(
              '예약 완료',
              '예약 신청이 완료되었습니다.',
              '확인',
            ).then(() => {
              window.location.href = '/seekerChat'
            })
          } else {
            // Reservation failed
            warningAlert(
              '예약 실패',
              '예약을 요청하는 중 오류가 발생하였습니다.',
              '확인',
            )
          }
        }
      })
    } catch (error) {
      console.error('[ERROR] 예약을 요청하는 중 오류 발생', error)
    }
  }

  return (
    <Flex flexDirection={'column'} overflow={'hidden'}>
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
            <Flex
              flexWrap={'wrap'}
              gap={'10px'}
              alignSelf={'center'}
              style={
                isDesktop
                  ? {
                      height: 'calc((42px + 10px) * 2)',
                      flexFlow: 'column wrap',
                      alignContent: 'flex-start',
                    }
                  : {}
              }
            >
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
          <Text
            variant={'smallBold'}
            style={{ wordBreak: 'keep-all' }}
            lineHeight={3}
          >
            원하는 상담 내용을 작성해주세요.
          </Text>
          <TextArea
            value={consult}
            onChange={(e) => setConsult(e.target.value)}
          />
          <Flex width={'100%'} justifyContent={'center'}>
            <RequestButton
              width={'50vw'}
              maxWidth={'350px'}
              onClick={handleReservationClick}
              hasBorder
            >
              <Text variant={'extraSmallBold'} className={styles.text}>
                신청하기
              </Text>
            </RequestButton>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default MeetingApply
