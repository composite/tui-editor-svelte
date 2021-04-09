<script>
	import Editor from 'tui-editor-svelte/Editor.svelte';
	import Viewer from 'tui-editor-svelte/Viewer.svelte';
  import { content } from './dummy';
  let viewer = false, height;
</script>

<main>
	<h1>Toast UI Editor for Svelte</h1>
	<p><button on:click={() => viewer = !viewer}>{viewer ? 'Editor mode' : 'Viewer mode'}</button></p>

  {#if viewer}
  <Viewer initialValue={content} />
  {:else}
  <p>
    <button on:click={() => height = Math.ceil(Math.random() * 10) * 100}>change height{height ? ` (${height})` : ''}</button>
  </p>
  <Editor initialValue={content} {height} />
  {/if}

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
