# WebRTC 기반 1:1 화상 컨설팅 플랫폼:커리업
> 6인 팀 프로젝트

# 1. 서비스 소개

## 1. 서비스 설명

### 개요

- 한 줄 소개 : 악화된 취업난으로 채용시장에서 불안감을 호소하는 주니어 개발자들에게 시니어 개발자와의 1:1 화상 컨설팅 서비스를 제공하는 플랫폼
- 서비스 명 : 커리업(Career Up)

### 페르소나 ( 주 타겟 고객 )

- 주니어 개발자
  - 새로 취업을 준비하고 있는 주니어 개발자들

## 2. 기획 배경

### 배경

- 2019 년 말 코로나 19의 확산과 함께 많은 기업들이 비대면 서비스를 지향함에 따라 개발자들의 수요가 폭발적으로 증가했다.
- 2022년 미국의 금리 인상은 전 세계의 경제를 긴축시켰고 글로벌 양적완화와 러시아 & 우크라이나 사태등 불안정한 요소가 지속적으로 발생하여 투자 심리가 위축되었다.
- 경기는 침체되는데 사회로 나와 취업을 도전하는 주니어 개발자들의 수는 점점더 증가하고 있다.
- 2022년 상반기 IT 채용 공고수가 4.5만이었던 데 비해 2023년 상반기 IT 채용 공고수는 3만으로 감소했다.
- 2022년 상반기 IT 채용 지원 건수가 73만이었던 데 비해 2023년 상반기 IT 채용 지원 건수는 108만으로 증가했다.
- 이런 불경기 속에서 우리들 신입 개발자들은 어떻게 살아남을 수 있을까? 취업을 수월하게 하기 위해 시니어 개발자와의 컨설팅을 통해 받은 피드백으로 올바른 취준의 방향성을 잡고자 한다.

### 목적

- 언제 어디서든 쉽고 편리하게 화상 컨설팅을 받을 수 있는 환경을 제공하자.
- 화면 공유 및 채팅 기능을 통해 컨설팅을 더욱 수월하게 진행할 수 있도록 하자.

### 의의

- 비대면으로 주니어 개발자가 쉽게 컨설팅을 요청할 수 있는 플랫폼
- 원하는 시니어 개발자의 신청 가능한 예약 시간을 확인하고 신청 가능한 시간대에 컨설팅을 예약할 수 있도록 한다.

## 3. 서비스 화면

<details>

<summary>메인페이지</summary>


