<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';
  import 'codemirror/lib/codemirror.css';
  import '@toast-ui/editor/dist/toastui-editor.css';
  import { editorEvents, defaultValueMap } from './defaults';




	/** @type {string} */
	export let previewStyle = defaultValueMap.previewStyle;
	/** @type {string} */
	export let height = defaultValueMap.height;
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

  let editor, node, _previewStyle = previewStyle, _height = height;
  const emit = createEventDispatcher();

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

  async function init(node, options) {
    const Editor = (await import('@toast-ui/editor')).default;
    options = { ...options, previewStyle, height, initialEditType, initialValue };
    Object.keys(defaultValueMap).forEach(key => {
      if (!options[key]) {
        options[key] = defaultValueMap[key];
      }
    });
    options.events = editorEvents.reduce((events, event) => (events[event] = (...args) => emit(event, args), events), {});
    options.el = node;
    editor = new Editor(options);

    return {
      destroy() {
        editorEvents.forEach(event => editor.off(event));
        editor.remove();
      }
    }

  }
</script>
<div bind:this={node} use:init={options}></div>
