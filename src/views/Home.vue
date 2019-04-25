<template>
    <div class="home">





<!--<homehexagon> </homehexagon>-->

        <!--<hex-test-mobile v-if="Mobile"-->


                <!--&gt;-->

        <!--</hex-test-mobile>-->
        <!--<hextest v-else>-->

        <!--</hextest>-->



        <home-videos-mobile v-if="Mobile">

        </home-videos-mobile>
<home-videos v-else></home-videos>





        <recent-publication SortBy="Selected"
                            BlockTitle="Selected Publications"
                            AllPubsButton="See our publications"
        >
        </recent-publication>

        <news-slider>

        </news-slider>



        <!--<ResearchAreas/>-->



        <page-block :div-class="BlockRight" :has-dark-background="DarkBackground"
                    :background-image="lab"
                    button="People"
                    button_link="/people"
                    description=""
                    title="Our Team"


                    :section-class=CalloutFullWidth >


        </page-block>


        <research-projects></research-projects>



        <!--<page-block-->
                <!--button="Research Project"-->
                <!--button_link="/Research"-->
                <!--description="Some thing to  Projects"-->
                <!--title="See our projects "-->


                <!--:div-class="BlockCtaLeft" :has-dark-background="DarkBackground"-->
                    <!--:section-class=CalloutGrid></page-block>-->


        <page-block
                button="Positions"
                button_link="/positions"
                description=""
                title="Join Us"

                :background-image="joinus"



                :div-class="BlockRight" :has-dark-background="DarkBackground"
                :section-class=CalloutFullWidth></page-block>


       <contact id="contact">





       </contact>




    </div>
</template>

<script>




    const RecentPublication = () => import('../components/RecentPubications.vue')
    const NewsSlider = () => import('../components/NewsSlider.vue')

    const PageBlock = () => import('../components/PageBlock.vue')
    const Contact = () => import('../views/contact.vue')
    const ResearchProjects = () => import('../views/ResearchProjects.vue')
    const HomeVideos = () => import('../components/HomeVideos.vue')
    const HomeVideosMobile = () => import('../components/HomeVideosMobile.vue')

    import lab2 from "../assets/images/lab2.jpg"
    import  joinus  from "../assets/images/joinus1.jpg"



    export default {
        name: 'home',
        components: {
            HomeVideosMobile,
            HomeVideos,
            ResearchProjects,

            Contact,




            PageBlock,
            NewsSlider,
            RecentPublication
        },
        data: function () {
            return {
                CalloutFullWidth: 'callout--fullwidth',
                CalloutGrid: 'callout--grid',

                BlockHalfSize: 'block--half-size',
                BlockRight: 'block--default-right',
                BlockLeft: 'block--default-left',

                BlockCtaLeft: 'block--cta-left',
                BlockCtaRight: 'block--cta-right',
                DarkBackground: true,
                NoDarkBackground: false,
                lab:lab2
                ,
                joinus:joinus,
                Mobile:false,



            }
        },
        methods:{

            checkMobile:function(){

                if( screen.width <= 767 ) {
                    this.Mobile = true

                    // return true;
                }

                else if (screen.width +50< screen.height ){
                    this.Mobile = true

                }else {
                    this.Mobile = false


                }

            },




            isMobile:function() {
                this.checkMobile();

                return this.Mobile;

            },

            onResize() {
                // console.log('window has been resized', event)



                if( screen.width <= 767 ) {
                    this.Mobile = true

                    // return true;
                }

                else if (screen.width +50< screen.height ){
                    this.Mobile = true

                }else {
                    this.Mobile = false


                }

            }


        },


        mounted() {

            this.checkMobile();

            window.addEventListener('resize', this.onResize)

            window.addEventListener('load', () => {
                console.error("HOME LOADED")
            })


        },ready() {
            console.error("HOME LOADED 2")
        },

        beforeDestroy() {
            // Unregister the event listener before destroying this Vue instance
            window.removeEventListener('resize', this.onResize)
        }

    }
</script>
