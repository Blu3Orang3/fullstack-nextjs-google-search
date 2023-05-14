import type { StorybookConfig } from '@storybook/nextjs';
const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  /** Expose public folder to storybook as static */
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-css-modules-preset',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
