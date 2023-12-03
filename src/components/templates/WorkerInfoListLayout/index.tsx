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
        <Box width={'100%'} position={'relative'} overflow={'hidden'}>
          <Box position={'absolute'} top={'56px'} left={'-50px'}>
            <Picture pictureName="sphere" width={400} />
          </Box>
          <Box position={'absolute'} right={'0'} top={'204px'}>
            <Picture pictureName="supertoroid2" width={400} />
          </Box>
          <Box
            position={'absolute'}
            bottom={'500px'}
            right={'50px'}
            display={{ base: 'none', sm: 'block' }}
          >
            <Picture pictureName="roundcube2" width={400} />
          </Box>
          <Box
            position={'absolute'}
            bottom={'100px'}
            left={'50px'}
            display={{ base: 'none', sm: 'block' }}
          >
            <Picture pictureName="roundcube1" width={400} />
          </Box>
          {children}
        </Box>
      </Layout>
    </>
  )
}

export default WorkerInfoListLayout
