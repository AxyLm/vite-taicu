<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
</script>

<template>
  <div class="p-20 text-center">
    <img src="/src/assets/logo.svg" class="inline" alt="" />
    <div>
      <span class="fm1 text-5xl">{{ t('helloWorld') }}</span>
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
