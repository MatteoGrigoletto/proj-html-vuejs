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

    .social{
        
        i{
            padding: 10px;
        }
    }
    .user-account{
        display: flex;

        div{
            padding: 10px;
        }

    }
}
</style>