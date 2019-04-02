<template>

    <div>



        <page-block
                button="Project Title"
                button_link="/Research"
                description="Some intro"
                title="Project"


                :div-class="BlockCtaLeft" :has-dark-background="DarkBackground"
                :section-class=CalloutGrid></page-block>


        <section class="article    ">
            <div class="article__wrapper ">


                <aside class="article-side article-side--left ">

                    <h3 class="article-side__item-title">Research Areas</h3>
                    <ul class="article-side__list ">
                        <li>
                            <a href="">            Area 1
                            </a>          </li>
                        <li>
                            <a href="">    Area2
                            </a>          </li>
                    </ul>

                </aside>






                <div class="content article__content    ">
                    <div class="content__text">

                        <div class="content__header">
                            <h2 class="content__title ">
                                Project Description
                            </h2>

                        </div>

                        <div class="content__body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod quis viverra nibh cras pulvinar mattis nunc. Lorem dolor sed viverra ipsum nunc. Diam ut venenatis tellus in metus vulputate. In iaculis nunc sed augue lacus viverra. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Turpis nunc eget lorem dolor sed viverra. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Orci phasellus egestas tellus rutrum tellus. Odio morbi quis commodo odio. Tempus quam pellentesque nec nam aliquam sem et tortor. Dignissim diam quis enim lobortis scelerisque fermentum dui. Enim sed faucibus turpis in eu mi bibendum neque egestas. A arcu cursus vitae congue mauris rhoncus aenean. Lacinia at quis risus sed. Fames ac turpis egestas integer eget aliquet nibh.

                                Nullam non nisi est sit amet facilisis. Vel facilisis volutpat est velit egestas. Libero nunc consequat interdum varius sit amet mattis. Consectetur a erat nam at lectus urna duis. Imperdiet nulla malesuada pellentesque elit. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Posuere morbi leo urna molestie. Ac turpis egestas integer eget aliquet nibh praesent. Cursus sit amet dictum sit. Duis at consectetur lorem donec massa sapien faucibus. Viverra accumsan in nisl nisi scelerisque eu ultrices. Nibh nisl condimentum id venenatis a condimentum. Volutpat est velit egestas dui id. Vestibulum sed arcu non odio euismod. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.
                            </p>
                        </div>
                    </div>

                </div>
                <aside class="article-side article-side--right ">

                    <h3 class="article-side__item-title">Research Areas</h3>
                    <ul class="article-side__list ">
                        <li>
                            <a href="">            Area 1
                            </a>          </li>
                        <li>
                            <a href="">    Area2
                            </a>          </li>
                    </ul>

                </aside>



            </div>

        </section>



        <recent-pubications></recent-pubications>
    </div>
    
</template>

<script>
    import RecentPubications from "@/components/RecentPubications";
    import PageBlock from "@/components/PageBlock";
    export default {
        name: "ProjectDescription",
        components: {PageBlock, RecentPubications},
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
            }}

    }
</script>

<style scoped>

</style>