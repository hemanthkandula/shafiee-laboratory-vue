<template>



    <div class="hexmain">
        <!--<particles-j-s>-->


        <!--</particles-j-s>-->


        <particles-j-s></particles-j-s>


        <section class='tl'>


            <article  :key="index+'-lab1'" v-for="(news ,index) in 3">


                <div class="Inhexvideo ">



                    <!--@ended="PickVideo(CurrentPlaying[index])"-->

                    <!--<div class="overlay"></div>-->


                    <video disableRemotePlayback  @ended="printindex(index)"

                            class="videohex" autoplay="" muted="" playsinline=""
                               :src="CurrentPlaying[index]"></video>
                </div>

            </article>



            <article >


                <div class="Inhexvideo">

                    <video disableRemotePlayback


                            class="videohex" autoplay=""  muted="" playsinline=""
                           src="../assets/videos/3d.mp4"></video>
                </div>

            </article>



            <article  :key="index+'-lab2'" v-for="(news ,index) in 3">


                <div class="Inhexvideo">


                    <!--<div class="overlay"></div>-->



                    <!--@ended="PickVideo(CurrentPlaying[index])"-->

                    <!--@ended="PickVideo(CurrentPlaying[index+5])"-->
                    <video  disableRemotePlayback  @ended="printindex(index+5)"

                            class="videohex" autoplay="" muted="" playsinline=""
                            :src="CurrentPlaying[index+5]">

                    </video>
                </div>

            </article>








        </section>



    </div>

</template>

<script>
    import ParticlesJS from "@/components/ParticlesJS";

    import vid1 from "@/assets/videos/1.mp4";
    import vid2 from "@/assets/videos/2.mp4";

    import vid3 from "@/assets/videos/3.mp4";
    import vid4 from "@/assets/videos/4.mp4";
    import vid5 from "@/assets/videos/5.mp4";
    import vid6 from "@/assets/videos/6.mp4";
    import vid7 from "@/assets/videos/7.mp4";
    import vid8 from "@/assets/videos/8.mp4";
    import vid9 from "@/assets/videos/9.mp4";
    import vid10 from "@/assets/videos/10.mp4";
    import vid11 from "@/assets/videos/11.mp4";
    import vid12 from "@/assets/videos/12.mp4";
    import vid13 from "@/assets/videos/13.mp4";
    import vid14 from "@/assets/videos/14.mp4";
    import vid15 from "@/assets/videos/15.mp4";
    // import vid16 from "@/assets/videos/16.mp4";
    // import vid17 from "@/assets/videos/17.mp4";
    // import vid18 from "@/assets/videos/18.mp4";
    // import vid19 from "@/assets/videos/19.mp4";
    // import vid20 from "@/assets/videos/20.mp4";

    // import vid21 from "@/assets/videos/21.mp4";


    export default {

        name: "HexTestMobile",
        components: { ParticlesJS},






        data:function(){

            return {
                videosrc : "../assets/videos/",
                videos: [vid1, vid2,vid3,vid4,vid5,vid6,vid7,vid8,vid9,vid10,vid11,vid12,vid13,
                    vid14,vid15],

                AvailablePlaying:[vid1, vid2,vid3,vid4,vid5,vid6,vid7,vid8,vid9,vid10,vid11,vid12,vid13,
                    vid14,vid15 ],

                CurrentPlaying:[]





            }

        },

        props:{


        },

        created() {

            while(this.CurrentPlaying.length < 10){
                let r = Math.floor(Math.random()*14) + 1;
                if(this.CurrentPlaying.indexOf(this.videos[r]) === -1) this.CurrentPlaying.push(this.videos[r]);
                // console.log(r)

            }

            Array.prototype.diff = function(a) {
                return this.filter(function(i) {return a.indexOf(i) < 0;});
            };

            this.AvailablePlaying =  this.AvailablePlaying .diff(  this.CurrentPlaying );




        },


            methods:{


            printindex:function(index){



                let currentvideo = this.CurrentPlaying[index] ;



                let random = Math.floor(Math.random() * (this.AvailablePlaying.length - 1 )) + 1 ;


                let video = this.AvailablePlaying[random];
                this.AvailablePlaying.splice(random, 1);
                this.AvailablePlaying.splice(index, 0, currentvideo);



                this.CurrentPlaying.splice(index, 1);
                this.CurrentPlaying.splice(index, 0, video);














            },



            /**
             * @return {string}
             */
            PickVideo: function ( currentPlayingElement) {



                var index = this.CurrentPlaying.indexOf(currentPlayingElement);





                this.AvailablePlaying = this.arrayDiff1(this.CurrentPlaying,this.AvailablePlaying)



                let random = Math.floor(Math.random() * (this.AvailablePlaying.length - 1 )) + 1 ;
                let video = this.AvailablePlaying[random];

                this.CurrentPlaying.splice(index, 1)

                this.CurrentPlaying.splice(index, 0, video);


                // this.CurrentPlaying[index] = video


                // this.CurrentPlaying.splice(index, 0, video);



                this.AvailablePlaying.splice(0, 0, currentPlayingElement);













                return (video)

            },
                arrayDiff1: function (a1, a2) {

        var a = [], diff = [];

        for (var i = 0; i < a1.length; i++) {
            a[a1[i]] = true;
        }

        for (var j = 0; j < a2.length; j++) {
            if (a[a2[j]]) {
                delete a[a2[j]];
            } else {
                a[a2[j]] = true;
            }
        }

        for (var k in a) {
            diff.push(k);
        }

        return diff;
    }




    }
    }
</script>

