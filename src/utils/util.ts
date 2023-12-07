/*
 * @Author: Rock Chang
 * @Date: 2021-08-10 09:34:39
 * @LastEditTime: 2023-10-30 23:54:09
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
