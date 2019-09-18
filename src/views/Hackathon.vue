<template>
    <section class="group group--default has-grey-background   ">

        <div class="gallery-container">

        <div class="group__content-wrapper ">
            <div class="content group__content has-no-margin   ">
                <div class="content__text">
                    <span class="content__brow">Hackathons won by our students</span>
                    <div class="content__header">
                    </div>
                </div>
            </div>
        </div>


        <!-- swiper -->
        <swiper :options="swiperOption">

            <swiper-slide :key="index" v-for="(news ,index) in NewsDB">
                <!--<div class="card card&#45;&#45;default   card&#45;&#45;in-carousel " data-card-type="card"-->
                     <!--style="    text-align: center;">-->


                    <!--<a class="card__link" :href=news.url :title=news.title target="_blank"><span class="hidden-text">{{news.title}} </span></a>-->
                    <!--<div class="card__image" v-bind:style="{ backgroundImage: 'url(' + news.img + ')' }">-->
                        <!--<div class="icon-parent" style="width: 100%;    height: 50%;">-->
                            <!--&lt;!&ndash;<div class="content__source"&ndash;&gt;-->

                            <!--&lt;!&ndash;v-bind:style="{ backgroundImage: 'url(' + news.icon + ')' }"&ndash;&gt;-->


                            <!--&lt;!&ndash;&gt;&ndash;&gt;-->

                            <!--&lt;!&ndash;</div>&ndash;&gt;-->

                            <!--<img class="content__source"-->
                                 <!--:src="news.icon" alt="">-->
                        <!--</div>-->

                    <!--</div>-->


                    <!--<div class="content card&#45;&#45;in-carousel    ">-->


                        <!--<div class="content__text">-->

                            <!--<div class="content__header">-->
                                <!--<div class="content__title ">-->
                                    <!--{{news.title}}-->
                                <!--</div>-->
                            <!--</div>-->

                            <!--<div class="content__body">-->
                                <!--<p> {{ news.description}}</p>-->
                            <!--</div>-->

                        <!--</div>-->

                    <!--</div>-->
                    <!--&lt;!&ndash;<img class="news-icon"&ndash;&gt;-->
                    <!--&lt;!&ndash;:src="news.icon" alt="">&ndash;&gt;-->
                <!--</div>-->
                <GalleryCard></GalleryCard>



            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>



            <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
            <!--<div class="swiper-button-next" slot="button-next"></div>-->

        </swiper>

        <!--<v-spacer></v-spacer>-->
        <!--<v-spacer></v-spacer>-->

        </div>
    </section>
</template>
<script>
    import 'swiper/dist/css/swiper.css'


    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import GalleryCard from "@/components/GalleryCard";

    export default {
        name: 'Hackathon',
        data() {
            return{
            NewsDB: [
                {
                    description:"Your smartphone can turn into a microscope"
                    ,icon:"https://www.bostonherald.com/wp-content/uploads/2018/11/HeraldDotComBanner.svg"
                    ,id:"1"
                    ,img:"https://www.bostonherald.com/wp-content/uploads/2019/02/ovulatenl005.jpg?w=1024&h=693"
                    ,title:"Smartphone ovulation test a breakthrough at the Brigham"
                    ,url:"https://www.bostonherald.com/2019/03/02/smartphone-ovulation-test-a-breakthrough-at-the-brigham/"

            },
                {
                    description:"Your smartphone can turn into a microscope"
                    ,icon:"https://www.bostonherald.com/wp-content/uploads/2018/11/HeraldDotComBanner.svg"
                    ,id:"1"
                    ,img:"https://www.bostonherald.com/wp-content/uploads/2019/02/ovulatenl005.jpg?w=1024&h=693"
                    ,title:"Smartphone ovulation test a breakthrough at the Brigham"
                    ,url:"https://www.bostonherald.com/2019/03/02/smartphone-ovulation-test-a-breakthrough-at-the-brigham/"

            },
                {
                    description:"Your smartphone can turn into a microscope"
                    ,icon:"https://www.bostonherald.com/wp-content/uploads/2018/11/HeraldDotComBanner.svg"
                    ,id:"1"
                    ,img:"https://www.bostonherald.com/wp-content/uploads/2019/02/ovulatenl005.jpg?w=1024&h=693"
                    ,title:"Smartphone ovulation test a breakthrough at the Brigham"
                    ,url:"https://www.bostonherald.com/2019/03/02/smartphone-ovulation-test-a-breakthrough-at-the-brigham/"

            },
                {
                    description:"Your smartphone can turn into a microscope"
                    ,icon:"https://www.bostonherald.com/wp-content/uploads/2018/11/HeraldDotComBanner.svg"
                    ,id:"1"
                    ,img:"https://www.bostonherald.com/wp-content/uploads/2019/02/ovulatenl005.jpg?w=1024&h=693"
                    ,title:"Smartphone ovulation test a breakthrough at the Brigham"
                    ,url:"https://www.bostonherald.com/2019/03/02/smartphone-ovulation-test-a-breakthrough-at-the-brigham/"

            },
                {
                    description:"Your smartphone can turn into a microscope"
                    ,icon:"https://www.bostonherald.com/wp-content/uploads/2018/11/HeraldDotComBanner.svg"
                    ,id:"1"
                    ,img:"https://www.bostonherald.com/wp-content/uploads/2019/02/ovulatenl005.jpg?w=1024&h=693"
                    ,title:"Smartphone ovulation test a breakthrough at the Brigham"
                    ,url:"https://www.bostonherald.com/2019/03/02/smartphone-ovulation-test-a-breakthrough-at-the-brigham/"

            },

            ]
                ,
            swiperOption: {

                slidesPerView: 3,
                slidesPerColumn: 2,
                spaceBetween: 10,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            }
        }
    },
        components: {
            GalleryCard,
            swiper,
            swiperSlide
        },
    }
</script>
<style scoped>
    .group {
        padding: 85px 0 0 0;
    }


    .card__link[target=_blank]::after {


        background: center/cover no-repeat url(../assets/icons/link_icon.png);
        bottom: 12px;
        content: '';
        height: 14px;
        opacity: 0;
        position: absolute;
        right: 12px;
        transition: opacity .4s;
        width: 14px
    }


    @media only screen and (max-width: 767px) {


        .group {
            padding: 42px 0 0 0;
        }

    }

    .content__source {
        width: 100%;
        height: 50%;
        object-fit: contain;

    }


    .gallery-container{



        margin: 5%;

    }


</style>