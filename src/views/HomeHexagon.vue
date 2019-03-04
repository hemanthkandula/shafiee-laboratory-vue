<template>
    <section class="hero hero--home ng-scope is-text-shown">



        <div class="hexahom">


            <particles-j-s>


            </particles-j-s>


            <!--<parallax-container>-->

                <!--<parallax-element :parallaxStrength="5" :type="'depth'">-->
            <div class="allhex">


                <div class="tophex">
                    <vs-row>
                        <vs-col :key="index" v-for="(col,index) in 4" v-tooltip="'col - 3'" vs-align="center"
                                vs-justify="center" vs-type="flex" vs-w="3">
                            <div class="hex">
                                <div class="hexIn">
                                    <a class="hexLink" href="#">
                                        <video autoplay="" loop="" muted="" playsinline=""
                                               src="../assets/videos/new.mp4"></video>
                                        <h1>This is a title</h1>
                                        <p>Some sample text about </p>
                                    </a>
                                </div>
                            </div>
                        </vs-col>


                    </vs-row>

                </div>


                <div class="centerhex">


                    <vs-row
                             vs-w="12">
                        <vs-col vs-offset="1" v-tooltip="'col - 3'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">

                            <div class="hex">
                                <div class="hexIn">
                                    <a class="hexLink" href="#">
                                        <video autoplay="" loop="" muted="" playsinline=""
                                               src="../assets/videos/new.mp4"></video>
                                        <h1>This is a title</h1>
                                        <p>Some sample text about </p>
                                    </a>
                                </div>
                            </div>

                        </vs-col>

                        <vs-col vs-offset="1" v-tooltip="'col - 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">

                        <div class="hexr">
                                <div class="hexrIn">
                                    <a class="hexrLink" href="#">
                                        <img src="../assets/logo-inverted1.png" alt="">
                                        <h1>This is a title</h1>
                                        <p>Some sample text about </p>
                                    </a>
                                </div>
                            </div>

                        </vs-col>

                        <vs-col vs-offset="-1" v-tooltip="'col - 3'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
                            <div class="hex">
                                <div class="hexIn">
                                    <a class="hexLink" href="#">
                                        <video autoplay="" loop="" muted="" playsinline=""
                                               src="../assets/videos/new.mp4"></video>
                                        <h1>This is a title</h1>
                                        <p>Some sample text about </p>
                                    </a>
                                </div>
                            </div>

                        </vs-col>


                    </vs-row>


                </div>


                <div class="bottomhex">
                    <vs-row>
                        <vs-col :key="index" v-for="(col,index) in 4" v-tooltip="'col - 3'" vs-align="center"
                                vs-justify="center" vs-type="flex" vs-w="3">
                            <div class="hex">
                                <div class="hexIn">
                                    <a class="hexLink" href="#">
                                        <video autoplay="" loop="" muted="" playsinline=""
                                               src="../assets/videos/new.mp4"></video>
                                        <h1>This is a title</h1>
                                        <p>Some sample text about the article this hexagon leads to</p>
                                    </a>
                                </div>
                            </div>
                        </vs-col>
                    </vs-row>

                </div>

            </div>


                <!--</parallax-element>-->
            <!--</parallax-container>-->

        </div>



    </section>
</template>
<script>


    // var mylib = require('@aassets/js/particles');


    import ParticlesJS from "@/components/ParticlesJS";

    export default {
        name: 'Homehexagon',
        components: {ParticlesJS},
    }
</script>


<style scoped>


    #particles-j-s {
        position: center;
        width: 100%;
        height: 100%;
        z-index: -1;
    }


    @media (min-width: 1201px) {
        /* <- 5-4  hexagons per row */
        .hexahom {

            height: 700px;

        }


        .allhex {


            height: 60%;


        }

        .tophex {


        }

        .centerhex {

            margin-top: 200px;


        }

        .bottomhex {
            margin-top: 200px;


        }


    }

    @media (max-width: 1200px) and (min-width: 901px) {
        .hexahom {
            overflow: hidden;

            height: 700px;

        }


        .allhex {

            overflow: hidden;

            height: 700px;


        }

        .tophex {


        }

        .centerhex {

            margin-top: 200px;


        }

        .bottomhex {
            margin-top: 200px;


        }

    }


    @media (max-width: 900px) and (min-width: 601px) {


        .hexahom {

            overflow: hidden;

            height: 700px;

        }


        .allhex {

            overflow: hidden;


            height: 700px;


        }

        .tophex {


        }

        .centerhex {

            margin-top: 200px;


        }

        .bottomhex {
            margin-top: 200px;


            /*padding-bottom: 30px;*/


        }
    }


    .centerhex {
        /*top: 50%;*/
        /*left: 50%;*/
        /*margin-top: -50px;*/
        /*margin-left: -50px;*/


        /*position: relative;*/

    }


    .hexIn {

        filter: drop-shadow(0 0 50px #333);


    }


    .hexagon {
        position: relative;
        width: 350px;
        height: 202.07px;
        /*margin: 101.04px 0;*/
        background-image: url(../assets/logo-inverted1.png);
        background-size: auto 404.1452px;
        background-position: center;
        box-shadow: 0 0 50px rgba(0, 0, 0, 1);


        -ms-transform: rotate(90deg); /* IE 9 */
        -webkit-transform: rotate(90deg); /* Safari */
        transform: rotate(90deg);

        z-index: 2000;

    }

    .hexTop,
    .hexBottom {
        position: absolute;
        z-index: 1;
        width: 247.49px;
        height: 247.49px;
        overflow: hidden;
        -webkit-transform: scaleY(0.5774) rotate(-45deg);
        -ms-transform: scaleY(0.5774) rotate(-45deg);
        transform: scaleY(0.5774) rotate(-45deg);
        background: inherit;
        left: 51.26px;
        box-shadow: 0 0 50px rgba(0, 0, 0, 1);
    }

    /*counter transform the bg image on the caps*/
    .hexTop:after,
    .hexBottom:after {
        content: "";
        position: absolute;
        width: 350.0000px;
        height: 202.07259421636903px;
        -webkit-transform: rotate(45deg) scaleY(1.7321) translateY(-101.0363px);
        -ms-transform: rotate(45deg) scaleY(1.7321) translateY(-101.0363px);
        transform: rotate(45deg) scaleY(1.7321) translateY(-101.0363px);
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
        background: inherit;
    }

    .hexTop {
        top: -123.7437px;
    }

    .hexTop:after {
        background-position: center top;
    }

    .hexBottom {
        bottom: -123.7437px;
    }

    .hexBottom:after {
        background-position: center bottom;
    }

    .hexagon:after {
        content: "";
        position: absolute;
        top: 0.0000px;
        left: 0;
        width: 350.0000px;
        height: 202.0726px;
        z-index: 2;
        background: inherit;
    }


    .centered {
        position: center;
        z-index: 1000;
        /*left: 50%;*/
        /*margin-top: -50px;*/
        /*margin-left: -100px;*/
    }

    .hexrotate {
        -ms-transform: rotate(90deg); /* IE 9 */
        -webkit-transform: rotate(90deg); /* Safari */
        transform: rotate(90deg);


    }


</style>