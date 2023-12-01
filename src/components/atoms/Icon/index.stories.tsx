import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import Icon from 'components/atoms/Icon/index.tsx'
import { theme } from 'themes/index.ts'

// TODO: storybook 사용법 정리
const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      options: ['business_bag', 'desktop', 'warning'],
      control: { type: 'select' },
      defaultValue: 'desktop',
      table: {
        type: {
          summary: 'business_bag, desktop, warning',
          defaultValue: { summary: 'desktop' },
        },
      },
    },
    width: {
      control: { type: 'number' },
      defaultValue: 24,
      description: '가로 길이',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      defaultValue: 24,
      description: '세로 길이',
      table: {
        type: { summary: 'number' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

export const BusinessBag: Story = {
  args: {
    iconName: 'business_bag',
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

export const Desktop: Story = {
  args: {
    iconName: 'desktop',
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

export const Warning: Story = {
  args: {
    iconName: 'warning',
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