![스크린샷 2023-12-08 오후 7 52 45](https://github.com/Stendhalsynd/career-up-front/assets/96957774/8be686eb-99cd-4036-b3f1-d3ad79ad7835)

![Dec-08-2023 19-53-44](https://github.com/Stendhalsynd/career-up-front/assets/96957774/274516d7-5b38-4853-97ad-9269614580f7)

![스크린샷 2023-12-08 오후 7 54 28](https://github.com/Stendhalsynd/career-up-front/assets/96957774/ab3bff3f-df3b-44cd-a667-670f15cd90c5)

![스크린샷 2023-12-08 오후 7 54 41](https://github.com/Stendhalsynd/career-up-front/assets/96957774/981778ab-9e3d-4a50-be0c-e01237fc5262)

</details>

<details>

<summary>멘토 탐색 페이지</summary>

![Dec-08-2023 19-55-28](https://github.com/Stendhalsynd/career-up-front/assets/96957774/a55f333a-d6f0-46e4-a799-eff07e85e7c2)

</details>

<details>

<summary>현직자 상세 페이지</summary>

![스크린샷 2023-12-08 오후 7 56 26](https://github.com/Stendhalsynd/career-up-front/assets/96957774/fdc73d28-8bd9-45f4-bf4a-75aac44deda9)

</details>

<details>

<summary>상담 신청 페이지</summary>

![Dec-08-2023 19-57-44](https://github.com/Stendhalsynd/career-up-front/assets/96957774/3a143a46-85bf-4928-bfcc-d5bcf65917fe)

</details>

<details>

<summary>나의 채팅 페이지</summary>

![Dec-08-2023 19-58-36](https://github.com/Stendhalsynd/career-up-front/assets/96957774/77f21b69-9e87-4e16-a2f2-3328f2f1fc40)

</details>

<details>

<summary>마이 페이지</summary>

![Dec-09-2023 05-59-44](https://github.com/Stendhalsynd/career-up-front/assets/96957774/964ad67f-69a5-4fd4-8c2d-a4c00d6cf9e7)

</details>

<details>

<summary>로그인 및 회원가입 페이지</summary>

![Dec-09-2023 06-00-58](https://github.com/Stendhalsynd/career-up-front/assets/96957774/84bf0dac-30e0-4d52-a41b-bad3f77ba7cb)

</details>

<details>

<summary>헤더 및 메뉴바</summary>

![Dec-09-2023 06-02-25](https://github.com/Stendhalsynd/career-up-front/assets/96957774/b476d34d-e950-4b23-896d-ecfd844496f7)

</details>

## 설치 라이브러리

```
npm i react-hook-form recoil
npm i react-router-dom
npm install eslint-import-resolver-node --save-dev
npm i -D chromatic
npm i @mui/x-date-pickers
npm i dayjs
npm install @mui/styled-engine-sc styled-components
npm install react-slick slick-carousel
npm i --save-dev @types/react-slick
npm install @emotion/styled
npm install jwt-decode
npm i swr
npm i recoil
npm i -D aos@next
npm i @types/aos
npm i openvidu-browser
npm i openvidu-react
npm i react-slick
npm i sweetalert2

```

# 2. 아키텍쳐

![스크린샷 2023-12-09 오전 6 05 52](https://github.com/Stendhalsynd/career-up-front/assets/96957774/2a5a4ee1-c5c7-446e-8177-546db1aa3121)

# 3. 기술스택

![스크린샷 2023-12-09 오전 6 07 01](https://github.com/Stendhalsynd/career-up-front/assets/96957774/97cd4780-6ec5-49c4-995b-56648324312e)

# 4. 파일 구조

<details>

<summary>프론트 프로젝트 구조</summary>

```
.
├── public
│   └── assets
│       ├── icon
│       ├── image
│       └── lottie
└── src
    ├── app
    │   ├── chat
    │   ├── login
    │   ├── meeting
    │   ├── search
    │   ├── seekerChat
    │   ├── seekers
    │   │   └── edit
    │   ├── signup
    │   ├── workerChat
    │   └── workers
    │       ├── edit
    │       └── info
    ├── chat
    │   └── src
    │       ├── assets
    │       │   └── images
    │       ├── components
    │       │   ├── chat
    │       │   ├── dialog-extension
    │       │   ├── stream
    │       │   └── toolbar
    │       ├── layout
    │       └── models
    ├── components
    │   ├── atoms
    │   │   ├── Avatar
    │   │   ├── Icon
    │   │   ├── Logo
    │   │   ├── Picture
    │   │   └── Text
    │   ├── layout
    │   │   ├── Box
    │   │   ├── Flex
    │   │   └── Grid
    │   ├── molecules
    │   │   ├── Button
    │   │   ├── Calendar
    │   │   ├── DropdownButton
    │   │   ├── Dropzone
    │   │   ├── Header
    │   │   ├── ImagePreview
    │   │   ├── Input
    │   │   ├── InputImages
    │   │   ├── Label
    │   │   ├── SearchInput
    │   │   ├── SideMenu
    │   │   └── TextArea
    │   ├── organisms
    │   │   ├── AlertContainer
    │   │   ├── BasicInfo
    │   │   ├── ChatInfoCard
    │   │   ├── FilterModal
    │   │   ├── Login
    │   │   ├── Main
    │   │   │   ├── ChatInfoContainer
    │   │   │   ├── IntroTextContainer
    │   │   │   ├── ProcessInfoContainer
    │   │   │   ├── PromoteTextContainer
    │   │   │   └── WorkerInfoContainer
    │   │   ├── MentoSearch
    │   │   ├── Signup
    │   │   ├── TodayChatInfo
    │   │   ├── WorkerInfoCard
    │   │   └── WorkerInfoCardSlider
    │   └── templates
    │       ├── Layout
    │       ├── LoginSignupLayout
    │       ├── MainLayout
    │       │   ├── MainBlackBackgroundLayout
    │       │   └── MainBlueBackgroundLayout
    │       ├── MeetingLayout
    │       ├── MyPageLayout
    │       └── WorkerInfoListLayout
    ├── containers
    │   ├── AosContainer
    │   └── FloatingContainer
    ├── lib
    ├── stories
    │   └── assets
    ├── themes
    ├── types
    └── utils
```

</details>

## 프로젝트 기간

> 11.10~

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
