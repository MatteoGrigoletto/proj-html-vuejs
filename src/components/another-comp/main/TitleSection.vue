<template>
    <div class="title-section">
        <h2 >{{title}}</h2>
        <p>{{info}}</p>
    </div>
</template>

<script>
    export default {
        name: 'TitleSection',
        props:{
            title: String,
            info: String,
        }
    }
</script>

<style lang="scss" scoped>

.title-section{
    padding: 50px 0px;
    position: relative;
    text-align: center;

    &::after{
        position: absolute;
        content: ' ';
        width: 300px;
        height: 2px;
        top: 50%;
        right: 15%;
        background-color: var(--position_absolute_color);
    }
    &::before{
        position: absolute;
        content: ' ';
        width: 300px;
        height: 2px;
        top: 50%;
        left: 15%;
        background-color: var(--position_absolute_color);
    }
    
    h2{
        font-size: 30px ;
        padding: 20px;
        color: black;
    }

}
</style>