import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.fallbacks = true;
i18n.translations = {
  cn: {
    common: require('@frontend-stack/shared/assets/locales/cn/common.json'),
    screen: require('@frontend-stack/shared/assets/locales/cn/screen.json'),
  },
  en: {
    common: require('@frontend-stack/shared/assets/locales/en/common.json'),
    screen: require('@frontend-stack/shared/assets/locales/en/screen.json'),
  },
};
i18n.locale = Localization.locale || 'en';
