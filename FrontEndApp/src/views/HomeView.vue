<script setup lang="ts">
import { ref } from 'vue'
const showInfo = ref(false)
const handleClick = () => {
  if (window.ipc) {
    window.ipc.invoke('dialog:openFile').then((result: any) => {
      console.log(result)
      if (result.canceled) {
        showInfo.value = true
        setTimeout(() => {
          showInfo.value = false
        }, 1500)
      } else {
        console.log(result.filePaths[0])
      }
    })
  } else {
    showInfo.value = true
    setTimeout(() => {
      showInfo.value = false
    }, 1500)
  }
}

</script>

<template>
  <main style="overflow-y: scroll; height: 100%">
    <div :key="Date()" style="position: absolute; width: 100%; z-index: 9999">
      <transition>
        <v-alert
          v-if="showInfo"
          style="position: relative; right: 20px; margin: 0 20px"
          type="warning"
          title="提示"
          text="打开文件操作已取消"
        ></v-alert>
      </transition>
    </div>
    <v-btn @click="handleClick">打开文件</v-btn>

  </main>
</template>
<style scoped>
/* 自定义滚动条的背景颜色 */
.v-enter-active,.v-leave-active {
  transition: opacity 0.5s ease-in-out
}

.v-enter-from,.v-leave-to {
  opacity: 0;
}

</style>
