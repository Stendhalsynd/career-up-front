import { Icon } from '@mui/material'
import { useState } from 'react'
import { FilterModal } from 'components/organisms/index.ts'

const FilterModalContainer = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)

  const handleFilterModalOpen = () => {
    setIsFilterModalOpen(true)
  }

  const handleFilterModalClose = () => {
    setIsFilterModalOpen(false)
  }

  return (
    <>
      {/* 이 컨테이너가 렌더링될 때, FilterModal을 열려있으면 렌더링 */}
      {isFilterModalOpen && <FilterModal onClose={handleFilterModalClose} />}
    </>
  )
}

export default FilterModalContainer
