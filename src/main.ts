import { createApp } from 'vue';
import App from './app.vue';
import 'tailwindcss/tailwind.css';
import './style/index.less';

const app = createApp(App);

Object.values(import.meta.globEager('./modules/*.ts')).forEach((i) => i.install?.(app));

app.mount('#app');
