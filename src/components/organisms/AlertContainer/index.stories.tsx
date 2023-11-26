import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import AlertComponent from 'components/organisms/AlertContainer/index.tsx'
import { theme } from 'themes/index.ts'

const meta: Meta<typeof AlertComponent> = {
  title: 'Organisms/AlertComponent',
  component: AlertComponent,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof AlertComponent>

export const Normal: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
