<script>
	import Editor from 'tui-editor-svelte/Editor.svelte';
  import { content } from '$lib/dummy';

  /** @type string */
  let height;

</script>

<main>
	<h1>Toast UI Editor for Svelte</h1>

  <p>
    <button on:click={() => height = Math.ceil(Math.random() * 10) * 100}>change height{height ? ` (${height})` : ''}</button>
  </p>

	<Editor initialValue={content} {height} />

	<p>Go to <a href="viewer">viewer</a>.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 4rem auto;
		max-width: 14rem;
	}

	p {
		max-width: 14rem;
		margin: 2rem auto;
		line-height: 1.35;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

		p {
			max-width: none;
		}
	}
</style>
