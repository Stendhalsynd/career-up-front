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
    isApproved: {
      control: { type: 'boolean' },
      description: '나의 커피챗 리스트 카드',
      table: {
        type: { sumary: 'boolean' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ChatInfoCard>

export const Default: Story = {
  args: {
    isApproved: true,
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
    isApproved: false,
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
