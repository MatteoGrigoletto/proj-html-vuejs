<template>
    <div >

        <div>
            <h3>ON SALE</h3>
            <div v-for="item in items"  v-show="item.onSale === true " class="card">
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
    export default {
        name:'SaleItems',
        props:{
            items: Object,
        }
    }
</script>

<style lang="scss" scoped>

// FOGLIO DI STILE NON VISIBILE NEL GLOBALE SCSS    

@import '../../../style/file-scss/evidenceItemsStyle.scss';

</style>