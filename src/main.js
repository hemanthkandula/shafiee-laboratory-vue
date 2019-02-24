import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'


import Vuetify from 'vuetify'

Vue.use(Vuetify)

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader


import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax)


import 'material-icons/iconfont/material-icons.css';

import './assets/css/custom.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');


