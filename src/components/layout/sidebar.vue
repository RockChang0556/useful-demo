<!--
 * @Author: Rock Chang
 * @Date: 2021-08-19 17:35:11
 * @LastEditTime: 2023-07-20 11:33:21
 * @Description: 左边菜单
-->

<template>
	<div class="layout-sidebar">
		<el-menu
			ref="meun"
			class="el-menu-vertical-demo"
			:default-active="defaultActive"
			:collapse="false"
		>
			<menu-tree
				v-for="item in sideList"
				:key="item.filePath"
				:item="item"
			></menu-tree>
		</el-menu>
	</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { allRouteConf, TallRouteConf } from '@/router/routes';
import MenuTree from './menu-tree.vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const defaultActive = computed(() => route.path);

const sideList = computed(() => {
	const type = route.name?.toString().split('-')[0] as TallRouteConf;
	if (type) {
		return allRouteConf[type];
	} else {
		return [];
	}
});
console.log('[ defaultActive ]', sideList);

// const sideList = ref();
// export default defineComponent({
// 	name: 'layout-sidebar',
// 	components: { MenuTree },
// 	props: {},
// 	setup() {
// 		const store = useStore();
// 		// 当前选中
// 		// 菜单树
// 		const sideList = computed(() => store.getters['route/sideList']);
// 		return { sideList, defaultActive };
// 	},
// });
</script>

<style lang="less"></style>
