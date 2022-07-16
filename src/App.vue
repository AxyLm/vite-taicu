<template>
  <router-view></router-view>
</template>

<style lang="less">
  body {
    @apply transition-colors;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke,
      shadow-color;
  }
  #app {
    font-family: Josefin Sans, sans-serif;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
