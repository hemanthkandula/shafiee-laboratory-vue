<template>

    <div>


    <div class="hexmain">
        <!--<particles-j-s>-->


        <!--</particles-j-s>-->


        <particles-j-s></particles-j-s>


        <section class='tl'>


            <!--<article  :key="index+'-lab1'" v-for="(news ,index) in 5">-->


                <!--<div class="Inhexvideo ">-->



                    <!--&lt;!&ndash;@ended="PickVideo(CurrentPlaying[index])"&ndash;&gt;-->

                    <!--&lt;!&ndash;<div class="overlay"&ndash;&gt;-->
                         <!--&lt;!&ndash;@mouseover="hover = true"&ndash;&gt;-->
                         <!--&lt;!&ndash;@mouseleave="hover = false"&ndash;&gt;-->

                    <!--&lt;!&ndash;&gt;&ndash;&gt;-->

                    <!--&lt;!&ndash;</div>&ndash;&gt;-->


                    <!--<video  disableRemotePlayback  loop-->

                            <!--class="videohex" autoplay="" muted="" playsinline=""-->
                               <!--:src="videos[index]"></video>-->
                <!--</div>-->

            <!--</article>-->
            <article >


                <div class="Inhexvideo">



                    <video class="videohex" src="/videos/1.mp4"
                           autoplay muted playsinline loop></video>



                </div>

            </article>
            <article >


                <div class="Inhexvideo">

                    <video  autoplay muted playsinline loop  class="videohex"
                           src="/videos/2.mp4"></video>
                </div>

            </article>
            <article >


                <div class="Inhexvideo">

                    <video  autoplay muted playsinline loop  class="videohex"
                           src="/videos/3.mp4"></video>
                </div>

            </article>
            <article >


                <div class="Inhexvideo">

                    <video  autoplay muted playsinline loop  class="videohex"
                           src="/videos/4.mp4"></video>
                </div>

            </article>

            <article >


                <div class="Inhexvideo">

                    <video  autoplay muted playsinline loop  class="videohex"
                           src="/videos/5.mp4"></video>
                </div>

            </article>


            <article >


                <div class="Inhexvideo">

                    <video  autoplay muted playsinline loop  class="videohex"
                           src="/videos/3d.mp4"></video>
                </div>

            </article>

            <article >


                <div class="Inhexvideo">

                    <video  autoplay muted playsinline loop  class="videohex"
                           src="/videos/7.mp4"></video>
                </div>

            </article>

            <article >


                <div class="Inhexvideo">

                    <video  autoplay muted playsinline loop  class="videohex"
                           src="/videos/8.mp4"></video>
                </div>

            </article>
            <article >


                <div class="Inhexvideo">

                    <video  autoplay muted playsinline loop  class="videohex"
                           src="/videos/9.mp4"></video>
                </div>

            </article>
            <article >


                <div class="Inhexvideo">

                    <video  autoplay muted playsinline loop  class="videohex"
                           src="/videos/10.mp4"></video>
                </div>

            </article>
            <article >


                <div class="Inhexvideo">

                    <video  autoplay muted playsinline loop  class="videohex"
                           src="/videos/11.mp4"></video>
                </div>

            </article>



            <!--<article  :key="index+'-lab2'" v-for="(news ,index) in 5">-->


                <!--<div class="Inhexvideo">-->


                    <!--&lt;!&ndash;<div class="overlay"></div>&ndash;&gt;-->



                    <!--&lt;!&ndash;@ended="PickVideo(CurrentPlaying[index])"&ndash;&gt;-->

                    <!--&lt;!&ndash;@ended="PickVideo(CurrentPlaying[index+5])"&ndash;&gt;-->
                    <!--<video disableRemotePlayback  loop-->

                            <!--class="videohex" autoplay="" muted="" playsinline=""-->
                            <!--:src="videos[index+5]">-->

                    <!--</video>-->
                <!--</div>-->

            <!--</article>-->




        </section>





    </div>

    <v-layout align-end justify-center  fill-height>
    <div class="arrow-all">

        <!--<ArrowScroll/>-->
    </div>

    </v-layout>



    </div>



</template>

<script>
    import ParticlesJS from "@/components/ParticlesJS";


    export default {

        name: "HomeVideos",
        components: { ParticlesJS},






        data:function(){

            return {




            }

        },

        props:{


        }
,


            methods:{



    }
    }
</script>

