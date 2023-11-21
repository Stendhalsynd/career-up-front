import { Meta, StoryObj } from '@storybook/react'
import Text from 'components/atoms/Text/index.tsx'
import colors from 'themes/colors.ts'
import fontSizes from 'themes/fontSizes.ts'

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    variant: {
      options: ['extraSmall', 'small', 'medium', 'mediumLarge', 'large'],
      control: { type: 'select' },
      defaultValue: 'extraSmall',
      // docs에 표시할 내용을 설정
      description: '텍스트 변형',
      table: {
        type: {
          summary: 'extraSmall, small, medium, mediumLarge, large',
        },
        defaultValue: { summary: 'extraSmall' },
      },
    },
    children: {
      control: { type: 'text' },
      description: '텍스트',
      table: {
        type: { summary: 'string' },
      },
    },
    fontWeight: {
      control: { type: 'text' },
      description: '폰트 굵기',
      table: {
        type: { summary: 'string' },
      },
    },
    lineHeight: {
      control: { type: 'text' },
      description: '행 높이',
      table: {
        type: { summary: 'string' },
      },
    },
    color: {
      options: Object.keys(colors),
      mapping: colors,
      control: { type: 'select' },
      defaultValue: 'text',
      description: '텍스트 색상',
      table: {
        type: { summary: 'text colors' },
        defaultValue: { summary: 'text' },
      },
    },
    backgroundColor: {
      options: Object.keys(colors),
      mapping: colors,
      control: { type: 'select' },
      defaultValue: 'text',
      description: '배경 색상',
      table: {
        type: { summary: 'text, danger' },
        defaultValue: { summary: 'text' },
      },
    },
    fontSize: {
      options: Object.keys(fontSizes),
      mapping: fontSizes,
      control: { type: 'select' },
      defaultValue: '16px',
      description: '폰트 크기',
      table: {
        type: { summary: 'text, danger' },
        defaultValue: { summary: 'text' },
      },
    },
    m: {
      control: { type: 'number' },
      description: '마진',
      table: {
        type: { summary: 'number' },
      },
    },
    mt: {
      control: { type: 'number' },
      description: '위쪽 마진',
      table: {
        type: { summary: 'number' },
      },
    },
    mr: {
      control: { type: 'number' },
      description: '오른쪽 마진',
      table: {
        type: { summary: 'number' },
      },
    },
    mb: {
      control: { type: 'number' },
      description: '아래쪽 마진',
      table: {
        type: { summary: 'number' },
      },
    },
    ml: {
      control: { type: 'number' },
      description: '왼쪽 마진',
      table: {
        type: { summary: 'number' },
      },
    },
    p: {
      control: { type: 'number' },
      description: '패딩',
      table: {
        type: { summary: 'number' },
      },
    },
    pt: {
      control: { type: 'number' },
      description: '위쪽 패딩',
      table: {
        type: { summary: 'number' },
      },
    },
    pr: {
      control: { type: 'number' },
      description: '오른쪽 패딩',
      table: {
        type: { summary: 'number' },
      },
    },
    pb: {
      control: { type: 'number' },
      description: '아래쪽 패딩',
      table: {
        type: { summary: 'number' },
      },
    },
    pl: {
      control: { type: 'number' },
      description: '왼쪽 패딩',
      table: {
        type: { summary: 'number' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const longText = `It is a long established fact that a reader will be
distracted by the readable content of a page when looking at its layout.
The point of using Lorem Ipsum is that it has a more - or - less normal
distribution of letters, as opposed to using Content here, content here,
making it look like readable English.Many desktop publishing packages and
web page editors now use Lorem Ipsum as their default model text, and a
search for lorem ipsum will uncover many web sites still in their infancy.
Various versions have evolved over the years, sometimes by accident,
sometimes on purpose(injected humour and the like).`

export const ExtraSmall: Story = {
  args: {
    variant: 'extraSmall',
    children: longText,
    label: 'extraSmall',
  },
}

export const Small: Story = {
  args: {
    variant: 'small',
    children: longText,
    label: 'small',
  },
}

export const Medium: Story = {
  args: {
    variant: 'medium',
    children: longText,
    label: 'medium',
  },
}

export const MediumLarge: Story = {
  args: {
    variant: 'mediumLarge',
    children: longText,
    label: 'mediumLarge',
  },
}

export const Large: Story = {
  args: {
    variant: 'large',
    children: longText,
    label: 'large',
  },
}
