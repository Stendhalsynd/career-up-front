import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { Text } from 'components/atoms/index.ts'
import Label from 'components/molecules/Label/index.tsx'
import fontSizes from 'themes/fontSizes.ts'

import { theme } from 'themes/index.ts'

const meta: Meta<typeof Label> = {
  title: 'Molecules/Label',
  component: Label,
  argTypes: {
    fontSize: {
      options: Object.keys(fontSizes),
      mapping: fontSizes,
      control: { type: 'select' },
      description: '폰트 크기',
      table: {
        type: { summary: 'extraSmall, small, medium, mediumLarge, large' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Label>

export const Small: Story = {
  args: {
    fontSize: 'small',
  },
  render: (args) => (
    <Label fontSize={args.fontSize}>
      <Text color={'white'}>
        실력있는 개발자들이 모였습니다. 나의 고민을 해결해줄 수 있는&nbsp;
      </Text>
      <Text color={'primary'}>파트너</Text>
      <Text color={'white'}>를 찾아보세요.</Text>
    </Label>
  ),
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export const Medium: Story = {
  args: {
    fontSize: 'medium',
  },
  render: (args) => (
    <Label fontSize={args.fontSize}>
      <Text color={'white'}>
        실력있는 개발자들이 모였습니다. 나의 고민을 해결해줄 수 있는&nbsp;
      </Text>
      <Text color={'primary'}>파트너</Text>
      <Text color={'white'}>를 찾아보세요.</Text>
    </Label>
  ),
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export const Detail: Story = {
  render: () => (
    <Label>
      <Text color={'white'}>
        실력있는 개발자들이 모였습니다. 나의 고민을 해결해줄 수 있는&nbsp;
      </Text>
      <Text color={'primary'} fontSize={'mediumLarge'}>
        파트너
      </Text>
      <Text color={'white'}>를 찾아보세요.</Text>
    </Label>
  ),
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
