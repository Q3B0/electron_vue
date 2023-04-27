<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import PageTitle from './components/PageTitle.vue';
</script>

<template>
  <header style="position:fixed;top:0px;z-index: 999;">
    <PageTitle style="position: relative; top:0px;width: 100vw;" title="Vuetify"/>
  </header>

  <RouterView style="margin-top:64px ;"/>
</template>

<style scoped>
</style>

