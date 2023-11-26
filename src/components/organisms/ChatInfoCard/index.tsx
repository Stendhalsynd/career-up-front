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
 * @description isStatus 로 상태 여부를 명시해줘야 한다.
 */
const ChatInfoCard: React.FC<ChatInfoCardProps> = ({ isStatus }) => {
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
        {<ChatInfoCardItem title="nickname" content="춤추는 달빛" />}
        {<ChatInfoCardItem title="date" content="2023.11.23" />}
        {<ChatInfoCardItem title="time" content="04:55" />}
      </Flex>
      <Flex
        backgroundColor={'white'}
        justifyContent={'center'}
        alignItems={'center'}
        padding={'14.5px 31px'}
        borderRadius={'0 0 30px 30px'}
      >
        {isStatus ? (
          // isStatus가 true일 때 SelectButton 렌더링
          <Flex gap={'20px'}>
            <SelectButton>수락</SelectButton>
            <SelectButton variant="gray">거부</SelectButton>
          </Flex>
        ) : (
          // isStatus가 false일 때 StatusButton 렌더링
          <Box>
            <StatusButton padding={'12px 45px'}>수락됨</StatusButton>
          </Box>
        )}
      </Flex>
    </Flex>
  )
}

export default ChatInfoCard
