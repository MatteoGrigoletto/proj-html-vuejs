<template>
    <div class="container-70">
        <TitleSection
        title="Best Seller"
        info="Must have products from out top sellers"/>
        <div class="wrapper">
        <section id="section3">
            <a href="#section4" class="arrow__btn">‹</a>
            <div class="item" v-for="index in 5">
                <img  :src="product[index].img" alt="">
        </div>
            <a href="#section4" class="arrow__btn">›</a>
        </section>
        <section id="section4">
            <a href="#section3" class="arrow__btn">‹</a>
            <div class="item" v-for="index in 5">
                <img :src="product[index + 4].img" alt="">
        </div>
            <a href="#section3" class="arrow__btn">›</a>
        </section>

        </div>
    </div>
    
    </template>
    
    <script>
    import {store} from '../../../store';

    // HO IMPORTANTO UN COMPONENTE ALL'INTERNO DI UN  ALTRO COMPONENTE, COMPONENTE PER INSERIRE IL TITOLO DELLA SECTION
    import TitleSection from './TitleSection.vue';
        export default {
            name:'BestSellers',
        
        data(){
            return{
                store,
            }
        }, 
        props:{
            product: Object,
        },
        components:{
            TitleSection,
        }
        }
    </script>
    
    <style lang="scss" scoped>
    
    .wrapper{
        padding-top: 50px;
    }
    @import '../../../style/file-scss/slider.scss';
    </style>