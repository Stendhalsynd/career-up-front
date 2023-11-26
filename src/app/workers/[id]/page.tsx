import { ReactNode } from 'react'
import { BasicInfo } from 'app/users/[id]/page.tsx'
import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import { IntroTagButton } from 'components/molecules/Button/TagButton.tsx'
import { Input, RequestButton, TextArea } from 'components/molecules/index.ts'
import MyPageLayout from 'components/templates/MyPageLayout/index.tsx'

interface InfoItemProps {
  title: string
  children: ReactNode
}

const InfoItem = (props: InfoItemProps) => {
  return (
    <Flex gap={'33px'} flexDirection={'column'}>
      <Text variant={'smallBold'}>{props.title}</Text>
      {props.children}
    </Flex>
  )
}

const WorkerMyPage = ({ params }: { params: { id: string } }) => {
  return (
    <MyPageLayout>
      <BasicInfo id={params.id} isUser={false} />
      <Flex
        width={'100%'}
        backgroundColor={'white'}
        padding={{ base: '49px 40px 30px 40px', sm: '55px 80px 40px 80px' }}
        flexDirection={'column'}
        alignItems={'center'}
      >
        <Flex flexDirection={'column'} width={'100%'} maxWidth={'900px'}>
          <Text variant={'mediumLargeBold'}>자기소개</Text>

          <Flex marginTop={'33px'} gap={'33px'} flexDirection={'column'}>
            <InfoItem title={'직무 분야'}>
              <Flex gap={'7px'} flexWrap={'wrap'}>
                <IntroTagButton tag="프론트엔드" variant="primary" />
                <IntroTagButton tag="백엔드" />
                <IntroTagButton tag="안드로이드" />
                <IntroTagButton tag="iOS" />
                <IntroTagButton tag="AI" />
                <IntroTagButton tag="게임" />
              </Flex>
            </InfoItem>
            <InfoItem title={'보유스킬'}>
              <Input
                hasDarkBackground={true}
                placeholder="보유스킬을 입력하세요."
              />
              <Flex gap={'7px'} flexWrap={'wrap'}>
                <IntroTagButton tag="React" />
                <IntroTagButton tag="Next.js" />
              </Flex>
            </InfoItem>
            <InfoItem title={'자기소개 작성'}>
              <TextArea />
            </InfoItem>
          </Flex>

          <Flex justifyContent={'center'} marginTop={'32px'}>
            <RequestButton width={'50vw'} maxWidth={'350px'}>
              저장하기
            </RequestButton>
          </Flex>
        </Flex>
      </Flex>
    </MyPageLayout>
  )
}

export default WorkerMyPage
