import { configure } from '@storybook/vue';

configure(() => {
  const stories = require.context('example/', true, /\.story\.js$/);
  stories.keys().forEach((story) => stories(story));
}, module);
