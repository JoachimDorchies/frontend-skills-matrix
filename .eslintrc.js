module.exports = {
  env: {
    node: true,
  },
  plugins: ['prettier'],
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'vue/max-attributes-per-line': [0],
    'vue/singleline-html-element-content-newline': [0],
    'vue/html-self-closing': [0],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    'no-restricted-syntax': [0],
    'global-require': [0],
    'import/no-dynamic-require': [0],
    'import/prefer-default-export': [0],
    'no-shadow': [2, { allow: ['state', 'getters'] }],
  },
};
