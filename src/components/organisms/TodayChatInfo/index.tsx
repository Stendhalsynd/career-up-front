'use client'

import React from 'react'
import { useSetRecoilState } from 'recoil'
import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'

import { HyperLinkButton } from 'components/molecules/index.ts'

import { myNameState, sessionState } from 'utils/state.ts'

interface TodayChatInfoProps {
  nicknameContent: string
  dateContent: string
  timeContent: string
  myNickname: string
}
// TODO: - nicknameContent -> 상대방 닉네임으로 수정, 세션 이름은 SessionId 데이터를 넘겨받으면 그것으로 전환
const TodayChatInfo: React.FC<TodayChatInfoProps> = ({
  nicknameContent,
  dateContent,
  timeContent,
  myNickname,
}) => {
  const setSessionState = useSetRecoilState(sessionState)
  const setMyNameState = useSetRecoilState(myNameState)
  const regex = /[^0-9]/g

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
            onClick={() => {
              setSessionState(`Session${dateContent.replace(regex, '')}`)
              setMyNameState(myNickname)
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default TodayChatInfo
