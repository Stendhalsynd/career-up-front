import { Meta, StoryObj } from '@storybook/react'
import { useSetRecoilState } from 'recoil'
import { ThemeProvider } from 'styled-components'
import FilterModal from 'components/organisms/FilterModal/index.tsx'
import RecoilClient from 'lib/recoil.tsx'
import { theme } from 'themes/index.ts'
import { modalState } from 'utils/state.ts'

const meta: Meta<typeof FilterModal> = {
  title: 'Organisms/FilterModal',
  component: FilterModal,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FilterModal>

const FilterModalState = () => {
  const setState = useSetRecoilState(modalState)
  setState(true)
  return <FilterModal />
}

export const Normal: Story = {
  render: () => <FilterModalState />,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <RecoilClient>
          <Story />
        </RecoilClient>
      </ThemeProvider>
    ),
  ],
}
