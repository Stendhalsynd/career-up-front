'use client'

import React from 'react'
import Picture from 'components/atoms/Picture/index.tsx'
import { Text } from 'components/atoms/index.ts'
import { Flex, Box } from 'components/layout/index.ts'
import { InfoTagButton } from 'components/molecules/Button/TagButton.tsx'
import Label from 'components/molecules/Label/index.tsx'

const WorkerInfoCard = () => {
  return (
    <Flex flexDirection="column">
      <Box>
        <Box
          backgroundColor="white"
          width="260px"
          height="335px"
          borderRadius={'20px'}
        >
          <Box
            backgroundColor="primary"
            width="260px"
            height="96px"
            borderRadius={'20px 20px 0 0'}
          >
            <Label>
              <Text variant={'medium'} color="white" margin="18px">
                우울한 돌고래
              </Text>
            </Label>
            <Text variant={'extraSmall'} color="white" margin="18px">
              미들 (5~8년)
            </Text>
          </Box>

          <Flex justifyContent="center" marginTop="-75px" marginLeft="150px">
            <Picture pictureName="male" />
          </Flex>

          <Box
            backgroundColor="white"
            width="234px"
            height="235px"
            marginTop="-134px"
          >
            <Flex
              flexDirection="column"
              justifyContent="flex-end"
              margin="0 0 -32px 0"
            >
              <InfoTagButton tag="현직" margin="18px"></InfoTagButton>
              <Text
                variant={'xSmall'}
                color="black"
                margin="24px"
                marginTop="-10px"
              >
                카카오
              </Text>
            </Flex>
            <Flex
              flexDirection="column"
              justifyContent="flex-end"
              margin="0 0 -32px 0"
            >
              <InfoTagButton tag="직군" margin="18px"></InfoTagButton>
              <Text
                variant={'xSmall'}
                color="black"
                margin="24px"
                marginTop="-10px"
              >
                프론트엔드 그 외 2개
              </Text>
            </Flex>
            <Flex
              flexDirection="column"
              justifyContent="flex-end"
              margin="0 0 -32px 0"
            >
              <InfoTagButton tag="스킬" margin="18px"></InfoTagButton>
              <Text
                variant={'xSmall'}
                color="black"
                margin="24px"
                marginTop="-10px"
              >
                CSS/HTML/REACT 그 외 5개
              </Text>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default WorkerInfoCard
