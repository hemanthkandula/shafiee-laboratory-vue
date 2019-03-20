<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>






        <CoversSlider></CoversSlider>






        <section class="search search--default is-list-view is-ready" data-pk="">

            <v-layout wrap text-xs-center>
                <v-flex xs12 sm12 md12>
                    <h2 class="search__title">Journal Publications</h2>

                </v-flex>
            </v-layout>

            <div class="search__wrapper ">





                <!--<vs-row>-->
                    <!--<vs-col v-tooltip="'col - 12'" vs-align="center" vs-justify="center" vs-offset="0" vs-type="flex"-->
                            <!--vs-w="12">-->


    <div class="filters search__filters ng-scope">
        <!--<h5 class="filters__title">Filters<span class="filters__reset is-visible" >-->
            <!--<a  href="">Reset filters</a></span></h5>-->

        <div class="filter ng-scope is-active" data-filter="" id="year" style="height: 450px;">
        <button class="filter__title ng-binding">
            Year
        </button>
        <div class="filter__list" data-filter-list="">


            <div  :key="idx" v-for="(year,idx) in getallyesrs()">
            <v-checkbox v-model="checkboxyears"  :value=year  >
                <template v-slot:label >

                    <span  ><Strong>{{year}}</Strong></span>
                    <!--<span class="filter__option-count ng-binding">144</span>-->


                </template>

            </v-checkbox>
            </div>
        </div>
    </div>
    </div>





                        <div class="search__main">


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
                                                    v-for="(Publication,idx) in FilteredPublicationsDB" :u-r-l="Publication.URL">
                                    <!--{{ Publication.Authors }}-->

                                </single-publication>


                            </div>


                        </div>
                    <!--</vs-col>-->
                <!--</vs-row>-->

            </div>


        </section>



    </div>
</template>

<script>
    import SinglePublication from "@/components/SinglePublication";

    // import {db} from '../main'

    import fs from '@/db/fs'
    import CoversSlider from "@/components/CoversSlider";





    export default {
        name: "publications",
        components: {CoversSlider, SinglePublication},
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


                newReptile: '',


                filteryearslist: [],
                checkboxyears: [],
                FilteredPublicationsDB: [],







            }

        },
        
        firestore() {
            return {


                PublicationsDB: fs.collection('Publications_backup').orderBy("Serial")

            }

        },   watch:{


            PublicationsDB:function () {
                this.FilteredPublicationsDB =this.PublicationsDB


                this.filteryearslist = this.groupBy(this.PublicationsDB, 'Year');




            },

            checkboxyears:function () {

                if (this.checkboxyears.length===0){
                    this.FilteredPublicationsDB =this.PublicationsDB

                } else {

                    this.FilteredPublicationsDB = this.filteryear(this.checkboxyears)


                }
                
            }
        },methods:{


            groupBy:function(objectArray, property) {

                return objectArray.reduce(function (acc, obj)
                    {
                        var key = obj[property];
                        if (!acc[key]) {
                            acc[key] = [];
                        }
                        acc[key].push(obj);
                        return acc;
                    },
                    {});
            },


            filteryear:function (position) {

                // console.error(position)


                let pubs = []

                // let position_filtered = this.groupBy(this.NewsDB,'position');
                for (var i = 0; i < position.length; i++) {
                    // console.error(position[i])

                    var pub_one = this.filteryearslist[position[i]]

                    for (var j = 0; j < pub_one.length; j++) {


                        // console.error(pub_one[j])

                    pubs.push(pub_one[j])

                    }


                }





                return pubs






            },
            getallyesrs:function () {
                let sorted = [];

                for(let key in this.filteryearslist) {
                    sorted[sorted.length] = key;
                }
                sorted.sort().reverse();

                return sorted


            }

        }



    }
</script>

<style scoped>


</style>