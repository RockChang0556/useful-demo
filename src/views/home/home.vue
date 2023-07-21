<template>
	<div class="home">
		<el-container>
			<global-header></global-header>
			<el-container>
				<el-aside width="200px"><sidebar></sidebar></el-aside>
				<el-main>
					<router-view v-slot="{ Component }">
						<transition name="fade-slide" mode="out-in">
							<component :is="Component" />
						</transition> </router-view
				></el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts" setup>
import GlobalHeader from '@/components/layout/header.vue';
import Sidebar from '@/components/layout/sidebar.vue';
</script>

<style lang="less">
.home {
	padding-top: 70px;
	.el-main {
		width: 100%;
		overflow-x: hidden;
	}
}

/* router view transition fade-slide */
.fade-slide-leave-active,
.fade-slide-enter-active {
	transition: all 0.3s;
}

.fade-slide-enter-from {
	opacity: 0;
	transform: translateX(-30px);
}

.fade-slide-leave-to {
	opacity: 0;
	transform: translateX(30px);
}
</style>
