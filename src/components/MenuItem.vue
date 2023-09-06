<template>
  <div class="shadow-2xl rounded-lg relative">
    <img class="rounded-t-lg object-cover"
         :src="product.img"
         alt="">
    <div class="flex items-center gap-1 absolute top-2 left-2 bg-white rounded-md py-1 px-2">
      <img class="w-5" src="src/assets/star-svgrepo-com.svg" alt="">
      <span class="text-sm tracking-tighter">{{ product.score.toFixed(1) }}</span>
    </div>
    <div class="flex flex-col gap-2 px-10 py-6">
      <p>{{ product.name }}</p>
      <p style="word-spacing: -4px" class="text-gray-600">{{ `${product.size} г` }}/ <span class="text-sm tracking-tighter">{{ `${product.cal} ккал` }}</span></p>
      <span class="ml-auto font-bold text-xl">{{ product.price }}p</span>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { Product } from "@/types/Product";

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  }
})
</script>