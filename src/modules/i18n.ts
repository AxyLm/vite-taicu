import { createI18n } from 'vue-i18n';
import { type App } from 'vue';

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import

const messages = Object.fromEntries(
  Object.entries(import.meta.globEager('../../locales/*.y(a)?ml')).map(([key, value]) => {
    const yaml = key.endsWith('.yaml');
    return [key.slice(14, yaml ? -5 : -4), value.default];
  }),
);

export const install = (app: App<Element>) => {
  const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages,
  });

  app.config.globalProperties.$t = i18n.global.t;
  app.use(i18n);
};
