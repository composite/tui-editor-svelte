module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['svelte3'],
};
