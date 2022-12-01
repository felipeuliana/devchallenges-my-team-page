export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      mobile: {
        name: 'mobile',
        styles: {
          height: '375px',
          width: '667px',
        }
      },
      tablet: {
        name: 'tablet',
        styles: {
          height: '1024px',
          width: '768px',
        }
      },
      desktop: {
        name: 'desktop',
        styles: {
          height: '1366px',
          width: '768px',
        }
      }
    }
  }
}
