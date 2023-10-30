<template>
	<div class="content">
		<v-md-preview
			:text="`
> 通过进度条控制动画时间轴, 来改变动画位置, 从而实现动画随着进度条改变的效果
`"
		/>
		<div class="canvasTime" ref="canvasRef">css2</div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const canvasRef = ref<HTMLDivElement>();

onMounted(() => {
	console.log('[ rock- ]', canvasRef);
});
</script>

<style lang="less" scoped>
.canvasTime {
}
</style>
