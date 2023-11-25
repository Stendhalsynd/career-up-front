import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import Avatar from 'components/atoms/Avatar/index.tsx'
import { theme } from 'themes/index.ts'

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    avatarName: {
      control: { type: 'text' },
      description: '이미지 URL',
      defaultValue: 'avatar',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: { type: 'number' },
      defaultValue: 120,
      description: '가로폭',
      table: {
        type: { summary: 'number' },
      },
    },
  },
}
export default meta
type Story = StoryObj<typeof Avatar>

export const Circle: Story = {
  args: {
    avatarName: 'avatar',
    width: 120,
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
