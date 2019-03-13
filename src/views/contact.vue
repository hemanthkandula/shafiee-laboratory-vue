<template>
    <div class="contact">










        <section-contact>
            <div class="Container Container--maxWidth Contact-footer-container">
                <div class="Contact-footer--left Accordion">
                    <div class="Contact-footer--left-contentWrapper">
                        <div>
                            <h3 class="Heading Heading3">Form here </h3>
                        </div>

                    </div>
                </div>
                <div class="Contact-footer--right">
                    <div class="Contact-footer--right-background"  v-bind:style="{ backgroundImage: 'url(' + Maps + ')' }" >
                   >
                        <div class="Contact-footer--right-content">
                            <div>
                                <p><strong>Shafiee Laboratory</strong></p>
                                <p> 65 Landsdowne St <br> Cambridge, MA 02139</p>
                                <a class="btn btn--outline-white btn--arrowRight" href="https://www.google.com/maps/place/65+Landsdowne+St,+Cambridge,+MA+02139" target="_blank">Get Directions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section-contact>





    </div>
</template>

<script>

    import Maps from "@/assets/images/map.png"
    export default {
        name: "contact",
        components: {},

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

                Maps:Maps



            }
        }
    }
</script>

<style scoped>






    @media all{
        .btn{text-align:center;}
        *{-webkit-tap-highlight-color:transparent;}
        .btn{-webkit-backface-visibility:hidden;}
        section-contact{display:block;}
        a{background-color:transparent;}
        a:active,a:hover{outline:0;}
        strong{font-weight:700;}
        .btn{cursor:pointer;}
        .Container:after{content:"";display:table;clear:both;}
        .Container{max-width:75rem;margin-left:auto;margin-right:auto;}
        .Container:after{content:" ";display:block;clear:both;}
        .Accordion-content{display:none;}
        *,:after,:before{box-sizing:border-box;}
        section-contact{padding:50px 0;

        background-color: #ffff


        }
        @media (min-width:48rem){
            section-contact{padding:80px 0;}
        }
        .btn{position:relative;display:inline-block;height:42px;padding:0 30px 2px;-webkit-transition:all .35s;transition:all .35s;outline:0;border-radius:30px;font-weight:400;line-height:40px;}
        @media (min-width:30rem){
            .btn{height:48px;line-height:46px;}
        }
        .btn--arrowRight:after{position:relative;width:8px;height:8px;display:inline-block;content:"";}
        .btn--red-500{color:#fff!important;background-color:#da4d3c;font-weight:400!important;}
        .btn--red-500:hover{background-color:#c93326;}
        .btn--outline-white{color:#fff;border:1px solid #fff;}
        .btn--outline-white:hover{color:#da4d3c;background-color:#fff;}
        .btn--arrowRight:after{border-width:2px 2px 0 0;margin-left:9px;}
        .btn--arrowRight{overflow:hidden;margin-bottom:-2px;-webkit-transition:all .35s;transition:all .35s;}
        .btn--arrowRight:after{top:-1px;-webkit-transition:all .35s;transition:all .35s;-webkit-transform:rotate(45deg) translate(0,0);-ms-transform:rotate(45deg) translate(0,0);transform:rotate(45deg) translate(0,0);border-style:solid;}
        .btn--arrowRight:hover{padding-right:21px;padding-left:39px;}
        .btn--arrowRight:hover:after{-webkit-transform:rotate(45deg) translate(3rem,-3rem);-ms-transform:rotate(45deg) translate(3rem,-3rem);transform:rotate(45deg) translate(3rem,-3rem);}
        .btn--arrowRight.btn--outline-white:after{border-color:#fff;}
        .Contact section-contact:last-of-type{overflow-x:hidden;padding:0;background:#f5f5f5;box-shadow:inset 0 1px 3px 0 rgba(0,0,0,.1);}
        .Contact .Contact-footer-container{margin-right:0;margin-left:0;}
        @media (min-width:30rem){
            .Contact .Contact-footer-container{margin-right:auto;margin-left:auto;}
        }
        .Contact-footer--left{padding:0;width:100%;float:left;}
        @media (min-width:30rem){
            .Contact-footer--left:after{display:block;clear:both;content:" ";}
        }
        @media (min-width:56.25rem){
            .Contact-footer--left{width:100%;float:left;padding-left:.83333%;padding-right:.83333%;}
            .Contact-footer--left .Contact-footer--left-contentWrapper{padding-top:60px;padding-bottom:60px;margin-bottom:0;}
        }
        @media (min-width:64rem){
            .Contact-footer--left{float:left;width:60%;}
            .Contact-footer--left .Contact-footer--left-contentWrapper{float:right;max-width:800px;}
        }
        .Contact-footer--left .Contact-footer--left-contentWrapper{width:100%;}
        .Contact-footer--left .Contact-footer--left-contentWrapper div:first-of-type{margin-bottom:0;}
        .Contact-footer--left div{display:inline-block;margin-bottom:0;background-color:#f5f5f5;width:100%;float:left;padding:0;}
        @media (min-width:56.25rem){
            .Contact-footer--left div{margin-bottom:45px;background-color:transparent;width:50%;float:left;padding-left:.83333%;padding-right:.83333%;}
            .Contact-footer--left div:nth-of-type(3),.Contact-footer--left div:nth-of-type(4){margin-bottom:0;}
        }
        .Contact-footer--left div .Heading3{height:54px;margin:0;padding:0 0 0 15px;color:#404040;border-top:1px solid #ddd;border-bottom:1px solid #ddd;background:#e6e6e6;font-size:18px;font-weight:600;line-height:54px;}
        @media (min-width:56.25rem){
            .Contact-footer--left div .Heading3{height:auto;margin:auto auto 6px;padding-left:0;border:none;background:0 0;font-size:21px;line-height:normal;}
            .Contact-footer--left div .Heading3:before{display:none;}
        }
        .Contact-footer--left div .Heading3:after,.Contact-footer--left div .Heading3:before{right:31px;float:right;content:"";background-color:#404040;position:relative;}
        .Contact-footer--left div .Heading3:before{top:23px;width:2px;height:8px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}
        .Contact-footer--left div .Heading3:after{top:26px;width:7px;height:2px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}
        .Contact-footer--left div p{margin:36px 0;padding-left:15px;color:#7d7d7d;}
        @media (min-width:56.25rem){
            .Contact-footer--left div .Heading3:after{display:none;}
            .Contact-footer--left div p{margin:auto;padding-left:0;}
        }
        .Contact-footer--left div .Contact-maplink{display:inline-block;margin:18px 0;}
        @media (min-width:56.25rem){
            .Contact-footer--left div .Contact-maplink{display:none;}
            .Contact-footer--left .Accordion-content{display:block;}
        }
        .Contact-footer--right{display:none;width:100%;float:left;padding:0;}
        @media (min-width:64rem){
            .Contact-footer--right{float:right;width:40%;}
        }
        .Contact-footer--right .Contact-footer--right-content{margin:auto;padding:107px .83333%;width:33.33333%;float:left;}
        @media (min-width:56.25rem){
            .Contact-footer--right{display:block;}
            .Contact-footer--right .Contact-footer--right-content{padding:92px 12.6% 0;width:100%;}
        }
        @media (min-width:64rem){
            .Contact-footer--right .Contact-footer--right-content{margin:0;padding:103px 11% 0;}
        }
        .Contact-footer--right .Contact-footer--right-content>div{position:relative;width:308px;padding:36px 36px 36px 54px;margin:auto;background:url(file:///C:/Users/heman/Downloads/PaxHeaders.X/contact/images/icons/meta/icon-location-white.svg) 30px 38px no-repeat #da4d3c;background-size:6%;}
        .Contact-footer--right .Contact-footer--right-content>div>p{color:#fff;font-size:.9375rem;text-align:left;}
        .Contact-footer--right .Contact-footer--right-content>div>a{margin:36px auto auto;}
        .Contact-footer--right .Contact-footer--right-content>div:after{position:absolute;top:100%;left:50%;width:0;height:0;margin-left:-12px;content:" ";pointer-events:none;border:solid transparent;border-width:12px;border-color:rgba(218,77,60,0);border-top-color:#da4d3c;}
        .Contact-footer--right-background{padding-bottom:485px;background-size:cover;box-shadow:inset 0 2px 1px 0 rgba(0,0,0,.15);background-position:center;}
        .Container{z-index:10;}
        @media (max-width:78rem){
            .Container{margin-right:1.5rem;margin-left:1.5rem;}
        }
        @media (max-width:56.25rem){
            .Container{margin-right:1rem;margin-left:1rem;}
        }
        .Container--maxWidth{max-width:100%;margin-right:0;margin-left:0;}
        a{text-decoration:none;}
        h3{color:#404040;}
        a,p{margin:0;}
        .Heading3{position:relative;display:block;margin:0;padding:0;}
        .Heading3{font-weight:600;}
        .Heading3{padding-top:6px;padding-bottom:6px;font-size:24px;line-height:1.25;}
        p{padding-bottom:18px;font-size:1.125rem;line-height:1.6;}
        p:last-child{padding-bottom:0;}
        .Heading3+p{margin-top:6px;}
        p .btn{margin-top:6px;}
        a{outline:0;}
        :-moz-placeholder,:-ms-input-placeholder,::-moz-placeholder,::-webkit-input-placeholder{color:#000;}
    }
    .btn--arrowRight{margin-bottom:0;}

</style>