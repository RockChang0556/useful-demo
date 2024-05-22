export interface IRouteConf {
	title: string;
	type: string;
	routeName: string;
	routePath: string;
	filePath: string;
	icon?: string;
	children?: IRouteConf[];
}
