<template>
	<div class="content">
		<v-md-preview
			:text="`
> canvas 粒子绘画指定文字
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
	x: number = 0;
	y: number = 0;
	size: number = 0;
	ctx: CanvasRenderingContext2D | undefined;
	constructor(ctx: CanvasRenderingContext2D) {
		if (!canvasRef.value) return;

		this.ctx = ctx;
		this.size = getRandom(
			2 * window.devicePixelRatio,
			4 * window.devicePixelRatio
		); // 粒子半径

		const cr = Math.min(canvasRef.value.width, canvasRef.value.height) / 2; // 粒子绘画圆圈半径
		const crad = (getRandom(0, 360) * Math.PI) / 180; // 粒子绘画圆圈随机角度
		const cx = canvasRef.value.width / 2; // 粒子绘画圆圈圆心 x 坐标
		const cy = canvasRef.value.height / 2; // 粒子绘画圆圈圆心 y 坐标
		this.x = cx + cr * Math.cos(crad); // 粒子 x 坐标
		this.y = cy + cr * Math.sin(crad); // 粒子 y 坐标
		// this.x = cx;
		// this.y = cy;
	}

	/** 绘画 */
	draw() {
		if (!this.ctx) return;
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		this.ctx.fillStyle = '#ccc';
		this.ctx.fill();
	}

	/** 移动粒子 */
	moveTo(targetX: number, targetY: number) {
		// 这种方式没有动画
		// this.x = targetX;
		// this.y = targetY;

		// 添加动画
		const duration = 300;
		const startX = this.x;
		const startY = this.y;
		const xSpeed = (targetX - startX) / duration;
		const ySpeed = (targetY - startY) / duration;
		const startTime = Date.now();
		const _move = () => {
			const t = Date.now() - startTime;
			const x = startX + xSpeed * t;
			const y = startY + ySpeed * t;
			this.x = x;
			this.y = y;
			if (t >= duration) {
				this.x = targetX;
				this.y = targetY;
				return;
			}
			requestAnimationFrame(_move);
		};
		_move();
	}
}

const canvasRef = ref<HTMLCanvasElement>();
const particles = ref<Particle[]>([]); // 粒子数组
const canvasText = ref(''); // 粒子要画的文字

/** 初始化画布宽高 */
const initCanvasSize = () => {
	if (!canvasRef.value) return;
	canvasRef.value.width = 500 * window.devicePixelRatio;
	canvasRef.value.height = 200 * window.devicePixelRatio;
};

/** 清空画布  */
const clear = (ctx: CanvasRenderingContext2D) => {
	if (!canvasRef.value) return;
	ctx.clearRect(0, 0, canvasRef.value?.width, canvasRef.value?.height);
};

/** 重绘 */
const reDraw = (ctx: CanvasRenderingContext2D) => {
	if (!canvasRef.value) return;
	clear(ctx);
	update(ctx);
	for (const p of particles.value) {
		p.draw();
	}
	requestAnimationFrame(() => reDraw(ctx));
};

/** 获取canvas要画的文字内容 */
const getText = () => {
	return new Date().toTimeString().substring(0, 8);
};

/** 绘画 */
const update = (ctx: CanvasRenderingContext2D) => {
	// 1. 获取绘画内容
	const curText = getText();
	if (canvasText.value === curText) return;
	canvasText.value = curText;

	// 2. 画文字
	const width = canvasRef.value!.width;
	const height = canvasRef.value!.height;
	ctx.fillStyle = '#000';
	ctx.textBaseline = 'middle'; // 纵向对齐方式
	ctx.textAlign = 'center';
	ctx.font = `${120 * window.devicePixelRatio}px sans-serif`;
	ctx.fillText(canvasText.value, width / 2, height / 2);

	// 3. 拿到文字像素信息
	const points = [];
	const { data } = ctx.getImageData(0, 0, width, height); // data为 {0-255}[],  4个为一组, 代表rgba
	const gap = 6;
	for (let i = 0; i < width; i += gap) {
		for (let j = 0; j < height; j += gap) {
			const idx = (i + j * width) * 4;
			const [r, g, b, a] = [
				data[idx],
				data[idx + 1],
				data[idx + 2],
				data[idx + 3],
			];
			// 获取黑色像素点, 添加到数组
			if (r === 0 && g === 0 && b === 0 && a === 255) {
				points.push([i, j]);
			}
		}
	}
	clear(ctx);

	// 粒子画成文字
	// 上一帧的粒子数量比现一帧多, 去除多余的
	if (particles.value.length > points.length) {
		particles.value.splice(points.length);
	}
	for (let i = 0; i < points.length; i++) {
		let p = particles.value[i];
		// 上一帧的粒子数量比现一帧少
		if (!p) {
			p = new Particle(ctx);
			particles.value.push(p);
		}

		const [x, y] = points[i];
		p.moveTo(x, y);
	}
};

onMounted(() => {
	initCanvasSize();
	const ctx = canvasRef.value?.getContext('2d', {
		willReadFrequently: true,
	});
	if (!ctx) return;
	reDraw(ctx);
});
</script>

<style lang="less" scoped>
.canvasTime canvas {
	width: 500px;
	height: 200px;
}
</style>
