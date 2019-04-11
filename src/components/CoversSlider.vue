<template>

<div>


    <!--<section class="group group&#45;&#45;default    ">-->


        <v-layout wrap text-xs-center>
                <v-flex xs12 sm12 md12>


                <h2 class="search__title">Journal Cover Articles
                </h2>
            </v-flex>
        </v-layout>

        <div class="group__content-wrapper">
            <div class="content group__content has-no-margin   ">
                <div class="content__text">
                    <span class="content__brow"> <br></span>
                    <div class="content__header">
                    </div>
                </div>
            </div>
        </div>




        <!-- swiper -->
        <swiper :options="swiperOption">
            <swiper-slide :key="index" v-for="(cover ,index) in Coversurls.length">

                <!--<div class="card card&#45;&#45;default   card&#45;&#45;in-carousel " data-card-type="card">-->
                    <!--<a class="card__link" :href=news.url :title = news.title  target="_blank" ><span class="hidden-text">News 1 </span></a>-->


                    <!--<div class="swiper__image" v-bind:style="{  backgroundImage: 'url(' + news.img + ')' }"></div>-->

                    <div class="swiper__image" v-bind:style="{ backgroundImage: 'url(' + Coversurls[index] + ')' }">


                    <!--</div>-->


                </div>


            </swiper-slide>




            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>

    <!--</section>-->




</div>
</template>

<script>


    import 'swiper/dist/css/swiper.css'


    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    // import dbstorage from "@/db/storage"

    // import db from "@/db/index"

    // import  logo from "@/assets/homecen.jpg"

    import c1 from "@/assets/images/covers/1.png"
    import c2 from "@/assets/images/covers/2.jpg"
    import c3 from "@/assets/images/covers/3.png"
    import c4 from "@/assets/images/covers/4.png"
    import c5 from "@/assets/images/covers/5.png"
    import c6 from "@/assets/images/covers/6.jpg"
    import c7 from "@/assets/images/covers/7.jpg"
    import c8 from "@/assets/images/covers/8.png"




    export default {
        name: "CoversSlider",
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {

                    effect: 'coverflow',
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,

                    },

                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },

                newsdata: null,
                meta : [],
                NewsDB: [],

                Coversurls: [ c1,c2,c3,c4,c5,c6,c7,c8]



            }
        },

    created(){



        },
        methods:{

            // getcovers: function (){
            //
            //     var storageRef = db.storage().ref();
            //
            //
            //     var metadata = {
            //         contentType: 'image/jpeg',
            //     };
            //
            //
            //
            //     storageRef.child('images/homecen.jpg').put(logo, metadata).then(function(snapshot) {
            //         // console.log('Uploaded', snapshot.totalBytes, 'bytes.');
            //         // console.log('File metadata:', snapshot.metadata);
            //         // Let's get a download URL for the file.
            //         snapshot.ref.getDownloadURL().then(function(url) {
            //             url;
            //             // console.log('File available at', url);
            //             // [START_EXCLUDE]
            //             // [END_EXCLUDE]
            //         });
            //     }).catch(function(error) {
            //         error;
            //         // [START onfailure]
            //         // console.error('Upload failed:', error);
            //         // [END onfailure]
            //     });
            //     // [END oncomplete]
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            // }

        }

        ,
        // storage(){
        //
        //
        //     const storageRef = dbstorage.ref();
        //
        //     // console.error(storageRef)
        //
        //
        //     // console.error("getcover called ")
        //
        //
        //
        //     storageRef.child('images/c.jpg').getDownloadURL().then(function(url){
        //
        //         this.Coversurls.push(url)
        //         // console.error("gi got ref")
        //
        //
        //
        //     }).catch(function(error) {
        //
        //
        //
        //
        //         // A full list of error codes is available at
        //         // https://firebase.google.com/docs/storage/web/handle-errors
        //         switch (error.code) {
        //
        //
        //
        //
        //
        //
        //             case 'storage/object-not-found':
        //                 // File doesn't exist
        //                 break;
        //
        //             case 'storage/unauthorized':
        //                 // User doesn't have permission to access the object
        //                 break;
        //
        //             case 'storage/canceled':
        //                 // User canceled the upload
        //                 break;
        //
        //             case 'storage/unknown':
        //                 // Unknown error occurred, inspect the server response
        //                 break;
        //         }
        //     });
        //
        //
        // }







    }
</script>

<style scoped>
    .swiper-slide {
        width: 300px;
        height: 388px;
    }



    .swiper-button-next{

        background-image: url(../assets/icons/arrow-point-to-right.svg);
    }

    .swiper-button-prev{
        background-image: url(../assets/icons/angle-pointing-to-left.svg);


    }



    .swiper__image {
        background: center/cover no-repeat #f1f3f4;

        height: 100%;
        width: 100%;
        object-fit: contain


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



    .swiper-inner {
        width: 100%;
        height: 400px;
        padding-top: 50px;
        padding-bottom: 50px;
    }



    @media only screen and (max-width: 767px){
        .swiper-slide {
            width: 20vw;
            height: 60vw;
        }

    }
    @media only screen and (max-width: 1023px){
        .swiper-slide {
            width: 300px;
            height: 388px;
        }

    }



</style>