<template>
    <div class="news">

        <page-block :div-class="BlockLeft" :has-dark-background="DarkBackground"
                    :section-class=CalloutFullWidth></page-block>


        <page-block :div-class="BlockRight" :has-dark-background="NoDarkBackground" :key="index"
                    :section-class=CalloutGrid
                    v-for="(col,index) in 10"></page-block>


    </div>
</template>

<script>
    import PageBlock from "@/components/PageBlock";
    export default {
        name: "news",
        components: {PageBlock},
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

<style scoped>

</style>