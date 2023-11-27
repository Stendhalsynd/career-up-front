'use client'

import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import WorkerInfoCard from 'components/organisms/WorkerInfoCard/index.tsx'
import { Mobile, Tablet } from 'lib/useMediaQuery.tsx'
import { notable } from 'utils/styles.ts'

// 재직자 리스트 관련 소개가 있는 컨테이너
const WorkerInfoContainer = () => {
  return (
    <>
      <Mobile>
        <Flex width={'100%'} justifyContent={'center'}>
          <Flex flexDirection={'column'} gap={'20px'} alignItems={'center'}>
            <Flex flexDirection="column">
              <Text
                className={notable.className}
                color={'white'}
                textShadow={'4px 2px 2px #0A7EFE'}
              >
                OUTSTANDING
              </Text>
              <Text
                className={notable.className}
                color={'white'}
                textShadow={'4px 2px 2px #0A7EFE'}
              >
                PROFESSIONALS
              </Text>
            </Flex>

            <Flex flexDirection="column">
              <Text
                variant="smallBold"
                lineHeight={3}
                color={'white'}
                textAlign={'center'}
              >
                실력있는 개발자들이 모였습니다.
              </Text>
              <Text
                variant="smallBold"
                lineHeight={3}
                color={'white'}
                textAlign={'center'}
              >
                나의 고민을 해결해줄 수 있는
              </Text>
              <Flex justifyContent={'center'}>
                <Text
                  variant="smallBold"
                  lineHeight={3}
                  color={'primary'}
                  textAlign={'center'}
                >
                  파트너
                </Text>
                <Text
                  variant="smallBold"
                  lineHeight={3}
                  color={'white'}
                  textAlign={'center'}
                >
                  를 찾아보세요.
                </Text>
              </Flex>
            </Flex>
            <Flex
              width={'100vw'}
              gap={'50px'}
              paddingLeft={'50px'}
              paddingRight={'50px'}
              scrollSnapType="x mandatory"
              overflow={'auto'}
            >
              <Flex scrollSnapAlign="center">
                <WorkerInfoCard />
              </Flex>
              <Flex scrollSnapAlign="center">
                <WorkerInfoCard />
              </Flex>
              <Flex scrollSnapAlign="center">
                <WorkerInfoCard />
              </Flex>
              <Flex scrollSnapAlign="center">
                <WorkerInfoCard />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Mobile>
      <Tablet>
        <Flex width={'100%'} justifyContent={'center'}>
          <Flex flexDirection={'column'} gap={'20px'} alignItems={'center'}>
            <Flex flexDirection="column">
              <Text
                className={notable.className}
                color={'white'}
                textShadow={'4px 2px 2px #0A7EFE'}
              >
                OUTSTANDING
              </Text>
              <Text
                className={notable.className}
                color={'white'}
                textShadow={'4px 2px 2px #0A7EFE'}
              >
                PROFESSIONALS
              </Text>
            </Flex>

            <Flex flexDirection="column">
              <Text
                variant="smallBold"
                lineHeight={3}
                color={'white'}
                textAlign={'center'}
              >
                실력있는 개발자들이 모였습니다.
              </Text>
              <Text
                variant="smallBold"
                lineHeight={3}
                color={'white'}
                textAlign={'center'}
              >
                나의 고민을 해결해줄 수 있는
              </Text>
              <Flex justifyContent={'center'}>
                <Text
                  variant="smallBold"
                  lineHeight={3}
                  color={'primary'}
                  textAlign={'center'}
                >
                  파트너
                </Text>
                <Text
                  variant="smallBold"
                  lineHeight={3}
                  color={'white'}
                  textAlign={'center'}
                >
                  를 찾아보세요.
                </Text>
              </Flex>
            </Flex>
            <Flex
              width={'100vw'}
              gap={'50px'}
              paddingLeft={'50px'}
              paddingRight={'50px'}
              scrollSnapType="x mandatory"
              overflow={'auto'}
            >
              <Flex scrollSnapAlign="center">
                <WorkerInfoCard />
              </Flex>
              <Flex scrollSnapAlign="center">
                <WorkerInfoCard />
              </Flex>
              <Flex scrollSnapAlign="center">
                <WorkerInfoCard />
              </Flex>
              <Flex scrollSnapAlign="center">
                <WorkerInfoCard />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Tablet>
    </>
  )
}

export default WorkerInfoContainer
