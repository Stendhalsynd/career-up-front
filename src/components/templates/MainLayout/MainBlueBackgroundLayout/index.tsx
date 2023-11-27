// 메인페이지 배경 레이아웃

import Picture from 'components/atoms/Picture/index.tsx'
import { Box, Flex } from 'components/layout/index.ts'

interface ChildrenProps {
  children: React.ReactNode
}

const MainBlueBackgroundLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Flex
        width={'100vw'}
        flexDirection={'column'}
        gap={'150px'}
        marginTop={'100px'}
        position={'relative'}
        backgroundColor={'primary'}
        overflow={'hidden'}
      >
        <Box position={'absolute'} top={'10px'} right={'-100px'}>
          <Picture pictureName="roundcube2" width={280} />
        </Box>
        <Box position={'absolute'} top={'800px'} right={'-100px'}>
          <Picture pictureName="roundcube1" width={280} />
        </Box>
        {children}
      </Flex>
    </>
  )
}

export default MainBlueBackgroundLayout
