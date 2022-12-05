<template>
    <div v-for="item in  store.products">
        <img :src="item.img" alt="">
    
    </div>
</template>

<script>
import {store} from '../store';
    export default {
        name:'AppMain',
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>