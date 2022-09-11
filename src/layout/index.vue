<template>
  <div class="layout">
    <LayoutHeader />
    <div class="px-4 pl-8 text-center sm:px-20">
      <img src="/src/assets/logo.svg" class="mb-10 mt-8 inline w-48" alt="" />
      <div>
        <router-view></router-view>
      </div>
    </div>
    <LayoutFooter />
  </div>
</template>
<script lang="ts">
  import LayoutHeader from './header.vue';
  import LayoutFooter from './footer.vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Layout',
    components: {
      LayoutHeader,
      LayoutFooter,
    },
  });
</script>
