import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

interface AosContainerProps {
  dataAos: string
  children: React.ReactNode
}

const AosContainer: React.FC<AosContainerProps> = ({ dataAos, children }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  return <div data-aos={dataAos}>{children}</div>
}

export default AosContainer
