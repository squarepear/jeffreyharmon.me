<template lang="pug">
.home
  h1 Hello, I'm Jeffrey
  h3#traits College Student & Full-Stack Developer
  h4
    router-link(to="/about") More about me
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>

<style lang="scss" scoped>
#traits {

}
</style>
