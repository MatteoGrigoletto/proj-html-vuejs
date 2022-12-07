<template>
    <div class="container-70">
        <div class="logo">
            <img src="../../../assets/brend/classic_shop_logo2x.png" alt="">
        </div>
        <div class="nav-bar">
            <nav>
                <ul>
                    <li><a href="#">Home <i class="fa-solid fa-chevron-down"></i></a></li>
                    <li><a href="#"> Shop <i class="fa-solid fa-chevron-down"></i></a></li>
                    <li><a href="#">Products <i class="fa-solid fa-chevron-down"></i></a></li>
                    <li><a href="#">Categories <i class="fa-solid fa-chevron-down"></i></a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Elements <i class="fa-solid fa-chevron-down"></i></a></li>
                </ul>
                <div class="btn-box">
                    <button class="my-button">Shop Now</button>
                    <button class="btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>    
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name:'StorageBar',

    }
</script>

<style lang="scss" scoped>

.container-70{
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
    .logo{
        img{
            width: 200px;
        }
    }
    .nav-bar{
        nav{
            display: flex;
            align-items: center;
            ul{
                display: flex;
                list-style: none;

                li{
                    padding: 20px 20px;

                    &:hover{
                        background-color: rgb(248, 243, 243);
                        color: var(--header_bg_button);
                        border-radius: 20px;
                    }
                    a{
                        text-decoration: none;
                        color: inherit;
                    }
                }
            }
            div{
                padding: 10px;
                .my-button{
                    background-color: var(--header_bg_button);
                }
                .btn-search{
                    background-color: transparent;
                    border:none;
                    padding: 10px;
                    border-radius: 100% ;
                }
            }
        }
    }
}

// MEDIA QUERIES

@media screen and (max-width: 1900px) {
  
.container-70{
    flex-direction: column;
    align-items: center;

    .btn-box{
        display: none;
    }
}
i{
    display: none;
}
}
</style>