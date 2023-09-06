<template>
  <main class="max-w-default mx-auto">
    <section class="flex flex-col mt-4 gap-4">
      <h1 class="mx-auto text-2xl">BREAKFAST MENU</h1>
      <div class="flex justify-between items-center w-full px-10">
        <div class="flex items-center gap-4">
          <label for="search">
            <img class="w-6 cursor-pointer" src="src/assets/zoom-svgrepo-com.svg" alt="search">
          </label>
          <input v-model="searchValue" autocomplete="off"  type="text" id="search" class="border-b py-2 px-4 focus:border-black transition">
        </div>
        <sorting-bar :sorting="sorting" @changeSorting="setSort" />
      </div>
    </section>
    <section class="grid grid-flow-row grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 px-10">
      <menu-item v-for="(item, idx) in filteredProducts" :key="idx" :product="item" @toggle-to-cart="toggleToCart" />
    </section>
    <div v-if="filteredProducts.length === 0" class="px-10">
      Ничего не найдено
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuItem from "@/components/MenuItem.vue"
import SortingBar from "@/components/SortingBar.vue"
import { Product } from "@/types/Product";
import { Sorting } from "@/types/Sorting";
import { useCartStore } from "@/stores/CartStore";
import products from "@/json/products.json"

interface State {
  cartStore: useCartStore,
  items: Product[],
  searchValue: string,
  sorting: Sorting,
}

export default defineComponent({
  components: {
    MenuItem,
    SortingBar
  },
  data(): State {
    return {
      cartStore: useCartStore(),
      searchValue: '',
      sorting: {
        param: '',
        asc: false
      },
      items: products
    }
  },
  computed: {
    filteredProducts(): Product[] {
      if (this.searchValue || this.sorting.param) {
        const products = this.searchValue ? this.items.filter(product => product.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) >= 0) : [...this.items]
        if (this.sorting.param) {
          switch (this.sorting.param) {
            case 'price':
              products.sort((a, b) => a.price - b.price)
              break
            case 'cal':
              products.sort((a, b) => a.cal - b.cal)
              break
            case 'score':
              products.sort((a, b) => a.score - b.score)
              break
          }
          !this.sorting.asc ? products.reverse() : ''
        }
        return products
      } else {
        return this.items
      }
    }
  },
  methods: {
    toggleToCart(product: Product) {
      if (this.cartStore.cart.some(cartItem => cartItem.id === product.id)) {
        this.cartStore.removeFromCart(product.id)
      } else {
        this.cartStore.addToCart(product)
      }
    },
    setSort(param: string) {
      if (this.sorting.param === param) {
        if (!this.sorting.asc) {
          this.sorting.param = ''
          this.sorting.asc = false
        } else {
          this.sorting.asc = false
        }
      } else {
        this.sorting.param = param
        this.sorting.asc = true
      }
    }
  }
})
</script>

<style scoped>

</style>