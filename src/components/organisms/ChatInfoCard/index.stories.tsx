import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import ChatInfoCard from 'components/organisms/ChatInfoCard/index.tsx'
import { theme } from 'themes/index.ts'

const meta: Meta<typeof ChatInfoCard> = {
  title: 'Organisms/ChatInfoCard',
  component: ChatInfoCard,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: { type: 'string' },
      description: '상태',
      table: {
        type: { sumary: 'APPROVED, WAITING, REJECTED' },
      },
    },
    role: {
      control: { type: 'string' },
      description: '나의 역할',
      table: {
        type: { sumary: 'string' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ChatInfoCard>

export const Default: Story = {
  args: {
    status: 'APPROVED',
    role: 'WORKER',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export const WithoutStatus: Story = {
  args: {
    status: 'WAITING',
    role: 'SEEKER',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export const APPROVED: Story = {
  args: {
    status: 'APPROVED',
    role: 'SEEKER',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
