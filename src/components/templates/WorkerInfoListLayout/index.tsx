import Picture from 'components/atoms/Picture/index.tsx'
import { Box } from 'components/layout/index.ts'
import Layout from 'components/templates/Layout/index.tsx'

interface WorkerInfoListLayoutProps {
  children: React.ReactNode
}

const WorkerInfoListLayout = ({ children }: WorkerInfoListLayoutProps) => {
  return (
    <>
      <Layout>
        <Box width={'100%'} position={'relative'}>
          <Box position={'absolute'} top={'56px'} left={'-50px'}>
            <Picture pictureName="sphere" width={207} />
          </Box>
          <Box position={'absolute'} right={'0'} top={'204px'}>
            <Picture pictureName="supertoroid2" width={120} />
          </Box>
          <Box
            position={'absolute'}
            top={'33px'}
            right={'82px'}
            display={{ base: 'none', sm: 'block' }}
          >
            <Picture pictureName="pill" width={180} />
          </Box>
          {children}
        </Box>
      </Layout>
    </>
  )
}

export default WorkerInfoListLayout
