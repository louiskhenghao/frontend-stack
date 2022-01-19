import i18n from 'i18n-js';
import { useState } from 'react';

/**
 * Get translated string by prividing locale key
 *
 * @param key The i18n key.
 */
export const translate = (
  key: string,
  options?: I18n.TranslateOptions
): string => {
  return i18n.t(key, options);
};

/**
 * Set locale into global i18n instance
 *
 * @param locale - name of locale (en, cn, etc)
 */
export const setLanguage = (locale: string) => {
  i18n.locale = locale ?? 'en';
};

/**
 * Only use this hooks within functional component
 *
 * @param screen - locale file name
 * @returns translated string
 *
 */
export const useTranslation = (
  screen = 'common'
): {
  lang: string;
  t: (key: string, options?: I18n.TranslateOptions) => string;
  setLanguage: (locale: string) => void;
} => {
  const [lang, setLang] = useState(i18n.locale || 'en');
  return {
    lang,
    t: (key: string, options?: I18n.TranslateOptions): string => {
      const spliting = key.split(':');
      const hasSplit = spliting.length > 1 && spliting.length <= 2;
      const screenKey = hasSplit ? spliting[0] : screen;
      const readKey = hasSplit ? spliting[1] : spliting[0];

      return i18n.t(`${screenKey}.${readKey}`, {
        locale: lang,
        ...(options ?? {}),
      });
    },
    setLanguage: (locale: string): void => {
      setLanguage(locale);
      setLang(locale);
    },
  };
};
