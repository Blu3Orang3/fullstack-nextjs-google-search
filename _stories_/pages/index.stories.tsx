import { Meta, StoryFn } from '@storybook/react';
import Home from '../../pages';

export default {
  title: 'pages/Home',
  component: Home,
  argTypes: {},
} as Meta<typeof Home>;

const Template: StoryFn<typeof Home> = (args) => <Home {...args} />;

export const Base = Template.bind({});