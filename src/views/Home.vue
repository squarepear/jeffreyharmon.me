<template lang="pug">
.home
  h1#intro Hello, I'm Jeffrey
  h3#traits College Student & Developer
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>

<style lang="scss" scoped>
#intro {
  font-weight: bold;
}
</style>
