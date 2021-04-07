import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import Editor from './Editor.svelte';
import * as dummy from '../lib/dummy';

export default {
  title: 'Example/Editor',
  component: Editor,
	argTypes: {
    previewStyle: { control: 'text' },
    height: { control: 'text' },
    initialEditType: { control: 'text' },
    initialValue: { control: 'text' },
    options: { control: 'object' },
	},
};

const Template = ({ ...args }) => ({
  Component: Editor,
	props: args,
});

export const Default = Template.bind({});
Default.args = {
  initialValue: dummy.content
};
