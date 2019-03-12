<template>
    <div>






        <CoversSlider></CoversSlider>






        <section class="search search--default is-list-view is-ready" data-pk="">
            <vs-row>
                <vs-col v-tooltip="'col - 5'" vs-align="center" vs-justify="center" vs-offset="4" vs-type="flex"
                        vs-w="4">
                    <h2 class="search__title">Journal Publications</h2>

                    <div>


                    </div>
                </vs-col>
            </vs-row>

            <div class="search__wrapper ">





                <vs-row>
                    <vs-col v-tooltip="'col - 12'" vs-align="center" vs-justify="center" vs-offset="0" vs-type="flex"
                            vs-w="12">
                        <div class="search__main"
                        >


                            <!-- ngIf: 0 == countCtrl.countTotalResults() -->

                            <div class="">
                                <!-- ngRepeat: card in searchCtrl.getCurrentPage() -->


                                <single-publication :authors="Publication.Authors"
                                                    :description="Publication.Description"
                                                    :issue="Publication.Issue"
                                                    :journal="Publication.Journal" :key="idx"
                                                    :link="Publication.URL" :pages="Publication.Pages"
                                                    :pub-date="Publication.Pubdate" :pubdate="Publication.Pubdate"
                                                    :title="Publication.Title" :volume="Publication.Volume"
                                                    v-for="(Publication,idx) in PublicationsDB">
                                    <!--{{ Publication.Authors }}-->

                                </single-publication>


                            </div>


                        </div>
                    </vs-col>
                </vs-row>

            </div>


        </section>
        <page-block :div-class="BlockHalfImage" :has-dark-background="NoDarkBackground"
                    :section-class=CalloutFullWidth></page-block>


    </div>
</template>

<script>
    import SinglePublication from "@/components/SinglePublication";
    import PageBlock from "@/components/PageBlock";
    // import {db} from '../main'

    import db from '@/db'
    import CoversSlider from "@/components/CoversSlider";



    export default {
        name: "publications",
        components: {CoversSlider, PageBlock, SinglePublication},
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

                BlockHalfImage: 'block--half-image',
                PublicationsDB: [],
                Authors: '',
                URL: '',

                Title: '',
                pubDate: '',
                Year: '',

                Volume: '',
                Publisher: '',
                Journal: '',
                Source: '',
                Pubdate: '',
                Serial: '',


                newReptile: ''
            }

        },
        firestore() {
            return {
                PublicationsDB: db.collection('Publications').orderBy("Serial")

            }

        }
    }
</script>

<style scoped>


</style>