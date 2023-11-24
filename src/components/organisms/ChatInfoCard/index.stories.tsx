import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import ChatInfoCard from 'components/organisms/ChatInfoCard/index.tsx'
import { theme } from 'themes/index.ts'

const meta: Meta<typeof ChatInfoCard> = {
  title: 'Organisms/ChatInfoCard',
  component: ChatInfoCard,
  argTypes: {
    isStatus: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof ChatInfoCard>

export const Default: Story = {
  args: {
    isStatus: true,
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
    isStatus: false,
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
