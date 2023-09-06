import { defineStore } from "pinia";
import type { CartProduct } from "@/types/CartProduct";
import type { Product } from "@/types/Product";

interface State {
    cart: CartProduct[]
}

export const useCartStore = defineStore('cartStore', {
    state: (): State => ({
        cart: []
    }),
    getters: {
        cartTotalCount() {
            return this.cart.length
        },
        cartPriceTotal() {
            return this.cart.reduce((sum, product) => sum + product.price * product.count, 0)
        }
    },
    actions: {
        addToCart(product: Product) {
            this.cart.push({...product, count: 1})
        },
        removeFromCart(idx: number) {
            const findIdx = this.cart.findIndex(cartItem => cartItem.id === idx)
            this.cart.splice(findIdx, 1)
        },
        updateCount(idx: number, count: number) {
            this.cart.find(cartItem => cartItem.id === idx).count = count
        }
    }
})