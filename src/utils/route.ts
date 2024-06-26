/*
 * @Author: Rock Chang
 * @Date: 2021-08-19 14:22:35
 * @LastEditTime: 2024-05-22 23:48:16
 * @Description: 根据配置文件生成路由
 */

import { RouteRecordRaw } from 'vue-router';

// 引入所有views下.vue文件
const modules = import.meta.glob('../views/**/**.vue');
/**
 * 深度遍历配置树, 摘取叶子节点作为路由部分
 * @param {*} config 配置项
 * @param {*} fuc 回调函数
 */
function deepTravel(config: any, fuc: any) {
	if (Array.isArray(config)) {
		config.forEach(subConfig => {
			deepTravel(subConfig, fuc);
		});
	} else if (config.children?.length) {
		config.children.forEach((subConfig: any) => {
			deepTravel(subConfig, fuc);
		});
	} else {
		fuc(config);
	}
}

/** 将路由配置文件转成路由格式
 * @param {any} configs
 * @return {*}
 */
export function formatRoutes(configs: any): RouteRecordRaw[] {
	let routes: any = [];
	/**
	 * 构造舞台view路由
	 */
	deepTravel(configs, (viewConfig: any) => {
		const viewRouter: any = {};

		viewRouter.path = viewConfig.routePath;
		viewRouter.name = viewConfig.routeName;
		// webpack写法, 开发模式OK, 生产模式GG
		// viewRouter.component = () => import(`../${viewConfig.filePath}`);
		viewRouter.component = modules[`../${viewConfig.filePath}`];
		viewRouter.meta = {
			title: viewConfig.title,
			icon: viewConfig.icon,
			admin: viewConfig.admin,
			type: viewConfig.type,
		};
		routes.push(viewRouter);
	});

	return routes;
}
