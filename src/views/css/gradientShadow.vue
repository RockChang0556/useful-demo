<template>
	<div class="content">
		<v-md-preview
			:text="`
> 伪类实现渐变阴影

`"
		/>
		<div class="box">
			<img src="https://picsum.photos/200/180" alt="" />
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="less">
.box {
	width: 200px;
	height: 180px;
	// background: #f00;
	margin: 20px auto 0;
	position: relative;
	// outline: 1px solid #000;
	--x: 20px;
	--y: 20px;
	img {
		width: 100%;
		height: 100%;
	}

	&::after {
		position: absolute;
		left: var(--x);
		top: var(--y);
		z-index: -1;
		content: '';
		width: 100%;
		height: 100%;
		background: conic-gradient(#f00 0, #0f0 100%);
		filter: blur(10px);
		clip-path: polygon(
			-100vmax -100vmax,
			100vmax -100vmax,
			100vmax 100vmax,
			-100vmax 100vmax,
			-100vmax -100vmax,
			calc(0 - var(--x)) calc(0 - var(--y)),
			calc(100% - var(--x)) calc(0 - var(--y)),
			calc(100% - var(--x)) calc(100% - var(--y)),
			calc(0 - var(--x)) calc(100% - var(--y)),
			calc(0 - var(--x)) calc(0 - var(--y))
		);
	}
}
</style>
