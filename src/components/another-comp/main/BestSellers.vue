<template>
    <div class="container-70">
        <div class="wrapper">
        <section id="section4">
            <a href="#section5" class="arrow__btn">‹</a>
            <div class="item" v-for="index in 5">
                <img  :src="product[index].img" alt="">
        </div>
            <a href="#section5" class="arrow__btn">›</a>
        </section>
        <section id="section5">
            <a href="#section4" class="arrow__btn">‹</a>
            <div class="item" v-for="index in 5">
                <img :src="product[index + 4].img" alt="">
        </div>
            <a href="#section4" class="arrow__btn">›</a>
        </section>

        </div>
    </div>
    
    </template>
    
    <script>
    import {store} from '../../../store';
        export default {
            name:'BestSellers',
        
        data(){
            return{
                store,
            }
        }, 
        props:{
            product: Object,
        }
        }
    </script>
    
    <style lang="scss" scoped>
    
    .container-70{
        padding: 100px 0px;
    }
    @import '../../../style/file-scss/slider.scss';
    </style>