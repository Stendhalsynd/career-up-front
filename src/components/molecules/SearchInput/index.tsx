'use client'

import { useRecoilState } from 'recoil'
import Icon from 'components/atoms/Icon/index.tsx'
import Text from 'components/atoms/Text'
import Flex from 'components/layout/Flex'
import RequestButton from 'components/molecules/Button/RequestButton.tsx'
import Input from 'components/molecules/Input/index.tsx'
import { FilterModal } from 'components/organisms/index.ts'
import { modalState } from 'utils/state.ts'

export type SearchInputVariant =
  | 'primarySmall'
  | 'primaryLarge'
  | 'skillSmall'
  | 'skillLarge'

type SearchInputProps = {
  variant: SearchInputVariant
}

const PrimarySmallSearchInput = () => {
  const [modalOpenState, setModalOpenState] = useRecoilState(modalState)

  const handleOpenModal = () => {
    setModalOpenState(true)
  }

  return (
    <Flex flexDirection={'column'} alignItems={'center'} gap={'20px'}>
      <Flex
        flexDirection={'row'}
        backgroundColor={'white'}
        borderRadius={'50px'}
        padding={'10px 16px'}
        width={'80vw'}
      >
        <Icon iconName="search" width={25} height={25} />
        <Input
          name="SearchInput/company"
          type="text"
          placeholder="회사를 검색해보세요"
        />
        <Icon
          iconName="filter"
          width={40}
          height={40}
          onClick={handleOpenModal}
        />
      </Flex>
      {modalOpenState && <FilterModal />}
    </Flex>
  )
}

const PrimaryLargeSearchInput = () => (
  <Flex
    flexDirection={'row'}
    borderBottom={'1px solid white'}
    padding={'10px 16px'}
    width={'100%'}
  >
    <Icon iconName="search" width={25} height={25} />
    <Input
      name="SearchInput/total"
      type="text"
      placeholder="회사를 검색해보세요"
    />
    <RequestButton variant="dark" width={'130px'} height={'45px'}>
      검색
    </RequestButton>
  </Flex>
)

const SkillSmallSearchInput = () => (
  <Flex
    flexDirection={'row'}
    width={'100%'}
    borderBottom={'1px solid black'}
    paddingBottom={'6px'}
    alignItems={'center'}
    // maxWidth={'fit-content'}
  >
    <Text fontSize={'extraSmall'} color={'black'}>
      기술 스택
    </Text>
    <Flex marginLeft={'15px'}>
      <Input color={'gray'} placeholder="직무 스킬을 검색해보세요"></Input>
    </Flex>
  </Flex>
)

const SkillLargeSearchInput = () => (
  <Flex
    flexDirection={'row'}
    width={'80vw'}
    alignItems={'center'}
    maxWidth={'fit-content'}
  >
    <Icon iconName="desktop" width={24} height={24} />
    <Text fontSize={'extraSmall'} color={'darkGray'} marginLeft={'10px'}>
      기술 스택
    </Text>
    <Flex padding={'4px 0'} marginLeft={'20px'} paddingRight={'33px'}>
      <Input color={'gray'} placeholder="직무 스킬을 검색해보세요"></Input>
    </Flex>
  </Flex>
)

/**
 * 검색 입력
 * TODO: 반응형을 각 컴포넌트별 어떻게 적용할 수 있을지 찾아야한다.
 * @description 검색할 내용을 입력할 때 쓰이는 컴포넌트
 * @example <SearchInput variant={'primarySmall'} />
      <SearchInput variant={'primaryLarge'} />
      <SearchInput variant={'skillSmall'} />
      <SearchInput variant={'skillLarge'} />
 */
const SearchInput = ({ variant }: SearchInputProps) => {
  switch (variant) {
    case 'primarySmall':
      return <PrimarySmallSearchInput />
    case 'primaryLarge':
      return <PrimaryLargeSearchInput />
    case 'skillSmall':
      return <SkillSmallSearchInput />
    case 'skillLarge':
      return <SkillLargeSearchInput />
    default:
      return null
  }
}

export default SearchInput
