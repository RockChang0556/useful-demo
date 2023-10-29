import { createApp } from 'vue';
import router from './router';
import './style.css';
import App from './App.vue';
import Rui from '@/components/global'; // 自定义全局组件

/** md预览组件 https://code-farmer-i.github.io/vue-markdown-editor/zh/examples/preview-demo.html */
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// 引入你所使用的主题 此处以 github 主题为例
import githubTheme from '@kangc/v-md-editor/lib/theme/github';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import createTipPlugin from '@kangc/v-md-editor/lib/plugins/tip/index';
import '@kangc/v-md-editor/lib/plugins/tip/tip.css';
VMdPreview.use(githubTheme).use(createTipPlugin());

const app = createApp(App);
app.use(Rui);
app.use(VMdPreview);
app.use(router).mount('#app');
