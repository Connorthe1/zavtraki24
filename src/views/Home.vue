<template>
  <div class="flex items-center justify-center absolute top-20 left-0 right-0 bottom-20">
    <router-link to="menu">
      <div class="relative flex flex-col items-center p-40" @mouseover="isShowMenu = true" @mouseleave="isShowMenu = false">
        <span class="text-7xl font-bellota">ZAVTRAKI 24</span>
        <span class="font-bellota mt-4">Сервис доставки завтраков и смузи</span>
        <div class="absolute flex flex-col items-center gap-2 bottom-10 mx-auto">
          <transition name="slide">
            <img v-if="isShowMenu" class="w-5 opacity-60" src="src/assets/arrow-down-svgrepo-com.svg" alt="">
          </transition>
          <transition name="fade">
            <span v-if="isShowMenu" class="font-bellota text-2xl">MENU</span>
          </transition>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface State {
  isShowMenu: boolean
}

export default defineComponent({
  data(): State {
    return {
      isShowMenu: false
    }
  },
})
</script>

<style scoped>
</style>