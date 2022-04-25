import Vue from 'vue'
import router from './router/index.js'
import VueCropper from 'vue-cropper'
Vue.use(VueCropper)
import PersonalCenter from './PersonalCenter.vue'
// import router from './childcomps/router';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(PersonalCenter)
}).$mount('#app')