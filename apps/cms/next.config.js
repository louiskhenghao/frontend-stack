const path = require('path');
const withNx = require('@nrwl/next/plugins/with-nx');
const withAntdLess = require('next-plugin-antd-less');
const withPlugins = require('next-compose-plugins');
const withNextTranslate = require('next-translate');
const packages = require('./transpile-packages');
const withTM = require('next-transpile-modules');

// ==========================
/**
 * Next.js configuration
 * https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
const nextConfig = {};

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const plugninNx = withNx({
  // Set this to true if you would like to to use SVGR
  // See: https://github.com/gregberge/svgr
  svgr: true,
});

/**
 * Next.Js plugin for AntDesign with LESS
 * https://github.com/SolidZORO/next-plugin-antd-less#usage
 **/
const pluginAntdLess = withAntdLess({
  lessVarsFilePath: './src/styles/variables.less',
});

// ==========================
module.exports = withPlugins(
  [
    [
      // transpile packages plugin
      withTM(packages),
      {
        webpack(config) {
          config.module = {
            ...(config.module || {}),
            rules: [
              ...(config.module.rules || []),
              {
                test: /\.ttf$/,
                loader: 'url-loader', // or directly file-loader
                include: path.resolve(
                  __dirname,
                  '../../node_modules/react-native-vector-icons'
                ),
              },
            ],
          };
          config.resolve.alias = {
            ...(config.resolve.alias || {}),
            'react-native$': 'react-native-web',
          };
          config.resolve.extensions = [
            '.web.js',
            '.web.ts',
            '.web.tsx',
            ...config.resolve.extensions,
          ];
          return config;
        },
      },
    ],
    [plugninNx],
    [pluginAntdLess],
    // withNextTranslate,
  ],
  nextConfig
);
