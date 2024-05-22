<!--
 * @Author: Zhang Peng
 * @Date: 2024-05-22 22:15:03
 * @LastEditTime: 2024-05-22 22:45:59
 * @Description: 随机树
-->
<template>
	<div class="defaults">
		<v-md-preview
			:text="`
> Canvas随机树
`"
		/>
		<el-button @click="reDraw">重新生成</el-button>
		<canvas ref="canvasRef"></canvas>
	</div>
</template>

<script lang="ts" setup>
import { ref, onMounted, Ref } from 'vue';
const canvasRef = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;

onMounted(() => {
	canvasRef.value && draw(canvasRef.value);
});

const reDraw = () => {
	if (!ctx || !canvasRef.value) {
		return;
	}
	ctx.clearRect(0, 0, canvasRef.value?.width, canvasRef.value?.height);
	draw(canvasRef.value);
};

function draw(canvas: HTMLCanvasElement) {
	ctx = canvas.getContext('2d');
	if (!ctx) {
		return;
	}
	canvas.width = 400 * devicePixelRatio;
	canvas.height = 300 * devicePixelRatio;
	// 移动原点到下中
	ctx.translate(canvas.width / 2, canvas.height);
	// 调转 y 轴
	ctx.scale(1, -1);
	drawBranch([0, 0], 160, 30, 90);
}

/** 画树枝 */
function drawBranch(
	v0: [number, number], // 起点坐标
	len: number, // 长度
	thick: number, // 粗细
	angle: number // 角度
) {
	if (!ctx) {
		return;
	}

	// 树枝粗细 < 14, 有几率不往下长了
	if (thick < 14 && Math.random() < 0.2) {
		return;
	}

	// 树枝粗细不够, 结束递归
	if (thick < 2) {
		// 画一个圆
		ctx.beginPath();
		ctx.arc(...v0, 10, 0, 2 * Math.PI);
		ctx.fillStyle = '#f00';
		ctx.fill();
		ctx.closePath();
		return;
	}

	// 画树枝
	ctx.beginPath();
	ctx.moveTo(...v0);
	const v1: [number, number] = [
		v0[0] + len * Math.cos((angle * Math.PI) / 180),
		v0[1] + len * Math.sin((angle * Math.PI) / 180),
	];
	ctx.lineTo(...v1);
	ctx.strokeStyle = '#000';
	ctx.lineWidth = thick;
	ctx.lineCap = 'round';
	ctx.stroke();

	// 画左
	drawBranch(v1, len * 0.75, thick * 0.6, angle - 20);
	// 画右
	drawBranch(v1, len * 0.75, thick * 0.6, angle + 20);
}
</script>

<style lang="less"></style>
