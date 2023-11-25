import { Icon, Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import {
  DropDownButton,
  RequestButton,
  SearchInput,
} from 'components/molecules/index.ts'

const FilterModal = () => {
  return (
    <Flex
      width={'90vw'}
      maxWidth={'500px'}
      height={'300px'}
      flexDirection={'column'}
    >
      {/* 필터 */}
      <Flex
        height={'20%'}
        padding={'20px'}
        backgroundColor={'primary'}
        justifyContent={'space-between'}
        borderRadius={'30px 30px 0 0'}
      >
        <Flex alignItems={'center'}>
          <Text color={'white'}>필터</Text>
        </Flex>

        <Icon iconName="close" />
      </Flex>
      {/* 검색 */}
      <Flex
        height={'80%'}
        backgroundColor={'white'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'30px'}
        borderRadius={'0 0 30px 30px'}
      >
        <Flex
          width={'90%'}
          flexDirection={'column'}
          // justifyContent={'center'}
          gap={'10px'}
        >
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

          <SearchInput variant="skillSmall" />
        </Flex>
        <Flex width={'85%'}>
          <RequestButton>적용하기</RequestButton>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default FilterModal
