<template>
  <div class="shadow-lg flex flex-col rounded-lg relative hover:shadow-xl cursor-pointer transition" @mouseover="setHover(true)" @mouseleave="setHover(false)" @click="toggleToCart">
    <img class="rounded-t-lg object-cover"
         :src="product.img"
         alt="">
    <div class="flex items-center gap-1 absolute top-2 left-2 bg-white rounded-md py-1 px-2">
      <img class="w-5" src="src/assets/star-svgrepo-com.svg" alt="">
      <span class="text-sm tracking-tighter">{{ product.score.toFixed(1) }}</span>
    </div>
    <div class="flex flex-col gap-2 px-10 py-6 flex-1">
      <p>{{ product.name }}</p>
      <p style="word-spacing: -4px" class="text-gray-600">{{ `${product.size} г` }}/ <span class="text-sm tracking-tighter">{{ `${product.cal} ккал` }}</span></p>
      <div class="flex mt-auto">
        <transition name="fade">
          <span v-if="isInCart" class="text-sm self-end tracking-tighter">Ждет в корзине</span>
        </transition>
        <span class="ml-auto font-bold text-xl">{{ product.price }}p</span>
      </div>
    </div>
    <transition name="slide">
      <div v-if="isHovered" class="z-10 absolute text-sm -bottom-3 self-center">
        <span class="bg-white rounded-lg shadow-lg px-4 py-2 border" :class="[isInCart ? 'text-red-600' : 'text-green-600', isInCart ? 'border-red-600' : 'border-green-600']">
        {{ isInCart ? 'Удалить из корзины' : 'Добавить в корзину'}}
        </span>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { useCartStore } from "@/stores/CartStore";
import { PropType, defineComponent } from "vue";
import { Product } from "@/types/Product";

interface State {
  cartStore: useCartStore
  isHovered: boolean
}

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  },
  data(): State {
    return {
      cartStore: useCartStore(),
      isHovered: false,
    }
  },
  computed: {
    isInCart(): boolean {
      return this.cartStore.cart.some(cartProduct => cartProduct.id === this.product.id)
    }
  },
  methods: {
    toggleToCart() {
      this.$emit('toggleToCart', this.product)
    },
    setHover(val) {
      this.isHovered = val
    }
  },
  emits: {
    toggleToCart: (val: Product) => val
  }
})
</script>

<style scoped>
</style>