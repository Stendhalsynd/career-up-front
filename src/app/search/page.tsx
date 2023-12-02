'use client'

import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import { MentoSearch, WorkerInfoCard } from 'components/organisms/index.ts'
import WorkerInfoListLayout from 'components/templates/WorkerInfoListLayout/index.tsx'

const WorkerInfoList = () => {
  return (
    <WorkerInfoListLayout>
      <Flex
        flexDirection={'column'}
        padding={'62px 35px 30px 35px'}
        width={'100vw'}
        maxWidth={'100vw'}
        alignItems={'center'}
      >
        <Flex
          flexDirection={'column'}
          maxWidth={{ base: '100vw', sm: '1000px' }}
          zIndex={1}
          paddingLeft={'30px'}
        >
          {/* 상단 */}
          <Flex
            flexDirection={'column'}
            alignItems={'center'}
            gap={'25px'}
            paddingBottom={'84px'}
          >
            <Text
              fontSize={{ base: 'mediumLarge', sm: 'large' }}
              fontWeight={'700'}
              color={'white'}
            >
              멘토 찾기
            </Text>
            <Text
              fontSize={{ base: 'xSmall', sm: 'small' }}
              fontWeight={'500'}
              color={'white'}
            >
              업계 전문가들의 노하우를 확인하세요!
            </Text>
            <MentoSearch />
          </Flex>

          {/* 하단 */}
          <Flex gap={'30px'} overflow={'auto'}>
            <WorkerInfoCard />
          </Flex>
        </Flex>
      </Flex>
    </WorkerInfoListLayout>
  )
}

export default WorkerInfoList
