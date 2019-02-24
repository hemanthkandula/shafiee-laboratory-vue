<template>
    <section :class="SectionClass" class="callout  ">
        <div :class="{DivClass, 'has-dark-background' : HasDarkBackground}"
             class="block block--cta-left   has-light-mobile-bg has-mobile-bg">
            <div class="block__background ng-isolate-scope is-loaded"
                 data-ng-lazy-background="/static/images/global/footer-cta_join-us.jpg"
                 style="background-image: url(/static/images/global/footer-cta_join-us.jpg);"></div>
            <div class="block__background--mobile ng-isolate-scope is-loaded"
                 data-ng-lazy-background="/static/images/global/footer-cta_join-us-m.jpg"
                 style="background-image: url(./static/images/global/footer-cta_join-us-m.jpg);"></div>
            <div class="block__content-wrapper">
                <div class="content block__content    ">
                    <div class="content__text">
                        <span class="content__brow"> page Block</span>
                        <div class="content__header">
                            <h3 class="content__title ">
                                page Block
                            </h3>

                        </div>
                        <div class="content__body">
                            <p>Our teams advance the state of the art through research, engineering.</p>
                        </div>
                    </div>
                    <div class="content__ctas">
                        <a class="button" href="/positions/">
                            page Block text here
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        data: function () {

            return {}
        }

        ,
        name: 'PageBlock',
        props: {
            SectionClass: {
                type: String,
                required: true
                // default: 'Lucas'
            },
            DivClass: {
                type: String,
                required: true
            },

            HasDarkBackground: {
                type: Boolean,
                required: true

            }
        }
    }


</script>