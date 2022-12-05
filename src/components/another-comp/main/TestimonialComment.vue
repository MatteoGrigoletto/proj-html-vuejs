<template>
    <div class="container-testimonial">
        <div class="container-50">
            <div class="testimonial-img">
                <img src="../../../assets/testimonial/man_testimonial.png" alt="">
            </div>
            <div class="testimonial-text">
                <p>Curabutis non tristique tortor. Vestibulum aliquet susciplit ipsm in volitpat. Donex el lacinia sem, vitae semper nulla.
                    In hac habiotasse platea soctumst. Maurus cibsectetyr est et nibh sadip hendrerit bibendum.
                </p>
                <h4>Dario Pineda, Theme Fusion</h4>
                <div>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'TestimonialComment',
    }
</script>

<style lang="scss" scoped>

.container-testimonial{
    background-image: url(../../../assets/testimonial/testimonials_home_1_bg.jpg);

    .container-50{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 100px 0px;
        .testimonial-img{
            width: 100px;
        }
        .testimonial-text{
            padding: 30px 0px;
            color: white;
            text-align: center;

            > *{
                padding: 20px 0px;

                button{
                    border-radius: 50%;
                    padding: 5px;
                    margin: 5px;

                    &:last-child{
                        background-color: transparent;
                        border: 1px solid white;
                    }
                }
            }
        }
    }
}
</style>