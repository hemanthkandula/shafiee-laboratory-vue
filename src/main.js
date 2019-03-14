import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'


import Vuetify from 'vuetify'

Vue.use(Vuetify);

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)



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




import VueScrollProgressBar from 'vue-scroll-progressbar'

Vue.use(VueScrollProgressBar)

// /. end
// import VueParticles from 'vue-particles'
// Vue.use(VueParticles)


import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)












Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');


