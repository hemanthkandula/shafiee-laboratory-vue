<template>

    <div>


        <section class="callout callout--grid  ">
            <div class="block block--default-right  has-mobile-bg">
                <div class="block__background is-loaded"


                     v-bind:style="{ backgroundImage: 'url(' + projct_images[index] + ')' }"


                ></div>
                <!--<div class="block__background&#45;&#45;mobile is-loaded"-->
                     <!--style="background-image: url(/static/images/home/home_research-m.jpg);"></div>-->

            </div></section>



        <!--<page-block-->
                <!--button="Project Title"-->
                <!--button_link="/Research"-->
                <!--description=""-->
                <!--title=""-->
                <!--:ButtonExist=FALSE-->

                <!--:background-image="projct_images[index]"-->




                <!--:div-class="BlockCtaLeft" :has-dark-background="Backgrounds[index]"-->
                <!--:section-class=CalloutGrid></page-block>-->


        <!--<section class="article    ">-->
            <!--<div class="article__wrapper ">-->


                <!--<aside class="article-side article-side&#45;&#45;left ">-->

                    <!--<h3 class="article-side__item-title">News articles covered</h3>-->
                    <!--<ul class="article-side__list ">-->

                        <!--<li :key="index" v-for="(img,index) in 5">-->
                            <!--<a href="">-->
                                <!--Article name-->
                            <!--</a>-->
                        <!--</li>-->

                    <!--</ul>-->

                <!--</aside>-->








                <!--<div class="content article__content    ">-->
                    <!--<div class="content__text">-->

                        <!--<div class="content__header">-->
                            <!--<h2 class="content__title ">-->
                                <!--{{project_name[index]}}-->
                                <!--<br>-->
                                <!--&lt;!&ndash;<br>&ndash;&gt;-->
                                <!--&lt;!&ndash;<br>&ndash;&gt;-->
                                <!--&lt;!&ndash;About the project&ndash;&gt;-->
                            <!--</h2>-->

                        <!--</div>-->

                        <!--<div class="content__body">-->
                            <!--&lt;!&ndash;<p>&ndash;&gt;-->
                                <!--&lt;!&ndash;{{content}}&ndash;&gt;-->
                            <!--&lt;!&ndash;</p>&ndash;&gt;-->

                            <!--<span v-html="content"></span>-->

                        <!--</div>-->
                    <!--</div>-->

                <!--</div>-->
                <!--<aside class="article-side article-side&#45;&#45;right ">-->

                    <!--<h3 class="article-side__item-title">Research Areas</h3>-->
                    <!--<ul class="article-side__list ">-->
                        <!--<li :key="index" v-for="(img,index) in 5">-->
                            <!--<a href="">-->
                            <!--Research Area name-->
                            <!--</a>-->
                        <!--</li>-->
                    <!--</ul>-->

                <!--</aside>-->



            <!--</div>-->

        <!--</section>-->








        <section class="article    ">
            <div class="article__wrapper ">


                <aside class="article-side article-side--left ">


                    <div class="content article-side__card    ">
                        <div class="content__text">

                            <div class="content__header">

                            </div>

                            <div class="content__body">
                                <h4>
                                    <a :href="sourcesurls[index]">Source</a>
                                </h4>



                                <img :src="sourcesImageURLS[index]" style="height: auto; width: 100%" alt="">

                                <!--<img src="../assets/images/project-images/cnn.png" alt="">-->
                                <p>{{ sourcestitle[index]}}</p>

                            </div>
                        </div>

                    </div></aside>


                <div class="content article__content    ">
                    <div class="content__text">

                        <div class="content__header">
                            <h2 class="content__title ">
                                {{project_name[index]}}
                            </h2>

                        </div>

                        <div class="content__body">
                            <span v-html="content"></span>

                        </div>
                    </div>

                </div>


            <!--<aside class="article-side article-side&#45;&#45;right ">-->

                <!--<h3 class="article-side__item-title">News articles covered</h3>-->
                <!--<ul class="article-side__list ">-->

                    <!--<li :key="index" v-for="(img,index) in 5">-->
                        <!--<a href="">-->
                            <!--Article name-->
                        <!--</a>-->
                    <!--</li>-->

                <!--</ul>-->

            <!--</aside>-->
  </div>

        </section>



        <recent-pubications :Tag=tags[index]

                                    SortBy="Projects"
                            BlockTitle="Suggested Publications"
                            AllPubsButton="All publications"
        ></recent-pubications>
    </div>
    
