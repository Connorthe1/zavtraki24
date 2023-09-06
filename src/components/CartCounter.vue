<template>
  <div class="flex relative select-none">
    <div class="w-8 h-8 flex items-center justify-center border border-black rounded-l-sm hover:bg-black transition group cursor-pointer" @click="remove">
      <img class="w-4 group-hover:invert" :src="count > 1 ? '/src/assets/minus-svgrepo-com.svg' : '/src/assets/delete-2-svgrepo-com.svg'" alt="">
    </div>
    <div class="w-12 h-8 flex items-center justify-center border-t border-b border-black">
      <span class="font-bellota font-bold">{{ count }}</span>
      <span class="absolute mt-14 text-gray-500 text-sm">{{ price * count }}p</span>
    </div>
    <div class="w-8 h-8 flex items-center justify-center border border-black rounded-r-sm hover:bg-black transition group cursor-pointer" @click="add">
      <img class="w-4 group-hover:invert" src="/src/assets/plus-large-svgrepo-com.svg" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";

export default defineComponent({
  props: {
    price: {
      type: Number as PropType<number>,
      required: true
    },
    count: {
      type: Number as PropType<number>,
      required: true
    }
  },
  methods: {
    remove() {
      this.$emit('remove')
    },
    add() {
      this.$emit('add')
    }
  },
  emits: ['remove', 'add']
})
</script>

<style scoped>

</style>