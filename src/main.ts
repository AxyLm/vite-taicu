import { createApp } from 'vue';
import App from './app.vue';
import 'tailwindcss/tailwind.css';
import './style/index.less';

const app = createApp(App);

Object.values(import.meta.glob<AppModule>('./modules/*.ts', { eager: true })).forEach((i) =>
  i.install(app),
);

app.mount('#app');
