import TodayChatInfo from 'components/organisms/TodayChatInfo/index.tsx'
import {
  ChatInfoCard,
  FilterModal,
  Signup,
  WorkerInfoCard,
} from 'components/organisms/index.ts'

export default function Home() {
  return (
    <main>
      {/* <TodayChatInfo />
      <FilterModal /> */}
      <WorkerInfoCard />
    </main>
  )
}
