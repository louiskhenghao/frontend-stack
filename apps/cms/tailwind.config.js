const { appRootPath } = require('@nrwl/tao/src/utils/app-root');
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const createTailwindConfig = require(`${appRootPath}/tools/config/tailwind`);

// create & extend tailwind config
module.exports = createTailwindConfig({
  content: [
    ...createGlobPatternsForDependencies(__dirname),
    `${appRootPath}/apps/cms/src/components/**/*.{js,ts,jsx,tsx}`,
    `${appRootPath}/apps/cms/src/containers/**/*.{js,ts,jsx,tsx}`,
    `${appRootPath}/apps/cms/src/pages/**/*.{js,ts,jsx,tsx}`,
    `${appRootPath}/apps/cms/src/screens/**/*.{js,ts,jsx,tsx}`,
  ],
});
