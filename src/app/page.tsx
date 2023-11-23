// import Image from 'next/image'
import Avatar from 'components/atoms/Avatar/index.tsx'
import Picture from 'components/atoms/Picture'
import { Icon, Logo, Text } from 'components/atoms/index.ts'
import RequestButton from 'components/molecules/Button/RequestButton.tsx'
import SelectButton from 'components/molecules/Button/SelectButton.tsx'
import StatusButton from 'components/molecules/Button/StatusButton.tsx'
import Header from 'components/molecules/Header/index.tsx'
import Label from 'components/molecules/Label/index.tsx'
import SearchInput from 'components/molecules/SearchInput/index.tsx'

export default function Home() {
  return (
    <main>
      <Header />
      <Text variant={'small'} color="danger">
        test
      </Text>
      <Avatar src={'/assets/image/img_avatar.svg'} width={100} height={100} />
      <Logo />
      <Icon iconName="desktop" width={100} height={100} />
      <Icon iconName="warning" />

      <SearchInput variant={'primaryLarge'} />
      <Label fontSize={'extraSmall'}>
        <Text color={'white'}>
          실력있는 개발자들이 모였습니다. 나의 고민을 해결해줄 수 있는&nbsp;
        </Text>
        <Text color={'primary'} fontSize={'large'}>
          파트너
        </Text>
        <Text color={'white'}>를 찾아보세요.</Text>
      </Label>

      <RequestButton variant="dark">검색</RequestButton>
      <SelectButton variant="primary" borderRadius={{ base: '5px' }}>
        구직자
      </SelectButton>
      <SelectButton variant="white" borderRadius={{ base: '5px' }}>
        재직자
      </SelectButton>
      <StatusButton variant="gray">거절됨</StatusButton>
      <Picture pictureName="cube" />
    </main>
  )
}
