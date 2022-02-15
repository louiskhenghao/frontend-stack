// const { appRootPath } = require('@nrwl/tao/src/utils/app-root');
// const presets = require('../../jest.preset')

module.exports = {
  displayName: 'web',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['./setupTests.js'],
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/web',
};
