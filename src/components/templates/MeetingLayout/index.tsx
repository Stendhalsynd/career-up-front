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
          alignItems={'center'}
        >
          <Flex
            maxWidth={'1000px'}
            height={'fit-content'}
            minHeight={'190px'}
            position={'relative'}
            flexDirection={'column'}
            justifyContent={'center'}
            width={{ base: '450px', sm: '768px', md: '901px' }}
            style={{ transition: '1s' }}
          >
            <Box position={'absolute'} right={'-30px'}>
              <Picture pictureName="supertoroid1" width={157} />
            </Box>
            <Box position={'absolute'} left={'-30px'} bottom={'-30px'}>
              <Picture pictureName="supertoroid2" width={149} />
            </Box>
            {children}
          </Flex>
        </Flex>
      </Layout>
    </>
  )
}

export default MeetingApplyLayout
