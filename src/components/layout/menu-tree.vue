<!--
 * @Author: Rock Chang
 * @Date: 2021-08-19 17:43:53
 * @LastEditTime: 2024-05-19 18:13:30
 * @Description: 左边菜单 -菜单树组件, 递归调用自己
-->

<template>
	<el-sub-menu
		v-if="item.children && item.children?.length > 0"
		:index="item.routeName"
	>
		<template #title>
			<i v-if="!filterIcon(item.icon)" :class="item.icon"></i>
			<img v-else :src="item.icon" class="img-icon" />
			<span>{{ item.title }}</span>
		</template>
		<menu-tree
			v-for="child in item.children"
			:key="child.routePath"
			:item="child"
		/>
	</el-sub-menu>

	<el-menu-item
		v-else
		:index="item.routeName"
		@click="navigateTo(item.routeName)"
	>
		<i v-if="!filterIcon(item.icon)" :class="item.icon"></i>
		<img v-else :src="item.icon" class="img-icon" />
		<template #title>
			<span class="title">{{ item.title }}</span>
		</template>
	</el-menu-item>
</template>

<script lang="ts" setup>
import { IRouteConf } from '@/types/type';
import { useRouter } from 'vue-router';

defineProps<{
	item: IRouteConf;
}>();

const router = useRouter();
const navigateTo = (path: string) => {
	router.push({ name: path });
};
const filterIcon = (icon?: string) => {
	return icon?.indexOf('/') !== -1;
};
</script>

<script lang="ts">
export default {
	name: 'menu-tree',
};
</script>

<style lang="less"></style>
