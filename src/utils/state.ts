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
