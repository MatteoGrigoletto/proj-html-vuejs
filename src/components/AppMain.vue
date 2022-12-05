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
        <section class="NewProducts">
            <NewArrivals :newProducts = 'store.products'/>
        </section>
        <section class="testimonial">
            <TestimonialComment/>
        </section>
        <section class="blog">
            <FromBlog/>
        </section>
    </main>
</template>

<script>
// STORE IMPORTANTO PER PASSARE I DATI  ALL'INTERNO DEI COMPONENTI
import {store} from '../store';
// COMPONENTI IMPORTATI
import FeaturedProducts from './another-comp/main/FeaturedProducts.vue';
import CollectionsStore from './another-comp/main/CollectionsStore.vue';
import BestSellers from './another-comp/main/BestSellers.vue';
import ItemDiscount from './another-comp/main/ItemDiscount.vue';
import NewArrivals from './another-comp/main/NewArrivals.vue';
import TestimonialComment from './another-comp/main/TestimonialComment.vue';
import FromBlog from './another-comp/main/FromBlog.vue';
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
            NewArrivals,
            TestimonialComment,
            FromBlog,
        }
    }
</script>

<style lang="scss" scoped>

</style>