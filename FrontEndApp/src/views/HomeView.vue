<script setup lang="ts">
const handleClick = () => {
  if (window.ipc) {
    window.ipc.send('min-app')
  }
}
</script>

<template>
  <main style="overflow-y: scroll; height: 100%">
    <v-btn @click="handleClick">Hello</v-btn>
  </main>
</template>

<style scoped>
/* 自定义滚动条的背景颜色 */
</style>
