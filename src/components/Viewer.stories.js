import Viewer from './Viewer.svelte';

export default {
  title: 'Example/Viewer',
  component: Viewer,
	argTypes: {
		name: { control: 'text' },
		textColor: { control: 'color' },
	},
};

const Template = ({ ...args }) => ({
  Component: Viewer,
	props: args,
});

export const Default = Template.bind({});
Default.args = {};
