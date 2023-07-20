<template>
	<div class="home">
		<global-header></global-header>
		<sidebar></sidebar>
		<router-view v-slot="{ Component }">
			<transition name="el-fade-in-linear">
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
</template>

<script lang="ts" setup>
import GlobalHeader from '@/components/layout/header.vue';
import Sidebar from '@/components/layout/sidebar.vue';
</script>

<style lang="less">
.home {
	padding-top: 70px;
}
</style>
