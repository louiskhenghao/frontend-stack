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
  loadLocaleFrom: (lang, ns) => {
    // You can use a dynamic import, fetch, whatever. You should
    // return a Promise with the JSON file.
    console.log('===================================== ---->', lang, ns);
    return import(
      `@frontend-stack/shared/assets/locales/${lang}/${ns}.json`
    ).then((m) => {
      return m.default;
    });
  },
};