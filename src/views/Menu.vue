<template>
  <main class="max-w-default mx-auto">
    <section class="flex flex-col mt-4 gap-4">
      <h1 class="mx-auto text-2xl">BREAKFAST MENU</h1>
      <div class="flex justify-between items-center w-full px-10">
        <div class="flex items-center gap-4">
          <label for="search">
            <img class="w-6 cursor-pointer" src="src/assets/zoom-svgrepo-com.svg" alt="search">
          </label>
          <input v-model="searchValue"  type="text" id="search" class="border-b py-2 px-4 focus:border-black transition">
        </div>
        <sorting-bar :sorting="sorting" @changeSorting="setSort" />
      </div>
    </section>
    <section class="grid grid-flow-row grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 px-10">
      <menu-item v-for="(item, idx) in filteredProducts" :key="idx" :product="item" />
    </section>
    <div v-if="filteredProducts.length === 0" class="px-10">
      Ничего не найдено
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import MenuItem from "@/components/MenuItem.vue"
import SortingBar from "@/components/SortingBar.vue"
import { Product } from "@/types/Product";
import { Sorting } from "@/types/Sorting";

interface State {
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
      searchValue: '',
      sorting: {
        param: '',
        asc: false
      },
      items: [
        {
          name: 'Каша рисовая с бананом и персиком',
          price: 100,
          img: 'https://img.vkusvill.ru/pim/images/site_BigWebP/ea8aaa60-d610-4a78-b60e-c773295368c7.webp?1692883746.4411',
          size: 200,
          cal: 347,
          score: 4.9,
        },
        {
          name: 'Злаковая каша с ягодами',
          price: 250,
          img: 'https://img.vkusvill.ru/pim/images/site_BigWebP/cc573251-62a2-44bc-baca-8f3564ac4586.webp?1668149836.5511',
          size: 250,
          cal: 210,
          score: 5.0,
        },
        {
          name: 'Крок Месье',
          price: 250,
          img: 'https://img.vkusvill.ru/pim/images/site_BigWebP/cb9bf6fe-7000-4d0c-946e-dc872e5d81e9.webp?1656466039.9399',
          size: 230,
          cal: 261,
          score: 4.9,
        },
        {
          name: 'Смузи «Клубника-Банан»',
          price: 120,
          img: 'https://img.vkusvill.ru/pim/images/site_BigWebP/ba4cf3c8-b534-47cc-9170-6e28d4535ca1.webp?1665397029.3864',
          size: 300,
          cal: 62.3,
          score: 4.8,
        }
      ]
    }
  },
  computed: {
    filteredProducts() {
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