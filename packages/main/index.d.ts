import { SvelteComponent } from 'svelte'
import ToastuiEditor from '@toast-ui/editor';
import ToastuiEditorViewer from '@toast-ui/editor/dist/toastui-editor-viewer';

type FunctionKeys<T extends object> = {[K in keyof T]: T[K] extends Function ? K : never}[keyof T];
type EditorFnKeys = FunctionKeys<ToastuiEditor>;
type ViewerFnKeys = FunctionKeys<ToastuiEditorViewer>;
export class Editor extends SvelteComponent {
  invoke<T extends EditorFnKeys>(fname: T, ...args: Parameters<ToastuiEditor[T]>): ReturnType<ToastuiEditor[T]>;
  getRootElement(): HTMLElement;
}

declare module 'tui-editor-svelte' {
  export default Editor;
}
