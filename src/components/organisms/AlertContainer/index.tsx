'use client'

import React from 'react'
import { Icon, Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'

const AlertComponent = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent={'center'}
        borderRadius="20px"
        backgroundColor="white"
        width={{ base: '350px', sm: '600px', md: '800px' }}
        height={{ base: '190px', sm: '300px', md: '350px' }}
        padding="20px"
      >
        <Icon iconName="warning" width={50}></Icon>

        <Text
          textAlign="center"
          fontSize={{ base: 'small', sm: 'medium' }}
          marginTop="40px"
        >
          오늘 예정된 커피챗이 없어요!
        </Text>
      </Flex>
    </Flex>
  )
}

export default AlertComponent
