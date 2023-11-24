import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import Login from 'components/organisms/Login/index.tsx'
import { theme } from 'themes/index.ts'

const meta: Meta<typeof Login> = {
  title: 'Organisms/Login',
  component: Login,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Login>

export const Normal: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
