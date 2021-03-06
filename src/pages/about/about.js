import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'
import About from './About.vue'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(About)
}).$mount('#app')