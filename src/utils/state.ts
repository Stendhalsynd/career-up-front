import { atom } from 'recoil'

export const sessionState = atom({
  key: 'sessionState',
  default: 'SessionA',
})

export const myNameState = atom({
  key: 'myNameState',
  default: '행복한 다람쥐',
})

export const modalState = atom({
  key: 'modalState',
  default: false,
})

export const filterState = atom({
  key: 'filterState',
  default: {
    job: '', // 선택한 직무
    skill: '', // 입력한 기술
  },
})

export const selectedNicknameState = atom({
  key: 'selectedNicknameState',
  default: '',
})
