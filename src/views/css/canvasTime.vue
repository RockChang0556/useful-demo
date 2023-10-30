<template>
	<div class="content">
		<v-md-preview
			:text="`
> 通过进度条控制动画时间轴, 来改变动画位置, 从而实现动画随着进度条改变的效果
`"
		/>
		<div class="canvasTime">
			<canvas ref="canvasRef"></canvas>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { getRandom } from '@/utils/util';

/** 粒子 */
class Particle {
	x: number;
	y: number;
	size: number;
	ctx: CanvasRenderingContext2D | null | undefined;
	constructor() {
		this.initCanvasSize();

		this.ctx = canvasRef.value?.getContext('2d', {
			willReadFrequently: true,
		});

		this.size = getRandom(
			10 * window.devicePixelRatio,
			20 * window.devicePixelRatio
		); // 粒子半径

		const cr = Math.min(canvasRef.value?.width, canvasRef.value?.height) / 2; // 粒子绘画圆圈半径
		const crad = (getRandom(0, 360) * Math.PI) / 180; // 粒子绘画圆圈随机角度
		const cx = canvasRef.value?.width / 2; // 粒子绘画圆圈圆心 x 坐标
		const cy = canvasRef.value?.height / 2; // 粒子绘画圆圈圆心 y 坐标
		this.x = cx + cr * Math.cos(crad); // 粒子 x 坐标
		this.y = cy + cr * Math.sin(crad); // 粒子 y 坐标
	}

	initCanvasSize() {
		if (!canvasRef.value) return;
		canvasRef.value.width = window.innerWidth * window.devicePixelRatio;
		canvasRef.value.height = window.innerHeight * window.devicePixelRatio;
	}

	draw() {
		if (!this.ctx) return;
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		this.ctx.fillStyle = '#ccc';
		this.ctx.fill();
	}
}
const canvasRef = ref<HTMLCanvasElement>();

onMounted(() => {
	console.log('[ rock- ]', canvasRef);
	// const ctx = canvasRef.value?.getContext('2d', {
	// 	willReadFrequently: true,
	// });

	const p = new Particle();
	p.draw();
});

const draw = () => {};
</script>

<style lang="less" scoped>
.canvasTime {
}
</style>
