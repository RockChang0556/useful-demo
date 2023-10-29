/*
 * @Author: Rock Chang
 * @Date: 2021-08-19 02:35:15
 * @LastEditTime: 2023-10-30 00:01:32
 * @Description: CSS 相关路由配置文件
 * 
 * 	title: 'css 1', // 标题
		type: 'view', // 菜单类别 folder-文件夹 view-菜单项
		routeName: 'css-home', // 同 routername, 注意-分隔的第一个单词是菜单 name
		routePath: '/css',
		filePath: 'views/css/index.vue',
		icon: 'iconfont icon-tushuguanli',
 */

export const cssRouteConf = [
	{
		title: '利用延迟实现复杂动画',
		type: 'view',
		routeName: 'css-delayAnimation',
		routePath: '/css',
		filePath: 'views/css/delayAnimation.vue',
		icon: 'iconfont icon-tushuguanli',
	},
	{
		title: 'Canvas',
		type: 'folder',
		routeName: 'css-canvas',
		routePath: '/css/canvasTime',
		filePath: '',
		icon: 'iconfont icon-tushuguanli',
		children: [
			{
				title: 'Canvas粒子时钟',
				type: 'view',
				routeName: 'css-canvasTime',
				routePath: '/css/canvasTime',
				filePath: 'views/css/canvasTime.vue',
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
