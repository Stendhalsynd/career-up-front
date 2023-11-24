import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import TodayChatInfo from 'components/organisms/TodayChatInfo/index.tsx'
import { theme } from 'themes/index.ts'

const meta: Meta<typeof TodayChatInfo> = {
  title: 'Organisms/TodayChatInfo',
  component: TodayChatInfo,
}

export default meta

type Story = StoryObj<typeof TodayChatInfo>

export const Normal: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
