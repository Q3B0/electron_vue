<script setup lang="ts">
import { ref } from 'vue'
import PageTitle from './components/PageTitle.vue'
import LeftMenu from './components/LeftMenu.vue'
const menu = ref(null)

const toggleMenu = () => {
  if (menu.value === null) return
  menu.value.toggleDrawer()
}

const loadMenus = () => {
  return [
    {
      icon: 'mdi-email',
      title: '邮箱',
      value: 'inbox'
    },
    {
      icon: 'mdi-account-supervisor-circle',
      title: '导师',
      value: 'supervisor'
    },
    {
      icon: 'mdi-clock-start',
      title: '签到',
      value: 'clockin'
    }
  ]
}
const menus: Array<any> = loadMenus()
</script>

<template>
  <v-app>
    <left-menu ref="menu" :menus="menus" />
    <header style="position: fixed; top: 0px; z-index: 999">
      <PageTitle
        style="position: relative; top: 0px; width: 100vw"
        title="Vuetify"
        @toggle="toggleMenu"
      />
    </header>
    <RouterView style="margin-top: 64px; padding: 0 20px" />
  </v-app>
</template>

<style scoped>
</style>

