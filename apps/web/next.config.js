// const { appRootPath } = require('@nrwl/tao/src/utils/app-root');
const withNx = require('@nrwl/next/plugins/with-nx');
const withPlugins = require('next-compose-plugins');
const withNextTranslate = require('next-translate');
const packages = require('./transpile-packages');
const withTM = require('next-transpile-modules');

/**
 * =================================
 * Next.js configuration
 * @type {import('next').NextConfig}
 * https://nextjs.org/docs/api-reference/next.config.js/introduction
 * https://github.com/vercel/next.js/blob/canary/packages/next/server/config-shared.ts#L68

 */
const nextConfig = {
  poweredByHeader: false,
  images: {
    domains: ['tailwindcss.com'],
  },
};

/**
 * =================================
 * Nx NextJs Plugin
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const plugninNx = withNx({
  // Set this to true if you would like to to use SVGR
  // See: https://github.com/gregberge/svgr
  svgr: true,
});

/**
 * =================================
 * Custom Webpack configuration
 * https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
 */
const customWebpack = {
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
    };
    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];

    return config;
  },
};

// ==========================
module.exports = withPlugins(
  [withTM(packages), [customWebpack, plugninNx], withNextTranslate],
  nextConfig
);