</template>

<script>
    import RecentPubications from "@/components/RecentPubications";
    // import PageBlock from "@/components/PageBlock";


    import maleinf from '../assets/images/project-images/sperm-image.png'
    import HIV from '../assets/images/project-images/hiv-pub.png'
    import ovulatuion from '../assets/images/project-images/ovulation-pub.png'
    import zika from '../assets/images/project-images/zika-pub.png'

    import paper from '../assets/images/project-images/paper-pub.png'





    import fs from '@/db/fs'

    export default {
        name: "ProjectDescription",
        components: { RecentPubications},
        data: function () {
            return {

                FALSE:false,
                CalloutFullWidth: 'callout--fullwidth',
                CalloutGrid: 'callout--grid',

                BlockHalfSize: 'block--half-size',
                BlockRight: 'block--default-right',
                BlockLeft: 'block--default-left',

                BlockCtaLeft: 'block--cta-left',
                BlockCtaRight: 'block--cta-right',
                DarkBackground: true,
                NoDarkBackground: false,

                maleinf:maleinf,
                african:HIV,
                ovulatuion:ovulatuion,
                paper:paper,
                zika:zika,
                index:null,
                Backgrounds:[true,false,false,false,false],


                projct_images:[maleinf,ovulatuion,HIV,zika,paper],
                project_name:['A smartphone based test for male fertility',
                    'AI powered device to detect signs of ovulation',
                    'Affordable cellphone based tool to detect HIV',
                    'Rapid Zika detection test uses smartphone technology',
                    'A low cost flexible paper microchips detections and diagnostics'
                ],
                tags:['SPERM','OVULATION','HIV','ZIKA','PAPER'],
                sourcesImageURLS:[

                        'https://cdn.cnn.com/cnn/.e1mo/img/4.0/logos/logo_cnn_badge_2up.png',
                    'https://www.bostonherald.com/wp-content/uploads/2018/11/HeraldDotComBanner.svg',
                    'https://www.nanowerk.com/images/nanowerk-logo.svg',
                    'https://www.sciencedaily.com/images/sd-logo.png',
                    'http://www.bwhpublicationsarchives.org/images/new2011/bulletin_head.gif'
                ],
                sourcesurls:[
                    'https://www.cnn.com/2017/03/22/health/male-infertility-test-phone-app-study/index.html',
                    'https://www.bostonherald.com/2019/03/02/smartphone-ovulation-test-a-breakthrough-at-the-brigham/',
                    'https://www.nanowerk.com/nanotechnology-news2/newsid=51457.php',
                    'https://www.sciencedaily.com/releases/2018/06/180628151646.htm',
                    'http://www.bwhpublicationsarchives.org/DisplayBulletin.aspx?articleid=6401'

                ],
                sourcestitle:[


                    'Phone device tests male fertility with 98% accuracy, study shows',
                    'Smartphone ovulation test a breakthrough at the Brigham',
                    'Cellphone combined with nanotechnology to detect HIV viruses',
                    'Rapid Zika detection test uses smartphone technology',
                    'Fighting HIV/AIDS: A low-cost, flexible microchip'

                ],


                ProjectsDB:[],
                content:"null"



            }



        },created() {

            let name = this.$route.params['name'].toString().split('-').join(' ')

            this.index = this.project_name.indexOf(name)

        },watch:{

            ProjectsDB:function () {
                this.getcontent();

            }

        },

        methods:{
            getrouteindex:function (name) {


                return this.project_name.indexOf(name.split('-').join(' '))




            },
            getcontent:function () {

                for(let pro in this.ProjectsDB){



                    if(this.ProjectsDB[pro]['TAG']===this.tags[this.index]){
                        this.content= this.ProjectsDB[pro]['Project decription']

                        // console.log(this.ProjectsDB[pro])
                        //
                        // console.log(this.ProjectsDB[pro]['TAG'])


                    }

                }

            }
        },

    firestore() {
        return {
            // PublicationsDB: fs.collection('Publication').orderBy("Selected",'desc')


            ProjectsDB: fs.collection('Projects')




        }
    }

    }
</script>

<style scoped>


    .nav__logo {
        background-image: url(../assets/images/project-images/cnn.png);
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: 60px;
        height: 60px;
        position: relative;
        width: 60px;
        z-index: 32;
    }

</style>