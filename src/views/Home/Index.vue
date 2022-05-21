<script setup lang="ts">
	// This starter template is using Vue 3 <script setup> SFCs
	// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

	import { useI18n } from "vue-i18n";
	const { t } = useI18n();
</script>

<template>
	<div class="text-center p-20">
		<span class="text-5xl fm1">{{t("helloWorld")}}</span>
		<!-- <span class="text-5xl fm2">{{t("hello")}}</span> -->
		<br />
	</div>
</template>

<style lang="less">
.wrap {
	height: 100vh;
}
.fm1 {
	font-family: "Josefin Sans", sans-serif;
	font-weight: 300;
}
.fm2 {
	font-family: sans-serif;
}
</style>
