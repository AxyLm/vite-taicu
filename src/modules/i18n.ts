import { createI18n, useI18n as usei18n, VueI18n } from 'vue-i18n';
import { type App } from 'vue';

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import

// find & load messages
const messages = Object.fromEntries(
  Object.entries(import.meta.globEager('../../locales/*.y(a)?ml')).map(([key, value]) => {
    const yaml = key.endsWith('.yaml');
    return [key.slice(14, yaml ? -5 : -4), value.default];
  }),
);

// create i18n instance
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export const $t = i18n.global.t;

// i18n composables
export function useI18n() {
  const { availableLocales, locale: currentLocal } = usei18n();

  return Object.assign(usei18n(), {
    // extend function

    /**
     * toggle current lang
     * @param locale
     */
    toggleLocale: (locale?: string) => {
      const locales = availableLocales;
      currentLocal.value =
        locale || locales[(locales.indexOf(currentLocal.value) + 1) % locales.length];
    },

    /**
     * set current lang
     * @param locale
     */
    changeLocale: (locale: string) => {
      currentLocal.value = locale;
    },
  });
}

export const install = (app: App<Element>) => {
  app.config.globalProperties.$t = $t;
  app.use(i18n);
};
