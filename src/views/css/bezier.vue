<template>
	<div class="content bezier-content">
		<v-md-preview
			:text="`
> 贝塞尔的奇妙动画

动画只支持数值类的 css ***属性***
`"
		/>
		<div class="bezier-box">
			<div ref="bezier1Ref" class="bezier-item bezier-item1"></div>
			<div ref="bezier2Ref" class="bezier-item bezier-item2"></div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
const bezier1Ref = ref<HTMLDivElement>();
const bezier2Ref = ref<HTMLDivElement>();
const timer1 = ref<ReturnType<typeof setInterval>>();
const timer2 = ref<ReturnType<typeof setInterval>>();

onMounted(() => {
	setTimeout(() => {
		if (bezier1Ref.value) {
			timer1.value = draw(bezier1Ref.value);
		}
		if (bezier2Ref.value) {
			timer2.value = draw(bezier2Ref.value);
		}
	}, 1000);
});

onUnmounted(() => {
	if (timer1.value) {
		clearInterval(timer1.value);
	}
	if (timer2.value) {
		clearInterval(timer2.value);
	}
});

function draw(dom: HTMLDivElement) {
	return setInterval(function () {
		//获取样式当前值并赋值给cur
		const { x, y } = dom.getClientRects()?.[0];
		//设置轨迹
		createTracks(x + 10, y + 10);
	}, 20);
}

function createTracks(x, y) {
	var ele = document.createElement('div');
	ele.className = 'track';
	ele.style.left = x + 'px';
	ele.style.top = y + 'px';
	document.getElementsByClassName('bezier-content')[0].appendChild(ele);
}
</script>

<style lang="less">
/** Hodini */
@property --x {
	syntax: '<length>';
	initial-value: 0px;
	inherits: false;
}
@property --y {
	syntax: '<length>';
	initial-value: 0px;
	inherits: false;
}
@property --r {
	syntax: '<angle>';
	initial-value: 0deg;
	inherits: false;
}

.bezier-box {
	.bezier-item {
		--x: 0px;
		--y: 0px;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: #f00;
		margin: 200px auto;
		&.bezier-item1 {
			transform: translate(var(--x), var(--y));
			animation: b1x 2s cubic-bezier(0.5, -800, 0.5, 800),
				b1y 1s cubic-bezier(0.5, -800, 0.5, 800);
			animation-iteration-count: infinite;
		}
		&.bezier-item2 {
			transform: rotate(var(--r)) translate(var(--x));
			animation: b1x 2s cubic-bezier(0.5, -800, 0.5, 800), b2r 4s linear;
			animation-iteration-count: infinite;
		}
	}
}

@keyframes b1x {
	to {
		--x: 1px;
	}
}
@keyframes b1y {
	to {
		--y: 0.1px;
	}
}
@keyframes b2r {
	to {
		--r: 360deg;
	}
}

.track {
	position: fixed;
	width: 2px;
	height: 2px;
	background-color: #000;
	border-radius: 50%;
}
</style>
