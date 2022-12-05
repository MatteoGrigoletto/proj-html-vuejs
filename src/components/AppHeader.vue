<template>
    <header>
        <!-- barra di navigazione per il cliente, contenente il proprio account e il carello -->
        <section class="user-bar">
            <UserBar/>
        </section>
        
    </header>
</template>

<script>
import UserBar from './another-comp/UserBar.vue';
    export default {
        name:'AppHeader',
        components:{
            UserBar,
        }
    }
</script>

<style lang="scss" scoped>

</style>