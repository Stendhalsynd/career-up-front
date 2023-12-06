'use client'

import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import WorkerInfoCardSlider from 'components/organisms/WorkerInfoCardSlider/index.tsx'
import AosContainer from 'containers/AosContainer/index.tsx'
import { Desktop, Mobile, Tablet } from 'lib/useMediaQuery.tsx'
import { notable } from 'utils/styles.ts'

// 재직자 리스트 관련 소개가 있는 컨테이너
const WorkerInfoContainer = () => {
  return (
    <>
      {/* 모바일 */}
      <Mobile>
        <Flex width={'100%'} justifyContent={'center'}>
          <Flex flexDirection={'column'} gap={'20px'} alignItems={'center'}>
            <AosContainer dataAos="fade-down">
              <Flex flexDirection="column" gap={'5px'}>
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
            </AosContainer>

            <AosContainer dataAos="fade-down">
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
            </AosContainer>

            <AosContainer dataAos="zoom-in">
              <WorkerInfoCardSlider />
            </AosContainer>
          </Flex>
        </Flex>
      </Mobile>

      {/* 태블릿 */}
      <Tablet>
        <Flex width={'100%'}>
          <Flex flexDirection={'column'} gap={'50px'} alignItems={'start'}>
            <AosContainer dataAos="fade-right">
              <Flex flexDirection="column" gap={'20px'} paddingLeft={'50px'}>
                <Text
                  className={notable.className}
                  fontSize={'large'}
                  color={'white'}
                  textShadow={'4px 2px 2px #0A7EFE'}
                >
                  OUTSTANDING
                </Text>
                <Text
                  className={notable.className}
                  fontSize={'large'}
                  color={'white'}
                  textShadow={'4px 2px 2px #0A7EFE'}
                >
                  PROFESSIONALS
                </Text>
              </Flex>
            </AosContainer>

            <AosContainer dataAos="fade-right">
              <Flex flexDirection="column" gap={'20px'} paddingLeft={'50px'}>
                <Text
                  variant="mediumLargeBold"
                  lineHeight={3}
                  color={'white'}
                  textAlign={'left'}
                >
                  실력있는 개발자들이 모였습니다.
                </Text>

                <Flex justifyContent={'start'}>
                  <Text
                    variant="mediumLargeBold"
                    lineHeight={3}
                    color={'white'}
                    textAlign={'left'}
                  >
                    나의 고민을 해결해줄 수 있는&nbsp;
                  </Text>
                  <Text
                    variant="mediumLargeBold"
                    lineHeight={3}
                    color={'primary'}
                    textAlign={'left'}
                  >
                    파트너
                  </Text>
                  <Text
                    variant="mediumLargeBold"
                    lineHeight={3}
                    color={'white'}
                    textAlign={'left'}
                  >
                    를 찾아보세요.
                  </Text>
                </Flex>
              </Flex>
            </AosContainer>
            <AosContainer dataAos="fade-right">
              <WorkerInfoCardSlider />
            </AosContainer>
          </Flex>
        </Flex>
      </Tablet>

      {/* 데스크탑 */}
      <Desktop>
        <Flex width={'100%'} gap={'10px'}>
          <Flex flexDirection={'column'} gap={'50px'} alignItems={'start'}>
            <AosContainer dataAos="fade-right">
              <Flex flexDirection="column" gap={'20px'} paddingLeft={'50px'}>
                <Text
                  className={notable.className}
                  fontSize={'large'}
                  color={'white'}
                  textShadow={'4px 2px 2px #0A7EFE'}
                >
                  OUTSTANDING
                </Text>
                <Text
                  className={notable.className}
                  fontSize={'large'}
                  color={'white'}
                  textShadow={'4px 2px 2px #0A7EFE'}
                >
                  PROFESSIONALS
                </Text>
              </Flex>
            </AosContainer>
            <AosContainer dataAos="fade-right">
              <Flex flexDirection="column" gap={'20px'} paddingLeft={'50px'}>
                <Text
                  variant="mediumLargeBold"
                  lineHeight={5}
                  color={'white'}
                  textAlign={'left'}
                  style={{ wordBreak: 'keep-all' }}
                >
                  실력있는 개발자들이 모였습니다.
                </Text>

                <Flex
                  justifyContent={'start'}
                  flexDirection={'column'}
                  gap={'13px'}
                >
                  <Text
                    variant="mediumLargeBold"
                    lineHeight={3}
                    color={'white'}
                    textAlign={'left'}
                  >
                    나의 고민을 해결해줄 수 있는
                  </Text>
                  <Flex>
                    <Text
                      variant="mediumLargeBold"
                      lineHeight={3}
                      color={'primary'}
                      textAlign={'left'}
                    >
                      파트너
                    </Text>
                    <Text
                      variant="mediumLargeBold"
                      lineHeight={3}
                      color={'white'}
                      textAlign={'left'}
                    >
                      를 찾아보세요.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </AosContainer>
          </Flex>
          <AosContainer dataAos="fade-left">
            <WorkerInfoCardSlider />
          </AosContainer>
        </Flex>
      </Desktop>
    </>
  )
}

export default WorkerInfoContainer
