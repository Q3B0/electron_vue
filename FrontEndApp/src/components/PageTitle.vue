<script setup lang="ts">
import { ref} from 'vue';
defineProps<{
  title: string
}>()
const win_state = ref(0)
const handleWinOp = (type: Number) => {
  if (window.ipc) {
    switch (type) {
      case 0:
        window.ipc.send('min-app')
        break
      case 1:
        window.ipc.send('max-app')
        if(win_state.value === 0){
          win_state.value = 1;
        }else{
          win_state.value = 0
        }
        break
      case 2:
        window.ipc.send('close-app')
        break
    }
  }
}
const emit = defineEmits(['toggle'])
const handleToggle = () => {
  emit("toggle")
}
</script>

<template>
  <v-toolbar density="compact" color="primary">
    <v-app-bar-nav-icon @click="handleToggle"></v-app-bar-nav-icon>

    <v-toolbar-title style="-webkit-app-region: drag">{{ title }}</v-toolbar-title>

    <v-spacer class="drag"></v-spacer>

    <v-btn icon @click="handleWinOp(0)">
      <v-icon icon="mdi-minus"></v-icon>
    </v-btn>

    <v-btn icon @click="handleWinOp(1)">
      <v-icon v-if="win_state === 0" icon="mdi-window-maximize"></v-icon>
      <v-icon v-else icon="mdi-window-restore"></v-icon>
    </v-btn>

    <v-btn icon @click="handleWinOp(2)">
      <v-icon icon="mdi-close"></v-icon>
     
    </v-btn>
  </v-toolbar>
</template>

<style scoped>

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

