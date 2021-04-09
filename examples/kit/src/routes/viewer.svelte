<script>
	import Viewer from 'tui-editor-svelte/Viewer.svelte';
  import { content } from '$lib/dummy'; 
</script>

<main>
	<h1>Toast UI Editor for Svelte</h1>

	<Viewer initialValue={content} />

	<p>Go to <a href="/">editor</a>.</p>
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
