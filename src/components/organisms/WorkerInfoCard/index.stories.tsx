import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useSetRecoilState } from 'recoil'
import { ThemeProvider } from 'styled-components'
import WorkerInfoCard from 'components/organisms/WorkerInfoCard/index.tsx'
import RecoilClient from 'lib/recoil.tsx'
import { theme } from 'themes/index.ts'
import { selectedNicknameState } from 'utils/state.ts'

const meta: Meta<typeof WorkerInfoCard> = {
  title: 'Organisms/WorkerInfoCard',
  component: WorkerInfoCard,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof WorkerInfoCard>

const WorkerInfoCardState = () => {
  const setState = useSetRecoilState(selectedNicknameState)
  setState('행복한 다람쥐')
  return <WorkerInfoCard />
}

export const Normal: Story = {
  render: () => <WorkerInfoCardState />,
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
