<!--
 * @Author: Rock Chang
 * @Date: 2021-08-08 10:25:48
 * @LastEditTime: 2023-07-19 17:07:45
 * @Description: 
-->
<template>
	<svg class="icon r-icon" aria-hidden="true">
		<use :xlink:href="iconxlink"></use>
	</svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
const props = defineProps<{
	name: string;
}>();

const iconxlink = computed(() => `#icon-${props.name}`);

</script>
<script lang="ts" name="r-icon"></script>

<style lang="less"></style>
