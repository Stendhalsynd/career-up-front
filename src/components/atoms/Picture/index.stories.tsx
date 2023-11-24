import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import Picture from 'components/atoms/Picture/index.tsx'
import { theme } from 'themes/index.ts'

const meta: Meta<typeof Picture> = {
  title: 'Atoms/Picture',
  component: Picture,
  tags: ['autodocs'],
  argTypes: {
    pictureName: {
      options: ['sphere', 'male', 'chatbubble'],
      control: { type: 'select' },
      defaultValue: 'sphere',
      table: {
        type: {
          summary: 'sphere, male, chatbubble',
          defaultValue: { summary: 'sphere' },
        },
      },
    },
    width: {
      control: { type: 'number' },
      defaultValue: 100,
      description: '가로 길이',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      defaultValue: 100,
      description: '세로 길이',
      table: {
        type: { summary: 'number' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Picture>

export const Sphere: Story = {
  args: {
    pictureName: 'sphere',
    width: 40,
    height: 40,
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export const Male: Story = {
  args: {
    pictureName: 'male',
    width: 40,
    height: 40,
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export const Chatbubble: Story = {
  args: {
    pictureName: 'chatbubble',
    width: 40,
    height: 40,
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
