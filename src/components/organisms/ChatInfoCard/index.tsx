'use client'

import axios from 'axios'
import React from 'react'
import { Text } from 'components/atoms/index.ts'
import { Flex, Box } from 'components/layout/index.ts'
import SelectButton from 'components/molecules/Button/SelectButton.tsx'
import StatusButton from 'components/molecules/Button/StatusButton.tsx'
import Label from 'components/molecules/Label/index.tsx'

interface ChatInfoCardProps {
  status: string
  role: string
  nicknameContent: string
  dateContent: string
  timeContent: string
  id?: number
}

export interface CardItemProps {
  title: string
  content: string
}

// TODO: 요청 수락 / 거절 시 데이터가 바뀌어서 reload 로 임시로 처리해두었으나 revalidate 를 잘 할수 있도록 개선해야 한다.
export const ChatInfoCardItem: React.FC<CardItemProps> = ({
  title,
  content,
}) => (
  <Label flexDirection="column">
    <Text variant={'extraSmallBold'} color="black">
      {title}
    </Text>
    <Text color="white" variant={'mediumBold'} marginTop={'8px'}>
      {content}
    </Text>
  </Label>
)

/**
 * 나의 커피챗 리스트 카드
 * @description isApproved 로 상태 여부를 명시해줘야 한다.
 */
const ChatInfoCard: React.FC<ChatInfoCardProps> = ({
  status,
  role,
  nicknameContent,
  dateContent,
  timeContent,
  id,
}) => {
  const handleApproveChat = async () => {
    try {
      const response = await axios({
        method: 'patch',
        url: 'https://api.career-up.live:8080/chat-status',
        data: {
          id,
          status: 'APPROVED',
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      })

      if (response) {
        console.log('화상채팅 신청을 수락했습니다.')
        window.location.reload()
      }
    } catch (error) {
      console.error('[ERROR] 화상 채팅 수락 중 오류 발생:', error)
    }
  }

  const handleRejectChat = async () => {
    try {
      const response = await axios({
        method: 'patch',
        url: 'https://api.career-up.live:8080/chat-status',
        data: {
          id,
          status: 'REJECTED',
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      })

      if (response) {
        console.log('화상채팅 신청을 거절했습니다.')
        window.location.reload()
      }
    } catch (error) {
      console.error('[ERROR] 화상 채팅 거절 중 오류 발생:', error)
    }
  }

  return (
    <Flex
      flexDirection="column"
      width={'fit-content'}
      height={'fit-content'}
      minWidth={'260px'}
    >
      <Flex
        backgroundColor={'primary'}
        flexDirection={'column'}
        borderRadius={'30px 30px 0 0'}
        padding={'30px'}
        gap={'15px'}
      >
        {<ChatInfoCardItem title="nickname" content={nicknameContent} />}
        {<ChatInfoCardItem title="date" content={dateContent} />}
        {<ChatInfoCardItem title="time" content={timeContent} />}
      </Flex>
      <Flex
        backgroundColor={'white'}
        justifyContent={'center'}
        alignItems={'center'}
        padding={'14.5px 31px'}
        borderRadius={'0 0 30px 30px'}
      >
        {status === 'APPROVED' && (
          <Box>
            <StatusButton padding={'12px 45px'}>수락됨</StatusButton>
          </Box>
        )}
        {status === 'WAITING' && role === 'SEEKER' && (
          <Flex>
            <StatusButton padding={'12px 45px'} variant={'dark'}>
              대기중
            </StatusButton>
          </Flex>
        )}
        {status === 'REJECTED' && role === 'SEEKER' && (
          <Flex>
            <StatusButton padding={'12px 45px'} variant={'dark'}>
              거부됨
            </StatusButton>
          </Flex>
        )}
        {status === 'WAITING' && role === 'WORKER' && (
          <Flex gap={'22px'}>
            <SelectButton onClick={handleApproveChat}>수락</SelectButton>
            <SelectButton variant="dark" onClick={handleRejectChat}>
              거부
            </SelectButton>
          </Flex>
        )}
        {status === 'FINISHED' && (
          <Flex>
            <StatusButton padding={'12px 45px'} variant={'dark'}>
              종료됨
            </StatusButton>
          </Flex>
        )}
      </Flex>
    </Flex>
  )
}

export default ChatInfoCard
