<template>
  <div class="font-normal">
    <span class="text-3xl">About</span>

    <p class="text-2xl">{{ t('about.title') }}</p>
    <!-- <p class=""> Vite + Vue3、Pinia、TypeScript、Eslint、Prettier、LintStaged、Tailwindcss </p> -->
    <ul class="m-auto mt-4 inline-block w-auto list-disc text-left text-xl">
      <li>
        ⚡️ <a target="_blank" href="https://github.com/vuejs/vue-next">Vue 3</a>,
        <a target="_blank" href="https://github.com/vitejs/vite">Vite</a>,
        <a target="_blank" href="https://www.typescriptlang.org/zh/" rel="nofollow">TypeScript</a>
        Yes!</li
      >
      <li>
        🍍 <a target="_blank" href="https://pinia.esm.dev/" rel="nofollow">Pinia</a> -
        {{ t('about.package_pinia') }}
      </li>
      <li>
        😃
        <a target="_blank" href="https://github.com/antfu/unocss/tree/main/packages/preset-icons"
          >Iconify
        </a>
        <span> - {{ t('about.package_icon') }} </span>
        <a target="_blank" href="https://icones.netlify.app/" rel="nofollow">🔍 Icones</a>
      </li>
      <li>
        🌍 <a target="_blank" href="/AxyLm/vite-taicu/blob/main/locales">I18n </a
        >{{ t('about.package_i18n') }}
      </li>
      <li
        >🎨 <a target="_blank" href="https://www.tailwindcss.cn/" rel="nofollow">Tailwindcss</a>
        <span> - {{ t('about.package_tailwindcss') }} </span>
      </li>
      <li>
        🛠 <a target="_blank" href="https://github.com/antfu/vueuse">VueUse</a>
        <span>- {{ t('about.package_vueuse') }}</span>
      </li>
      <li>
        <a target="_blank" href="http://eslint.cn/" rel="nofollow">Eslint</a> +
        <a target="_blank" href="https://prettier.io/" rel="nofollow">Prettier</a> +
        <a target="_blank" href="https://typicode.github.io/husky/" rel="nofollow">Husky</a>
        {{ t('about.package_format') }}
      </li>
    </ul>

    <p class="mt-4 text-lg">{{ t('about.desc') }} <code> new FastifyIdea(); </code> </p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useI18n } from 'vue-i18n';

  export default defineComponent({
    name: 'About',
    setup() {
      const { t } = useI18n();

      return { t };
    },
  });
</script>

<style lang="less" scoped>
  ul a {
    @apply text-skin-700 dark:text-skin-600;
  }
</style>
