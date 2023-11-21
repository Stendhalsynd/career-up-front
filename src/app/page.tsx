import Text from 'components/atoms/Text/index.tsx'
import Box from 'components/layout/Box/index.tsx'
import Flex from 'components/layout/Flex/index.tsx'

export default function Home() {
  return (
    <main>
      <Text variant={'small'} color="danger">
        test
      </Text>
      <Flex flexDirection={'row'}>
        <Box width={'120px'} height={'120px'} backgroundColor={'red'} />
        <Box width={'120px'} height={'120px'} backgroundColor={'black'} />
        <Box width={'120px'} height={'120px'} backgroundColor={'gray'} />
        <Box width={'120px'} height={'120px'} backgroundColor={'primary'} />
      </Flex>
    </main>
  )
}
