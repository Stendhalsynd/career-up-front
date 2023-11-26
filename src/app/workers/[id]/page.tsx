import { BasicInfo } from 'app/users/[id]/page.tsx'
import { Text } from 'components/atoms/index.ts'
import { Box, Flex } from 'components/layout/index.ts'
import MyPageLayout from 'components/templates/MyPageLayout/index.tsx'

const WorkerMyPage = ({ params }: { params: { id: string } }) => {
  return (
    <MyPageLayout>
      <BasicInfo id={params.id} isUser={false} />
      <Box
        width={'100vw'}
        backgroundColor={'white'}
        padding={{ base: '49px 40px 30px 40px', sm: '55px 80px 40px 80px' }}
      >
        <Flex flexDirection={'column'}>
          <Text variant={'smallBold'}>자기소개</Text>

          <Text fontSize={'mediumLarge'}>직무 분야</Text>
        </Flex>
      </Box>
    </MyPageLayout>
  )
}

export default WorkerMyPage
