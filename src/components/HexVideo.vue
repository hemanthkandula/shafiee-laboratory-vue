<template>
    <article>


        <div class="Inhexvideo">

            <video @ended="someMethod" class="videohex" autoplay="" muted="" playsinline=""
                   :src="CurrentPlaying"></video>
        </div>

    </article>
</template>
<script>
    export default {
        name: 'HexVideo',
        props: {
            CurrentPlaying: {},



        },

        methods:{

            someMethod(){
                this.$parent.PickVideo(this.CurrentPlaying);
            }

        }
    }
</script>
<style scoped>


    .videohex {
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


    /* Making the grid */
    section {

        height: 90vh;
        display: grid;
        grid-template-columns: repeat(16, 2fr);
        grid-gap: 0vmin;
        max-width: 200vmin;
        padding-left: 5vmin;

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

    img, video [class*='svg-icon'] {
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
        z-index: 10;
    }

    article:hover img, video
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
        figure p {
            display: none;
        }

        figure h2 {
            font-size: 1rem;
        }
    }

</style>