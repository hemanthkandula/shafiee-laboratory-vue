<template>
    <footer>
        <a aria-label="" class="footer__logo" href="http://shafieelab.bwh.harvard.edu" target="_blank">
            <img alt="logo"
                 height="39"
                 src="http://shafieelab.bwh.harvard.edu/wp-content/uploads/2015/01/shafiee-e1420467796229.png"
                 width="200">
        </a>
        <div class="footer__links">
            <a class="footer__link" href="/Publications/" target="_blank">Publications</a>
            <a class="footer__link" href="/People/" target="_blank">People</a>

            <a class="footer__link" href="/about/" target="_blank">About Us</a>

        </div>
        <div class="footer__tertiary">
        </div>
    </footer>
</template>
<script>
    export default {
        name: 'AppFooter'
    }
</script>
<style>
    @import './assets/css/custom.css';


    a {
        text-decoration: none;
    }


</style>