import { BasicInfo } from 'components/organisms/BasicInfo/index.tsx'
import MyPageLayout from 'components/templates/MyPageLayout/index.tsx'

const JobSeekerMyPage = ({ params }: { params: { id: string } }) => {
  return (
    <MyPageLayout>
      <BasicInfo id={params.id} isUser={true} />
    </MyPageLayout>
  )
}

export default JobSeekerMyPage
