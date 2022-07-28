import { createPinia } from 'pinia';
import { router } from './route';
import { createApp } from 'vue';
import App from './App.vue';
import './style/index.less';
import 'tailwindcss/tailwind.css';

const app = createApp(App);

Object.values(import.meta.globEager('./modules/*.ts')).forEach((i) => i.install?.(app));

app.use(createPinia);
app.use(router);

app.mount('#app');
