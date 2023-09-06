<script lang="ts">
import Header from './components/Header.vue'
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Header
  }
})
</script>

<template>
  <Header />
  <RouterView />
</template>

<style scoped>
</style>
