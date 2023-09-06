<template>
  <ul class="flex gap-8 text-gray-500 select-none">
    <li class="cursor-pointer flex items-center gap-1" @click="emitSort('price')">
      <span :class="{'text-black':sorting.param === 'price'}">Цена</span>
      <img v-if="sorting.param === 'price'" class="w-4" :src="sorting.asc ? 'src/assets/ascending-bars-svgrepo-com.svg' : 'src/assets/descending-bars-svgrepo-com.svg'" alt="">
    </li>
    <li class="cursor-pointer flex items-center gap-1" @click="emitSort('cal')">
      <span :class="{'text-black':sorting.param === 'cal'}">Калорийность</span>
      <img v-if="sorting.param === 'cal'" class="w-4" :src="sorting.asc ? 'src/assets/ascending-bars-svgrepo-com.svg' : 'src/assets/descending-bars-svgrepo-com.svg'" alt="">
    </li>
    <li class="cursor-pointer flex items-center gap-1" @click="emitSort('score')">
      <span :class="{'text-black':sorting.param === 'score'}">Оценка</span>
      <img v-if="sorting.param === 'score'" class="w-4" :src="sorting.asc ? 'src/assets/ascending-bars-svgrepo-com.svg' : 'src/assets/descending-bars-svgrepo-com.svg'" alt="">
    </li>
  </ul>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { Sorting } from "@/types/Sorting";

export default defineComponent({
  props: {
    sorting: {
      type: Object as PropType<Sorting>,
      required: true
    }
  },
  methods: {
    emitSort(param: string) {
      this.$emit('changeSorting', param)
    }
  },
  emits: {
    changeSorting: (param: string) => true
  }
})
</script>

<style scoped>

</style>