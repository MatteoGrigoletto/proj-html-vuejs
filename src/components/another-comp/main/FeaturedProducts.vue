<template>
    <div class="container-70">
        <div class="">
           <TitleSection 
           title ="Featured Products"
           info="Must have products from our top sellers"/>
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
                    <span class="radiant"></span>
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
// HO IMPORTANTO UN COMPONENTE ALL'INTERNO DI UN  ALTRO COMPONENTE, COMPONENTE PER INSERIRE IL TITOLO DELLA SECTION
import TitleSection from './TitleSection.vue';

    export default {
        name:'FeaturedProducts',
        data(){
            return{
                store,
            }
        },
        components:{
            TitleSection,
        }    
    }
</script>

<style lang="scss" scoped>

.container-70{

    div{
        text-align: center;    
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
    margin-bottom: 100px;
    .card{
        width: calc(100% /4 - 10px) ;
        height: 500px;
        margin: 5px;
        .img-card{
            height: 440px;
            position: relative;

            img{
                height: 100%;
                object-fit: cover;
            }
            span{
                text-align: center;
                line-height: 440px;
                color: white;
                font-size: 40px;
            }
        }
        .text-card{
            > *{
                padding: 10px 0px;
            }
        }
    }
}

.radiant{
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(#e66465, #9198e5);
    opacity: 0.7;
    display: none; 
}
.radiant::before{
    position: absolute;
    content: '';
    height: 80px;
    width: 80px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(30, 29, 29);
    border-radius: 50%;
    font: var(--fa-font-solid);
    content: "\f007";
    opacity: 1;
    line-height: 80px;
    font-size: 20px;
}
.img-card:hover .radiant{
        display: block;
}

//  MEDIA QUERIES 

@media screen and ( max-width: 600px){
    .preview{
        flex-wrap: wrap;
        .card{
            width: 100%;
        }
    }
}

@media screen and (min-width:601px) and ( max-width: 1200px){
    .preview{
        flex-wrap: wrap;
        justify-content: center;
        .card{
            width: 40%;
        }
    }
}
</style>