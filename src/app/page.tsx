import { Avatar, Icon, Logo, Text } from 'components/atoms/index.ts'
import HyperLinkButton from 'components/molecules/Button/HyperLinkButton.tsx'
import NicknameButton from 'components/molecules/Button/NicknameButton.tsx'
import RequestButton from 'components/molecules/Button/RequestButton.tsx'
import SelectButton from 'components/molecules/Button/SelectButton.tsx'
import StatusButton from 'components/molecules/Button/StatusButton.tsx'
import {
  InfoTagButton,
  IntroTagButton,
  SkillTagButton,
} from 'components/molecules/Button/TagButton.tsx'
import {
  DropDownButton,
  Label,
  SearchInput,
} from 'components/molecules/index.ts'
import FilterModal from 'components/organisms/FilterModal/index.tsx'
import Login from 'components/organisms/Login/index.tsx'
import Signup from 'components/organisms/Signup/index.tsx'
import { Tablet } from 'lib/useMediaQuery.tsx'

export default function Home() {
  return (
    <main>
      <FilterModal />
      <Text variant={'small'} color="danger">
        test
      </Text>
      <Login />
      <Signup />
      <Avatar src={'/assets/image/img_avatar.svg'} width={100} height={100} />
      <Logo></Logo>
      <Icon iconName="desktop" width={100} height={100} />
      <Icon iconName="warning" width={100} height={100} />

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

      <RequestButton>로그인</RequestButton>
      <HyperLinkButton to="main">커리업 하러 가기</HyperLinkButton>
      <NicknameButton nickname="잠자는 사자" />
      <SelectButton variant="white" isRound={false}>
        선택버튼
      </SelectButton>
      <StatusButton>수락됨</StatusButton>
      <InfoTagButton tag="직군" />
      <SkillTagButton tag="#skillTag" />
      <IntroTagButton tag="introTag" />

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
