<template>



    <div class="hexmain">

        <section class='tl'>
            <article >


                <div class="Inhexvideo">

                <video  style=' margin-left: 50%;
transform: translateX(-50%); height: auto;      object-fit: cover;
' autoplay="" loop="" muted="" playsinline=""
                        src="../assets/videos/new.mp4"></video>
                </div>

            </article>
            <article >


                <div class="Inhexvideo">

                    <video  style=' margin-left: 50%;
transform: translateX(-50%); height: auto;      object-fit: cover;
' autoplay="" loop="" muted="" playsinline=""
                            src="../assets/videos/new.mp4"></video>
                </div>

            </article>
            <article >


                <div class="Inhexvideo">

                    <video  style=' margin-left: 50%;
transform: translateX(-50%); height: auto;      object-fit: cover;
' autoplay="" loop="" muted="" playsinline=""
                            src="../assets/videos/new.mp4"></video>
                </div>

            </article>
            <article >


                <div class="Inhexvideo">

                    <video  style=' margin-left: 50%;
transform: translateX(-50%); height: auto;      object-fit: cover;
' autoplay="" loop="" muted="" playsinline=""
                            src="../assets/videos/new.mp4"></video>
                </div>

            </article>



            <article >


                <div class="Inhexvideo">

                    <video  style=' margin-left: 50%;
transform: translateX(-50%); height: auto;      object-fit: cover;
' autoplay="" loop="" muted="" playsinline=""
                            src="../assets/videos/new.mp4"></video>
                </div>

            </article>
            <article >


                <div class="centerhex">


                </div>

            </article>
            <article >


                <div class="Inhexvideo">

                    <video  style=' margin-left: 50%;
transform: translateX(-50%); height: auto;      object-fit: cover;
' autoplay="" loop="" muted="" playsinline=""
                            src="../assets/videos/new.mp4"></video>
                </div>

            </article>




            <article >


                <div class="Inhexvideo">

                    <video  style=' margin-left: 50%;
transform: translateX(-50%); height: auto;      object-fit: cover;
' autoplay="" loop="" muted="" playsinline=""
                            src="../assets/videos/new.mp4"></video>
                </div>

            </article>
            <article >


                <div class="Inhexvideo">

                    <video  style=' margin-left: 50%;
transform: translateX(-50%); height: auto;      object-fit: cover;
' autoplay="" loop="" muted="" playsinline=""
                            src="../assets/videos/new.mp4"></video>
                </div>

            </article>
            <article >


                <div class="Inhexvideo">

                    <video  style=' margin-left: 50%;
transform: translateX(-50%); height: auto;      object-fit: cover;
' autoplay="" loop="" muted="" playsinline=""
                            src="../assets/videos/new.mp4"></video>
                </div>

            </article>
            <article >


                <div class="Inhexvideo">

                    <video  style=' margin-left: 50%;
transform: translateX(-50%); height: auto;      object-fit: cover;
' autoplay="" loop="" muted="" playsinline=""
                            src="../assets/videos/new.mp4"></video>
                </div>

            </article>





        </section>



    </div>

</template>

<script>
    export default {
        name: "hextest"
    }
</script>

<style scoped>


    .centerhex{

        filter: drop-shadow(0 0 10px #333);


    }

    .inhexvideo {

        height: 100%;
        width: 100%;

        position: relative;
        overflow: hidden;




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
        max-widt: var(--width);
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