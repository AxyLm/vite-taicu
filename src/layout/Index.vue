<template>
  <div class="layout">
    <lHeader></lHeader>
    <div class="p-20 text-center">
      <img src="/src/assets/logo.svg" class="mb-20 inline w-60" alt="" />
      <div>
        <router-view></router-view>
      </div>
      <div class="mt-10 text-lg">
        <router-link to="/home">
          <span
            ><sup>{{ str }}</sup> Home</span
          >
        </router-link>
        <router-link to="/about" class="ml-8">
          <span
            ><sup class="sub">{{ str }}</sup> Abount</span
          >
        </router-link>
      </div>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>
<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
  const str = '</>';
</script>
<script lang="ts">
  import lHeader from '~/layout/Header.vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Layout',
    components: {
      lHeader,
    },
  });
</script>

<style lang="less">
  .wrap {
    height: 100vh;
  }

  .fm1 {
    font-family: 'Josefin Sans', sans-serif;
  }

  .fm2 {
    font-family: sans-serif;
  }
</style>
