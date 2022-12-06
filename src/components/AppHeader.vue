<template>
    <header>
        <!-- barra di navigazione per il cliente, contenente il proprio account e il carello -->
        <section class="user-bar">
            <UserBar/>
            <StorageBar/>
        </section>
        <!-- hero -->
        <section class="hero">
            <HeroHeader/>
        </section>
        
    </header>
</template>

<script>
import UserBar from './another-comp/header/UserBar.vue';
import StorageBar from './another-comp/header/StorageBar.vue';
import HeroHeader from './another-comp/header/HeroHeader.vue';
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

.user-bar{
    z-index: 80;
    position: fixed;
    width: 100%;
    background: var(--header_bg_gradient);
    border-bottom: 1px solid var(--position_absolute_color);
    
}
.hero{
    padding-top: 90px;
}
</style>
