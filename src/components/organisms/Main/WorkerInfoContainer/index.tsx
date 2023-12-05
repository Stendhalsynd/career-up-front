'use client'

// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import WorkerInfoCard from 'components/organisms/WorkerInfoCard/index.tsx'
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

            <Flex
              width={'100vw'}
              paddingRight={'50px'}
              paddingLeft={'50px'}
              gap={'50px'}
              scrollSnapType="x mandatory"
              overflow={'auto'}
            >
              <WorkerInfoCard />
            </Flex>
          </Flex>
        </Flex>
      </Mobile>

      {/* 태블릿 */}
      <Tablet>
        <Flex width={'100%'} paddingLeft={'50px'}>
          <Flex flexDirection={'column'} gap={'50px'} alignItems={'start'}>
            <AosContainer dataAos="fade-right">
              <Flex flexDirection="column" gap={'20px'}>
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
              <Flex flexDirection="column" gap={'10px'}>
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
            <Flex
              width={'100vw'}
              gap={'50px'}
              paddingLeft={'50px'}
              paddingRight={'50px'}
              scrollSnapType="x mandatory"
              overflow={'auto'}
            >
              <WorkerInfoCard />
            </Flex>
          </Flex>
        </Flex>
      </Tablet>

      {/* 데스크탑 */}
      <Desktop>
        <Flex width={'100%'} paddingLeft={'50px'}>
          <Flex flexDirection={'column'} gap={'50px'} alignItems={'start'}>
            <AosContainer dataAos="fade-right">
              <Flex flexDirection="column" gap={'20px'}>
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
              <Flex flexDirection="column" gap={'10px'}>
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
            <Flex
              width={'100vw'}
              gap={'50px'}
              scrollSnapType="x mandatory"
              overflow={'auto'}
            >
              <WorkerInfoCard />
            </Flex>
          </Flex>
        </Flex>
      </Desktop>
    </>
  )
}

export default WorkerInfoContainer
