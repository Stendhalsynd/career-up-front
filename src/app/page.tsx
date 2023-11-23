import { Avatar, Icon, Logo, Text } from 'components/atoms/index.ts'
import { Box, Flex } from 'components/layout/index.ts'
import {
  DropDownButton,
  Label,
  SearchInput,
} from 'components/molecules/index.ts'
import Login from 'components/organisms/Login/index.tsx'
import Signup from 'components/organisms/Signup/index.tsx'
import { Tablet } from 'lib/useMediaQuery.tsx'

export default function Home() {
  return (
    <main>
      <Text variant={'small'} color="danger">
        test
      </Text>
      <Login />
      <Signup />
      <Avatar src={'/assets/image/img_avatar.svg'} width={100} height={100} />
      <Logo></Logo>
      <Icon iconName="desktop" width={100} height={100} />
      <Icon iconName="warning" width={100} height={100} />

      <Flex backgroundColor={'black'} height={'140px'} padding={'5vw'}>
        <Flex>
          <Logo width={50} />
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
        <Tablet>
          <Text color={'primary'} fontSize={'large'}>
            파트너
          </Text>
        </Tablet>
        <Text color={'white'}>를 찾아보세요.</Text>
      </Label>

      <DropDownButton
        options={[
          { value: null, label: '-' },
          { value: 'frontend', label: '프론트엔드' },
          { value: 'backend', label: '백엔드' },
          { value: 'andriod', label: '안드로이드' },
          { value: 'ios', label: 'IOS' },
          { value: 'game', label: '게임' },
          { value: 'ai', label: 'AI' },
        ]}
        hasError={false}
        value={'shoes'}
        placeholder="직무"
      />
    </main>
  )
}
