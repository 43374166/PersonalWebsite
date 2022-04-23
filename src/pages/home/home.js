import Vue from 'vue'
import App from './Home.vue'
import router from './childcomps/router';

import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

// 引入Element Ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')