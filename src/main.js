import Vue from 'vue';
import VueCesium from 'vue-cesium';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueCesium);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
