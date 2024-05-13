import antfu from '@antfu/eslint-config';
import { FlatCompat } from '@eslint/eslintrc';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';

const compat = new FlatCompat();

export default antfu({
  stylistic: {
    semi: true,
  },
  rules: {
    'no-console': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': 'warn',
    'style/padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: ['return', 'export'] },
      { blankLine: 'never', prev: 'export', next: 'export' },
      {
        blankLine: 'always',
        prev: 'import',
        next: ['const', 'let', 'function', 'block-like', 'interface'],
      },
      {
        blankLine: 'always',
        prev: [
          'multiline-expression',
          'multiline-block-like',
          'multiline-const',
          'interface',
        ],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'multiline-expression',
          'multiline-block-like',
          'multiline-const',
          'interface',
        ],
      },
      {
        blankLine: 'never',
        prev: ['singleline-const', 'singleline-let', 'singleline-var'],
        next: ['singleline-const', 'singleline-let', 'singleline-var'],
      },
    ],
    'import/order': 'off',
    'perfectionist/sort-imports': [
      'error',
      {
        groups: [
          'builtin',
          ['external', 'internal'],
          ['parent', 'sibling', 'index'],
          [
            'internal-type',
            'type',
            'parent-type',
            'sibling-type',
            'index-type',
          ],
          ['side-effect', 'side-effect-style'],
        ],
      },
    ],
    'test/consistent-test-it': ['error', { fn: 'test' }],
  },
  formatters: {
    css: true,
    markdown: true,
  },
}, {
  files: ['**/*.{json,jsonc}'],
  rules: {
    'jsonc/sort-keys': [
      'error',
      {
        pathPattern: '^scripts$',
        order: { type: 'asc' },
      },
    ],
  },
}, ...compat.config({
  extends: ['plugin:tailwindcss/recommended'],
}), {
  files: ['**/*.tsx'],
  plugins: {
    'react': reactPlugin,
    'react-hooks': hooksPlugin,
    '@next/next': nextPlugin,
  },
  settings: {
    react: {
      version: 'detect', // add this if get a warning about the React version in ESLint console
    },
  },
  rules: {
    ...reactPlugin.configs.recommended.rules,
    ...reactPlugin.configs['jsx-runtime'].rules,
    ...hooksPlugin.configs.recommended.rules,
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs['core-web-vitals'].rules,
  },
});
