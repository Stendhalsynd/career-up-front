import Picture from 'components/atoms/Picture/index.tsx'
import { Box } from 'components/layout/index.ts'
import Layout from 'components/templates/Layout/index.tsx'

interface MyPageLayoutProps {
  children: React.ReactNode
}

const MyPageLayout = ({ children }: MyPageLayoutProps) => {
  return (
    <>
      <Layout>
        <Box width={'100%'} position={'relative'}>
          <Box position={'absolute'} top={'367px'} left={'-90px'}>
            <Picture pictureName="supertoroid2" width={143} />
          </Box>
          <Box
            position={'absolute'}
            right={'-50px'}
            display={{ base: 'none', sm: 'block' }}
          >
            <Picture pictureName="cube" width={252} />
          </Box>
          {children}
        </Box>
      </Layout>
    </>
  )
}

export default MyPageLayout
