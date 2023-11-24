import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import Header from 'components/molecules/Header/index.tsx'
import { theme } from 'themes/index.ts'

const meta: Meta<typeof Header> = {
  title: 'Molecules/Header',
  component: Header,
}

export default meta
type Story = StoryObj<typeof Header>

export const Normal: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
