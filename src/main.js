// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import qs from 'qs'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import Vant from 'vant';
import { Lazyload } from 'vant';
import 'vant/lib/index.css';
import animated from 'animate.css'
import base from '@/assets/js/base.js'
import company from '@/assets/js/company.js'
import vueWaterfallEasy from 'vue-waterfall-easy'
import './styles/index.less'
Vue.prototype.company = company
Vue.prototype.base = base


Vue.prototype.qs = qs
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.use(Mint);
Vue.use(Vant);
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
