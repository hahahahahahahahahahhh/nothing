<template>
  <div>
    <button @click="startSocket">开始请求socket</button>
  </div>
  <div></div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name: 'New',
  setup: () => {
    const startSocket = () => {
      const socket = new WebSocket("ws://127.0.0.1:8899");
      socket.addEventListener('open', (event) => {
        console.log('%c 已开启socket', "color: red; background: yellow; font-size: 16px;");
        socket.send('bye, bye');
      })
      socket.addEventListener('message', function (event) {
          console.log('%c Message from server ', "color: blue; font-size: 16px;" ,event.data);
      });

    }
    return {
      startSocket
    }
  }
})
</script>
<style scoped>
</style>
