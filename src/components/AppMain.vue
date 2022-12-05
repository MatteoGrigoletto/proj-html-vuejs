<template>
    <main>
        <section class="featured-products">
            <FeaturedProducts/>
        </section>
        <section class="collections">
            <CollectionsStore/>
        </section>
        <section class="best-sellers">
            <BestSellers :product = 'store.products'/>
        </section>
        <section class="discount">
            <ItemDiscount/>
        </section>
    </main>
</template>

<script>
import {store} from '../store';

import FeaturedProducts from './another-comp/main/FeaturedProducts.vue';
import CollectionsStore from './another-comp/main/CollectionsStore.vue';
import BestSellers from './another-comp/main/BestSellers.vue';
import ItemDiscount from './another-comp/main/ItemDiscount.vue';
    export default {
        name:'AppMain',
        data(){
            return{
                store,
            }
        },
        components:{
            FeaturedProducts,
            CollectionsStore,
            BestSellers,
            ItemDiscount,
        }
    }
</script>

<style lang="scss" scoped>

</style>