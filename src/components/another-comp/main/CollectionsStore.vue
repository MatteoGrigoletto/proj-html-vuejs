<template>
    <div class="container-collection">
        <div class="first-collection">
            <h2>Winter Collection</h2>
            <p>STYLISH AND WARM</p>
            <button class="my-button">VIEW MORE</button>
        </div>
        <div class="second-collection">
            <h2>Winter Collection</h2>
            <p>STYLISH AND WARM</p>
            <button class="my-button">VIEW MORE</button>
        </div>
        <div class="third-collection">
            <h2>Winter Collection</h2>
            <p>STYLISH AND WARM</p>
            <button class="my-button">VIEW MORE</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'CollectionsStore',
    }
</script>

<style lang="scss" scoped>

.container-collection{
    display: flex;
    
    > *{
        height: 600px;
        background-size: cover;
        width: calc(100% / 3);
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;

        > *{
            margin: 20px 0px;
            color: white;
        }
    }
    .first-collection{
        background-image: url(../../../assets/collections/winter_collection_bg.jpg);
    }
    .second-collection{
        background-image: url('../../../assets/collections/spring_collection_bg.jpg');
    }
    .third-collection{
        background-image: url('../../../assets/collections/autumn_collection_bg.jpg');
    }
}

</style>