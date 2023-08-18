module.exports = {
  env: {
    jest: true,
  },
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'next'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
  },
  root: true,
  rules: {
    '@next/next/no-img-element': 0,
    '@typescript-eslint/no-unused-vars': [1, { ignoreRestSiblings: true }],
    'no-trailing-spaces': 'error',
    'no-unused-expressions': [
      2,
      { allowShortCircuit: true, allowTernary: true },
    ],
    'no-shadow': 1,
    quotes: [0, 'single'],
    semi: ['error', 'always'],
    'sort-keys': 0,
  },
};
