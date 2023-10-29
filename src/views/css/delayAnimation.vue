<template>
	<div class="content">
		<v-md-preview
			:text="`
> 通过进度条控制动画时间轴, 来改变动画位置, 从而实现动画随着进度条改变的效果

::: tip
- 动画时间轴
:::
`"
		/>
		<div class="cssDelayAnimation">
			<div class="left">
				<div class="roll" ref="rollRef"><span></span></div>
				<el-slider
					v-model="sliderVal"
					:min="0"
					:max="1"
					:step="0.01"
					:show-tooltip="false"
					@input="onChangeSlider"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const rollRef = ref<HTMLDivElement>();
const sliderVal = ref(0);
const onChangeSlider = (val: number) => {
	rollRef.value?.style.setProperty('--delay', `-${val}s`);
};
</script>

<style lang="less">
.cssDelayAnimation {
	--delay: 0s;
	.left {
		width: 400px;
		margin: 0 auto;
		.roll {
			height: 100px;
			display: flex;
			align-items: end;
			span {
				display: inline-block;
				width: 50px;
				height: 50px;
				background-color: red;
				border-radius: 50%;
				animation: move 1s var(--delay) linear forwards paused;
			}
		}
		.el-slider {
			width: 300px;
			margin: 10px auto;
		}
	}
	@keyframes move {
		0% {
			transform: translateX(0) scale(1);
		}
		50% {
			transform: translateX(200px) scale(2);
		}
		100% {
			transform: translateX(400px) scale(1);
		}
	}
}
</style>
