import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { BasicInfo } from 'components/organisms/BasicInfo/index.tsx'
import { theme } from 'themes/index.ts'

const meta: Meta<typeof BasicInfo> = {
  title: 'Organisms/BasicInfo',
  component: BasicInfo,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof BasicInfo>

export const Normal: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
