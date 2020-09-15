import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';



import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-vue/dist/bootstrap-vue.css';
import "@/assets/sass/app.scss";


export default {
    install(Vue) {
      Vue.use(BootstrapVue);
      Vue.use(IconsPlugin);
    }
  };