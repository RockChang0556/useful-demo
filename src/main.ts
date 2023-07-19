import { createApp } from 'vue'
import router from './router';
import './style.css'
import App from './App.vue'
import Rui from '@/components/global'; // 自定义全局组件

const app = createApp(App);
app.use(Rui);
app.use(router).mount('#app');
