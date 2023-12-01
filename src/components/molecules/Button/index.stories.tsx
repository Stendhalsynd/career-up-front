import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import {
  NicknameButton,
  RequestButton,
  SelectButton,
  StatusButton,
  Button,
  HyperLinkButton,
} from './index.ts'

import {
  InfoTagButton,
  IntroTagButton,
  SkillTagButton,
} from 'components/molecules/Button/TagButton.tsx'
import { theme } from 'themes/index.ts'

const meta: Meta<typeof Button> = {
  title: 'Molecules/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      options: ['business_bag', 'desktop', 'warning'],
      control: { type: 'select' },
      defaultValue: 'desktop',
      table: {
        type: {
          summary: 'business_bag, desktop, warning',
          defaultValue: { summary: 'desktop' },
        },
      },
    },
    isRound: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Normal: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export const LoginButton: Story = {
  render: () => <RequestButton>로그인</RequestButton>,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'width 와 padding 을 자유롭게 수정해주세요',
      },
    },
  },
}

export const DarkButton1: Story = {
  render: () => (
    <RequestButton variant={'dark'} padding={'6px 15px'} width={'fit-content'}>
      검색
    </RequestButton>
  ),
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'padding 값을 조절하여 크기를 조절해주세요',
      },
    },
  },
}

export const DarkButton2: Story = {
  render: () => {
    return (
      <RequestButton
        variant={'dark'}
        padding={'10px 24px'}
        width={'fit-content'}
      >
        변경
      </RequestButton>
    )
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'padding 값을 조절하여 크기를 조절해주세요',
      },
    },
  },
}

export const IconButton: Story = {
  args: {
    iconName: 'mic',
  },
  render: (args) => <RequestButton iconName={args.iconName} />,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'iconName 만 전달해주세요',
      },
    },
  },
}

export const HyperLink: Story = {
  args: {
    to: 'main',
    contents: '커리업 하러 가기',
  },
  render: (args) => <HyperLinkButton to={args.to} contents={args.contents} />,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'iconName 만 전달해주세요',
      },
    },
  },
}

export const TransparentHyperLink: Story = {
  args: {
    to: 'main',
    contents: '회원가입하기',
    isTransparent: true,
  },
  render: (args) => (
    <HyperLinkButton
      to={args.to}
      contents={args.contents}
      backgroundColor={'transparent'}
      isTransparent={args.isTransparent}
    />
  ),
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          '배경을 투명하게 하기 위해서는 isTransparent 도 같이 전달해주세요',
      },
    },
  },
}

export const InfoTag: Story = {
  args: {
    tag: '직군',
  },
  render: (args) => <InfoTagButton tag={args.tag} />,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: '직군 / 현직 / 스킬 같은 정보 태그',
      },
    },
  },
}

export const SkillTag: Story = {
  args: {
    tag: '#tag',
  },
  render: (args) => (
    <SkillTagButton tag={args.tag} backgroundColor={'transparent'} />
  ),
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: '배경색을 검정색으로 변경하시면 잘 확인 가능합니다.',
      },
    },
  },
}

export const IntroTag: Story = {
  args: {
    tag: 'Next.js',
  },
  render: (args) => <IntroTagButton tag={args.tag} />,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: '추가한 기술 스택들',
      },
    },
  },
}

export const SelectPrimary: Story = {
  args: {
    isRound: false,
    children: '구직자',
  },
  render: (args) => (
    <SelectButton isRound={args.isRound}>{args.children}</SelectButton>
  ),
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: '각진 모서리 primary',
      },
    },
  },
}

export const SelectWhite: Story = {
  args: {
    isRound: false,
    children: '재직자',
  },
  render: (args) => (
    <SelectButton isRound={args.isRound} variant={'white'}>
      {args.children}
    </SelectButton>
  ),
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: '각진 모서리 white',
      },
    },
  },
}

export const SelectRound: Story = {
  args: {
    children: '프론트엔드',
  },
  render: (args) => (
    <SelectButton variant={'white'} padding={'8px 30px'}>
      {args.children}
    </SelectButton>
  ),
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          '둥근 모서리가 기본값이라 isRound 를 전달하지 않으면 둥근 선택 버튼을 생성합니다. paddding 을 자유롭게 수정해주세요',
      },
    },
  },
}

export const Deny: Story = {
  args: {
    children: '거부',
  },
  render: (args) => (
    <SelectButton variant={'dark'}>{args.children}</SelectButton>
  ),
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: '거부 버튼은 dark 를 variant 로 넣어주세요',
      },
    },
  },
}

export const Status: Story = {
  args: {
    children: '수락됨',
  },
  render: (args) => <StatusButton>{args.children}</StatusButton>,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export const NickName: Story = {
  args: {
    nickname: '잠자는 사자',
  },
  render: (args) => <NicknameButton nickname={args.nickname} />,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
