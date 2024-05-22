/*
 * @Author: Rock Chang
 * @Date: 2021-08-10 09:34:39
 * @LastEditTime: 2024-05-19 17:51:28
 * @Description: 工具类方法
 */

/**
 * @description: 根据 key 获取 url 中的值
 * @param {string} key 要获取值的 key
 * @param {string} url
 * @return {string}
 */
export const getQueryString = (key: string, url = location.search) => {
	const urlSP = new URLSearchParams(url);
	return urlSP.get(key);
};

/**
 * @description: 获取区间内的随机数
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @return {number}
 */
export const getRandom = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * 生成随机字符串
 * @param {number} length 生成的字符串长度， 默认 10
 * @return {string} result 随机字符串
 */
export function randomString(length = 10): string {
	const chars =
		'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let result = '';
	for (let i = length; i > 0; --i)
		result += chars[Math.floor(Math.random() * chars.length)];
	return result;
}

/**
 * 获取数据的类型
 * @param {unknown} x
 * @return {string}
 */
export function getType(x: unknown): string {
	return Object.prototype.toString.call(x).slice(8, -1);
}

/**
 * parse json
 * @param {string} val 要 parse 的 json
 * @param {*} defaults parse 失败的默认值
 * @return {*}
 */
export const parseJSON = function (str: string, defaults = []) {
	let val: any = str || '';
	if (!val) return defaults;
	if (val?.indexOf('{') > -1 || val?.indexOf('[') > -1) {
		try {
			val = JSON.parse(val);
		} catch (error) {
			val = defaults;
		}
	}
	return val;
};
