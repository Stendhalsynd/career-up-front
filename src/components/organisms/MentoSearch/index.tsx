import { Box, Flex } from 'components/layout/index.ts'
import { DropDownButton, SearchInput } from 'components/molecules/index.ts'
import { Desktop, Mobile, Tablet } from 'lib/useMediaQuery.tsx'

const MentoSearch = () => {
  return (
    <Box>
      <Mobile>
        <SearchInput variant="primarySmall" />
      </Mobile>
      <Tablet>
        <SearchInput variant="primarySmall" />
      </Tablet>
      <Desktop>
        <Flex
          backgroundColor={'white'}
          flexDirection={'column'}
          width={'86.89vw'}
          gap={'10px'}
          padding={'15px'}
          borderRadius={'30px'}
          boxShadow={'0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}
        >
          <Box borderBottom={'1px solid black'}>
            <SearchInput variant="primaryLarge" />
          </Box>
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
          <SearchInput variant="skillLarge" />
        </Flex>
      </Desktop>
    </Box>
  )
}

export default MentoSearch
