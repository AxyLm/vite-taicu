import { useI18n as i18n } from 'vue-i18n';

export function useI18n() {
  const { availableLocales, locale: currentLocal } = i18n();

  return {
    toggleLocale: (locale?: string) => {
      // change to some real logic
      const locales = availableLocales;
      currentLocal.value =
        locale || locales[(locales.indexOf(currentLocal.value) + 1) % locales.length];
    },
    changeLocale: (locale: string) => {
      currentLocal.value = locale;
    },
    ...i18n(),
  };
}
