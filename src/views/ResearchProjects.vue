<template>
    <section class="group group--default    has-grey-background">

        <div class="group__content-wrapper">


            <div class="content group__content    ">
                <div class="content__text">

                    <div class="content__header">
                        <h2 class="content__title ">
                           Selected Research Projects
                        </h2>

                    </div>

                    <!--<div class="content__body">-->
                        <!--<p>text about it </p>-->
                    <!--</div>-->
                </div>

            </div>
        </div>

        <div class="group__gallery-wrapper">




            <div class="gallery gallery--content-card

      gallery--3-columns



">

                <div class="gallery__wrapper">

                    <div :key="index" class="gallery__item " v-for="(img,index) in projct_images">

                        <div class="card card--content    " data-card-type="card"
                             @mouseover="hover = true"
                             @mouseleave="hover = false"
                        >


                            <a class="card__link" :href=projectsurl+removespaces(project_name[index]) :title=project_name[index] target="_blank">

                                <span class="hidden-text">project_name[index]</span>
                            </a>



                            <div  class="cardimage"

                                 v-bind:style="{ backgroundImage: 'url(' + img + ')' }"

                            >


                                <!--<div class="content     ">-->
                                    <!--<div class="content__text">-->
                                        <!--<div>-->
                                            <!--<div class="content__header">-->
                                                <!--<div class="content__title ">-->
                                                    <!--Research Project 1-->
                                                <!--</div>-->

                                            <!--</div>-->

                                            <!--<div class="content__body">-->
                                                <!--<p>Projects descrition</p>-->
                                            <!--</div>-->
                                        <!--</div>-->
                                    <!--</div>-->


                                    <!--<div class="content__ctas">-->


                                        <!--<router-link class="button" exact to='/project-description'>-->
                                            <!--Explore Project-->


                                        <!--</router-link>-->



                                    <!--</div>-->

                                <!--</div>-->







                            </div>
                            <div class="content     ">



                                <div class="content__ctas">


                                    <router-link class="button" exact :to=projectsurl+removespaces(project_name[index])>
                                        Explore Project


                                    </router-link>



                                </div>

                            </div>







                        </div>


                    </div>







                </div>
            </div>
        </div>

    </section>



</template>

<script>

    import maleinf from '../assets/images/projects/male_infertility/young-couple-looking-screen-mobile.jpg'
    import african from '../assets/images/project-images/african.jpg'
    import ovulatuion from '../assets/images/project-images/ovulation2.jpg'
    import zika from '../assets/images/project-images/zika-main.jpg'

    import paper from '../assets/images/project-images/paper-main.jpg'


    export default {
        name: "ResearchProjects",
        data:function () {
            return{

                // hover:false,

                projectsurl:'projects/',

                maleinf:maleinf,
                african:african,
                ovulatuion:ovulatuion,
                paper:paper,
                zika:zika
                ,
                projct_images:[maleinf,ovulatuion,african,zika,paper],
                project_name:['A smartphone based test for male fertility',
                                'AI powered device to detect signs of ovulation',
                                'Affordable cellphone based tool to detect HIV',
                    'Rapid Zika detection test uses smartphone technology',
                    'A low cost flexible paper microchips detections and diagnostics'
                               ]




            }



        },  methods:  {


            removespaces:function (string) {

                return string.split(' ').join('-')


            }
        }

    }
</script>

<style scoped>


    .cardimage{

        height: 70%;
        width: inherit;
        background-size: cover;
        /*background-size: 100% 100%;*/

        /*background-image: url(../assets/images/projects/male_infertility/male-infertility-test-smart-phone.jpg)*/
    }

    /*.card:hover> .content{*/
        /*visibility: visible;*/

    /*}*/


    /*.card:hover> .cardimage{*/
        /*background-image: none;*/
        /*!*background-image: linear-gradient(180deg, rgba(0,0,0,0) 80%, rgba(0,0,0,1) 20%);*!*/


    /*}*/

    /*.content {*/
        /*visibility: hidden;*/
    /*}*/

</style>