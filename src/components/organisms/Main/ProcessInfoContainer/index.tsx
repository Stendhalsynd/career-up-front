'use client'

import Picture from 'components/atoms/Picture/index.tsx'
import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import AosContainer from 'containers/AosContainer/index.tsx'
import { Desktop, Mobile, Tablet } from 'lib/useMediaQuery.tsx'
import { notable } from 'utils/styles.ts'

const ProcessInfoContainer = () => {
  return (
    <>
      {/* 모바일 */}
      <Mobile>
        <Flex
          width={'100%'}
          height={'fit-content'}
          paddingTop={'50px'}
          paddingBottom={'50px'}
          flexDirection={'column'}
          alignItems={'center'}
          zIndex={1}
        >
          <Flex
            width={'70%'}
            maxWidth={'320px'}
            flexDirection={'column'}
            gap={'100px'}
          >
            <AosContainer dataAos="zoom-in-down">
              <Flex flexDirection="column" gap={'10px'}>
                <Text
                  className={notable.className}
                  color={'white'}
                  fontSize={'medium'}
                  textShadow={'4px 2px 2px black'}
                >
                  PROCESS
                </Text>
                <Text variant="smallBold" lineHeight={3} color={'white'}>
                  커리업은 이렇게 진행됩니다.
                </Text>
              </Flex>
            </AosContainer>
            <Flex flexDirection={'column'} gap={'50px'}>
              <AosContainer dataAos="zoom-in-up">
                {/* 탐색 */}
                <Flex
                  flexDirection={'column'}
                  alignItems={'center'}
                  gap={'10px'}
                >
                  <Picture pictureName="zoom" width={80} />
                  <Flex flexDirection={'column'} gap={'10px'}>
                    <Text color={'white'}>탐색</Text>
                    <Text
                      color={'white'}
                      fontSize={'extraSmall'}
                      lineHeight={3}
                    >
                      회사, 직무, 보유 스킬을 검색해서 원하는 개발자 멘토를
                      탐색하세요.
                    </Text>
                  </Flex>
                </Flex>
              </AosContainer>
              <AosContainer dataAos="zoom-in-up">
                {/* 신청 */}
                <Flex
                  flexDirection={'column'}
                  alignItems={'center'}
                  gap={'10px'}
                >
                  <Picture pictureName="megaphone" width={80} />
                  <Flex flexDirection={'column'} gap={'10px'}>
                    <Text color={'white'}>신청</Text>
                    <Text
                      color={'white'}
                      fontSize={'extraSmall'}
                      lineHeight={3}
                    >
                      원하는 개발자 멘토에게 멘토링을 신청하세요.
                    </Text>
                  </Flex>
                </Flex>
              </AosContainer>
              <AosContainer dataAos="zoom-in-up">
                {/* 상담 */}
                <Flex
                  flexDirection={'column'}
                  alignItems={'center'}
                  gap={'10px'}
                >
                  <Picture pictureName="chatbubble" width={80} />
                  <Flex flexDirection={'column'} gap={'10px'}>
                    <Text color={'white'}>상담</Text>
                    <Text
                      color={'white'}
                      fontSize={'extraSmall'}
                      lineHeight={3}
                    >
                      1:1 화상 미팅을 통해 커리어를 함께 설계하세요.
                    </Text>
                  </Flex>
                </Flex>
              </AosContainer>
              <AosContainer dataAos="zoom-in-up">
                {/* 도전 */}
                <Flex
                  flexDirection={'column'}
                  alignItems={'center'}
                  gap={'10px'}
                >
                  <Picture pictureName="thumbup" width={80} />
                  <Flex flexDirection={'column'} gap={'10px'}>
                    <Text color={'white'}>도전</Text>
                    <Text
                      color={'white'}
                      fontSize={'extraSmall'}
                      lineHeight={3}
                    >
                      설계한 미래를 바탕으로 커리업에 도전하세요.
                    </Text>
                  </Flex>
                </Flex>
              </AosContainer>
            </Flex>
          </Flex>
        </Flex>
      </Mobile>

      {/* 태블릿 */}
      <Tablet>
        <Flex
          width={'100%'}
          height={'fit-content'}
          paddingTop={'50px'}
          paddingBottom={'50px'}
          flexDirection={'column'}
          alignItems={'center'}
          zIndex={1}
        >
          <Flex flexDirection={'column'} gap={'100px'} alignItems={'center'}>
            <AosContainer dataAos="zoom-in-down">
              {/* 제목 */}
              <Flex flexDirection="column" gap={'30px'}>
                <Text
                  className={notable.className}
                  color={'white'}
                  fontSize={'large'}
                  textShadow={'4px 2px 2px black'}
                >
                  PROCESS
                </Text>
                <Text variant="mediumLargeBold" lineHeight={3} color={'white'}>
                  커리업은 이렇게 진행됩니다.
                </Text>
              </Flex>
            </AosContainer>
            {/* 내용 */}
            <Flex
              width={'70%'}
              maxWidth={'320px'}
              flexDirection={'column'}
              gap={'50px'}
            >
              <AosContainer dataAos="zoom-in-up">
                {/* 탐색 */}
                <Flex
                  flexDirection={'column'}
                  alignItems={'center'}
                  gap={'10px'}
                >
                  <Picture pictureName="zoom" width={80} />
                  <Flex flexDirection={'column'} gap={'10px'}>
                    <Text color={'white'}>탐색</Text>
                    <Text
                      color={'white'}
                      fontSize={'extraSmall'}
                      lineHeight={3}
                    >
                      회사, 직무, 보유 스킬을 검색해서 원하는 개발자 멘토를
                      탐색하세요.
                    </Text>
                  </Flex>
                </Flex>
              </AosContainer>
              <AosContainer dataAos="zoom-in-up">
                {/* 신청 */}
                <Flex
                  flexDirection={'column'}
                  alignItems={'center'}
                  gap={'10px'}
                >
                  <Picture pictureName="megaphone" width={80} />
                  <Flex flexDirection={'column'} gap={'10px'}>
                    <Text color={'white'}>신청</Text>
                    <Text
                      color={'white'}
                      fontSize={'extraSmall'}
                      lineHeight={3}
                    >
                      원하는 개발자 멘토에게 멘토링을 신청하세요.
                    </Text>
                  </Flex>
                </Flex>
              </AosContainer>
              <AosContainer dataAos="zoom-in-up">
                {/* 상담 */}
                <Flex
                  flexDirection={'column'}
                  alignItems={'center'}
                  gap={'10px'}
                >
                  <Picture pictureName="chatbubble" width={80} />
                  <Flex flexDirection={'column'} gap={'10px'}>
                    <Text color={'white'}>상담</Text>
                    <Text
                      color={'white'}
                      fontSize={'extraSmall'}
                      lineHeight={3}
                    >
                      1:1 화상 미팅을 통해 커리어를 함께 설계하세요.
                    </Text>
                  </Flex>
                </Flex>
              </AosContainer>
              <AosContainer dataAos="zoom-in-up">
                {/* 도전 */}
                <Flex
                  flexDirection={'column'}
                  alignItems={'center'}
                  gap={'10px'}
                >
                  <Picture pictureName="thumbup" width={80} />
                  <Flex flexDirection={'column'} gap={'10px'}>
                    <Text color={'white'}>도전</Text>
                    <Text
                      color={'white'}
                      fontSize={'extraSmall'}
                      lineHeight={3}
                    >
                      설계한 미래를 바탕으로 커리업에 도전하세요.
                    </Text>
                  </Flex>
                </Flex>
              </AosContainer>
            </Flex>
          </Flex>
        </Flex>
      </Tablet>
      <Desktop>
        <Flex
          width={'100%'}
          height={'fit-content'}
          padding={'50px'}
          flexDirection={'column'}
          // alignItems={'center'}
          zIndex={1}
        >
          <Flex flexDirection={'column'} gap={'200px'}>
            <AosContainer dataAos="fade-right">
              {/* 제목 */}
              <Flex flexDirection="column" gap={'50px'}>
                <Text
                  className={notable.className}
                  color={'white'}
                  fontSize={'large'}
                  textShadow={'4px 2px 2px black'}
                >
                  PROCESS
                </Text>
                <Text variant="mediumLargeBold" lineHeight={3} color={'white'}>
                  커리업은 이렇게 진행됩니다.
                </Text>
              </Flex>
            </AosContainer>
            {/* 내용 */}
            <AosContainer dataAos="zoom-out-down">
              <Flex
                flexDirection={'row'}
                gap={'100px'}
                justifyContent={'center'}
              >
                {/* 탐색 */}
                <Flex
                  flexDirection={'column'}
                  alignItems={'center'}
                  gap={'10px'}
                  maxWidth={'160px'}
                >
                  <Picture pictureName="zoom" width={80} />
                  <Flex flexDirection={'column'} gap={'10px'}>
                    <Text color={'white'}>탐색</Text>
                    <Text
                      color={'white'}
                      fontSize={'extraSmall'}
                      lineHeight={3}
                    >
                      회사, 직무, 보유 스킬을 검색해서 원하는 개발자 멘토를
                      탐색하세요.
                    </Text>
                  </Flex>
                </Flex>
                {/* 신청 */}
                <Flex
                  flexDirection={'column'}
                  alignItems={'center'}
                  gap={'10px'}
                  maxWidth={'160px'}
                >
                  <Picture pictureName="megaphone" width={80} />
                  <Flex flexDirection={'column'} gap={'10px'}>
                    <Text color={'white'}>신청</Text>
                    <Text
                      color={'white'}
                      fontSize={'extraSmall'}
                      lineHeight={3}
                    >
                      원하는 개발자 멘토에게 멘토링을 신청하세요.
                    </Text>
                  </Flex>
                </Flex>
                {/* 상담 */}
                <Flex
                  flexDirection={'column'}
                  alignItems={'center'}
                  gap={'10px'}
                  maxWidth={'160px'}
                >
                  <Picture pictureName="chatbubble" width={80} />
                  <Flex flexDirection={'column'} gap={'10px'}>
                    <Text color={'white'}>상담</Text>
                    <Text
                      color={'white'}
                      fontSize={'extraSmall'}
                      lineHeight={3}
                    >
                      1:1 화상 미팅을 통해 커리어를 함께 설계하세요.
                    </Text>
                  </Flex>
                </Flex>
                {/* 도전 */}
                <Flex
                  flexDirection={'column'}
                  alignItems={'center'}
                  gap={'10px'}
                  maxWidth={'160px'}
                >
                  <Picture pictureName="thumbup" width={80} />
                  <Flex flexDirection={'column'} gap={'10px'}>
                    <Text color={'white'}>도전</Text>
                    <Text
                      color={'white'}
                      fontSize={'extraSmall'}
                      lineHeight={3}
                    >
                      설계한 미래를 바탕으로 커리업에 도전하세요.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </AosContainer>
          </Flex>
        </Flex>
      </Desktop>
    </>
  )
}

export default ProcessInfoContainer
