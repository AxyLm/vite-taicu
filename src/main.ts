import { createPinia } from "pinia";
import { router } from "./route";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.less";
import "tailwindcss/tailwind.css";

/*
 * The i18n resources in the path specified in the plugin `include` option can be read
 * as vue-i18n optimized locale messages using the import syntax
 */
// import en from "../locales/en.json";
// import zh from "../locales/zh.yml";

// const i18n = createI18n({
// 	locale: "en",
// 	messages: {
// 		en,
// 		zh,
// 	},
// });

/*
 * All i18n resources specified in the plugin `include` option can be loaded
 * at once using the import syntax
 */

const app = createApp(App);

Object.values(import.meta.globEager("./modules/*.ts")).forEach((i) => i.install?.(app));

app.use(createPinia);
app.use(router);

app.mount("#app");
