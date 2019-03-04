<template>
    <div class="contact">

        <page-block :div-class="BlockCtaLeft" :has-dark-background="NoDarkBackground"
                    :section-class=CalloutFullWidth></page-block>

    </div>
</template>

<script>
    import PageBlock from "@/components/PageBlock";
    export default {
        name: "contact",
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