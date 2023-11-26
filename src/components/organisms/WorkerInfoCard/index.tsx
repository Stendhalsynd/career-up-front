'use client'

import React from 'react'
import Picture from 'components/atoms/Picture/index.tsx'
import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import { InfoTagButton } from 'components/molecules/Button/TagButton.tsx'

interface WorkerInfoItemProps {
  tag: string
  text: string
}

interface WorkerInfoCardProps {
  pictureName: string
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
        <Text variant={'mediumBold'} color="white">
          행복한 돌고래
        </Text>
        <Text variant={'extraSmall'} color="white">
          미들 (5~8년)
        </Text>
      </Flex>

      <Flex right={'15px'} top={'23px'} position={'absolute'} zIndex={1}>
        <Picture pictureName={props.pictureName || 'male'} width={83} />
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
        <WorkerInfoItem tag="현직" text="카카오" />
        <WorkerInfoItem tag="직군" text="프론트엔드 그 외 2개" />
        <WorkerInfoItem tag="스킬" text="css/html/React 그 외 5개" />
      </Flex>
    </Flex>
  )
}

export default WorkerInfoCard
