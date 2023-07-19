<!--
 * @Author: Rock Chang
 * @Date: 2021-08-21 17:26:16
 * @LastEditTime: 2023-07-19 15:16:28
 * @Description:  
-->
<template>
	<div class="errpage-wrap">
		<global-header></global-header>
		<router-view></router-view>
	</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import GlobalHeader from '@/components/layout/header.vue';
</script>

<style lang="less">
.errpage-wrap {
	padding-top: 100px;
}
</style>
