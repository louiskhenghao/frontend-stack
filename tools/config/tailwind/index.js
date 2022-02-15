const { appRootPath } = require('@nrwl/tao/src/utils/app-root');

const rootTailwindConfig = require(`${appRootPath}/libs/ui-theme/tailwind.config.js`);

module.exports = (tailwindConfig = {}) => {
  const rootContent = rootTailwindConfig.content || [];
  const projectContent = tailwindConfig.content || [];
  const content = [...rootContent, ...projectContent];

  const rootSafelist = rootTailwindConfig.safelist || [];
  const projectSafelist = projectContent.safelist || [];
  const safelist = [...rootSafelist, ...projectSafelist];

  const rootPlugins = rootTailwindConfig.plugins || [];
  const projectPlugins = tailwindConfig.plugins || [];
  const plugins = [...rootPlugins, ...projectPlugins];

  return {
    ...rootTailwindConfig,
    ...tailwindConfig,
    content,
    safelist,
    plugins,
  };
};
