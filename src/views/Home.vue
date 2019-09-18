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
                :section-class=CalloutFullWidth>



        </page-block>







       <!--<contact id="contact">-->





       <!--</contact>-->



        <v-spacer> </v-spacer>

        <section>


            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.1511429748016!2d-71.10297968454377!3d42.360618079186715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3775598d2d543%3A0x8128b9442fa977c4!2s65%20Landsdowne%20St%2C%20Cambridge%2C%20MA%2002139!5e0!3m2!1sen!2sus!4v1568756130333!5m2!1sen!2sus" width="96%" height="600" frameborder="0" style="border:0; margin-left:2%; margin-right:0px; margin-top:30px; margin-bottom:30px;  " allowfullscreen=""></iframe>

        </section>






    </div>
</template>

<script>




    const RecentPublication = () => import('../components/RecentPubications.vue')
    const NewsSlider = () => import('../components/NewsSlider.vue')

    const PageBlock = () => import('../components/PageBlock.vue')
    // const Contact = () => import('../views/contact.vue')
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

            // Contact,




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

            // window.addEventListener('load', () => {
            //     console.error("HOME LOADED")
            // })


        },ready() {
            // console.error("HOME LOADED 2")
        },

        beforeDestroy() {
            // Unregister the event listener before destroying this Vue instance
            window.removeEventListener('resize', this.onResize)
        }

    }
</script>

