import { createI18n, useI18n as usei18n, VueI18n } from 'vue-i18n';
import { type App } from 'vue';

// Import i18n resources
const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: any }>('../../locales/*.y(a)?ml', { eager: true }),
  ).map(([key, value]) => {
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

/**
 * Now you can use $t anywhere, just import this
 * {@link src/stores/app.ts#L18}
 * @example
  axios(...).then(e=>{
    alert( `${$t("msg.request",{state: $t("successed")})}` )
  }).catch(e=>{
    alert( `${$t("request")} $t("failed")` )
  })
 */
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
