import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './styles/global.scss';
/*
  The global style import is not in "vite.config.js" because 
  the his scope there doesn't include the body;

  Also, the import of variables is not here for lack of compatibility.
*/

const app = createApp(App);

app.use(router).use(store);

app.mount('#app');
