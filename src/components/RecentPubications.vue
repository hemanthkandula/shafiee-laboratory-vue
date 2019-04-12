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


                    <div v-for="idx in setcount(SortBy)" :key="idx">

                    <single-publication :u-r-l="FilteredPublicationsDB[idx-1].URL"
                                        :authors="FilteredPublicationsDB[idx-1].Authors"
                                        :description="FilteredPublicationsDB[idx-1].Description"
                                        :issue="FilteredPublicationsDB[idx-1].Issue"
                                        :journal="FilteredPublicationsDB[idx-1].Journal"
                                        :link="FilteredPublicationsDB[idx-1].URL"
                                        :pages="FilteredPublicationsDB[idx-1].Pages" :pub-date="FilteredPublicationsDB[idx-1].Pubdate"
                                        :pubdate="FilteredPublicationsDB[idx-1].Pubdate" :title="FilteredPublicationsDB[idx-1].Title"
                                        :volume="FilteredPublicationsDB[idx-1].Volume" >


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
            },
            Tag: {
                type: String,
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


                filteryearslist: [],
                FilteredPublicationsDB: [],

            }

        },
        firestore() {
            return {
                // PublicationsDB: fs.collection('Publication').orderBy("Selected",'desc')


                PublicationsDB: fs.collection('Publication').orderBy('Serial', 'desc')




        }
    }

    ,watch:{


            PublicationsDB:function () {
                this.FilteredPublicationsDB =this.PublicationsDB


                this.filteryearslist = this.groupBy(this.PublicationsDB, 'Projects');

                if(this.SortBy==='Selected'){
                    // this.FilteredPublicationsDB =this.PublicationsDB
                    this.filteryearslist = this.groupBy(this.PublicationsDB, 'Selected');
                    this.FilteredPublicationsDB = this.filteryearslist['yes'].sort(function(first, second) {
                        return first.Serial - second.Serial;
                    });





                }
                else {

                    this.FilteredPublicationsDB = this.filteryearslist[this.Tag]

                    // console.error(this.filteryearslist[this.Tag])
                }


            },

    }



        ,methods:{


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


            filterproject:function (position) {

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






            }
            ,
            setcount:function (Sortby) {

                if(Sortby==='Selected'){
                    return this.FilteredPublicationsDB.length
                }
                else {
                    return this.FilteredPublicationsDB.length
                }



            }

        }







    }
</script>

<style scoped>


</style>

