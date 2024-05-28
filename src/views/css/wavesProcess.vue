<template>
	<div class="wavesProcess">
		<v-md-preview
			:text="`
# 水波进度样式
`"
		/>
		<div class="content">
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
.wavesProcess .content {
	--width: 100px;
	--height: 100px;
	width: 200px;
	.roll {
		width: var(--width);
		height: var(--height);
		background: #ccc;
		border-radius: 50%;
		&::before {
			content: '';
			width: 200px;
		}
	}
}
</style>
