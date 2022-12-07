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
        <section class="evidence container-70" >
            <FeaturedItems/>
            <SaleItems/>
            <TopItems/>
            <LatestReviews/>
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
import FeaturedItems from './another-comp/main/FeaturedItems.vue';
import SaleItems from './another-comp/main/SaleItems.vue';
import TopItems from './another-comp/main/TopItems.vue';
import LatestReviews from './another-comp/main/LatestReviews.vue';
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
            FeaturedItems,
            SaleItems,
            TopItems,
            LatestReviews,
        }
    }
</script>

<style lang="scss" scoped>

section{
    padding: 60px 0px;
}
.discount{
    background-color: azure;
}
.evidence{
    display: flex;
    padding: 60px 0px;

    >div{
        width: calc(100% / 4 - 20px);
        margin: 10px;
    }
}


@media screen and (max-width: 1900px){
    .evidence{
        display: none;
    }
}
</style>