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


// ../././/// Firebase connection

import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire);


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAvv7O7kyq6AmPPAHV-4xNA5lgE8eQW36k",
    authDomain: "shafiee-laboratory-vue.firebaseapp.com",
    databaseURL: "https://shafiee-laboratory-vue.firebaseio.com",
    projectId: "shafiee-laboratory-vue",
    storageBucket: "shafiee-laboratory-vue.appspot.com",
    messagingSenderId: "1037007490240"
});
export const db = firebaseApp.firestore();

// /. end


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');


