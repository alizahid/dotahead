/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: [
    'universe/native',
    'universe/shared/typescript-analysis',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  plugins: ['sort-keys-fix', 'sort-destructure-keys', 'simple-import-sort'],
  root: true,
  rules: {
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'generic',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        fixStyle: 'inline-type-imports',
      },
    ],
    'import/order': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
  },
}
