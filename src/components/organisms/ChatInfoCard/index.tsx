'use client'

import React from 'react'
//import styled from 'styled-components'
//import Picture from 'components/atoms/Picture/index.tsx'
import { Text } from 'components/atoms/index.ts'
import { Flex, Box } from 'components/layout/index.ts'
import SelectButton from 'components/molecules/Button/SelectButton.tsx'
import Label from 'components/molecules/Label/index.tsx'
//import Label from 'components/molecules/Label/index.tsx'

const ChatInfoCard = () => {
  return (
    <Flex flexDirection="column">
      <Box>
        <Box
          backgroundColor="white"
          width="250px"
          height="320px"
          borderRadius={'20px'}
          border={'1px solid black'} // 배경이 흰색이라 영역 확인용으로 넣어둠
        >
          <Box
            backgroundColor="primary"
            width="250px"
            height="240px"
            borderRadius={'20px 20px 0 0'}
          >
            <Label flexDirection="column">
              <Text
                variant={'extraSmall'}
                color="black"
                margin="12px"
                marginTop="18px"
              >
                nickname
              </Text>
              <Text color="white" margin="18px" marginTop="-6px">
                졸린 곰돌이
              </Text>
            </Label>
            <Label flexDirection="column">
              <Text variant={'extraSmall'} color="black" margin="12px">
                date
              </Text>
              <Text color="white" margin="18px" marginTop="-6px">
                2023.11.23
              </Text>
            </Label>
            <Label flexDirection="column">
              <Text variant={'extraSmall'} color="black" margin="12px">
                time
              </Text>
              <Text color="white" margin="18px" marginTop="-6px">
                04:55
              </Text>
            </Label>
          </Box>
          <Box margin="20px">
            <SelectButton style={{ marginRight: '8px' }}>수락</SelectButton>
            <SelectButton variant="gray">거부</SelectButton>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default ChatInfoCard
