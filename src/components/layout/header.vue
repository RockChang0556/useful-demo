<!--
 * @Author: Rock Chang
 * @Date: 2021-08-05 14:50:24
 * @LastEditTime: 2023-07-20 12:07:55
 * @Description: 布局组件 - 头部
-->
<template>
	<div class="global-header">
		<router-link class="header-logo" to="/">
			<img src="/logo.png" alt="logo" />
		</router-link>

		<div class="header-menu">
			<router-link
				v-for="v in headerMenu"
				:key="v.name"
				:to="v.path"
				:class="{ active: routeType === v.name }"
			>
				{{ v.name }}
			</router-link>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { headerMenu } from '@/constants/layout';
import { TallRouteConf } from '@/router/routes';
import { useRoute } from 'vue-router';
const route = useRoute();

const routeType = computed(() => {
	return route.name?.toString().split('-')[0] as TallRouteConf;
});
</script>

<style lang="less">
.global-header {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 1999;
	height: 70px;
	line-height: 70px;
	padding: 8px 2rem;
	background-color: white;
	border-top: 4px solid mix(purple, white);
	display: flex;
	justify-content: space-between;
	align-items: center;
	.header-logo {
		height: 50px;
		img {
			height: 100%;
		}
	}
	.header-menu {
		a {
			color: #000;
			font-size: 20px;
			padding: 10px;
			&.active {
				color: blue;
			}
		}
	}
}
</style>
