import { BasicInfo } from 'components/organisms/BasicInfo/index.tsx'
import MyPageLayout from 'components/templates/MyPageLayout/index.tsx'

const JobSeekerMyPage = () => {
  return (
    <MyPageLayout>
      <BasicInfo isUser={true} />
    </MyPageLayout>
  )
}

export default JobSeekerMyPage
