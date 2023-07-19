/*
 * @Author: Rock Chang
 * @Date: 2021-08-05 11:34:59
 * @LastEditTime: 2021-12-31 16:43:55
 * @Description: 路由
 */
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
	history: createWebHistory(import.meta.env.VITE_BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	// 路由发生变化修改页面title
	if (to.meta.title) {
		document.title = `${to.meta.title} | 鹏`;
	}

	next();
});

export default router;
