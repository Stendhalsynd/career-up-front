import { Icon, Text } from 'components/atoms/index.ts'
import { Box, Flex } from 'components/layout/index.ts'
import {
  DropDownButton,
  Input,
  SearchInput,
} from 'components/molecules/index.ts'
import { WorkerInfoCard } from 'components/organisms/index.ts'
import WorkerInfoListLayout from 'components/templates/WorkerInfoListLayout/index.tsx'
import { theme } from 'themes/index.ts'

// TODO: <SearchInput variant="primarySmall" /> 에서 filter 아이콘을 클릭했을 때 FilterModal 컴포넌트가 나타나도록 로직을 생성해야 한다.
const WorkerInfoList = () => {
  return (
    <WorkerInfoListLayout>
      <Flex
        flexDirection={'column'}
        padding={'62px 35px 30px 35px'}
        width={'100vw'}
        maxWidth={'100vw'}
        alignItems={'center'}
      >
        <Flex
          flexDirection={'column'}
          maxWidth={{ base: '100vw', sm: '1000px' }}
          zIndex={1}
          paddingLeft={'30px'}
        >
          {/* 상단 */}
          <Flex
            flexDirection={'column'}
            alignItems={'center'}
            gap={'25px'}
            paddingBottom={'84px'}
          >
            <Text
              fontSize={{ base: 'mediumLarge', sm: 'large' }}
              fontWeight={'700'}
              color={'white'}
            >
              멘토 찾기
            </Text>
            <Text
              fontSize={{ base: 'xSmall', sm: 'small' }}
              fontWeight={'500'}
              color={'white'}
            >
              업계 전문가들의 노하우를 확인하세요!
            </Text>

            <Box display={{ base: 'block', sm: 'none' }}>
              <SearchInput variant="primarySmall" />
            </Box>
            <Flex
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
            </Flex>
          </Flex>

          {/* 하단 */}
          <Flex gap={'16px'} overflow={'auto'}>
            <WorkerInfoCard />
            <WorkerInfoCard
              pictureName="female"
              currentJob="쿠팡"
              nickname="달리는 사자1"
            />
            <WorkerInfoCard
              currentJob="배달의 민족"
              currentPosition="백엔드"
              nickname="졸린 햄스터2"
            />
            <WorkerInfoCard pictureName="female" />
            <WorkerInfoCard />
            <WorkerInfoCard />
          </Flex>
        </Flex>
      </Flex>
    </WorkerInfoListLayout>
  )
}

export default WorkerInfoList
