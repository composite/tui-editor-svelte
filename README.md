# Toast UI Editor Component for Svelte

0.0.1 BETA

This is not official wrapper for [Toast UI Editor](https://github.com/nhn/tui.editor).
Inspired from [Toast UI Editor for Vue](https://github.com/nhn/tui.editor/tree/master/apps/vue-editor).

## Install

`npm i -D tui-editor-svelte`

`yarn add -D tui-editor-svelte`

`pnpm i -D tui-editor-svelte`


### for rollup CSR users

set `output.inlineDynamicImports` to `true` for work perperly.
The component is using dynamic `import` for both CSR and SSR compatible.

```js
{
  // ...
  "output": {
    // ...
    inlineDynamicImports: true
  }
  // ...
}
```

### for `@sveltejs/kit` users

add `tui-editor-svelte` in `kit.vite.optimizeDeps.include` array because `@toast-ui/editor` is a browser library.

```js
{
	kit: {
		// ...
		vite: {
			// ...
      optimizeDeps: {
        include: ['tui-editor-svelte']
      }
      // ...
		}
    // ...
	}
}
```

## Usage

### Editor
```svelte
<scrip>
import Editor from 'tui-editor-svelte/Editor.svelte';
</script>

<Editor initialValue="Markdown **rocks!**" />
```

### Viewer

### Editor
```svelte
<scrip>
import Viewer from 'tui-editor-svelte/Viewer.svelte';
</script>

<Viewer initialValue="Markdown **rocks!**" />
```

## Component properties

### Editor

See [Vue editor props](https://github.com/nhn/tui.editor/tree/master/apps/vue-editor#props).

### Viewer

See [Vue editor props](https://github.com/nhn/tui.editor/tree/master/apps/vue-editor#props-1).

## Compoenet methods

Same as [Vue editor instance methods](https://github.com/nhn/tui.editor/tree/master/apps/vue-editor#instance-methods).
but usage is not same as vue. use like this:

```svelte
<scrip>
import Editor from 'tui-editor-svelte/Editor.svelte';
let editor, html;
</script>

<Editor bind:this={editor} initialValue="Markdown **rocks!**" />

<button on:click={() => html = editor.invoke('getHtml')}>Get html content</button>
<pre>{html}</pre>
```

## Component events

editor events are `load,focus,blur,change,stateChange`.

See [Vue editor events](https://github.com/nhn/tui.editor/tree/master/apps/vue-editor#events) and use like below:

```svelte
<scrip>
import Editor from 'tui-editor-svelte/Editor.svelte';
</script>

<Editor on:load={() => console.log('TUI Editor loaded.')} initialValue="Markdown **rocks!**" />

```

## Having issues? suggestions?

Feel free and add an [issue](https://github.com/composite/tui-editor-svelte/issues).

## Contribution for better component

use `PNPM`.

- Clone this repository.
- `pnpm -r i`
- `pnpm run csr:dev`
- `pnpm run kit:dev`

## TODO

- [x] `<Editor/>`
- [x] `<Viewer/>`
- [x] Test
- [x] Storybook
- [x] Documentation
- [x] publish to NPM
- [x] rollup SPA
- [ ] snowpack SPA
- [ ] `sapper`
- [x] `@svelte/kit`
- [ ] Prepare for TUI Editor 3?

## License

MIT.
