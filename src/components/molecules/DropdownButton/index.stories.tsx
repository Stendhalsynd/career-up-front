import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import DropdownButton from 'components/molecules/DropdownButton/index.tsx'
import { theme } from 'themes/index.ts'

const meta: Meta<typeof DropdownButton> = {
  title: 'Molecules/Dropdown',
  component: DropdownButton,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: { type: 'array' },
      description: '드롭다운 선택지',
      table: {
        type: { summary: 'array' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: '변형 에러 플래그',
      table: {
        type: { summary: 'boolean' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: '플레이스홀더',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: { type: 'text' },
      description: '드롭다운 값',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      description: '값이 변화했을 때의 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof DropdownButton>

export const Normal: Story = {
  args: {
    options: [
      { value: null, label: '-' },
      { value: 'frontend', label: '프론트엔드' },
      { value: 'backend', label: '백엔드' },
      { value: 'andriod', label: '안드로이드' },
      { value: 'ios', label: 'IOS' },
      { value: 'game', label: '게임' },
      { value: 'ai', label: 'AI' },
    ],
    placeholder: '직무',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
