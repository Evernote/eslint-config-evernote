var reactRulesAvailable = true;
try {
  require('eslint-plugin-react');
} catch (e) {
  reactRulesAvailable = false;
}
var plugins = !reactRulesAvailable ? [] : ['react'];
var rules = !reactRulesAvailable ? {} : {
  'react/display-name': 0,
  'react/forbid-prop-types': 0,
  'react/jsx-boolean-value': 0,
  'react/jsx-closing-bracket-location': 2,
  'react/jsx-curly-spacing': [2, 'never'],
  'react/jsx-equals-spacing': [2, 'never'],
  'react/jsx-indent-props': [2, 2],
  'react/jsx-max-props-per-line': 0,
  'react/jsx-no-duplicate-props': 2,
  'react/jsx-no-literals': 2,
  'react/jsx-no-undef': 2,
  'react/jsx-sort-props': 0,
  'react/jsx-uses-react': 2,
  'react/jsx-uses-vars': 2,
  'react/no-danger': 0,
  'react/no-did-mount-set-state': 2,
  'react/no-did-update-set-state': 2,
  'react/no-direct-mutation-state': 2,
  'react/no-multi-comp': 0,
  'react/no-set-state': 0,
  'react/no-unknown-property': 2,
  'react/prefer-es6-class': 0,
  'react/prop-types': 2,
  'react/react-in-jsx-scope': 2,
  'react/require-extension': 2,
  'react/self-closing-comp': 2,
  'react/sort-comp': 2,
  'react/sort-prop-types': 2,
  'react/wrap-multilines': 2
};

module.exports = {
  plugins: plugins,
  rules: rules
};