
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import "@/assets/font/font.css";
import { createApp} from 'vue'
import App from './App.vue'
import axios from 'axios';
import router from './router/index.ts'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

const baseURL = 'http://127.0.0.1:8000'
app.provide('baseURL',baseURL)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

