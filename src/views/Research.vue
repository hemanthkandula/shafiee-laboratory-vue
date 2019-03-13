<template>
    <div class="news">

        <page-block  button="Research Projects"
                     button_link="/research"
                     description="Some thing to  Projects"
                     title="See our projects "


                :div-class="BlockLeft" :has-dark-background="DarkBackground"
                    :section-class=CalloutFullWidth ></page-block>


        <page-block  button="Explore Project"
                     button_link="/research"
                     description="Project 1 intro"
                     title="Project 1"


                :div-class="BlockLeft" :has-dark-background="DarkBackground"
                    :section-class=CalloutGrid :background-image="SP"></page-block>

        <page-block

                button="Explore Project"
                button_link="/research"
                description="Project 2 intro"
                title="Project 2"



                :div-class="BlockRight" :has-dark-background="DarkBackground"
                    :section-class=CalloutGrid :background-image="DC"></page-block>

        <page-block
                button="Explore Project"
                button_link="/research"
                description="Project 3 intro"
                title="Project 3"
                :div-class="BlockLeft" :has-dark-background="DarkBackground"
                    :section-class=CalloutGrid :background-image="NC"></page-block>

        <page-block
                button="Explore Project"
                button_link="/research"
                description="Project 4 intro"
                title="Project 4"

                :div-class="BlockRight" :has-dark-background="DarkBackground"
                    :section-class=CalloutGrid :background-image="SC"></page-block>

        <page-block

                button="Explore Project"
                button_link="/research"
                description="Project 5 intro"
                title="Project 5"

                :div-class="BlockLeft" :has-dark-background="NoDarkBackground"
                    :section-class=CalloutGrid :background-image="PC"></page-block>


    </div>
</template>

<script>
    import PageBlock from "@/components/PageBlock";
    import sc from "@/assets/images/Spermcard.jpg"

    import sp from "@/assets/images/Smartphonecard.jpg"

    import nc from "@/assets/images/nanocard.jpg"


    import pc from "@/assets/images/papercard.jpg"

    import dc from "@/assets/images/depcard.jpg"

    export default {
        name: "Research",
        components: {PageBlock},
        data: function () {
            return {
                SC:sc,

                SP:sp,
                NC:nc,
                PC:pc,
                DC:dc,
                CalloutFullWidth: 'callout--fullwidth',
                CalloutGrid: 'callout--grid',

                BlockHalfSize: 'block--half-size',
                BlockRight: 'block--default-right',
                BlockLeft: 'block--default-left',

                BlockCtaLeft: 'block--cta-left',
                BlockCtaRight: 'block--cta-right',
                DarkBackground: true,
                NoDarkBackground: false


            }
        }
    }
</script>

<style scoped>

</style>