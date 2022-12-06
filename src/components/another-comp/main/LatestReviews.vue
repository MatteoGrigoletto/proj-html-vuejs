<template>
    <div class="w">
        <div>
            <h3>LATEST REVIEWS</h3>
            <div v-for="item in store.products"  v-show="item.latestReviews === true " class="card">
                <div class="evidence-text">
                    <p>{{item.item}}</p>
                    <i v-for="index in 5" class="fa-solid fa-star" 
                        :class="item.rated >= index ? 'bg-blue' : 'bg-grey'"></i>
                    <p>{{item.price}}</p>
                </div>
                <div class="evidence-img">
                    <img :src="item.img" alt="">
                </div>
            </div>      
        </div>
    </div>
</template>

<script>
import {store} from '../../../store';
    export default {
        name:'TopItems',
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>

// FOGLIO DI STILE NON VISIBILE NEL GLOBALE SCSS    

  @import '../../../style/file-scss/evidenceItemsStyle.scss';
</style>