import Picture from 'components/atoms/Picture/index.tsx'
import { Box, Flex } from 'components/layout/index.ts'
import Layout from 'components/templates/Layout/index.tsx'

interface ChildrenProps {
  children: React.ReactNode
}

const MeetingApplyLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Layout>
        <Flex
          width={'100%'}
          height={'fit-content'}
          minHeight={'190px'}
          position={'relative'}
          flexDirection={'column'}
          justifyContent={'center'}
        >
          <Box position={'absolute'} right={'-30px'}>
            <Picture pictureName="supertoroid" width={157} />
          </Box>
          <Box position={'absolute'} left={'-30px'} bottom={'-30px'}>
            <Picture pictureName="supertoroid2" width={149} />
          </Box>
          {children}
        </Flex>
      </Layout>
    </>
  )
}

export default MeetingApplyLayout
