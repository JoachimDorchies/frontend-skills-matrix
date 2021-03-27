import Vue from 'vue';

import store from './stores/index';
import router from './router';
import vuetify from './plugins/vuetify';

import App from './App.vue';

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
});

app.$mount('#app');

window.app = app;
