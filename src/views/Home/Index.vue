<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import { useAppStore } from '~/stores/app';
  const { countPlus, count } = useAppStore();
  const { t } = useI18n();
</script>

<template>
  <div>
    <div>
      <span class="fm1 text-5xl">{{ t('helloWorld') }}</span>
    </div>
    <p class="mt-5">
      <var-button @click="countPlus()">
        <span class="dark:text-base-13">plus {{ $pinia.state.value.app.count }} </span>
      </var-button>
    </p>
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
