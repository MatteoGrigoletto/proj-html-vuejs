<template>
    <div class="container-70">
        <div class="social">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
        </div>
        <div class="user-account">
            <div>
                <button>Shopping cart</button>
            </div>
            <div>
                <button>My account <i class="fa-solid fa-chevron-down"></i></button>
            </div>
            <div>
                <button><i class="fa-solid fa-cart-shopping"></i>  CART <i class="fa-solid fa-chevron-down"></i> </button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name:'UserBar',

    }
</script>

<style lang="scss" scoped>
.container-70{
    display: flex;
    justify-content: space-between;
    position: relative;

    &::after{
        position: absolute;
        content: '';
        width: 150%;
        height: 1px;
        bottom: 0%;
        left: -25%;
        background-color: var(--position_absolute_color);

    }
    .social{
        font-size: 20px;
        i{
            padding: 20px 20px 20px 0px;
        }
    }
    .user-account{
        display: flex;

        div{

            button{
                padding: 20px 40px;
                border: none;
                background-color: transparent;
                border-right: 1px solid var(--position_absolute_color);
            }
        }

    }
}

// MEDIA QUERIES
@media screen and (max-width:800px){
    .container-70{
        display: none;
    }
}

@media screen and (min-width:801px) and (max-width:1200px){
    .social{
        display: none;
    }
    .user-account{
        width: 100%;
        justify-content: center;

        i{
            display: none;
        }
    }
}

@media screen and (min-width:1201px) and (max-width: 1900px){

    .social{
        display: none;
    }
    .user-account{
        width: 100%;
        justify-content: center;
    }
}
</style>