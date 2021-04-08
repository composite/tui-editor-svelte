<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte'
  import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
  import { editorEvents, defaultValueMap } from './defaults';

  const emit = createEventDispatcher();
  let editor, node;

	/** @type {string} */
	export let height = defaultValueMap.height;
  let _height = height;
	/** @type {string} */
	export let initialValue = defaultValueMap.initialValue;
  /** @type {object} */
	export let options = {};

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

  onMount(() => {
    options = { ...options, height, initialValue };
    Object.keys(defaultValueMap).forEach(key => {
      if (!options[key]) {
        options[key] = defaultValueMap[key];
      }
    });
    options.events = editorEvents.reduce((events, event) => (events[event] = (...args) => emit(event, args), events), {});
    options.el = node;
    editor = new Viewer(options);
  })
  onDestroy(() => {
    editorEvents.forEach(event => editor.off(event));
    editor.remove();
  })
</script>

<div bind:this={node}></div>
