'use client'

import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import dayjs from 'dayjs'
import { useSetRecoilState } from 'recoil'
import { Box } from 'components/layout/index.ts'
import { selectedDateState } from 'utils/state.ts'

export default function Calendar() {
  const setSelectedDateState = useSetRecoilState(selectedDateState)

  return (
    <Box>
      <Box display={{ base: 'block', md: 'none' }}>
        <StaticDatePicker
          defaultValue={dayjs(new Date())}
          disablePast
          onChange={(value) => {
            if (value) {
              setSelectedDateState(value.format('YYYY-MM-DD'))
            }
          }}
        />
      </Box>

      <Box display={{ base: 'none', md: 'block' }}>
        <StaticDatePicker
          orientation="landscape"
          defaultValue={dayjs(new Date())}
          disablePast
        />
      </Box>
    </Box>
  )
}
