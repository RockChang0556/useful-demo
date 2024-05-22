<!--
 * @Author: Rock Chang
 * @Date: 2021-08-19 17:35:11
 * @LastEditTime: 2024-05-22 23:49:08
 * @Description: 左边菜单
-->

<template>
	<el-menu
		ref="meun"
		class="el-menu-vertical-demo"
		:default-active="defaultActive"
		:collapse="isCollapse"
	>
		<menu-tree
			v-for="item in sideList"
			:key="item.routeName"
			:item="item"
		></menu-tree>
	</el-menu>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { allRouteConf, TallRouteConf } from '@/router/routes';
import MenuTree from './menu-tree.vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const defaultActive = computed(() => route.name);

const sideList: any = computed(() => {
	const type = route.name?.toString().split('-')[0] as TallRouteConf;
	if (type) {
		return allRouteConf[type];
	} else {
		return [];
	}
});

const isCollapse = ref(false);
</script>

<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: calc(100vh - 70px);
}
</style>