<style scoped>

    /*video {*/
        /*filter:grayscale(100%);*/
    /*}*/
    .arrow-all{



    }


    .t1{


    }


    .centerhex{

        filter: drop-shadow(0 0 10px #333);


    }



    .Inhexvideo {
        position: relative;
        width: 100%;
        height: 100%;
    //padding: 20px;
        border-radius: 5px;
        background-attachment: scroll;
        overflow: hidden;
    }
    .Inhexvideo video {

        z-index: 1;
    }
    .Inhexvideo .overlay {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 2;
        /*background: black;*/
        opacity: 1;
        filter:grayscale(100%);

    }

    /*.overlay:hover {*/
        /*filter:grayscale(0%);*/


    /*}*/










    /*.Inhexvideo {*/

        /*color: rgba(71, 121, 94, .9);*/

        /*width: 200px;*/
        /*height: 200px;*/
        /*!* center content using flex box *!*/
        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        /*!* overlay *!*/
        /*box-shadow: 0 0 0 100px inset, 0 0 5px grey;*/
        /*!* hover out transition *!*/
        /*transition: box-shadow 1s;*/
        /*float: left;*/
        /*margin: 10px;*/
    /*}*/


    /*!* Inhexvideoe names *!*/

    /*.Inhexvideo::after {*/
        /*width: 80%;*/
        /*height: 80%;*/
        /*display: block;*/
        /*white-space: pre;*/
        /*font: 15pt 'sigmar one';*/
        /*color: white;*/
        /*border: 2px solid;*/
        /*text-align: center;*/
        /*!* center content using flex box *!*/
        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        /*!* hover out transition *!*/
        /*transition: opacity 1s .5s;*/
    /*}*/


    /*!* reveal Inhexvideoe picture on hover *!*/

    /*.Inhexvideo:hover {*/
        /*box-shadow: 0 0 0 5px inset, 0 0 5px grey, 0 0 10px grey inset;*/
        /*transition: box-shadow 1s;*/
    /*}*/
















    .videohex{
        position: absolute;


        min-width: var(--radio);
        min-height: var(--radio);
        max-width: var(--width);
        max-height: var(--height);
        left: 50%;

        top: 50%;
        transform: translate(-50%, -50%);

        object-fit: contain;
    }


    #particles-j-s {
        position: center;
        width: 100%;
        /*height: 100%;*/
        z-index: 1000;

        height: 90vh;

    }

    .inhexvideo {

        height: 100%;
        width: 100%;

        position: relative;



        /*-webkit-transform: translateY(-50%) translateX(-50%);*/
    }


    .hexmain {
        --sinSerif: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        /* hexagon */
        --gap: 2vmin;
        --radio: calc(100vmin / 3);
        --width: calc(var(--radio) * .866);
        --height: var(--radio);
        /* colors */
        --negroO: #1d1f20;
        --negroM: #292f33;
        --negroC: #444448;
        --gris: #999;
        --blancoS: #e1e8ed;
    }

    /* Making the grid */
    section {

        height: 90vh;
        display: grid;
        grid-template-columns: repeat(16, 2fr);
        grid-gap: 0vmin;
        max-width: 200vmin;
        padding-left: 15vmin;

        padding-right: 10vmin;

        margin: .5rem auto;
    }
    article {

        background: var(--negroC);
        width: var(--width);
        height: var(--height);
        overflow: hidden;
        transition: 1s;
        clip-path: url(#hexa-v);
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        filter: drop-shadow(0 0 1px #fff);
    }
    /* making the honeycomb */
    article:nth-of-type(1) {
        grid-column: 1 / span 3;
        grid-row: 1;
    }
    article:nth-of-type(2) {
        grid-column: 5 / span 3;
        grid-row: 1;
    }

    article:nth-of-type(3) {
        grid-column: 9 / span 3;
        grid-row: 1;
    }

    article:nth-of-type(4) {
        grid-column: 13 / span 3;
        grid-row: 1;
    }


    article:nth-of-type(5) {
        grid-column: 3 / span 3;
        grid-row: 2;
    }
    article:nth-of-type(6) {
        grid-column: 7 / span 3;
        grid-row: 2;




    }

    article:nth-of-type(7) {
        grid-column: 11 / span 3;
        grid-row: 2;

    }


    article:nth-of-type(8) {
        grid-column: 1 / span 3;
        grid-row: 3;
    }
    article:nth-of-type(9) {
        grid-column: 5 / span 3;
        grid-row: 3;
    }

    article:nth-of-type(10) {
        grid-column: 9 / span 3;
        grid-row: 3;
    }

    article:nth-of-type(11) {
        grid-column: 13 / span 3;
        grid-row: 3;
    }


    /* A small adjustment in the vertical */
    article:nth-of-type(-n+2) {
        margin-bottom: calc(var(--height) * -.3);
    }
    article:nth-of-type(n+5):nth-of-type(-n+11) {
        margin-top: calc(var(--height) * -.3);
    }


    figure {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        height: 100%;
        font-size: calc(1rem + 1vmin);
        line-height: 1.2;
        transition: .75s .05s;
        hyphens: auto;
        text-align: center;
    }
    img,video    [class*='svg-icon'] {
        background: #fff;
        min-width: var(--radio);
        min-height: var(--radio);
        max-width: var(--width);
        max-height: var(--height);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transform-origin: 50% 0%;
        transition: 1s;
        clip-path: url(#hexagono);
        clip-path: inherit;
        z-index:  10;
    }
    article:hover img,video
    article:hover [class*='svg-icon'] {
        transform: translate(-50%, -50%) rotateY(.25turn);
    }
    h2 {
        font-size: 100%;
        font-weight: 200;
        font-variant: small-caps;
        padding: 0 2vw;
    }
    figure p {
        font-size: 70%;
        line-height: 1.2;
        font-weight: 100;
        width: 100%;
    }
    a {
        display: block;
        color: var(--gris);
        text-decoration: none;
    }
    a:hover {
        color: var(--blancoS);
    }
    .rss figure {
        background: #fff;
    }
    svg {
        clip-rule: evenodd;
        fill-rule: evenodd;
        clip-rule: evenodd;
        image-rendering: optimizequality;
        shape-rendering: geometricprecision;
        text-rendering: geometricprecision;
    }

    @media only screen and (max-width: 450px) {
        figure p {display: none;}
        figure h2 {font-size: 1rem;}
    }


    @media only screen and (max-width: 767px){


        section {

            height: 90vh;
            display: grid;
            grid-template-columns: repeat(16, 2fr);
            grid-gap: 5vmin;
            max-width: 200vmin;
            padding-left: 5vmin;

            padding-right: 5vmin;

            margin: .5rem auto;
        }

        article {



            background: var(--negroC);
            width: var(--width);
            height: var(--height);
            overflow: hidden;
            transition: 1s;
            clip-path: url(#hexa-v);
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            filter: drop-shadow(0 0 1px #fff);
        }


    }

</style>
