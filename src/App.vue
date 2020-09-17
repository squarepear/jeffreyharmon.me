<template lang="pug">
.page
  router-view
links
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Links from '@/components/Links.vue'

export default defineComponent({
  name: 'App',
  components: {
    Links
  }
})
</script>

<style lang="scss">
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-flow: column nowrap;

  > .page {
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }

  > .links {
    height: 12vh;
  }
}
</style>
