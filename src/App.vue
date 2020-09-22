<template lang="pug">
.page
  router-view
dock
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Dock from '@/components/Dock.vue'

export default defineComponent({
  name: 'App',
  components: {
    Dock
  }
})
</script>

<style lang="scss">
#app {
  display: flex;
  height: 100%;
  flex-flow: column nowrap;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  > :first-child {
    display: flex;
    flex: 1;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
  }

  > :last-child {
    height: 12vh;
  }
}
</style>
