<template>
	<div class="home">
		sider
		<router-view v-slot="{ Component }">
    <transition name="el-fade-in-linear">
      <component :is="Component" />
    </transition> 
  </router-view> 
	</div>
</template>

<script lang="ts" setup>
</script>

<style lang="less">
</style>
