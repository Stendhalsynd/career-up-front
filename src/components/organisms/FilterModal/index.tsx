'use client'

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import styles from '../../../components/molecules/Button/RequestButton.module.css'
import { Icon, Text } from 'components/atoms/index.ts'
import { Flex } from 'components/layout/index.ts'
import {
  DropDownButton,
  RequestButton,
  SearchInput,
} from 'components/molecules/index.ts'
import {
  fieldInputState,
  fieldModalState,
  modalState,
  skillInputState,
  skillModalState,
} from 'utils/state.ts'

const FilterModal = () => {
  const [modalOpenState, setModalOpenState] = useRecoilState(modalState)

  // 모달 닫는 이벤트
  const handleCloseModal = () => {
    setModalOpenState(false)
  }

  const skillInput = useRecoilValue(skillModalState)
  const fieldInput = useRecoilValue(fieldModalState)

  const setSkillInputState = useSetRecoilState(skillInputState)
  const setFieldInputState = useSetRecoilState(fieldInputState)

  const handleApplyFilter = () => {
    if (skillInput) {
      setSkillInputState(skillInput)
    }
    if (fieldInput) {
      setFieldInputState(fieldInput)
    }

    handleCloseModal()
  }

  return (
    modalOpenState && (
      <Flex
        width={'80vw'}
        maxWidth={'500px'}
        height={'300px'}
        flexDirection={'column'}
        position={'absolute'}
        zIndex={5}
      >
        {/* 제목 */}
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

          <Icon iconName="close" onClick={handleCloseModal} />
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
          boxShadow={'0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}
        >
          <Flex width={'90%'} flexDirection={'column'} gap={'10px'}>
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
            <RequestButton onClick={handleApplyFilter} hasBorder type="submit">
              <Text variant="small" className={styles.text}>
                적용하기
              </Text>
            </RequestButton>
          </Flex>
        </Flex>
      </Flex>
    )
  )
}

export default FilterModal
