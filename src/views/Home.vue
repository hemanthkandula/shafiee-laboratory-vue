<template>
    <div class="home">

        <RecentPublication>
        </RecentPublication>

        <NewsSlider>

        </NewsSlider>


        <page-block :div-class="BlockCtaLeft" :has-dark-background="NoDarkBackground"
                    :section-class=CalloutGrid></page-block>
        <page-block :div-class="BlockCtaRight" :has-dark-background="DarkBackground"
                    :section-class=CalloutFullWidth></page-block>


        <page-block :div-class="BlockRight" :has-dark-background="NoDarkBackground"
                    :section-class=CalloutGrid></page-block>


    </div>
</template>

<script>
    // @ is an alias to /src
    import RecentPublication from '@/components/RecentPubications'
    import NewsSlider from "@/components/NewsSlider";
    import PageBlock from "@/components/PageBlock";

    export default {
        name: 'home',
        components: {
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
                NoDarkBackground: false


            }
        }

    }
</script>