<style scoped>


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
        background: black;
        opacity: 0.5;
    }

    .overlay:hover {
        opacity: 0;

    }










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

        height: 100vw;

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

        height: 100vw;
        display: grid;
        grid-template-columns: repeat(12, 2fr);
        grid-gap: 0vmin;
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
    /* making the honeycomb */
    article:nth-of-type(1) {
        grid-column: 3 / span 4;
        grid-row: 1;
    }
    article:nth-of-type(2) {
        grid-column: 7 / span 4;
        grid-row: 1;
    }

    article:nth-of-type(3) {
        grid-column: 1 / span 4;
        grid-row: 2;
    }

    article:nth-of-type(4) {
        grid-column: 5 / span 4;
        grid-row: 2;
    }


    article:nth-of-type(5) {
        grid-column: 9 / span 4;
        grid-row: 2;
    }
    article:nth-of-type(6) {
        grid-column: 3 / span 4;
        grid-row: 3;




    }

    article:nth-of-type(7) {
        grid-column: 7 / span 4;
        grid-row: 3;

    }


    /*article:nth-of-type(8) {*/
        /*grid-column: 1 / span 3;*/
        /*grid-row: 3;*/
    /*}*/
    /*article:nth-of-type(9) {*/
        /*grid-column: 5 / span 3;*/
        /*grid-row: 3;*/
    /*}*/

    /*article:nth-of-type(10) {*/
        /*grid-column: 9 / span 3;*/
        /*grid-row: 3;*/
    /*}*/

    /*article:nth-of-type(11) {*/
        /*grid-column: 13 / span 3;*/
        /*grid-row: 3;*/
    /*}*/


    /* A small adjustment in the vertical */
    article:nth-of-type(-n+2) {
        margin-bottom: calc(var(--height) * -.3);
    }
    article:nth-of-type(n+6):nth-of-type(-n+11) {
        margin-top: calc(var(--height) * -.3);
    }

    /* Ornamentales */

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


    @media only screen and (max-width: 424px){


        section {

            height: 100vw;
            display: grid;
            grid-template-columns: repeat(12, 2fr);
            grid-gap: 0vmin;
            max-width: 200vmin;
            padding-left: 5vmin;

            padding-right: 5vmin;

            margin: .5rem auto;
        }


        #particles-j-s {
            position: center;
            width: 100%;
            height: 100vw;

            /*height: 100%;*/
            z-index: 1000;


        }


    }

</style>

<!--<style scoped>-->


    <!--.hexmain {-->
        <!--&#45;&#45;sinSerif: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;-->
        <!--/* hexagon */-->
        <!--&#45;&#45;gap: 2vmin;-->
        <!--&#45;&#45;radio: calc(100vmin / 3);-->
        <!--&#45;&#45;width: calc(var(&#45;&#45;radio) * .866);-->
        <!--&#45;&#45;height: var(&#45;&#45;radio);-->
        <!--/* colors */-->
        <!--&#45;&#45;negroO: #1d1f20;-->
        <!--&#45;&#45;negroM: #292f33;-->
        <!--&#45;&#45;negroC: #444448;-->
        <!--&#45;&#45;gris: #999;-->
        <!--&#45;&#45;blancoS: #e1e8ed;-->
    <!--}-->


    <!--/* Making the grid */-->
    <!--section {-->
        <!--height: 90vh;-->
        <!--display: grid;-->
        <!--grid-template-columns: repeat(12, 1fr);-->
        <!--grid-gap: -vmin;-->
        <!--max-width: 1000vmin;-->
        <!--padding-left: 2vmin;-->
        <!--margin: .5rem auto;-->
    <!--}-->
    <!--article {-->
        <!--background: var(&#45;&#45;negroC);-->
        <!--width: var(&#45;&#45;width);-->
        <!--height: var(&#45;&#45;height);-->
        <!--overflow: hidden;-->
        <!--transition: 1s;-->
        <!--clip-path: url(#hexa-v);-->
        <!--clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);-->
        <!--filter: drop-shadow(0 0 1px #fff);-->
    <!--}-->
    <!--/* making the honeycomb */-->
    <!--article:nth-of-type(1) {-->
        <!--grid-column: 4 / span 2;-->
        <!--grid-row: 1;-->
    <!--}-->
    <!--article:nth-of-type(2) {-->
        <!--grid-column: 8 / span 2;-->
        <!--grid-row: 1;-->
    <!--}-->
    <!--article:nth-of-type(3) {-->
        <!--grid-column: 2 / span 2;-->
        <!--grid-row: 2;-->
    <!--}-->
    <!--article:nth-of-type(4) {-->
        <!--grid-column: 6 / span 2;-->
        <!--grid-row: 2;-->
    <!--}-->
    <!--article:nth-of-type(5) {-->
        <!--grid-column: 10 / span 2;-->
        <!--grid-row: 2;-->
    <!--}-->
    <!--article:nth-of-type(6) {-->
        <!--grid-column: 4 / span 2;-->
        <!--grid-row: 3;-->
    <!--}-->
    <!--article:nth-of-type(7) {-->
        <!--grid-column: 8 / span 2;-->
        <!--grid-row: 3;-->
    <!--}-->
    <!--article:nth-of-type(8) {-->
        <!--grid-column: 10 / span 2;-->
        <!--grid-row: 3;-->
    <!--}-->

    <!--article:nth-of-type(9) {-->
        <!--grid-column: 1 / span 2;-->
        <!--grid-row: 3;-->
    <!--}-->
    <!--/* A small adjustment in the vertical */-->
    <!--article:nth-of-type(-n+2) {-->
        <!--margin-bottom: calc(var(&#45;&#45;height) * -0.2);-->
    <!--}-->
    <!--article:nth-of-type(n+6):nth-of-type(-n+7) {-->
        <!--margin-top: calc(var(&#45;&#45;height) * -.2);-->
    <!--}-->



<!--</style>-->