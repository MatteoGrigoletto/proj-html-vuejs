<template>
    <div class="container-70">
        <div class="logo">
            <img src="../../assets/brend/classic_shop_logo_footer.png" alt="">
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
                <div>
                    <button>Shop Now</button>
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
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
    .logo{
        img{
            width: 200px;
            filter: invert(100%);
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
                    padding: 10px;
                    a{
                        text-decoration: none;
                        color: inherit;
                    }
                }
            }
            div{
                padding: 10px;

                button{
                    margin: 0px 10px;
                    padding: 5px 10px;
                    border-radius: 20px;
                    background-color: var(--header_bg_button);
                    color: white;
                }
            }
        }
    }
}
</style>