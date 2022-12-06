<template>
    <section class="brend-section">
        <BrendSection/>
    </section>
    <section class="email-subscribe">
        <EmailSubscribe/>
    </section>
</template>

<script>
import BrendSection from './another-comp/footer/BrendSection.vue';
import EmailSubscribe from './another-comp/footer/EmailSubscribe.vue';

    export default {
        name:'AppFooter',
        
        components:{
            BrendSection,
            EmailSubscribe,
        }
    }
</script>

<style lang="scss" scoped>

section{
    padding: 60px 0px;
}
.brend-section{
    background-color: var(--bg_brend_section);
    padding: 60px 0px;
}
.email-subscribe{
    background-color: var(--bg_email_section);
}

</style>