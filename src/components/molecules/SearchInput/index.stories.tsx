import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { SearchInput } from 'components/molecules/index.ts'
import { theme } from 'themes/index.ts'

const meta: Meta<typeof SearchInput> = {
  title: 'Molecules/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      option: ['primarySmall', 'primaryLarge', 'skillSmall', 'skillLarge'],
      control: { type: 'select' },
      description: '검색 입력',
      defaultValue: 'primarySmall',
      table: {
        type: { summary: '검색할 내용 입력' },
      },
    },
  },
}
export default meta
type Story = StoryObj<typeof SearchInput>

export const PrimarySmall: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
