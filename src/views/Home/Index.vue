<script setup lang="ts">
  import { ref } from 'vue-demi';
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
  const str = '</>';

  const count = ref(0);
</script>

<template>
  <div>
    <span class="fm1 text-5xl">{{ t('helloWorld') }}</span>
  </div>
  <p class="mt-5">
    <var-button @click="count++">{{ count }} 主要按钮</var-button>
  </p>
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
