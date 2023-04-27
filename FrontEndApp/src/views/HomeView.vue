<script setup lang="ts">
const handleClick = () => {
  if(window.ipc){
    window.ipc.send('min-app')
  }
 
}
</script>

<template>
  <main>
    <v-btn @click="handleClick">Hello</v-btn>
  </main>
</template>
