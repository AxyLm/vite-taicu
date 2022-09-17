<script setup lang="ts">
  import { isDark, useThemeChang } from '~/composables';
  import { useI18n } from '~/modules/i18n';
  const { t, toggleLocale } = useI18n();

  const { themeAni } = useThemeChang(isDark);
  const str = '</>';
</script>
<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'LayoutFooter',
  });
</script>
<template>
  <div class="my-10 text-center text-lg">
    <router-link to="/about" class="mx-4" active-class="font-normal">
      <span>
        <sup class="sub">{{ str }}</sup> {{ $t('about.link_name') }}</span
      >
    </router-link>
    <router-link to="/home" class="mx-4" active-class="font-normal">
      <span
        ><sup>{{ str }}</sup> {{ $t('home') }}</span
      >
    </router-link>
  </div>
</template>
<style lang="less" scoped>
  .nav-btn {
    @apply mx-2 cursor-pointer text-blue;
  }
</style>
