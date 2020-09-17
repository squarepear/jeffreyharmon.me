<template lang="pug">
.error404
  h1 404
  h2 Page not found
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFound',
  mounted () {
    setTimeout(() => {
      this.$router.back()
    }, 5000)
  }
})
</script>
