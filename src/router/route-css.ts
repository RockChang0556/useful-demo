/*
 * @Author: Rock Chang
 * @Date: 2021-08-19 02:35:15
 * @LastEditTime: 2023-07-19 16:43:01
 * @Description: CSS 相关路由配置文件
 */

export const cssRouteConf = [
	{
		title: 'css 2',
		type: 'view', // 菜单类别 folder-文件夹 view-菜单项
		routeName: 'css-css2',
		routePath: '/css/css2',
		filePath: 'views/css/css2.vue',
		icon: 'iconfont icon-tushuguanli',
	},
	{
		title: 'css3',
		type: 'folder',
		routeName: 'css-css2',
		routePath: '/css/css2',
		filePath: 'views/css/',
		icon: 'iconfont icon-tushuguanli',
		children: [
			{
				title: '用户列表',
				type: 'view',
				routeName: 'css-css3',
				routePath: '/css/css3',
				filePath: 'views/css/css3.vue',
				icon: 'iconfont icon-tushuguanli',
			},
			{
				title: '用户列表2',
				type: 'view',
				routeName: 'css-css4',
				routePath: '/css/css4',
				filePath: 'views/css/css4.vue',
				icon: 'iconfont icon-tushuguanli',
			},
		],
	},
];
