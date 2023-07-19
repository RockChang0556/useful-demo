<!--
 * @Author: Rock Chang
 * @Date: 2021-08-05 14:50:24
 * @LastEditTime: 2023-07-19 15:17:55
 * @Description: 布局组件 - 头部
-->
<template>
	<div class="global-header">
		<router-link class="header-logo" to="/">
			<img src="/logo.png" alt="logo" />
		</router-link>
	</div>
</template>

<script lang="ts" setup>
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
	.el-button span {
		letter-spacing: 5px;
		padding-left: 4px;
	}
	.el-dropdown {
		min-width: 80px;
		padding: 5px 0;
		.el-dropdown-link {
			float: right;
			cursor: pointer;
			display: flex;
			align-items: flex-end;
			line-height: 26px;
			.el-icon-arrow-down {
				line-height: inherit;
			}
			.el-avatar {
				margin-right: 5px;
			}
		}
	}
}

// element
.header-user-dropdown {
	a {
		color: var(--el-text-color-regular);
		&:hover {
			background-color: var(--el-dropdown-menuItem-hover-fill);
			color: var(--el-dropdown-menuItem-hover-color);
		}
	}
}
</style>
