'use client'

import { Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import { DropDownButton, SearchInput } from 'components/molecules/index.ts'

const FilterModal = () => {
  return (
    <Flex
      width={{ base: '90vw' }}
      maxWidth={'500px'}
      height={'300px'}
      flexDirection={'column'}
      borderRadius={'20px 20px 0px 0px'}
    >
      <Flex height={'20%'} backgroundColor={'primary'}>
        <Text color={'white'}>필터</Text>
      </Flex>
      {/* 검색 */}
      <Flex height={'80%'} flexDirection={'column'} backgroundColor={'white'}>
        <Flex width={'90'}>
          <DropDownButton
            options={[
              { value: 'frontend', label: '프론트엔드' },
              { value: 'backend', label: '백엔드' },
              { value: 'andriod', label: '안드로이드' },
              { value: 'ios', label: 'IOS' },
              { value: 'game', label: '게임' },
              { value: 'ai', label: 'AI' },
            ]}
            hasError={false}
            placeholder="직무"
          />
        </Flex>
        <SearchInput variant="skillSmall" />
      </Flex>
    </Flex>
  )
}

export default FilterModal
