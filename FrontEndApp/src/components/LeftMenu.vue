<script setup lang="ts">
import { ref} from 'vue';

defineProps<{
  menus: Array<any>
}>()

const drawer = ref(false)
const toggleDrawer = () => {
    drawer.value = !drawer.value;
}
defineExpose({
    toggleDrawer
})
</script>
<template>
    <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
      >
      <v-toolbar density="compact" color="primary">
        <v-app-bar-nav-icon @click="toggleDrawer">
            <v-icon>mdi-arrow-left</v-icon>
        </v-app-bar-nav-icon>
      </v-toolbar>
        <v-list
           nav
        >
        <v-list nav>
          <v-list-item v-for="(item, index) in menus" :key="index" :prepend-icon="item.icon" :title="item.title" :value="item.value"></v-list-item>
        </v-list>
    </v-list>
      </v-navigation-drawer>
</template>

<style scoped>
.v-navigation-drawer__scrim{
    height: 100vh;
}
</style>