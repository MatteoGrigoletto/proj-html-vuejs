<template>
    <header>
        <!-- barra di navigazione per il cliente, contenente il proprio account e il carello -->
        <section class="user-bar">
            <UserBar/>
        </section>
        <section class="StorageBar">
            <StorageBar/>
        </section>
        
    </header>
</template>

<script>
import UserBar from './another-comp/UserBar.vue';
import StorageBar from './another-comp/StorageBar.vue';
    export default {
        name:'AppHeader',
        components:{
            UserBar,
            StorageBar
        }
    }
</script>

<style lang="scss" scoped>

</style>