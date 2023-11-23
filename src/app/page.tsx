// import Image from 'next/image'
import Avatar from 'components/atoms/Avatar/index.tsx'
import Icon from 'components/atoms/Icon/index.tsx'
import Logo from 'components/atoms/Logo/index.tsx'
import Text from 'components/atoms/Text/index.tsx'
import Box from 'components/layout/Box/index.tsx'
import Flex from 'components/layout/Flex/index.tsx'
import RequestButton from 'components/molecules/Button/RequestButton.tsx'
import SelectButton from 'components/molecules/Button/SelectButton.tsx'
import StatusButton from 'components/molecules/Button/StatusButton.tsx'
import Label from 'components/molecules/Label/index.tsx'
import SearchInput from 'components/molecules/SearchInput/index.tsx'

export default function Home() {
  return (
    <main>
      <Text variant={'small'} color="danger">
        test
      </Text>
      <Avatar src={'/assets/image/img_avatar.svg'} width={100} height={100} />
      <Logo></Logo>
      <Icon iconName="desktop" width={100} height={100} />
      <Icon iconName="warning" width={100} height={100} />

      <Flex backgroundColor={'black'} height={'140px'} padding={'5vw'}>
        <Flex>
          <Logo customWidth={50} customHeight={17} />
        </Flex>

        <Flex justifyContent={'space-evenly'}>
          <Box>
            <Text
              variant="small"
              fontSize={{ base: 'small', md: 'large' }}
              color={'white'}
            >
              멘토 찾기
            </Text>
          </Box>
          <Box>
            <Text
              variant="small"
              fontSize={{ base: 'small', md: 'large' }}
              color={'white'}
            >
              나의 채팅
            </Text>
          </Box>
          <Box>
            <Text
              variant="small"
              fontSize={{ base: 'small', md: 'large' }}
              color={'white'}
            >
              로그인
            </Text>
          </Box>
        </Flex>
        <Box>
          <Icon iconName="menu" width={24} height={24} />
        </Box>
      </Flex>
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

      {/* <Flex
        flexDirection={'column'}
        backgroundColor={'inputGray'}
        border={'3px solid red'}
        height={'1000px'}
      >
        <Box
          width={'120px'}
          height={'120px'}
          backgroundColor={'red'}
          margin={1}
        />
        <Box
          width={'120px'}
          height={'120px'}
          backgroundColor={'red'}
          margin={1}
        />
        <Box
          width={'120px'}
          height={'120px'}
          backgroundColor={'red'}
          margin={1}
        />
        <Box
          width={'120px'}
          height={'120px'}
          backgroundColor={'red'}
          margin={1}
        />
      </Flex> */}
    </main>
  )
}
