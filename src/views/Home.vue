<template>
    <div class="home">





<!--<homehexagon> </homehexagon>-->

        <hex-test-mobile v-if="Mobile"


                ></hex-test-mobile>
        <hextest v-else></hextest>








        <recent-publication>
        </recent-publication>

        <news-slider>

        </news-slider>



        <!--<ResearchAreas/>-->


        <page-block :div-class="BlockRight" :has-dark-background="DarkBackground"
                    :background-image="lab"
                    button="People"
                    button_link="/people"
                    description="Some thing about people"
                    title="Our Team"


                    :section-class=CalloutFullWidth >


        </page-block>


        <page-block
                button="Research Project"
                button_link="/Research"
                description="Some thing to  Projects"
                title="See our projects "


                :div-class="BlockCtaLeft" :has-dark-background="DarkBackground"
                    :section-class=CalloutGrid></page-block>


        <page-block
                button="Positions"
                button_link="/positions"
                description="Something to  Join Us"
                title="Join Us"

                :background-image="joinus"



                :div-class="BlockRight" :has-dark-background="DarkBackground"
                :section-class=CalloutFullWidth></page-block>


       <contact id="contact">





       </contact>




    </div>
</template>

<script>
    // @ is an alias to /src
    import RecentPublication from '@/components/RecentPubications'
    import NewsSlider from "@/components/NewsSlider";
    import PageBlock from "@/components/PageBlock";
    import Hextest from "@/components/hextest";
    import Contact from "@/views/contact";
    import lab2 from "@/assets/images/lab2.jpg"
    import HexTestMobile from "@/components/HexTestMobile";

    import joinus from "@/assets/images/joinus1.jpg"


    export default {
        name: 'home',
        components: {
            HexTestMobile,

            Contact,
            Hextest,




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


        },

        beforeDestroy() {
            // Unregister the event listener before destroying this Vue instance
            window.removeEventListener('resize', this.onResize)
        }

    }
</script>
