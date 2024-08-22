module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-console': 'error',
    'react/jsx-props-no-spreading': 'off',
    'max-len': [
      'error',
      {
        code: 150,
      },
    ],
    'padding-line-between-statements': [
      // ? https://eslint.org/docs/latest/rules/padding-line-between-statements
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'function'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: ['*'],
        next: ['if', 'switch', 'while', 'try', 'function'],
      },
      {
        blankLine: 'always',
        prev: ['if', 'switch', 'while', 'try', 'function'],
        next: ['*'],
      },
      {
        blankLine: 'always',
        prev: ['export'],
        next: ['*'],
      },
    ],
    'import/prefer-default-export': 'off',
    'react/jsx-sort-props': [
      // ? https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
      'error',
      {
        shorthandFirst: true,
      },
    ],
    'react/require-default-props': ['off'],
    'no-else-return': 'error',
    '@typescript-eslint/lines-between-class-members': ['off'],
    '@typescript-eslint/no-throw-literal': ['off'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test.{ts,tsx}', // repos with a single test file
          'test-*.{ts,tsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
          './src/setupTest.ts',
        ],
        optionalDependencies: false,
      },
    ],
    'react/prop-types': 'off',
  },
};
