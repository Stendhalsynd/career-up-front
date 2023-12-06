'use client'

import { useRouter } from 'next/router'
import React from 'react'
import { useSetRecoilState } from 'recoil'
import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import { HyperLinkButton } from 'components/molecules/index.ts'
import { warningAlert } from 'lib/sweetAlert.tsx'
import { myNameState, sessionState } from 'utils/state.ts'

interface TodayChatInfoProps {
  nicknameContent: string
  dateContent: string
  timeContent: string
  myNickname: string
  sessionId: string
}
// TODO: - nicknameContent -> 상대방 닉네임으로 수정, 세션 이름은 SessionId 데이터를 넘겨받으면 그것으로 전환
const TodayChatInfo: React.FC<TodayChatInfoProps> = ({
  nicknameContent,
  dateContent,
  timeContent,
  myNickname,
  sessionId,
}) => {
  const setSessionState = useSetRecoilState(sessionState)
  const setMyNameState = useSetRecoilState(myNameState)
  const router = useRouter()

  const handleEnter = async () => {
    try {
      if (typeof navigator !== 'undefined') {
        await navigator.mediaDevices.getUserMedia({ video: true })
        setSessionState(sessionId)
        setMyNameState(myNickname)
        router.push('chat')
      }
    } catch {
      warningAlert('입장 실패', '카메라가 내장된 기기를 사용해주세요.', '확인')
    }
  }

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

        <Flex width={'100%'} justifyContent={'center'}>
          <HyperLinkButton
            to="chat"
            width={'fit-content'}
            contents="입장하기"
            hasBorder={true}
            // onClick={() => {
            //   setSessionState(sessionId)
            //   setMyNameState(myNickname)
            // }}
            onClick={handleEnter}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default TodayChatInfo
