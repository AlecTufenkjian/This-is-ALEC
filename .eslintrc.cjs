module.exports = {
    root: true,
    env: { browser: true, es2021: true, node: true },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
      'prettier'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh', 'import'],
    rules: {
      'react-refresh/only-export-components': ['error', { allowConstantExport: true }],
      'import/no-unused-modules': ['error', { unusedExports: true }]
    },
  };