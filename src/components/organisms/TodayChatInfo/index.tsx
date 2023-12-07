'use client'

import React from 'react'
import { useSetRecoilState } from 'recoil'
import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'

import StatusButton from 'components/molecules/Button/StatusButton.tsx'
import { HyperLinkButton } from 'components/molecules/index.ts'

import { myNameState, sessionState } from 'utils/state.ts'

interface TodayChatInfoProps {
  status: string
  nicknameContent: string
  dateContent: string
  timeContent: string
  myNickname: string
  sessionId: string
}
// TODO: - nicknameContent -> 상대방 닉네임으로 수정, 세션 이름은 SessionId 데이터를 넘겨받으면 그것으로 전환
const TodayChatInfo: React.FC<TodayChatInfoProps> = ({
  status,
  nicknameContent,
  dateContent,
  timeContent,
  myNickname,
  sessionId,
}) => {
  const setSessionState = useSetRecoilState(sessionState)
  const setMyNameState = useSetRecoilState(myNameState)

  return (
    <Flex alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        alignItems="left"
        borderRadius="20px"
        backgroundColor="white"
        width={{ base: '280px', sm: '300px' }}
        height={'fit-content'}
        padding="30px"
      >
        <Text variant="mediumBold" margin="20px">
          {nicknameContent}
        </Text>
        <Text variant="mediumBold" margin="20px">
          {dateContent}
        </Text>
        <Text variant="mediumBold" margin="20px">
          {timeContent}
        </Text>
        {status === 'APPROVED' && (
          <Flex width={'100%'} justifyContent={'center'}>
            <HyperLinkButton
              to="chat"
              width={'fit-content'}
              contents="입장하기"
              hasBorder={true}
              onClick={() => {
                setSessionState(sessionId)
                setMyNameState(myNickname)
              }}
            />
          </Flex>
        )}
        {status === 'FINISHED' && (
          <Flex justifyContent={'center'}>
            <StatusButton padding={'12px 45px'} variant={'dark'}>
              종료됨
            </StatusButton>
          </Flex>
        )}
      </Flex>
    </Flex>
  )
}

export default TodayChatInfo
