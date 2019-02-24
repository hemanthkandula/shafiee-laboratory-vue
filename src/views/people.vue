<template>
    <div class="people">


        <page-block :div-class="BlockHalfImage" :has-dark-background="NoDarkBackground"
                    :section-class=CalloutFullWidth></page-block>


        <section class="has-grey-background">


            <vs-card>

                <v-img src=""></v-img>
            </vs-card>


        </section>

        <section class="copy copy--sidebar article--big-lede ">
            <div class="copy__wrapper">


                <div class="content     ">
                    <div class="content__text">

                        <div class="content__header">

                            <div class="content__subtitle">
                                Dr. Hadi Shafiee is a faculty member at the Division of Engineering in Medicine and
                                Renal Division of Medicine at Brigham and Women’s Hospital, Harvard Medical School.
                            </div>
                        </div>

                        <div class="content__body">
                            <p> Dr. Shafiee’s lab aims to integrate biology/medicine with micro- and nanotechnology to
                                develop innovative tools and solve unmet clinical problems,
                                including applications in infectious disease diagnostics and treatment monitoring for
                                global health, vaccine delivery, and fertility. His lab is
                                particularly interested in developing point-of-care diagnostics through utilizing
                                advances in consumer electronics, nanotechnology, and optical/electrical/magnetic
                                sensing modalities.
                                His work was featured on the cover of Science Translational Medicine, Advanced
                                Functional Materials, Nanoscale, Small, and Lab-Chip,
                                and was also highlighted by some of the major news outlets including CNN, theguardian,
                                Boston Globe, CBS News, New York Times, STAT, NPR,
                                Scientific American, and Yahoo, etc. His work on developing paper microchip technologies
                                for point-of-care viral load measurement received several
                                awards, including 2014 BWH Bright Futures Prize and 2015 Innovation Evergreen Award from
                                Harvard Medical School.</p>
                        </div>
                    </div>

                </div>
                <aside class="aside aside--quote ">
                    <div class="quote  quote--aside">
                        <div class="quote__text">
                            <p> we aim to integrate biology/medicine with micro- and nanotechnology to develop
                                innovative tools and solve unmet clinical problems,
                                including applications in infectious disease diagnostics and treatment monitoring for
                                global health, vaccine delivery, and fertility.</p>
                        </div>
                        <div class="quote__source">
                            <div class="quote__image"
                                 style="background-image: url(http://shafieelab.bwh.harvard.edu/wp-content/uploads/2015/01/Hadi.jpg)"></div>

                            <div class="quote__details">
            <span class="quote__author">
            Hadi Shafiee
          </span>

                                <span class="quote__title">Principal investigator </span>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>


        </section>


        <section>
            <vs-row>
                <vs-col v-tooltip="'col - 10'" vs-align="center" vs-justify="center" vs-offset="1" vs-type="flex"
                        vs-w="10">


                    <vs-tabs vs-alignment="fixed" vs-position="bottom">
                        <vs-tab vs-label="Postdoctoral Fellows">
                            <div>
                                <page-block :div-class="BlockHalfImage" :has-dark-background="NoDarkBackground"
                                            :section-class=CalloutFullWidth></page-block>


                            </div>
                        </vs-tab>
                        <vs-tab vs-label="Graduate Researchers">
                            <div>
                                <page-block :div-class="BlockHalfImage" :has-dark-background="NoDarkBackground"
                                            :section-class=CalloutFullWidth></page-block>
                                <page-block :div-class="BlockHalfImage" :has-dark-background="NoDarkBackground"
                                            :section-class=CalloutFullWidth></page-block>

                            </div>
                        </vs-tab>
                        <vs-tab vs-label="Undergraduate Researchers">
                            <div>
                                <page-block :div-class="BlockHalfImage" :has-dark-background="NoDarkBackground"
                                            :section-class=CalloutFullWidth></page-block>
                                <page-block :div-class="BlockHalfImage" :has-dark-background="NoDarkBackground"
                                            :section-class=CalloutFullWidth></page-block>
                                <page-block :div-class="BlockHalfImage" :has-dark-background="NoDarkBackground"
                                            :section-class=CalloutFullWidth></page-block>

                            </div>
                        </vs-tab>
                        <vs-tab vs-label="High School Interns">
                            <div>
                                <page-block :div-class="BlockHalfImage" :has-dark-background="NoDarkBackground"
                                            :section-class=CalloutFullWidth></page-block>

                            </div>
                        </vs-tab>
                    </vs-tabs>


                </vs-col>
            </vs-row>
        </section>
        <section>
            <vs-row>
                <vs-col v-tooltip="'col - 10'" vs-align="center" vs-justify="center" vs-offset="1" vs-type="flex"
                        vs-w="10">
                    <v-expansion-panel>
                        <v-expansion-panel-content>
                            <div slot="header">Alumni</div>
                            <v-card>
                                <vs-tabs vs-alignment="fixed" vs-position="bottom">
                                    <vs-tab vs-label="Postdoctoral Fellows">
                                        <div>
                                            <page-block :div-class="BlockHalfImage"
                                                        :has-dark-background="NoDarkBackground"
                                                        :section-class=CalloutFullWidth></page-block>


                                        </div>
                                    </vs-tab>
                                    <vs-tab vs-label="Graduate Researchers">
                                        <div>
                                            <page-block :div-class="BlockHalfImage"
                                                        :has-dark-background="NoDarkBackground"
                                                        :section-class=CalloutFullWidth></page-block>
                                            <page-block :div-class="BlockHalfImage"
                                                        :has-dark-background="NoDarkBackground"
                                                        :section-class=CalloutFullWidth></page-block>

                                        </div>
                                    </vs-tab>
                                    <vs-tab vs-label="Undergraduate Researchers">
                                        <div>
                                            <page-block :div-class="BlockHalfImage"
                                                        :has-dark-background="NoDarkBackground"
                                                        :section-class=CalloutFullWidth></page-block>
                                            <page-block :div-class="BlockHalfImage"
                                                        :has-dark-background="NoDarkBackground"
                                                        :section-class=CalloutFullWidth></page-block>
                                            <page-block :div-class="BlockHalfImage"
                                                        :has-dark-background="NoDarkBackground"
                                                        :section-class=CalloutFullWidth></page-block>

                                        </div>
                                    </vs-tab>
                                    <vs-tab vs-label="High School Interns">
                                        <div>
                                            <page-block :div-class="BlockHalfImage"
                                                        :has-dark-background="NoDarkBackground"
                                                        :section-class=CalloutFullWidth></page-block>

                                        </div>
                                    </vs-tab>
                                </vs-tabs>


                            </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </vs-col>


            </vs-row>

        </section>


    </div>

</template>

<script>

    import PageBlock from "@/components/PageBlock";

    export default {
        name: "people",
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

                BlockHalfImage: 'block--half-image'
            }
        },

        components: {PageBlock},
    }
</script>

<style scoped>


</style>