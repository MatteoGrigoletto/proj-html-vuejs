<template>
    <div class="container-70">
        <TitleSection
        title="Best Seller"
        info="Must have products from out top sellers"/>
        <div class="wrapper">
        <section id="section1">
            <a href="#section2" class="arrow__btn">‹</a>
            <div class="item" v-for="index in 5">
                <img  :src="newProducts[index].img" alt="">
        </div>
            <a href="#section2" class="arrow__btn">›</a>
        </section>
        <section id="section2">
            <a href="#section1" class="arrow__btn">‹</a>
            <div class="item" v-for="index in 5">
                <img :src="newProducts[index + 4].img" alt="">
        </div>
            <a href="#section1" class="arrow__btn">›</a>
        </section>

        </div>
    </div>
    
    </template>
    
    <script>
    import {store} from '../../../store';

    // HO IMPORTANTO UN COMPONENTE ALL'INTERNO DI UN  ALTRO COMPONENTE, COMPONENTE PER INSERIRE IL TITOLO DELLA SECTION
    import TitleSection from './TitleSection.vue';
        export default {
            name:'NewArrivals',
        
        data(){
            return{
                store,
            }
        }, 
        props:{
            newProducts: Object,
        },
        components:{
            TitleSection,
        }
        }
    </script>
    
    <style lang="scss" scoped>
    
    .container-70{
        padding: 100px 0px;
    }
    @import '../../../style/file-scss/slider.scss';
    </style>