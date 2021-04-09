<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte'
  import 'codemirror/lib/codemirror.css';
  import '@toast-ui/editor/dist/toastui-editor.css';
  import { editorEvents, defaultValueMap } from './defaults';

	/** @type {string} */
	export let height = defaultValueMap.height;
	/** @type {string} */
	export let initialValue = defaultValueMap.initialValue;
  /** @type {object} */
	export let options = {};

  let editor, node, _height = height;
  const emit = createEventDispatcher();

  /**
   * @returns {Node}
   */
  export function getRootElement() {
    return node;
  }

  $:{
    if(height !== _height) {
      editor.height(height);
      _height = height
    }
  }

  async function init(node, options) {
    const Viewer = (await import('@toast-ui/editor/dist/toastui-editor-viewer')).default;
    options = { ...options, height, initialValue };
    Object.keys(defaultValueMap).forEach(key => {
      if (!options[key]) {
        options[key] = defaultValueMap[key];
      }
    });
    options.events = editorEvents.reduce((events, event) => (events[event] = (...args) => emit(event, args), events), {});
    options.el = node;
    editor = new Viewer(options);

    return {
      destroy() {
        editorEvents.forEach(event => editor.off(event));
        editor.remove();
      }
    }

  }
</script>
<div bind:this={node} use:init={options}></div>
