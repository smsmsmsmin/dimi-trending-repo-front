const { override, addBabelPlugin, addBabelPreset } = require('customize-cra');
module.exports = override(
  addBabelPlugin('@babel/plugin-proposal-optional-chaining'),
  addBabelPreset('@emotion/babel-preset-css-prop'),
);
