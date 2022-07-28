<script setup lang="ts">
  import { isDark } from '~/composables';
  import { useI18n, useThemeChang } from '~/composables';
  const { t, toggleLocale } = useI18n();

  const { themeAni } = useThemeChang(isDark);
</script>
<template>
  <nav class="text-center text-xl">
    <button class="nav-btn" @click="themeAni">
      <i-carbon-sun v-if="!isDark" class="h-6 w-6" />
      <i-carbon-moon v-else class="h-6 w-6" />
    </button>

    <button class="nav-btn" @click="toggleLocale()">
      <i-carbon-language class="h-6 w-6" />
    </button>
  </nav>
</template>
<style lang="less" scoped>
  .nav-btn {
    @apply mx-2 cursor-pointer text-blue;
  }
</style>
