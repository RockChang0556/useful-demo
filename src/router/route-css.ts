/*
 * @Author: Rock Chang
 * @Date: 2021-08-19 02:35:15
 * @LastEditTime: 2024-05-22 22:17:14
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
		title: 'Canvas',
		type: 'folder',
		routeName: 'css-canvas',
		routePath: '/css/canvasTime',
		// icon: 'iconfont icon-tushuguanli',
		filePath: '',
		children: [
			{
				title: '粒子时钟',
				type: 'view',
				routeName: 'css-canvasTime',
				routePath: '/css/canvasTime',
				filePath: 'views/css/canvasTime.vue',
			},
			{
				title: '随机树',
				type: 'view',
				routeName: 'css-randomTree',
				routePath: '/css/randomTree',
				filePath: 'views/css/randomTree.vue',
			},
		],
	},
	{
		title: '奇淫技巧',
		type: 'folder',
		routeName: 'css-skills',
		filePath: '',
		children: [
			{
				title: '渐变阴影',
				type: 'view',
				routeName: 'css-gradientShadow',
				routePath: '/css/gradientShadow',
				filePath: 'views/css/gradientShadow.vue',
			},
		],
	},
	{
		title: '纯 CSS 实现动画',
		type: 'folder',
		routeName: 'css-cssAnimation',
		// routePath: '/css/canvasTime',
		filePath: '',
		children: [
			{
				title: '动画延迟实现复杂动画',
				type: 'view',
				routeName: 'css-delayAnimation',
				routePath: '/css/delayAnimation',
				filePath: 'views/css/delayAnimation.vue',
			},
			{
				title: '贝塞尔曲线实现复杂动画',
				type: 'view',
				routeName: 'css-bezier',
				routePath: '/css/bezier',
				filePath: 'views/css/bezier.vue',
			},
		],
	},
];
