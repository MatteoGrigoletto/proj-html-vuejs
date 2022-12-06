<template>
    <section class="brend-section">
        <BrendSection/>
    </section>
</template>

<script>
import BrendSection from './another-comp/main/BrendSection.vue';
    export default {
        name:'AppFooter',
        
        components:{
            BrendSection,
        }
    }
</script>

<style lang="scss" scoped>

.brend-section{
    background-color: var(--bg_brend_section);
    padding: 60px 0px;
}

</style>