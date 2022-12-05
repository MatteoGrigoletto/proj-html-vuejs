<template>
    <header>
        <!-- barra di navigazione per il cliente, contenente il proprio account e il carello -->
        <section class="user-bar">
            <UserBar/>
        </section>
        <!-- barra contenente la navigazione per accedere alle diverse pagine all'interno del sito -->
        <section class="StorageBar">
            <StorageBar/>
        </section>
        <!-- hero -->
        <section class="hero">
            <HeroHeader/>
        </section>
        
    </header>
</template>

<script>
import UserBar from './another-comp/UserBar.vue';
import StorageBar from './another-comp/StorageBar.vue';
import HeroHeader from './another-comp/HeroHeader.vue';
    export default {
        name:'AppHeader',
        components:{
            UserBar,
            StorageBar,
            HeroHeader,
        }
    }
</script>

<style lang="scss" scoped>

</style>