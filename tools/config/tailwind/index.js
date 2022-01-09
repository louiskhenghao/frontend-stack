const { appRootPath } = require('@nrwl/tao/src/utils/app-root');

const rootTailwindConfig = require(`${appRootPath}/tailwind.config.js`);

module.exports = (tailwindConfig = {}) => {
  const rootContent = rootTailwindConfig.content || [];
  const projectContent = tailwindConfig.content || [];
  const content = [...rootContent, ...projectContent];

  const rootSafelist = rootTailwindConfig.safelist || [];
  const projectSafelist = projectContent.safelist || [];
  const safelist = [...rootSafelist, ...projectSafelist];

  return {
    ...rootTailwindConfig,
    ...tailwindConfig,
    content,
    safelist,
  };
};
