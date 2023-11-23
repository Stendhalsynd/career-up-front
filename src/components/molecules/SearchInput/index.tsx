'use client'

import Icon from 'components/atoms/Icon/index.tsx'
import Text from 'components/atoms/Text'
import Flex from 'components/layout/Flex'
import Input from 'components/molecules/Input/index.tsx'

export type SearchInputVariant =
  | 'primarySmall'
  | 'primaryLarge'
  | 'skillSmall'
  | 'skillLarge'

type SearchInputProps = {
  variant: SearchInputVariant
}

const PrimarySmallSearchInput = () => (
  <Flex
    flexDirection={'row'}
    backgroundColor={'white'}
    borderRadius={'50px'}
    padding={'10px 16px'}
    width={'80vw'}
  >
    <Icon iconName="search" width={25} height={25} />
    <Input name="SearchInput/company" type="text" placeholder="회사로 검색" />
    <Icon iconName="filter" width={40} height={40} />
  </Flex>
)

const PrimaryLargeSearchInput = () => (
  <Flex
    flexDirection={'row'}
    borderBottom={'1px solid white'}
    padding={'10px 16px'}
    width={'80vw'}
  >
    <Icon iconName="search" width={25} height={25} />
    <Input
      name="SearchInput/total"
      type="text"
      placeholder="회사/기술 스택/직무로 검색"
    />
    {/* Box 는 버튼 임시 대체 */}
    <Flex
      backgroundColor={'darkGray'}
      borderRadius={'50px'}
      padding={'0 20px'}
      minWidth={'fit-content'}
      flexDirection={'row'}
      alignItems={'center'}
      style={{ cursor: 'pointer' }}
    >
      <Text color={'white'} fontSize={'extraSmall'}>
        검색
      </Text>
    </Flex>
  </Flex>
)

const SkillSmallSearchInput = () => (
  <Flex
    flexDirection={'row'}
    width={'80vw'}
    borderBottom={'1px solid black'}
    paddingBottom={'6px'}
    alignItems={'center'}
    maxWidth={'fit-content'}
  >
    <Text fontSize={'small'} color={'black'}>
      기술 스택
    </Text>
    <Flex padding={'4px 0'} marginLeft={'19px'} paddingRight={'33px'}>
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
  }
}

export default SearchInput
