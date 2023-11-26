import { BasicInfo } from 'app/users/[id]/page.tsx'
import { Text } from 'components/atoms/index.ts'
import { Box, Flex } from 'components/layout/index.ts'
import MyPageLayout from 'components/templates/MyPageLayout/index.tsx'
import { notable, notoSansKr } from 'utils/styles.ts'

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
          <Text className={notable.className} fontSize={'mediumLarge'}>
            Notable 노타블
          </Text>
          <Text className={notoSansKr.className} fontSize={'mediumLarge'}>
            NotoSans 한글 노토산스
          </Text>
          <Text marginTop={'33px'}>직무 분야</Text>
        </Flex>
      </Box>
    </MyPageLayout>
  )
}

export default WorkerMyPage
