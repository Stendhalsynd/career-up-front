import OtherComponent from 'chats/Temp.tsx'
import { Flex } from 'components/layout/index.ts'
import Layout from 'components/templates/Layout/index.tsx'

const Chat = () => {
  return (
    <Layout>
      <Flex
        width={'100vw'}
        height={'100vh'}
        backgroundColor={'white'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <OtherComponent />
      </Flex>
    </Layout>
  )
}

export default Chat
