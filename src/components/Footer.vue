<script setup lang="ts" >
	import { toggleDark, isDark } from "~/composables";
	// import { useI18n } from "vue-i18n";
	import { useI18n } from "~/composables";
	const { t, toggleLocale } = useI18n();
	// const toggleLocale = (locale?: string) => {
	// 	// change to some real logic
	// 	const locales = availableLocales;
	// 	currentLocal.value =
	// 		locale ||
	// 		locales[(locales.indexOf(currentLocal.value) + 1) % locales.length];
	// };
</script>
<template>
	<nav class="text-xl text-center mt">
		<button class="nav-btn" @click="toggleDark()">
			<i-carbon-sun class="h-6 w-6" v-if="!isDark" />
			<i-carbon-moon class="h-6 w-6" v-else />
		</button>

		<button class="nav-btn" @click="toggleLocale()">
			<i-carbon-language class="h-6 w-6" />
		</button>
	</nav>
</template>
<style lang="less" scoped>
.nav-btn {
	@apply text-blue cursor-pointer mx-2;
}
</style>