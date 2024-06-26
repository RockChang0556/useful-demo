/*
 * @Author: Rock Chang
 * @Date: 2021-08-19 02:59:50
 * @LastEditTime: 2024-05-19 18:07:43
 * @Description: 整合所有路由
 */

import { RouteRecordRaw } from 'vue-router';
import { formatRoutes } from '@/utils/route';
import { cssRouteConf } from './route-css';
import { componentsRouteConf } from './route-components';
import { utilsRouteConf } from './route-utils';

const cssRoutes = formatRoutes(cssRouteConf);
const componentsRoutes = formatRoutes(componentsRouteConf);
const utilsRoutes = formatRoutes(utilsRouteConf);

export const allRouteConf = {
	css: cssRouteConf,
	components: componentsRouteConf,
	utils: utilsRouteConf,
};

export type TallRouteConf = keyof typeof allRouteConf;

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/home/home.vue'),
		redirect: { name: 'css-canvasTime' },
		children: [...cssRoutes, ...componentsRoutes, ...utilsRoutes],
	},
	{
		path: '/err',
		name: 'err',
		component: () => import('@/components/errpage/index.vue'),
		children: [
			{
				path: '403',
				name: '403',
				component: () => import('@/components/errpage/403.vue'),
			},
			{
				path: '404',
				name: '404',
				component: () => import('@/components/errpage/404.vue'),
			},
		],
	},
	{
		path: '/:pathMatch(.*)',
		redirect: '/err/404',
	},
];

export default routes;
