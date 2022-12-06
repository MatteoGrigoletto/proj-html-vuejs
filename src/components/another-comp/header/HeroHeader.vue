<template>
    <div class="bg-hero">
        <div class="text-hero">
            <h2>Brand New Arrivals</h2>
            <p>NEW COLLETION FROM NEW YORK</p>
            <div class="buttons-hero">
                <button class="my-button">VIEW ALL</button>
                <button class="my-button">LOOKBOOK</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HeroHeader',

    }
</script>

<style lang="scss" scoped>

.bg-hero{
    background-image: url(../../../assets/brend/home1_slide_three_bg_2.jpg);
    background-size: cover;
    color: white;
    position: relative;


    // icone  a destra della hero
    &::after{
        position: absolute;
        content: " Demos ";
        text-align: center;
        line-height: 70px;
        width: 70px;
        height: 70px;
        font-weight: bold;
        background-color: white;
        color:black;
        top: -1%;
        right: 1%;
        border-radius: 20px;
        box-shadow: 0px 0px 15px black;
        z-index: 99;
    }
    &::before{
        position: absolute;
        content: ' $ 39 ';
        text-align: center;
        line-height: 70px;
        width: 70px;
        height: 70px;
        font-weight: bold;
        color: green;
        background-color: white;
        font-size: 30px;
        top: 11%;
        right: 1%;
        border-radius: 20px;
        box-shadow: 0px 0px 15px black;
        z-index: 99;
    }
   .text-hero{
    text-align: center;
    padding: 200px 0px;

    h2{
        padding: 30px 0px;
        font-size: 50px;
    }
    p{
        padding: 30px 0px;
        font-size: 25px;
    }
    .buttons-hero{
    padding: 30px 0px;
    }
}
}


@media screen and (max-width: 1900px) {

 .bg-hero{
    display: none;     
}
}
</style>