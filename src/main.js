import Vue from 'vue'
import App from './App.vue'
import store from './store/index';
import stealImgArr from './imgPreloaderList';
import { imgsPreloader } from './imgPreloader';

Vue.config.productionTip = false;
(async () => {
  await imgsPreloader(stealImgArr);
  new Vue({
    store,
    render: h => h(App),
  }).$mount('#app')
})();
