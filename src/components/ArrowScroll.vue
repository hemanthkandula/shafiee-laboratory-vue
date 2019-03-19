<template>

    <div >
    <div class="arrow arrow-first"></div>
    <div class="arrow arrow-second"></div>
    </div>
</template>
<script>
    export default {
        name: 'ArrowScroll'
    }
</script>
<style scoped>


    .arrow {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 95%;
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        -webkit-transform: translate3d(-50%, -50%, 0);
        transform: translate3d(-50%, -50%, 0);
    }

    .arrow-first {
        -webkit-animation: arrow-movement 3s ease-in-out infinite;
        animation: arrow-movement 3s ease-in-out infinite;
    }

    .arrow-second {
        -webkit-animation: arrow-movement 3s 1s ease-in-out infinite;
        animation: arrow-movement 3s 1s ease-in-out infinite;
    }

    .arrow:before,
    .arrow:after {
        background: #000;
        content: '';
        display: block;
        height: 3px;
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
    }

    .arrow:before {
        -webkit-transform: rotate(45deg) translateX(-23%);
        transform: rotate(45deg) translateX(-23%);
        -webkit-transform-origin: top left;
        transform-origin: top left;
    }

    .arrow:after {
        -webkit-transform: rotate(-45deg) translateX(23%);
        transform: rotate(-45deg) translateX(23%);
        -webkit-transform-origin: top right;
        transform-origin: top right;
    }

    @-webkit-keyframes arrow-movement {
        0% {
            opacity: 0;
            top: 90%;
        }
        70% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    @keyframes arrow-movement {
        0% {
            opacity: 0;
            top: 90%;
        }
        70% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }



</style>