import { useRecoilValue } from 'recoil'
import Picture from 'components/atoms/Picture/index.tsx'
import { Box } from 'components/layout/index.ts'
import Layout from 'components/templates/Layout/index.tsx'
import { countDataState } from 'utils/state.ts'

interface WorkerInfoListLayoutProps {
  children: React.ReactNode
}

const WorkerInfoListLayout = ({ children }: WorkerInfoListLayoutProps) => {
  const countData = useRecoilValue(countDataState)

  return (
    <>
      <Layout>
        <Box
          width={'100%'}
          position={'relative'}
          overflow={'hidden'}
          height={
            countData === 0
              ? { base: 'calc(100vh - 40px)', sm: 'calc(100vh - 50px)' }
              : 'auto'
          }
        >
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
