<template>
    <div class="container-70">
        <TitleSection
        title="From Our Blog"
        info="The latest Classic Shop news"/>
        <div class="container-blog">
            <div class="blog">
                <div class="blog-img">
                    <img src="../../../assets/collections/post_img_12-700x441.jpg" alt="">
                </div>
                <div class="blog-text">
                    <h3>Aenean lobortis sapien enim viverra</h3>
                    <small>September 9th,2015 | 0 Comments</small>
                    <p>Donex finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla.</p>
                </div>
            </div>
            <div class="blog">
                <div class="blog-img">
                    <img src="../../../assets/collections/post_img_11-700x441.jpg" alt="">
                </div>
                <div class="blog-text">
                    <h3>Duis ac massa semper maximus</h3>
                    <small>September 9th,2015 | 0 Comments</small>
                    <p>Donex finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla.</p>
                </div>
            </div>
            <div class="blog">
                <div class="blog-img">
                    <img src="../../../assets/collections/post_img_10-700x441.jpg" alt="">
                </div>
                <div class="blog-text">
                    <h3>Nunc fermint nulla eu justo sem id</h3>
                    <small>September 9th,2015 | 0 Comments</small>
                    <p>Donex finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TitleSection from './TitleSection.vue';
    export default {
        name:'FromBlog',
        components:{
            TitleSection,
        }
    }
</script>

<style lang="scss" scoped>

.container-70{
    position: relative;

    &::after{
        position: absolute;
        content: '';
        height: 1px;
        width: 140%;
        left:  -20%;
        background-color: var(--position_absolute_color);
    }
    .container-blog{
        display: flex;
        padding: 50px 0px;
        
        .blog{
            width: calc(100% / 3 - 30px);
            margin: 15px;
            padding: 5px;
            background-color: rgb(247, 239, 239);
            .blog-text{

                > *{
                    padding: 10px 0px;
                }
            }
        }
    }
}

//  MEDIA QUERIES 

@media screen and (max-width:1200px){

.container-70{
    .container-blog{
        flex-wrap: wrap;
        .blog{
            width: 100%;
            text-align: center;
            }
        }
    }
}
</style>