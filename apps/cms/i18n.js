/**
 * For more information please refer to documentation
 * https://github.com/vinissimus/next-translate#add-i18njs-config-file
 */

module.exports = {
  locales: ['en', 'cn'],
  defaultLocale: 'en',
  pages: {
    '*': ['common', 'screen'],
  },
  // loadLocaleFrom: (lang, ns) =>
  //   import(
  //     `${process.cwd()}/libs/shared/assets/src/locales/${lang}/${ns}.json`
  //   ).then((m) => m.default),
};
