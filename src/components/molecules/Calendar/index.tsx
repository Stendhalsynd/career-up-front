'use client'

import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import dayjs from 'dayjs'
import { Box } from 'components/layout/index.ts'

export default function Calendar() {
  return (
    <Box>
      <Box display={{ base: 'block', md: 'none' }}>
        <StaticDatePicker defaultValue={dayjs('2022-04-17')} />
      </Box>

      <Box display={{ base: 'none', md: 'block' }}>
        <StaticDatePicker
          orientation="landscape"
          defaultValue={dayjs('2022-04-17')}
        />
      </Box>
    </Box>
  )
}
