<template>
    <div class="container-70">
        <div class="info-email" >
            <div class="email-logo">
                <i class="fa-regular fa-envelope"></i>
            </div>
            <div class="email-text">
                <h3>Subscribe now and get special offers</h3>
            </div>
        </div>
        <div class="sloat-email">
            <form action="">
                <input type="text" placeholder="insert your email">
                <button class="my-button"> SEND</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name:'EmailSubscribe',
    }
</script>

<style lang="scss" scoped>

.container-70{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .info-email{
        display: flex;
        align-items: center;

        .email-logo{
            width: 70px;
            height: 70px;
            border-radius: 100%;
            background-color: var(--bg_information_section);
            text-align: center;
            line-height: 70px;
            color: white;
            font-size: 30px;
        }
        .email-text{
            padding: 0px 40px;
            font-weight: bolder;
            font-size: 27px;
            color: var(--color_email_section);
        }
    }
    .sloat-email{
        input{
            width:  400px;
            padding: 5px 10px;
            border-radius: 20px;
        }
        button{
            padding: 5px 50px;
            background-color: var(--footer_bg_button);
            border: none;
        }
    }
}

//MEDIA QUERIES

@media screen and (max-width:800px){
    .email-logo, .email-text{
        display: none;
    }
    .sloat-email{
        width: 100%;
        
        form{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            > *{
                margin: 10px 0px;
            }
        }
    }
}

@media screen and (min-width:801px) and (max-width: 1900px){
    .email-logo, .email-text{
        display: none;
    }
    .sloat-email{
        width: 100%;
        
        form{
            text-align: center;
        }
    }
}
</style>