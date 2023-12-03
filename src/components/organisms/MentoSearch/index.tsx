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
          maxWidth={'1500px'}
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
            />
          </Box>
          <Box paddingLeft={'11px'}>
            <SearchInput variant="skillLarge" />
          </Box>
        </Flex>

        {/* <Flex
              display={{ base: 'none', sm: 'block' }}
              borderRadius={'10px'}
              padding={'11px 16px'}
              backgroundColor={'white'}
              width={'60vw'}
              maxWidth={'800px'}
              marginTop={'30px'}
            >
              <Box borderBottom={`1px solid ${theme.colors.black}`}>
                <SearchInput variant="primaryLarge" />
              </Box>
              <Box padding={'11px 0'}>
                <DropDownButton
                  options={[
                    {
                      label: '프론트엔드',
                      value: 'frontend',
                    },
                    {
                      label: '백엔드',
                      value: 'backend',
                    },
                    {
                      label: '안드로이드',
                      value: 'andriod',
                    },
                    {
                      label: 'IOS',
                      value: 'ios',
                    },
                    {
                      label: '게임',
                      value: 'game',
                    },
                    {
                      label: 'AI',
                      value: 'ai',
                    },
                  ]}
                  placeholder="직무"
                />
              </Box>
              <Flex gap={'10px'} alignItems={'center'} paddingLeft={'13px'}>
                <Icon iconName="desktop" width={27}></Icon>
                <Text
                  width={'fit-content'}
                  variant="extraSmall"
                  minWidth={'64px'}
                >
                  기술 스택
                </Text>
                <Input placeholder="직무 스킬을 검색해보세요."></Input>
              </Flex>
            </Flex> */}
      </Desktop>
    </Box>
  )
}

export default MentoSearch
