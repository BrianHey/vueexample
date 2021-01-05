import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;



import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCMeeIaynz9z2YuxyawDqOIQC7cr17M9mE",
  authDomain: "apirest-808ed.firebaseapp.com",
  databaseURL: "https://apirest-808ed.firebaseio.com",
  projectId: "apirest-808ed",
  storageBucket: "apirest-808ed.appspot.com",
  messagingSenderId: "524805307070",
  appId: "1:524805307070:web:a510ee49feddfef0013cef"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




new Vue({
  render: (h) => h(App),
}).$mount("#app");
