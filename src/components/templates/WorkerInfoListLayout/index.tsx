// import { useRecoilValue } from 'recoil'
import Picture from 'components/atoms/Picture/index.tsx'
import { Box, Flex } from 'components/layout/index.ts'
import Layout from 'components/templates/Layout/index.tsx'
import FloatingComponent from 'containers/FloatingContainer/index.tsx'
// import { countDataState } from 'utils/state.ts'

interface WorkerInfoListLayoutProps {
  children: React.ReactNode
}

const WorkerInfoListLayout = ({ children }: WorkerInfoListLayoutProps) => {
  // const countData = useRecoilValue(countDataState)

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
            width={{ base: '98%', sm: '99%', md: '100%' }}
            height={'fit-content'}
            minHeight={'190px'}
            flexDirection={'column'}
            justifyContent={'center'}
            position={'relative'}
            overflow={'hidden'}
            style={{ transition: '1s' }}
          >
            <Box
              width={'100%'}
              position={'relative'}
              overflow={'hidden'}
              height={'auto'}
            >
              <Box
                position={'fixed'}
                top={'80px'}
                left={{ base: '-50px', sm: '30px', md: '100px' }}
                width={{ base: '200px', sm: '250px', md: '280px' }}
              >
                <FloatingComponent>
                  <Picture pictureName="sphere" width={400} />
                </FloatingComponent>
              </Box>
              <Box
                position={'fixed'}
                right={{ base: '0', sm: '20px', md: '100px' }}
                top={{ base: '204px', sm: '200px', md: '230px' }}
                width={{ base: '180px', md: '300px' }}
              >
                <FloatingComponent>
                  <Picture pictureName="supertoroid2" width={400} />
                </FloatingComponent>
              </Box>

              <Box
                position={'fixed'}
                top={'800px'}
                right={'50px'}
                width={{ base: '200px', md: '300px' }}
                // display={
                //   countData == 0 ? 'none' : { base: 'none', sm: 'block' }
                // }
              >
                <FloatingComponent>
                  <Picture pictureName="roundcube2" width={400} />
                </FloatingComponent>
              </Box>

              <Box
                position={'fixed'}
                top={'1200px'}
                left={'50px'}
                width={{ base: '200px', md: '300px' }}
                // display={{ base: 'none', sm: 'block' }}
              >
                <FloatingComponent>
                  <Picture pictureName="roundcube1" width={400} />
                </FloatingComponent>
              </Box>
              {children}
            </Box>
          </Flex>
        </Flex>
      </Layout>
    </>
  )
}

export default WorkerInfoListLayout
