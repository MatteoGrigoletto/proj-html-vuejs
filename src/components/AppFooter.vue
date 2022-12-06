<template>
    <section class="brend-section">
        <BrendSection/>
    </section>
    <section class="email-subscribe">
        <EmailSubscribe/>
    </section>
    <section class="site-information">
        <PageInformation/>
    </section>
</template>

<script>
import BrendSection from './another-comp/footer/BrendSection.vue';
import EmailSubscribe from './another-comp/footer/EmailSubscribe.vue';
import PageInformation from './another-comp/footer/PageInformation.vue';


    export default {
        name:'AppFooter',
        
        components:{
            BrendSection,
            EmailSubscribe,
            PageInformation,
        }
    }
</script>

<style lang="scss" scoped>

section{
    padding: 60px 0px;
    color: white;
}
.brend-section{
    background-color: var(--bg_brend_section);
    padding: 60px 0px;
}
.email-subscribe{
    background-color: var(--bg_email_section);
}
.site-information{
    background-color: var(--bg_information_section);
}

</style>