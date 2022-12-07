<template>
    <div class="container-40">
        <div class="copyright">
            <p>@Copyright 2012-2022 | Avada Theme by Theme Fusion | All Rights Reserved | Powered by WordPress</p>
            <img src="../../../assets/brend/payment_cards_footer.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name:'PaymentSection',
    }
</script>

<style lang="scss" scoped>

.copyright{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        margin-top: 20px;
        width: 300px;
        height: 30px;
    }
}

// MEDIA QUERIES

@media screen and (max-width:1200px){
    .copyright{
        
        p{
            display: none;
        }
    }
}
</style>