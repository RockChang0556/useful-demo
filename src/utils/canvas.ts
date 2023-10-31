import { getRandom } from './util';

interface IParticleConf {
	width: number;
	height: number;
	color: string;
	particSize: number[];
}
/** 粒子 */
export class Particle {
	x: number = 0;
	y: number = 0;
	size: number = 0;

	ctx: CanvasRenderingContext2D | undefined;
	conf: IParticleConf;

	constructor(ctx: CanvasRenderingContext2D, conf: IParticleConf) {
		this.ctx = ctx;
		this.conf = conf;
		const {
			width,
			height,
			particSize: [pmin, pmax],
		} = conf;

		this.size = getRandom(
			pmin * window.devicePixelRatio,
			pmax * window.devicePixelRatio
		); // 粒子半径

		const cr = Math.min(width, height) / 2; // 粒子绘画圆圈半径
		const crad = (getRandom(0, 360) * Math.PI) / 180; // 粒子绘画圆圈随机角度
		const cx = width / 2; // 粒子绘画圆圈圆心 x 坐标
		const cy = height / 2; // 粒子绘画圆圈圆心 y 坐标
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
		this.ctx.fillStyle = this.conf.color;
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

interface ICanvasConf {
	width: number;
	height: number;
	color: string;
	fontFamily: string;
	fontSize: number;
	gap: number;
	particSize: number[];
}

/** 画布 */
export class Canvas {
	dom: HTMLCanvasElement | undefined;
	ctx: CanvasRenderingContext2D | null | undefined;
	config: ICanvasConf;

	particles: Particle[] = []; // 粒子数组
	canvasText: string = ''; // 粒子要画的文字

	constructor(
		dom: HTMLCanvasElement | undefined,
		conf: Partial<ICanvasConf> = {}
	) {
		this.dom = dom;
		this.ctx = dom?.getContext('2d', { willReadFrequently: true });
		this.config = {
			width: conf.width ?? 500,
			height: conf.height ?? 200,
			color: conf.color ?? '#000',
			fontFamily: conf.fontFamily ?? 'sans-serif',
			fontSize: conf.fontSize ?? 120,
			gap: conf.gap ?? 6,
			particSize: conf.particSize ?? [2, 4],
		};

		this.initCanvasSize(this.config.width, this.config.height);
	}

	/** 初始化画布宽高 */
	initCanvasSize(w: number, h: number) {
		if (!this.dom) return;
		this.dom.width = w * window.devicePixelRatio;
		this.dom.height = h * window.devicePixelRatio;
	}

	/** 清空画布  */
	clear() {
		if (!this.dom) return;
		this.ctx?.clearRect(0, 0, this.dom.width, this.dom.height);
	}

	/** 绘制
	 * @param {string | Function} text 要绘制的内容: 参数是字符串, 则只绘制一次, 参数是函数, 则调用 requestAnimationFrame
	 * @return {*}
	 */
	draw(text: string | Function) {
		if (!this.dom) return;
		const txt = typeof text === 'function' ? text() : text;
		this.clear();
		this.update(txt);
		for (const p of this.particles) {
			p.draw();
		}
		// 如果绘制的是函数，则继续执行 cdraw, 并把函数传进去
		if (typeof text === 'function') {
			requestAnimationFrame(() => this.draw(text));
		}
	}

	/** 更新绘制信息 */
	update(text: string) {
		if (!this.dom || !this.ctx) return;
		const { fontSize, fontFamily, color, particSize } = this.config;

		// 1. 获取绘画内容
		if (this.canvasText === text) return;
		this.canvasText = text;

		// 2. 画文字
		const width = this.dom?.width || 0;
		const height = this.dom?.height || 0;
		this.ctx.fillStyle = '#000';
		this.ctx.textBaseline = 'middle'; // 纵向对齐方式
		this.ctx.textAlign = 'center';
		this.ctx.font = `${fontSize * window.devicePixelRatio}px ${fontFamily}`;
		this.ctx.fillText(this.canvasText, width / 2, height / 2);

		// 3. 拿到文字像素信息
		const points = this.getPoint();
		this.clear();

		// 4. 粒子画成文字
		// 上一帧的粒子数量比现一帧多, 去除多余的
		if (this.particles.length > points.length) {
			this.particles.splice(points.length);
		}
		for (let i = 0; i < points.length; i++) {
			let p = this.particles[i];
			// 上一帧的粒子数量比现一帧少
			if (!p) {
				p = new Particle(this.ctx, { width, height, color, particSize });
				this.particles.push(p);
			}
			const [x, y] = points[i];
			p.moveTo(x, y);
		}
	}

	/** 获取文字的像素点信息 */
	getPoint() {
		if (!this.dom || !this.ctx) return [];
		const { width, height } = this.dom;
		const points = [];
		const { data } = this.ctx.getImageData(0, 0, width, height); // data为 {0-255}[],  4个为一组, 代表rgba

		const { gap } = this.config; // 像素点之间的间隔, 即密度
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
		return points;
	}
}
