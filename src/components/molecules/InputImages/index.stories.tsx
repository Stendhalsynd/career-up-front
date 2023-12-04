import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import InputImages, { FileData } from './'
import { theme } from 'themes/index.ts'

const meta: Meta<typeof InputImages> = {
  title: 'Molecules/InputImages',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InputImages>

const Container = styled.div`
  width: 288px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
`

export const Standard: Story = {
  render: () => {
    const [images, setImages] = useState<FileData[]>([])

    const handleChange = (images: FileData[]) => {
      setImages(images)
    }

    return (
      <Container>
        <InputImages
          images={images}
          onChange={handleChange}
          maximumNumber={2}
        />
      </Container>
    )
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
