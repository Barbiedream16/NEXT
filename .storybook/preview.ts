import React from 'react';
import type { Preview, StoryFn, StoryContext } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import '../styles/globals.css';  // Ensure this is importing your global Tailwind CSS

// Initialize MSW
initialize();

// Define theme colors
const themeColors = {
  brand: '#DF367C',
  darkest: '#110d11',
  dark: '#3c303c',
  mid: '#b6a1b3',
  light: '#e4cee1',
  lightest: '#FFFFFF',
};

// Create CSS variables for both themes
const themeStyles = `
  :root {
    --color-brand: ${themeColors.brand};
  }
  .theme-light {
    --color-background: ${themeColors.lightest};
    --color-text: ${themeColors.darkest};
    --color-primary: ${themeColors.brand};
    --color-secondary: ${themeColors.dark};
    --color-accent: ${themeColors.dark};
  }
  .theme-dark {
    --color-background: ${themeColors.darkest};
    --color-text: ${themeColors.lightest};
    --color-primary: ${themeColors.brand};
    --color-secondary: ${themeColors.light};
    --color-accent: ${themeColors.mid};
  }
  #storybook-root {
    height: 100vh;
    width: 100vw;
  }
  .storybook-theme {
    background-color: var(--color-background);
    color: var(--color-text);
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// Function to add theme styles to the document
const addThemeStyles = () => {
  if (!document.head.querySelector('style[data-theme-styles]')) {
    const styleElement = document.createElement('style');
    styleElement.setAttribute('data-theme-styles', '');
    styleElement.textContent = themeStyles;
    document.head.appendChild(styleElement);
  }
};

// Apply theme immediately
addThemeStyles();

// Higher-order component for theming
const withTheme = (Story: React.ComponentType<any>, context: StoryContext<any>) => {
  const theme = context.args?.theme || 'light';
  
  React.useLayoutEffect(() => {
    document.documentElement.className = `theme-${theme}`;
  }, [theme]);

  return React.createElement(
    'div',
    { className: `storybook-theme` },
    React.createElement(Story, context.args)
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: { disable: true }, // Disable Storybook's background addon
    layout: 'fullscreen', // Use fullscreen layout
    msw: {
      handlers: [], // Add any MSW handlers here if needed
    },
    jest: ['test-results.json'], // Add your Jest test results file here
  },
  decorators: [
    mswDecorator,
    withTests({
      results: () => {
        // You can dynamically import your test results here if needed
        // return import('./.storybook/test-results.json');
        return {}; // Return an empty object if you're not using test results yet
      },
    }),
    withTheme,
  ],
};

export default preview;