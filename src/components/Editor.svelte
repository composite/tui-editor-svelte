<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte'
  import Editor from '@toast-ui/editor';
  import { editorEvents, defaultValueMap } from '../lib/defaults';

  const emit = createEventDispatcher();
  let editor, node;

	/** @type {string} */
	export let previewStyle = defaultValueMap.previewStyle;
  let _previewStyle = previewStyle;
	/** @type {string} */
	export let height = defaultValueMap.height;
  let _height = height;
  /** @type {string} */
	export let initialEditType = defaultValueMap.initialEditType;
	/** @type {string} */
	export let initialValue = defaultValueMap.initialValue;
  /** @type {object} */
	export let options = {};
  /**
   *
   * @param method {string}
   * @param args {any}
   * @returns {any}
   */
  export function invoke(method, ...args) {
      let result = null;
      if (editor[method]) {
        result = editor[method](...args);
      }
      return result;
  }

  /**
   * @returns {Node}
   */
  export function getRootElement() {
    return node;
  }

  $:{
    if(previewStyle !== _previewStyle) {
      editor.changePreviewStyle(previewStyle);
      _previewStyle = previewStyle
    }
    if(height !== _height) {
      editor.height(height);
      _height = height
    }
  }

  onMount(() => {
    options = { ...options, previewStyle, height, initialEditType, initialValue };
    Object.keys(defaultValueMap).forEach(key => {
      if (!options[key]) {
        options[key] = defaultValueMap[key];
      }
    });
    options.events = editorEvents.reduce((events, event) => (events[event] = (...args) => emit(event, args), events), {});
    options.el = node;
    editor = new Editor(options);
  })
  onDestroy(() => {
    editorEvents.forEach(event => editor.off(event));
    editor.remove();
  })
</script>

<div bind:this={node}></div>
