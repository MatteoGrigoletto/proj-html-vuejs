<template>
    <main>
        <section class="featured-products">
            <FeaturedProducts/>
        </section>
    </main>
</template>

<script>
import {store} from '../store';

import FeaturedProducts from './another-comp/main/FeaturedProducts.vue';
    export default {
        name:'AppMain',
        data(){
            return{
                store,
            }
        },
        components:{
            FeaturedProducts,
        }
    }
</script>

<style lang="scss" scoped>

</style>