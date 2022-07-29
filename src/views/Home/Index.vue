<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
  const str = '</>';
</script>

<template>
  <div class="p-20 text-center">
    <img src="/src/assets/logo.svg" class="mb-20 inline w-60" alt="" />

    <div>
      <span class="fm1 text-5xl">{{ t('helloWorld') }}</span>
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
</template>

<style lang="less">
  .wrap {
    height: 100vh;
  }
  .fm1 {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
  }
  .fm2 {
    font-family: sans-serif;
  }
</style>
