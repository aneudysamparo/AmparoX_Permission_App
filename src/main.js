import Vue from 'vue'
import App from './App.vue'
import router from './router/index'


import AppPlugin from './plugins/AppPlugin'

Vue.config.productionTip = false

Vue.use(require('vue-moment'));
Vue.use(AppPlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
