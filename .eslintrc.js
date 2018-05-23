module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
      },
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'require-yield': 'error',
    'template-curly-spacing': 'error',
    'generator-star-spacing': 'off',
    'arrow-parens': 0,
    'one-var': 0,
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'array-element-newline': [
      'error',
      'always',
    ],
    'object-curly-newline': [
      'error',
      {
        'multiline': true,
        'minProperties': 1,
      },
    ],
    'import/first': 0,
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
