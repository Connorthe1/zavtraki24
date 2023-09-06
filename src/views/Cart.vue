<template>
  <main class="max-w-default mx-auto">
    <section class="flex">
      <h1 class="mx-auto mt-4 text-2xl">
        CART
        <span v-if="cartStore.cartTotalCount > 0">({{ cartStore.cartTotalCount }})</span>
      </h1>
    </section>
    <section v-if="cartStore.cart.length > 0" class="mt-10 grid grid-cols-3 gap-20">
      <ul class="col-span-2 flex flex-col gap-4">
        <li v-for="(product, idx) in cartStore.cart" :key="idx">
          <cart-item :product="product" />
        </li>
      </ul>
      <div>
        <cart-order />
      </div>
    </section>
    <div v-else class="mt-10 items-center flex flex-col gap-6 text-xl">
      <span>Здесь пока ничего нет :(</span>
      <router-link to="menu" class="border-b border-black pb-1">Закупиться вкуснятиной</router-link>
    </div>
  </main>
</template>

<script lang="ts">
import { useCartStore } from "@/stores/CartStore";
import { defineComponent } from "vue";
import CartItem from '@/components/CartItem.vue'
import CartOrder from '@/components/CartOrder.vue'

export default defineComponent({
  components: { CartItem, CartOrder },
  data() {
    return {
      cartStore: useCartStore(),
    }
  }
})
</script>

<style scoped>

</style>