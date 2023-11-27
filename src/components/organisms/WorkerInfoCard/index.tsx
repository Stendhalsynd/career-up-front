'use client'

import React from 'react'
import Picture from 'components/atoms/Picture/index.tsx'
import { Text } from 'components/atoms/index.ts'
import { Box, Flex } from 'components/layout/index.ts'
import { InfoTagButton } from 'components/molecules/Button/TagButton.tsx'

interface WorkerInfoItemProps {
  tag: string
  text: string
}

interface WorkerInfoCardProps {
  nickname?: string
  career?: string
  currentJob?: string
  currentPosition?: string
  currentSkill?: string
  pictureName?: string
}

const WorkerInfoItem = (props: WorkerInfoItemProps) => {
  return (
    <Flex flexDirection="column" gap={'7.67px'}>
      <InfoTagButton tag={props.tag}></InfoTagButton>
      <Text variant={'extraSmall'} color="black">
        {props.text}
      </Text>
    </Flex>
  )
}

const WorkerInfoCard = (props: WorkerInfoCardProps) => {
  const {
    nickname,
    // career,
    currentJob,
    currentPosition,
    currentSkill,
    pictureName,
  } = props

  return (
    <Flex
      flexDirection="column"
      position={'relative'}
      width={'fit-content'}
      minWidth={'260px'}
    >
      <Flex
        backgroundColor="primary"
        width={'100%'}
        height={'fit-content'}
        borderRadius={'20px 20px 0 0'}
        flexDirection={'column'}
        padding={'25px'}
        gap={'15px'}
      >
        <Box zIndex={3}>
          <Text variant={'mediumBold'} color="white">
            {nickname || '바람직스러운 유럽소나무담비'}
          </Text>
        </Box>
        {/* <Box zIndex={3}>
          <Text variant={'extraSmall'} color="white">
            {career || '미들(5~8년)'}
          </Text>
        </Box> */}
      </Flex>

      <Flex right={'15px'} top={'23px'} position={'absolute'} zIndex={1}>
        <Picture pictureName={pictureName || 'male'} width={83} />
      </Flex>

      <Flex
        backgroundColor="white"
        width={'100%'}
        height={'fit-content'}
        flexDirection={'column'}
        gap={'15.32px'}
        padding={'25px'}
        borderRadius={'0 0 20px 20px'}
      >
        <Box zIndex={3}>
          <WorkerInfoItem tag="현직" text={currentJob || '카카오'} />
        </Box>
        <Box zIndex={3}>
          <WorkerInfoItem
            tag="직군"
            text={currentPosition || '프론트엔드 그 외 2개'}
          />
        </Box>
        <Box zIndex={3}>
          <WorkerInfoItem
            tag="스킬"
            text={currentSkill || 'css/html/React 그 외 5개'}
          />
        </Box>
      </Flex>
    </Flex>
  )
}

export default WorkerInfoCard
