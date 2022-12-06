<template>
    <div class="container-70">
        <div>
            <div class="brend-img">
                <img src="../../../assets/brend/classic_shop_logo_footer.png" alt="">
            </div>
            <div class="info-brend">
                <nav>
                    <ul>
                        <li><a href="#">12345 North Main Street</a></li>
                        <li><a href="#">New York, NY 555555</a></li>
                        <li>Phone: <a href="#">1.800.555.6789</a></li>
                        <li>Email: <a href="#"></a>info@company.com</li>
                        <li>Web: <a href="#">Theme-fusion.com</a></li>
                    </ul>
                </nav>
            </div>
            <div class="social-brend">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
            </div>
        </div>
        <TopItems
        :items="store.products"/>
        <div>ciao</div>
        <div>ciao</div>
    </div>
</template>

<script>
import {store} from '../../../store';
import TopItems from '../main/TopItems.vue';
    export default {
        name:'PageInformation',
        data(){
            return{
                store,
            }
        },

        components:{
            TopItems,
        }
    }
</script>

<style lang="scss" scoped>

.container-70{
    display: flex;
    >div{
        width: 25%;
        .brend-img{
            width: 70%;
        }
        .info-brend{
            padding: 50px 0px 30px;
            ul{
                list-style: none;

                li{
                    padding: 5px 0px;
                
                    a{
                        text-decoration: none;
                        color: white;
                    }
                }
            }
        }
        .social-brend{

            i{
                padding: 0px 10px;
                font-size: 20px;
            }
        }
    }
}
</style>