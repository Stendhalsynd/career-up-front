/** 상품 카테고리 */
export type Category = 'shoes' | 'clothes' | 'book'
/** 상품 상태 */
export type Condition = 'new' | 'used'

/** 사용자 */
export type User = {
  id: number
  username: string
  displayName: string
  email: string
  profileImageUrl: string
  description: string
}

/** 상품 */
export type Product = {
  id: number
  category: Category
  title: string
  description: string
  imageUrl: string
  blurDataUrl: string
  price: number
  condition: Condition
  owner: User
}

/** API 컨텍스트 */
export type ApiContext = {
  apiRootUrl: string
}

/** 마이페이지 유저 데이터 */
export interface UserData {
  id: null
  email: string
  password: string
  profile: string
  nickname: string
  company: string
  contents: string
  roleType: string
  fields: string[]
  skills: string[]
}
