import TodayChatInfo from 'components/organisms/TodayChatInfo/index.tsx'
import { FilterModal } from 'components/organisms/index.ts'

export default function Home() {
  return (
    <main>
      <TodayChatInfo />
      <FilterModal />
    </main>
  )
}
