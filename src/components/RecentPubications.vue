<template>

    <section class="group group--pub    ">
        <div class="group__wrapper">


            <div class="group__content-wrapper">
                <div class="content group__content    ">
                    <div class="content__text">
                        <br>
                        <br>
                        <span class="content__brow">Publications</span>
                        <div class="content__header">
                            <h2 class="content__title ">

                                {{ BlockTitle}}
                            </h2>
                        </div>

                    </div>
                    <div class="content__ctas">

                        <router-link  class="button" exact to="/publications">


                            {{AllPubsButton}}
                        </router-link>



                    </div>
                </div>
            </div>

            <div class="group__gallery-wrapper">
                <div class="gallery gallery--pub
                     gallery--1-columns">
                    <!--<div class="gallery__wrapper">-->


                    <div v-for="idx in 5" :key="idx">

                    <single-publication :u-r-l="PublicationsDB[idx-1].URL"
                                        :authors="PublicationsDB[idx-1].Authors"
                                        :description="PublicationsDB[idx-1].Description"
                                        :issue="PublicationsDB[idx-1].Issue"
                                        :journal="PublicationsDB[idx-1].Journal"
                                        :link="PublicationsDB[idx-1].URL"
                                        :pages="PublicationsDB[idx-1].Pages" :pub-date="PublicationsDB[idx-1].Pubdate"
                                        :pubdate="PublicationsDB[idx-1].Pubdate" :title="PublicationsDB[idx-1].Title"
                                        :volume="PublicationsDB[idx-1].Volume" >


                    </single-publication>

                        </div>



                    <!--</div>-->
                </div>
            </div>
        </div>
    </section>


</template>

<script>
    import
        SinglePublication from "@/components/SinglePublication";
    import fs from '@/db/fs'

    export default {
        props: {
            BlockTitle: {
                type: String,
                required: true
                // default: 'Lucas'
            },
            AllPubsButton: {
                type: String,
                required: true
                // default: 'Lucas'
            },
            SortBy: {
                type: String,
                required: true
                // default: 'Lucas'
            }
        },
        name: "RecentPubications",
        components: {SinglePublication},
        data: function () {
            return {

                // SortBy:this.SortBy,



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
                // PublicationsDB: fs.collection('Publication').orderBy("Selected",'desc')
                PublicationsDB: fs.collection('Publication').orderBy(this.SortBy,'desc')

            }

        }
    }
</script>

<style scoped>


</style>

