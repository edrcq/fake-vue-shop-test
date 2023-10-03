<script setup lang="ts">
import { useProductsStore } from '@/stores/products';
import type { Product } from '@/types/product.interface';
import { computed, reactive, toRefs } from 'vue';

const productStore = useProductsStore()

// on type la reactive qui est generic afin d'etre sur de son type
const product = reactive<Product>({
    name: "",
    description: "",
    price: 0,
    availability: 0,
})

// automatiquement mis a jour si dependances mis a jour
const productStockValue = computed(() => product.availability * product.price)

const handleSubmit = () => {
    console.log('handle submit')
    productStore.addProduct(product)
    // on reset le formulaire
    product.name = ""
    product.description = ""
}

// toRefs permet de deconstruire les reactives
const { price, availability } = toRefs(product)

</script>

<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="name">Name</label>
                <input type="text" id="name" v-model="product.name">
            </div>
            <div>
                <label for="description">description</label>
                <input type="text" id="description" v-model="product.description">
            </div>
            <div>
                <label for="price">Price</label>
                <input type="text" id="price" v-model="price">
            </div>
            <div>
                <label for="avail">Avail.</label>
                <input type="text" id="avail" v-model="availability">
            </div>
            <div>
                Total value: {{ productStockValue }}
            </div>
            <button>Add product</button>
        </form>

        <div>
            {{ product }}
        </div>

        <div v-if="productStore.products.length == 0">
            Pas de produit
        </div>
        <div v-else>
            <div v-for="(product, i) in productStore.products" :key="i">
                <ul>
                    <li v-for="(val, k) in product" :key="`${k}${i}`">
                        {{ k }} = {{ val }}
                    </li>
                </ul>
                <hr>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
