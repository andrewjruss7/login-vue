import { createApp } from 'vue';
import App from './App.vue';

import BootstrapVue3 from "bootstrap-vue-3";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App);

app.mount("#app")
app.use(BootstrapVue3)

import VueAxios from 'vue-axios'
import Axios from 'axios'

app.config.productionTip = false
app.use(VueAxios, Axios)


