import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { Text } from 'components/atoms/index.ts'
import Label from 'components/molecules/Label/index.tsx'
import fontSizes from 'themes/fontSizes.ts'

import { theme } from 'themes/index.ts'

const meta: Meta<typeof Label> = {
  title: 'Molecules/Label',
  component: Label,
  tags: ['autodocs'],
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
    color: {
      control: { type: 'color' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Label>

export const Normal: Story = {
  args: {
    fontSize: 'medium',
    color: `${theme.colors.gray}`,
  },
  name: '공통색상적용',
  parameters: {
    docs: {
      description: {
        story:
          '자식인 모든 Text 에 같은 색을 적용하고 싶다면 Label 에 color 값을 직접 넣어주세요. 만약 부모인 Label 에 색을 넣었을때 자식인 Text 에 color을 넣으면 자식의 color 는 적용되지 않습니다. ',
      },
    },
  },
  render: (args) => (
    <Label fontSize={args.fontSize} color={args.color}>
      <Text>
        실력있는 개발자들이 모였습니다. 나의 고민을 해결해줄 수 있는&nbsp;
      </Text>
      <Text>파트너</Text>
      <Text>를 찾아보세요.</Text>
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

export const Small: Story = {
  args: {
    fontSize: 'small',
  },
  render: (args) => (
    <Label fontSize={args.fontSize}>
      <Text>
        실력있는 개발자들이 모였습니다. 나의 고민을 해결해줄 수 있는&nbsp;
      </Text>
      <Text color={'primary'}>파트너</Text>
      <Text>를 찾아보세요.</Text>
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
      <Text>
        실력있는 개발자들이 모였습니다. 나의 고민을 해결해줄 수 있는&nbsp;
      </Text>
      <Text color={'primary'}>파트너</Text>
      <Text>를 찾아보세요.</Text>
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
      <Text>
        실력있는 개발자들이 모였습니다. 나의 고민을 해결해줄 수 있는&nbsp;
      </Text>
      <Text color={'primary'} fontSize={'mediumLarge'}>
        파트너
      </Text>
      <Text>를 찾아보세요.</Text>
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
