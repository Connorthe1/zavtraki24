<template>
  <div class="flex">
    <img class="h-40 object-cover rounded-lg" :src="product.img" alt="">
    <div class="flex flex-col py-2 px-6 gap-2">
      <span>{{ product.name }}</span>
      <span class="font-bold text-lg">{{ product.price }}р</span>
    </div>
    <div class="self-center ml-auto">
      <cart-counter :count="product.count" :price="product.price" @remove="removeSingle" @add="addSingle" />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import CartCounter from '@/components/CartCounter.vue'
import { CartProduct } from "@/types/CartProduct";
import { useCartStore } from "@/stores/CartStore";

interface State {
  cartStore: useCartStore
}

export default defineComponent({
  components: {
    CartCounter
  },
  data(): State {
    return {
      cartStore: useCartStore()
    }
  },
  props: {
    product: {
      type: Object as PropType<CartProduct>,
      required: true
    }
  },
  methods: {
    removeSingle() {
      if (this.product.count === 1) {
        this.cartStore.removeFromCart(this.product.id)
      } else {
        this.cartStore.updateCount(this.product.id, this.product.count - 1)
      }
    },
    addSingle() {
      this.cartStore.updateCount(this.product.id, this.product.count + 1)
    }
  }
})
</script>