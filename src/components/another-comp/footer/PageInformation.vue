<template>
    <div class="container-70">
        <div class="all-info">
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
        <TopItems class="top-items"
        :items="store.products"/>
        <div class="posts">
            <h3>RECENT POSTS</h3>
            <div v-for="post in store.posts" class="post">
                <p><i class="fa-solid fa-chevron-right"></i> {{post.text}}</p>
            </div>
        </div>
        <div class="tags">
            <h3>TAGS</h3>
            <button v-for="tag in store.tags" class="single-tag">{{tag}}</button>
        </div>
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
.posts{

    .post{
        padding:14px 0px;
        position: relative;

        &::after{
            position: absolute;
            content: '';
            width: 80%;
            height: 1px;
            bottom: -10%;
            background-color: var(--position_absolute_color);
        }

    }
}
.tags{
    .single-tag{
        padding: 10px 15px;
        margin: 3px;
        background-color: transparent;
        color: white;
        border-color: white;
        
        &:hover{
            background-color: var(--position_absolute_color);
        }
    }
}

// MEDIA QUERIES

@media screen and (max-width: 1900px ){
    .container-70{
        justify-content: center;
        .all-info{
            width: 100%;
            .brend-img{
                display: none;
            }
            .info-brend, .social-brend{
                text-align: center;
            }
        }
    .top-items, .posts, .tags{
        display: none;
        }
    }
}
</style>