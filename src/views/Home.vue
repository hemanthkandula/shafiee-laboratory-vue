<template>
    <div class="home">





<!--<homehexagon> </homehexagon>-->
        <hextest></hextest>
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
        <page-block   button="Positions"
                      button_link="/positions"
                      description="Some thing to  join us"
                      title="Join Us"

                :div-class="BlockLeft" :has-dark-background="NoDarkBackground"
                    :section-class=CalloutGrid></page-block>

        <page-block
                button="Research Project"
                button_link="/positions"
                description="Some thing to  Projects"
                title="See our projects "


                :div-class="BlockLeft" :has-dark-background="DarkBackground"
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

    export default {
        name: 'home',
        components: {
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


            }
        }

    }
</script>
