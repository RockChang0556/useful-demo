<template>
	<div class="content">
		<v-md-preview
			:text="`
> canvas 粒子绘画
`"
		/>
		<div class="canvasTime">
			<h2>粒子绘画时钟</h2>
			<canvas ref="canvasRef"></canvas>
		</div>
		<div class="canvasTime">
			<h2>粒子绘画文字</h2>
			<div class="input">
				<el-input v-model="inputVal" @keyup.enter="draw"></el-input>
				<el-button @click="draw">生成</el-button>
			</div>
			<canvas ref="canvas2Ref"></canvas>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { Canvas } from '@/utils/canvas';

const canvasRef = ref<HTMLCanvasElement>();
const canvas2Ref = ref<HTMLCanvasElement>();
const canvas2 = ref<Canvas>();
const inputVal = ref<string>('');

const draw = () => {
	canvas2.value?.draw(() => inputVal.value);
};

/** 获取canvas要画的文字内容 */
const getText = () => {
	return new Date().toTimeString().substring(0, 8);
};

onMounted(() => {
	const canvas = new Canvas(canvasRef.value, {
		width: 500,
		height: 200,
		fontFamily: 'PCMyungjo',
	});
	canvas.draw(getText);

	canvas2.value = new Canvas(canvas2Ref.value, {
		width: 500,
		height: 200,
		fontFamily: 'PCMyungjo',
	});
});
</script>

<style lang="less" scoped>
.canvasTime {
	canvas {
		width: 500px;
		height: 200px;
	}
	.input {
		width: 300px;
		display: flex;
		align-items: center;
	}
}
</style>
