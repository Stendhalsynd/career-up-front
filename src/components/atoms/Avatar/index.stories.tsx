import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import Avatar from 'components/atoms/Avatar/index.tsx'
import { theme } from 'themes/index.ts'

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      control: { type: 'text' },
      description: '이미지 URL',
      defaultValue: '/assets/image/sample/img_avatar.svg',
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
    height: {
      control: { type: 'number' },
      description: '세로폭',
      defaultValue: 120,
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
    src: '/assets/image/sample/img_avatar.svg',
    width: 120,
    height: 120,
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
