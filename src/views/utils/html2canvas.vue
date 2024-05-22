<template>
	<div class="html2canvas">
		<v-md-preview :text="``" />
		<div class="content" ref="contentRef">
			这是内容
			<img :src="Logo" alt="" srcset="" />
		</div>
		<el-button @click="download">下载</el-button>
		<el-button @click="getImgData">查看数据</el-button>
	</div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import Logo from '@/../public/favicon.png';
import Html2canvas from '@/utils/html2canvas';

const contentRef = ref<HTMLElement | null>(null);
const html = ref<Html2canvas | null>(null);

onMounted(() => {
	html.value = new Html2canvas({
		el: contentRef.value,
		opt: {
			scale: 1,
		},
	});
});

const download = () => {
	html.value!.download();
};
const getImgData = () => {
	html.value!.getImgData(d => {
		console.log('[ rock- ]', d);
	});
};
</script>

<style lang="less">
.html2canvas {
	.content {
		background: #ccc;
		height: 344px;
	}
}
</style>
