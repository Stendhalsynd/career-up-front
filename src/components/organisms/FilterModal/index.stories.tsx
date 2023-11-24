import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import FilterModal from 'components/organisms/FilterModal/index.tsx'
import { theme } from 'themes/index.ts'

const meta: Meta<typeof FilterModal> = {
  title: 'Organisms/FilterModal',
  component: FilterModal,
}

export default meta
type Story = StoryObj<typeof FilterModal>

export const Normal: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
