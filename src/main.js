import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'


import Vuetify from 'vuetify'

Vue.use(Vuetify);

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader


import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax);


import 'material-icons/iconfont/material-icons.css';

import './assets/css/custom.css';
import './assets/css/hexagons.css'

import './assets/css/hexagonrotated.css'


import VueFirestore from 'vue-firestore';


Vue.use(VueFirestore);


import VueMouseParallax from 'vue-mouse-parallax'

Vue.use(VueMouseParallax)


// /. end
// import VueParticles from 'vue-particles'
// Vue.use(VueParticles)










Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');


