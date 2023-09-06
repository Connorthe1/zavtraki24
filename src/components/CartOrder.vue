<template>
  <div class="flex flex-col gap-2">
    <span class="text-2xl mb-2">Ваши данные</span>
    <input class="bg-gray-100 rounded-md px-4 py-2" placeholder="Имя" type="text">
    <input class="bg-gray-100 rounded-md px-4 py-2" placeholder="Телефон" type="text">
    <input class="bg-gray-100 rounded-md px-4 py-2" placeholder="e-mail" type="text">
    <span class="font-bold mt-4 text-xl">Итог: {{ cartStore.cartPriceTotal }}р</span>
    <button class="rounded-md border py-3 hover:bg-black hover:text-white transition">Оформить заказ</button>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/CartStore";

const cartStore = useCartStore()
</script>

<style scoped>

</style>