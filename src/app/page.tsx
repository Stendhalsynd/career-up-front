import Image from 'next/image'
import Avatar from 'components/atoms/Avatar/index.tsx'
import Text from 'components/atoms/Text/index.tsx'

export default function Home() {
  return (
    <main>
      <Text variant={'small'} color="danger">
        test
      </Text>
      <Image
        src={'/assets/image/img_avatar.svg'}
        alt={'avatar'}
        width={100}
        height={100}
      />
      <Avatar
        src={'/assets/image/img_avatar.svg'}
        variant={'mobile'}
        width={100}
        height={100}
        alt={'프로필 이미지'}
      />
    </main>
  )
}
