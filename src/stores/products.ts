import type { Product, ProductWithId } from "@/types/product.interface";
import { defineStore } from "pinia";

interface ProductStoreState {
    products: ProductWithId[]
}

export const useProductsStore = defineStore('products', {
    state: (): ProductStoreState => ({
        products: [],
    }),
    actions: {
        addProduct(product: Product) {
            // call API pour ajouter le produit
            const responseProduct = {
                ...product,
                id: Math.random()
            }
            this.products.push(responseProduct)
            // sinon :
            // this.fetchProducts()
        },
        
        fetchProducts() {
            // call API recuperer tous les produits
            
        }
    }
})
