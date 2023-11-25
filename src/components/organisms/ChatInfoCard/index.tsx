'use client'

import React from 'react'
import { Text } from 'components/atoms/index.ts'
import { Flex, Box } from 'components/layout/index.ts'
import SelectButton from 'components/molecules/Button/SelectButton.tsx'
import StatusButton from 'components/molecules/Button/StatusButton.tsx'
import Label from 'components/molecules/Label/index.tsx'

interface ChatInfoCardProps {
  isStatus: boolean
}

export interface CardItemProps {
  title: string
  content: string
}

export const ChatInfoCardItem: React.FC<CardItemProps> = ({
  title,
  content,
}) => (
  <Label flexDirection="column">
    <Text variant={'extraSmall'} color="black">
      {title}
    </Text>

    <Text color="white" marginTop={'8px'}>
      {content}
    </Text>
  </Label>
)

const ChatInfoCard: React.FC<ChatInfoCardProps> = ({ isStatus }) => {
  return (
    <Flex flexDirection="column">
      <Box
        backgroundColor="white"
        width="250px"
        height="310px"
        borderRadius={'20px'}
        gap={'5px'}
      >
        <Box
          backgroundColor="primary"
          width="250px"
          height="240px"
          borderRadius={'20px 20px 0 0'}
        >
          <Flex
            padding={'30px 0 15px 31px'}
            flexDirection={'column'}
            gap={'10px'}
          >
            {<ChatInfoCardItem title="nickname" content="춤추는 달빛" />}
            {<ChatInfoCardItem title="date" content="2023.11.23" />}
            {<ChatInfoCardItem title="time" content="04:55" />}
          </Flex>
        </Box>
        <Flex justifyContent={'center'} alignItems={'center'} height={'70px'}>
          {isStatus ? (
            // isStatus가 true일 때 SelectButton 렌더링
            <Flex gap={'20px'}>
              <SelectButton>수락</SelectButton>
              <SelectButton variant="gray">거부</SelectButton>
            </Flex>
          ) : (
            // isStatus가 false일 때 StatusButton 렌더링
            <Box marginLeft="46px">
              <StatusButton>수락됨</StatusButton>
            </Box>
          )}
        </Flex>
      </Box>
    </Flex>
  )
}

export default ChatInfoCard
