import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// App.use(VueAxios, axios)

createApp(App).mount('#app')
App.use(Antd)

// const app = createApp();
// app.config.productionTip = false;
