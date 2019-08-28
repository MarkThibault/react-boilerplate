module.exports = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    // "plugin:prettier/recommended",
    'jest-enzyme',
    'plugin:jest/recommended'
  ],
  parser: 'babel-eslint',
  plugins: ['react', 'babel', 'jest', 'jsx-a11y', 'import', 'prettier'],
  rules: {
    'linebreak-style': 0,
    'comma-dangle': [
      'error',
      'never'
    ],
    'react/jsx-filename-extension': 0
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect'
    },
    propWrapperFunctions: [
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' }
    ],
    linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }]
  }
};
