<template>
    <div class="container-70">
        <div class="">
            <div class="title-section">
                <h2>Featured Products</h2>
                <p>Must have products from our top sellers</p>
            </div>
            <div class="gender-selector">
                <button>Men</button>
                <button>Women</button>
                <button>Accessories</button>
            </div>
        </div>
        <div class="preview">
            <div class="card" v-for="item in store.products" v-show="item.gender == 'men dress' ">
                <div class="img-card">
                    <img :src="item.img" alt="">
                </div>
               <div class="text-card">
                <h5>{{item.item}}</h5>
                <small>{{item.type}}</small>
                <p>{{item.price}}</p>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
import {store} from '../../../store';

    export default {
        name:'FeaturedProducts',
        data(){
            return{
                store,
            }
        }    
    }
</script>

<style lang="scss" scoped>

.container-70{

    div{
        text-align: center;
        .title-section{
            padding: 50px 0px;

            h2{
                font-size: 30px ;
            }

        }
        .gender-selector{
            padding: 30px 0px;
            button{
                padding: 10px 20px;
            }
        }
    }
}
.preview{
    display: flex;
    margin-bottom: 200px;
    .card{
        width: calc(100% /4 - 10px) ;
        height: 500px;
        margin: 5px;
        .img-card{
            height: 440px;

            img{
                height: 100%;
                object-fit: cover;
            }
        }
        .text-card{
            > *{
                padding: 10px 0px;
            }
        }
    }
}

</style>