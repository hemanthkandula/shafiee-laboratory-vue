<template>

    <div>



        <page-block
                button="Project Title"
                button_link="/Research"
                description=""
                :title=project_name[index]
                :ButtonExist=FALSE

                :background-image="projct_images[index]"




                :div-class="BlockCtaLeft" :has-dark-background="Backgrounds[index]"
                :section-class=CalloutGrid></page-block>


        <section class="article    ">
            <div class="article__wrapper ">


                <aside class="article-side article-side--left ">

                    <h3 class="article-side__item-title">News articles covered</h3>
                    <ul class="article-side__list ">

                        <li :key="index" v-for="(img,index) in 5">
                            <a href="">
                                Article name
                            </a>
                        </li>

                    </ul>

                </aside>








                <div class="content article__content    ">
                    <div class="content__text">

                        <div class="content__header">
                            <h2 class="content__title ">
                                About the project
                            </h2>

                        </div>

                        <div class="content__body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod quis viverra nibh cras pulvinar mattis nunc. Lorem dolor sed viverra ipsum nunc. Diam ut venenatis tellus in metus vulputate. In iaculis nunc sed augue lacus viverra. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Turpis nunc eget lorem dolor sed viverra. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Orci phasellus egestas tellus rutrum tellus. Odio morbi quis commodo odio. Tempus quam pellentesque nec nam aliquam sem et tortor. Dignissim diam quis enim lobortis scelerisque fermentum dui. Enim sed faucibus turpis in eu mi bibendum neque egestas. A arcu cursus vitae congue mauris rhoncus aenean. Lacinia at quis risus sed. Fames ac turpis egestas integer eget aliquet nibh.

                            </p>
                        </div>
                    </div>

                </div>
                <aside class="article-side article-side--right ">

                    <h3 class="article-side__item-title">Research Areas</h3>
                    <ul class="article-side__list ">
                        <li :key="index" v-for="(img,index) in 5">
                            <a href="">
                            Research Area name
                            </a>
                        </li>
                    </ul>

                </aside>



            </div>

        </section>



        <recent-pubications :Tag=tags[index]

                                    SortBy="Projects"
                            BlockTitle="Related Publications"
                            AllPubsButton="All publications"
        ></recent-pubications>
    </div>
    
</template>

<script>
    import RecentPubications from "@/components/RecentPubications";
    import PageBlock from "@/components/PageBlock";


    import maleinf from '../assets/images/project-images/sperm-image.png'
    import HIV from '../assets/images/project-images/hiv-pub.png'
    import ovulatuion from '../assets/images/project-images/ovulaton-pub.gif'
    import zika from '../assets/images/project-images/rapidzikadet.jpg'

    import paper from '../assets/images/project-images/paper-pub.png'

    export default {
        name: "ProjectDescription",
        components: {PageBlock, RecentPubications},
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
                    'Paper microchips detections and diagnostics'
                ],
                tags:['SPERM','OVULATION','HIV','ZIKA','PAPER']

            }


        },created() {

            let name = this.$route.params['name'].toString().split('-').join(' ')

            this.index = this.project_name.indexOf(name)

        },
        methods:{
            getrouteindex:function (name) {


                return this.project_name.indexOf(name.split('-').join(' '))




            }
        }

    }
</script>

<style scoped>

</style>