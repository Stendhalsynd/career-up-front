import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import WorkerInfoCard from 'components/organisms/WorkerInfoCard/index.tsx'
import { theme } from 'themes/index.ts'

const meta: Meta<typeof WorkerInfoCard> = {
  title: 'Organisms/WorkerInfoCard',
  component: WorkerInfoCard,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof WorkerInfoCard>

export const Normal: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
