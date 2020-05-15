import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { firestorePlugin } from "vuefire";
import firebase from "firebase";

Vue.use(firestorePlugin);

Vue.config.productionTip = false;

// Initialize Firebase
// let firebaseConfig = {
//   apiKey: "AIzaSyDkjWH-DSlhmxn4CJsf0QW_3TLQ7w_Ohyw",
//   authDomain: "nutrisoft-b99ca.firebaseapp.com",
//   databaseURL: "https://nutrisoft-b99ca.firebaseio.com",
//   projectId: "nutrisoft-b99ca",
//   storageBucket: "nutrisoft-b99ca.appspot.com",
//   messagingSenderId: "860347785287",
//   appId: "1:860347785287:web:2669e6bb084fa40802d162",
//   measurementId: "G-H8M1SF2JVR",
// };

let firebaseConfig = {
  databaseURL: "https://nutrisoft-b99ca.firebaseio.com",
  projectId: "nutrisoft-b99ca",
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
