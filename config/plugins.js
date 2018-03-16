
module.exports = {
  // Repeated here from eslint-config-xo in case some plugins set something different
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  // -- end repeat
  extends: ['eslint-config-ali'],
};
