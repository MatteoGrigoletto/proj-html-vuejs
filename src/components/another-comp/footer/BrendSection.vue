<template>
    <div class="container-70">
        <h2>BRANDS LOGO</h2>
        <div class="container-logo">
            <div class="logo" v-for="brand in store.brands">
                <img :src="brand.logo" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import {store} from '../../../store';
    export default {
        name:'BrendSection',
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
.container-70{
text-align: center;

h2{
    color: var(--color_brend_section);
}
    .container-logo{
        display: flex;

        .logo{
            width: calc(100% / 7 - 20px);
            margin: 10px;
        }
    }
}

//MEDIA QUERIES

@media screen and (max-width:1200px){
    .container-70{
        .container-logo{
            flex-wrap: wrap;
            justify-content: center;
            .logo{
                width: calc(100% / 3 - 20px);
            }
        }
    }
}
</style>