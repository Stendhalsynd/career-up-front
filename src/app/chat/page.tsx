import App from 'chat/App.tsx'
import { Flex } from 'components/layout/index.ts'

const Chat = () => {
  return (
    <Flex
      width={'100vw'}
      height={'calc(100vh - 50px)'}
      backgroundColor={'white'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <App />
    </Flex>
  )
}

export default Chat
