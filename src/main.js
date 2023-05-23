import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store';
import "@/assets/common/css/_common.scss"
import "@/assets/common/css/_layout.scss"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/js/reset.js"
Vue.use(ElementUI);
import Vant from 'vant';
import 'vant/lib/index.css';
import VueLuckyCanvas from '@lucky-canvas/vue'
Vue.use(VueLuckyCanvas)
Vue.use(Vant)
Vue.config.productionTip = false;
Vue.prototype.$EventBus = new Vue();

Vue.use(store)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

