import type { Preview } from '@storybook/react'

const VIEWPORTS = {
  MOBILE_MIN: {
    name: 'MOBILE - 340p',
    styles: {
      width: '340px',
      height: '1000px',
    },
  },
  MOBILE_MAX: {
    name: 'MOBILE - 767p',
    styles: {
      width: '767px',
      height: '1000px',
    },
  },
  DESKTOP_MIN: {
    name: 'TABLET - 768p',
    styles: {
      width: '768px',
      height: '1300px',
    },
  },
  DESKTOP_MEDIUM: {
    name: 'TABLET - 900p',
    styles: {
      width: '900px',
      height: '1300px',
    },
  },
  DESKTOP_MAX: {
    name: 'DESKTOP - 901p',
    styles: {
      width: '901px',
      height: '1300px',
    },
  },
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: VIEWPORTS,
    },
  },
}

export default preview
