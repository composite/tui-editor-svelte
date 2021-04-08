import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import Viewer from './Viewer.svelte';
import * as dummy from '../lib/dummy';

export default {
  title: 'Example/Viewer',
  component: Viewer,
  argTypes: {
    height: { control: 'text' },
    initialValue: { control: 'text' },
    options: { control: 'object' },
  },
};

const Template = ({ ...args }) => ({
  Component: Viewer,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  initialValue: dummy.content
};
