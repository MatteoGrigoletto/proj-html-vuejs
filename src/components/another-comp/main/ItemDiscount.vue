<template>
    <div class="offers">
        <div class="container-70">
            <div class="best-discount">
                <h2>70% Off</h2>
                <p>Vivamus tempor leo lacus, feugiat</p>
                <p>Ut magna aliquam erat</p>
                <button class="my-button">VIEW MORE</button>
            </div>
            <div class="free-shipping">
                <h2>Free Shipping</h2>
                <p>Vivamus tempor leo lacus, feugiat</p>
                <p>Ut magna aliquam erat</p>
                <button class="my-button">VIEW MORE</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'ItemDiscount',
    }
</script>

<style lang="scss" scoped>

.offers{
    background-color: azure;
    padding: 100px 0px;
    .container-70{
        display: flex;
        
        > *{
            width: calc(100% / 2 - 40px);
            margin: 20px;
            height: 370px;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            > * {
                margin: 10px 40px 10px 40px;
                color:white;
            }
        }
        .best-discount{
            background-image: url(../../../assets/collections/promo_box_1_bg.jpg);
        }
        .free-shipping{
            background-image: url(../../../assets/collections/promo_box_2_bg.jpg);
        }
    }
}
</style>