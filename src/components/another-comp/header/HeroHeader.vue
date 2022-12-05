<template>
    <div class="bg-hero">
        <div class="text-hero">
            <h2>Brand New Arrivals</h2>
            <p>NEW COLLETION FROM NEW YORK</p>
            <div class="buttons-hero">
                <button>VIEW ALL</button>
                <button>LOOKBOOK</button>
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

    &::after{
        position: absolute;
        content: ' Demos';
        text-align: center;
        width: 70px;
        height: 70px;
        background-color: white;
        color:black;
        top: -1%;
        right: 1%;
        border-radius: 20px;
        box-shadow: 0px 0px 15px black;
        z-index: 40;
    }
    &::before{
        position: absolute;
        content: 'On Sale ';
        text-align: center;
        width: 70px;
        height: 70px;
        background-color: white;
        color: black;
        top: 11%;
        right: 1%;
        border-radius: 20px;
        box-shadow: 0px 0px 15px black;
        z-index: 40;
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
    
    button{
        background-color: transparent;
        color: white;
        border: 1px solid white;
        border-radius: 20px;
        padding: 10px 20px;
        margin: 0px 10px;
        }
    }
}

}

</style>