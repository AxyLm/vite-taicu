<template>
	<div class="layout">
		<Header></Header>
		<router-view></router-view>

		<!-- <Footer></Footer> -->
	</div>
</template>

<script lang="ts">
	import Header from "~/layout/Header.vue";
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "Layout",
    components:{
      Header
    },
		setup() {},
	});
</script>

<style lang="less">
.wrap {
	height: 100vh;
}
.fm1 {
	font-family: "Josefin Sans", sans-serif;
}
.fm2 {
	font-family: sans-serif;
}
</style>
