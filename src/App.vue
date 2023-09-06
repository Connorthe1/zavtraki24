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

<style>
.slide-enter-active,
.slide-leave-active {
  margin-bottom: 0px;
  transition: all 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  margin-bottom: 10px;
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
