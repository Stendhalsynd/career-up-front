'use client'

import React from 'react'
import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import RequestButton from 'components/molecules/Button/RequestButton.tsx'

const TodayChatInfo = () => {
  return (
    <Flex alignItems="center" justifyContent="center" height="100vh">
      <Flex
        flexDirection="column"
        alignItems="left"
        borderRadius="20px"
        backgroundColor="white"
        width={{ base: '280px', sm: '300px' }}
        height="300px"
        padding="20px"
      >
        <Text variant="medium" margin="20px">
          환호하는 돌고래
        </Text>
        <Text variant="medium" margin="20px">
          2023.11.23
        </Text>
        <Text variant="medium" margin="20px">
          05:33
        </Text>

        <RequestButton style={{ marginTop: '20px' }}>입장하기</RequestButton>
      </Flex>
    </Flex>
  )
}

export default TodayChatInfo
