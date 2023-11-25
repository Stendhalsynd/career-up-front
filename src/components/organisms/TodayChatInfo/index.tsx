'use client'

import React from 'react'
import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import RequestButton from 'components/molecules/Button/RequestButton.tsx'

interface TodayChatInfoProps {
  nicknameContent: string
  dateContent: string
  timeContent: string
}
const TodayChatInfo: React.FC<TodayChatInfoProps> = ({
  nicknameContent,
  dateContent,
  timeContent,
}) => {
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
          <RequestButton marginTop={'20px'} width={'fit-content'}>
            입장하기
          </RequestButton>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default TodayChatInfo
