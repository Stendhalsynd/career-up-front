import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import Input from 'components/atoms/Input/index.tsx'
import { theme } from 'themes/index.ts'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
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
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Normal: Story = {
  args: {
    hasBorder: true,
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
