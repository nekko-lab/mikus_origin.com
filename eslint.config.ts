import next from 'eslint-config-next';
import prettier from 'eslint-config-prettier';

export default [
  ...next,
  prettier,
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'react/jsx-key': 'error',
      '@next/next/no-img-element': 'warn',
    },
  },
];
