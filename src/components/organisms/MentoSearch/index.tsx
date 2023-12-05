import { useSetRecoilState } from 'recoil'
import { Box, Flex } from 'components/layout/index.ts'
import { DropDownButton, SearchInput } from 'components/molecules/index.ts'
import { Desktop, Mobile, Tablet } from 'lib/useMediaQuery.tsx'
import { fieldInputState } from 'utils/state.ts'

const MentoSearch = () => {
  const setFieldInputState = useSetRecoilState(fieldInputState)

  const handleDropDownChange = (selectedOption: any) => {
    setFieldInputState(selectedOption.label)
  }

  return (
    <Box>
      {/* 모바일 */}
      <Mobile>
        <SearchInput variant="primarySmall" />
      </Mobile>

      {/* 태블릿 */}
      <Tablet>
        <SearchInput variant="primarySmall" />
      </Tablet>

      {/* 데스크탑 */}
      <Desktop>
        <Flex
          backgroundColor={'white'}
          flexDirection={'column'}
          width={'86.89vw'}
          maxWidth={'1000px'}
          gap={'10px'}
          padding={'15px'}
          borderRadius={'30px'}
          boxShadow={'0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}
        >
          <Box borderBottom={'1px solid black'}>
            <SearchInput variant="primaryLarge" />
          </Box>
          <Box>
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
              onChange={handleDropDownChange}
            />
          </Box>
          <Box paddingLeft={'11px'}>
            <SearchInput variant="skillLarge" />
          </Box>
        </Flex>
      </Desktop>
    </Box>
  )
}

export default MentoSearch
