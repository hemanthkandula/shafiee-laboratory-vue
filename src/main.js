import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'


import Vuetify from 'vuetify'

Vue.use(Vuetify);

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)




// import Vuesax from 'vuesax'
// import 'vuesax/dist/vuesax.css' //Vuesax styles
// Vue.use(Vuesax);


// import 'material-icons/iconfont/material-icons.css';
//
import './assets/css/custom.css';
// import './assets/css/hexagons.css'
//
// import './assets/css/hexagonrotated.css'


import VueFirestore from 'vue-firestore';
import * as VueGoogleMaps from 'vue2-google-maps'


Vue.use(VueFirestore);


// import VueMouseParallax from 'vue-mouse-parallax'
//
// Vue.use(VueMouseParallax)




// import VueScrollProgressBar from 'vue-scroll-progressbar'
//
// Vue.use(VueScrollProgressBar)

// /. end
// import VueParticles from 'vue-particles'
// Vue.use(VueParticles)


// import axios from 'axios'
// import VueAxios from 'vue-axios'
//
// Vue.use(VueAxios, axios)


import VirtualScrollList from 'vue-virtual-scroll-list'
Vue.component('virtual-list', VirtualScrollList)


import VueAnalytics from 'vue-analytics'


Vue.use(VueAnalytics, {
  id: 'UA-62243676-1',
  router
})


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCqUbyusY50sbz0XPdhKbahXLZjA2TukIk',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  }})




Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');


Vue.config.performance = true
