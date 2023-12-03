'use client'

import { useRecoilValue } from 'recoil'
import Picture from 'components/atoms/Picture/index.tsx'
import { Avatar, Text } from 'components/atoms/index.ts'
import { Box, Flex } from 'components/layout/index.ts'
import { SkillTagButton } from 'components/molecules/Button/TagButton.tsx'
import { RequestButton } from 'components/molecules/index.ts'
import Layout from 'components/templates/Layout/index.tsx'
import { theme } from 'themes/index.ts'
import { selectedNicknameState } from 'utils/state.ts'

interface InfoItemProps {
  tag: string
  text: string
  color?: string
}

const InfoItem = (props: InfoItemProps) => {
  return (
    <Flex gap={'12px'}>
      <Text variant={'extraSmall'} color={'gray'}>
        {props.tag}
      </Text>
      <Text
        variant={'extraSmallBold'}
        color={props.color ? props.color : 'darkGray'}
      >
        {props.text}
      </Text>
    </Flex>
  )
}

const WorkerMyPage = () => {
  const selectedNickname = useRecoilValue(selectedNicknameState)
  console.log(selectedNickname)

  return (
    <Layout>
      <Flex
        width={{ base: 'fit-content', md: '100vw' }}
        justifyContent={'center'}
      >
        <Flex flexDirection={{ base: 'column', sm: 'row' }} maxWidth={'1200px'}>
          {/* 상단 */}
          <Flex
            backgroundColor={'white'}
            padding={{ base: '40px 20px', sm: '40px 46px' }}
            gap={{ base: '18px', sm: '25px' }}
            justifyContent={{ base: 'center', sm: 'flex-start' }}
            alignItems={'center'}
            flexDirection={{ base: 'row', sm: 'column' }}
            height={{ base: 'fit-content', sm: '100vh' }}
            minWidth={{ base: 'fit-content', sm: '300px' }}
            maxWidth={{ md: '400px' }}
            width={{ sm: '35vw' }}
            borderRadius={{ base: '0', md: '30px' }}
            margin={{ base: '0', md: '30px' }}
            maxHeight={{ md: '800px' }}
          >
            <Flex alignSelf={{ base: 'flex-start', sm: 'center' }}>
              <Box display={{ base: 'block', sm: 'none' }}>
                <Avatar avatarName={'avatar'} width={84}></Avatar>
              </Box>
              <Box display={{ base: 'none', sm: 'block' }}>
                <Avatar avatarName={'avatar'} width={113}></Avatar>
              </Box>
            </Flex>
            <Flex flexDirection={'column'} gap={{ base: '10px', sm: '15px' }}>
              <Text variant={'mediumBold'}>슬픈 돌고래</Text>
              <InfoItem tag={'현직'} text={'네이버'} color="primary" />
              <InfoItem tag={'직군'} text={'프론트엔드/웹퍼블리셔'} />
            </Flex>

            <Flex display={{ base: 'none', sm: 'flex' }}>
              <RequestButton width={'fit-content'}>멘토링 신청</RequestButton>
            </Flex>

            <Flex display={{ base: 'none', sm: 'flex' }} marginTop={'100px'}>
              <Picture pictureName="computer" width={235} />
            </Flex>
          </Flex>
          {/* 하단 */}
          <Flex
            flexDirection={'column'}
            padding={{ base: '20px 25px', md: '0' }}
            gap={'29px'}
            margin={{ base: '0', md: '30px' }}
          >
            <Flex
              border={`1px solid ${theme.colors.primary}`}
              borderRadius={'20px'}
              padding={'20px'}
              flexDirection={'column'}
              backgroundColor={'white'}
              alignItems={'center'}
              gap={'20px'}
            >
              <Picture pictureName="vector" width={27} />
              <Text variant="smallBold">
                프론트엔드 개발 분야가 궁금하다면, 저와 커리업 어떠세요?
              </Text>
            </Flex>

            <Flex flexDirection={'column'} gap={{ base: '10px', sm: '15px' }}>
              <Text
                fontSize={{ base: 'extraSmall', sm: 'small' }}
                fontWeight={'700'}
                color={'primary'}
              >
                커리업 파트너 입니다:)
              </Text>
              <Text variant="extraSmall" color={'white'}>
                안녕하세요. 현재 프론트엔드 5년차 개발자입니다. 경영학을
                전공했고, 기획자로 3년간 업무한 경험이 있습니다. <br />
                <br />
                부트캠프를 통해 커리어 전환을 하였고, 현재 네이버에서 근무하고
                있습니다. <br />
                <br />약 4년간의 개발자 멘토링 경험이 있습니다. (질문 답변, 코드
                리뷰, 이력서 리뷰, 프로젝트 리뷰 등)
                <br />
                <br />
                클럽하우스에서 개발관련 트렌드, 고민상담, 각종 테크토크를 나누는
                ‘프론트엔드 개발자들의 티타임’ 클럽을 만들고 운영한 경험이
                있습니다.
                <br />
                <br />
                성과를 만들어내는 팀의 일하는 방식에 대해서도 깊은 관심을 갖고,
                현재 팀에서 다양한 실험을 하고 있습니다.
              </Text>
            </Flex>

            <Flex flexDirection={'column'} gap={{ base: '10px', sm: '15px' }}>
              <Text
                fontSize={{ base: 'extraSmall', sm: 'small' }}
                fontWeight={'700'}
                color={'primary'}
              >
                자신있게 설명할 수 있는 분야는
              </Text>
              <Flex gap={'17px'} flexWrap={'wrap'}>
                <SkillTagButton backgroundColor="transparent" tag="#css" />
                <SkillTagButton backgroundColor="transparent" tag="#html" />
                <SkillTagButton backgroundColor="transparent" tag="#react" />
              </Flex>
            </Flex>

            <Flex
              justifyContent={'center'}
              marginTop={'15px'}
              display={{ base: 'flex', sm: 'none' }}
            >
              <RequestButton width={'60vw'} maxWidth={'400px'}>
                멘토링 신청
              </RequestButton>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default WorkerMyPage
