import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import Signup from 'components/organisms/Signup/index.tsx'
import { theme } from 'themes/index.ts'

const meta: Meta<typeof Signup> = {
  title: 'Organisms/Signup',
  component: Signup,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Signup>

export const Normal: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
