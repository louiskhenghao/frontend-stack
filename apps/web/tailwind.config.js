const { appRootPath } = require('@nrwl/tao/src/utils/app-root');
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const createTailwindConfig = require(`${appRootPath}/tools/config/tailwind`);

// create & extend tailwind config
module.exports = createTailwindConfig({
  content: [
    ...createGlobPatternsForDependencies(__dirname),
    `${appRootPath}/apps/web/src/components/**/*.{js,ts,jsx,tsx}`,
    `${appRootPath}/apps/web/src/containers/**/*.{js,ts,jsx,tsx}`,
    `${appRootPath}/apps/web/src/pages/**/*.{js,ts,jsx,tsx}`,
    `${appRootPath}/apps/web/src/screens/**/*.{js,ts,jsx,tsx}`,
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
});
