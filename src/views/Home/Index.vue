<script setup lang="ts">
	import { useI18n } from "vue-i18n";
	const { t } = useI18n();
</script>

<template>
	<div class="text-center p-20">
		<img src="/src/assets/logo.svg" class="inline" alt="">
		<div>
			<span class="text-5xl fm1">{{t("helloWorld")}}</span>
		</div>
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
