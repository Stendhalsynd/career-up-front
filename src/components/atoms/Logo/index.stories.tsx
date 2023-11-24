import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import Logo from 'components/atoms/Logo/index.tsx'
import { theme } from 'themes/index.ts'

const meta: Meta<typeof Logo> = {
  title: 'Atoms/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'number' },
      defaultValue: 200,
      description: '가로 길이',
      table: {
        type: { summary: 'number' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Logo>

export const Normal: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
