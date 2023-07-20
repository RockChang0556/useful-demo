<!--
 * @Author: Rock Chang
 * @Date: 2021-08-21 18:25:13
 * @LastEditTime: 2023-07-19 19:26:20
 * @Description: 
-->

<template>
	<div class="errpage-404">
		<el-empty
			image="https://s2.loli.net/2022/01/04/mwxYngtCbjL8W2I.png"
			description="啊哦, 页面找不到了"
		>
			<router-link to="/">
				<el-button type="primary">回到首页</el-button>
			</router-link>
		</el-empty>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="less">
.el-empty__image {
	width: 400px;
	padding: 50px 0;
}
</style>
