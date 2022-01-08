const nxPreset = require('@nrwl/jest/preset');
const rnwPrest = require('react-native-web/jest-preset');

module.exports = { ...nxPreset, ...rnwPrest };
