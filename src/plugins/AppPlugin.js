import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueSweetalert2 from 'vue-sweetalert2';
import Toasted from 'vue-toasted';


import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'sweetalert2/dist/sweetalert2.min.css';

import "@/assets/sass/app.scss";


export default {
    install(Vue) {
      Vue.use(BootstrapVue);
      Vue.use(IconsPlugin);
      Vue.use(VueSweetalert2);
      Vue.use(Toasted, {
        position: 'bottom-right',
        duration: 1500,
        closeOnSwipe: true
      });
    }
  };