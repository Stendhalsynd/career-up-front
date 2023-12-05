import { atom } from 'recoil'
import { DropdownItem } from 'components/molecules/DropdownButton/index.tsx'

export const sessionState = atom({
  key: 'sessionState',
  default: 'SessionA',
})

export const myNameState = atom({
  key: 'myNameState',
  default: '행복한 다람쥐',
})

// 모달 열고 닫는 상태 조절
export const modalState = atom({
  key: 'modalState',
  // default: 모달이 닫힌 상태
  default: false,
})

// input에 입력한 company 정보
export const companyInputState = atom({
  key: 'companyInputState',
  default: '',
})

// input에 입력한 skill 정보
export const skillModalState = atom({
  key: 'skillModalState',
  default: '',
})

// dropdown button에서 선택한 직무 정보
export const fieldModalState = atom<DropdownItem | string | undefined>({
  key: 'selectedModalState',
  default: '',
})

export const skillInputState = atom({
  key: 'skillInputState',
  default: '',
})

export const fieldInputState = atom<DropdownItem | string | undefined>({
  key: 'fieldInputState',
  default: '',
})

// 재직자 리스트들 중 하나를 선택했을 때, 닉네임 정보 불러올 때  사용
export const selectedNicknameState = atom({
  key: 'selectedNicknameState',
  default: '',
})

export const selectedDateState = atom({
  key: 'selectedDateState',
  default: '2023-12-06',
})
