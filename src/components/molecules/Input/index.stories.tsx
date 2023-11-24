import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import Input from 'components/molecules/Input'
import { theme } from 'themes/index.ts'

const meta: Meta<typeof Input> = {
  title: 'Molecules/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: '플레이스홀더',
      table: {
        type: { summary: 'string' },
      },
    },
    hasBorder: {
      control: { type: 'boolean' },
      defaultValue: true,
      description: '보더 플래그',
      table: {
        type: { summary: 'boolean' },
      },
    },
    hasDarkBackground: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: '배경 플래그',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const WithoutBorder: Story = {
  args: {
    hasBorder: false,
    hasDarkBackground: false,
    placeholder: '입력하세요...',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export const Normal: Story = {
  args: {
    hasBorder: true,
    hasDarkBackground: false,
    placeholder: '입력하세요...',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export const Dark: Story = {
  args: {
    hasBorder: true,
    hasDarkBackground: true,
    placeholder: '입력하세요...',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
