<script>
  import 'codemirror/lib/codemirror.css';
  import '@toast-ui/editor/dist/toastui-editor.css';
	import { Editor } from './components';

  const defaultValue = `
# Toast UI Editor

for **SVELTE** *component*!
  `;
</script>

<style>
	:global(body) {
		padding: 0 !important;
		margin: 0 !important;
	}
	.wrapper {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
    box-sizing: border-box;
    padding: 1rem;
	}
</style>

<div class="wrapper">
	<Editor initialValue={defaultValue} />
</div>
