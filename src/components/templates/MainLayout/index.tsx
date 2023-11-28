import ChatInfoContainer from 'components/organisms/Main/ChatInfoContainer/index.tsx'
import IntroTextContainer from 'components/organisms/Main/IntroTextContainer/index.tsx'
import ProcessInfoContainer from 'components/organisms/Main/ProcessInfoContainer/index.tsx'
import PromoteTextContainer from 'components/organisms/Main/PromoteTextContainer/index.tsx'
import WorkerInfoContainer from 'components/organisms/Main/WorkerInfoContainer/index.tsx'
import MainBlackBackgroundLayout from 'components/templates/MainLayout/MainBlackBackgroundLayout'
import MainBlueBackgroundLayout from 'components/templates/MainLayout/MainBlueBackgroundLayout/index.tsx'

const MainLayout = () => {
  return (
    <>
      <MainBlackBackgroundLayout>
        <IntroTextContainer />
        <PromoteTextContainer />
        <WorkerInfoContainer />
        <ChatInfoContainer />
      </MainBlackBackgroundLayout>
      <MainBlueBackgroundLayout>
        <ProcessInfoContainer />
      </MainBlueBackgroundLayout>
    </>
  )
}

export default MainLayout
