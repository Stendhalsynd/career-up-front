// import Image from 'next/image'
import Avatar from 'components/atoms/Avatar/index.tsx'
import Logo from 'components/atoms/Logo/index.tsx'
import Text from 'components/atoms/Text/index.tsx'

export default function Home() {
  return (
    <main>
      <Text variant={'small'} color="danger">
        test
      </Text>
      <Avatar src={'/assets/image/img_avatar.svg'} width={100} height={100} />
      <Logo></Logo>
    </main>
  )
}
