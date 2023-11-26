import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import MentoSearch from 'components/organisms/MentoSearch/index.tsx'

import { theme } from 'themes/index.ts'

const meta: Meta<typeof MentoSearch> = {
  title: 'Organisms/MentoSearch',
  component: MentoSearch,
}

export default meta
type Story = StoryObj<typeof MentoSearch>

export const Normal: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
