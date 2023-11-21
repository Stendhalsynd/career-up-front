import Image from 'next/image'
// 이미지 경로를 상수로 선언
const LOGO_IMAGE_PATH = '/assets/image/img_logo.svg'

export type LogoProps = {
  customWidth?: number
  customHeight?: number
}

const Logo: React.FC<LogoProps> = ({ customWidth, customHeight }) => {
  // customWidth와 customHeight가 전달되지 않으면 각각 200과 68을 사용
  const width = customWidth || 200
  const height = customHeight || 68

  return (
    <Image src={LOGO_IMAGE_PATH} alt="Logo" width={width} height={height} />
  )
}

export default Logo
