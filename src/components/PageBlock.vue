<template>
    <section :class="SectionClass" class="callout  ">
        <div :class="[HasDarkBackground? HasDarkBackgrounds: '', DivClass ]"
             class="block  has-light-mobile-bg has-mobile-bg">

        <div class="block__background--mobile ng-isolate-scope is-loaded"

             v-bind:style="{ backgroundImage: 'url(' + BackgroundImage + ')' }"

        ></div>

            <div class="block__background ng-isolate-scope is-loaded"


                 v-bind:style="{ backgroundImage: 'url(' + BackgroundImage + ')' }"></div>

            <div class="block__content-wrapper">
                <div class="content block__content    ">
                    <div class="content__text">
                        <!--<span class="content__brow"> {{Title}}</span>-->
                        <div class="content__header">
                            <h3 class="content__title ">
                                {{Title}}
                            </h3>

                        </div>
                        <div class="content__body">
                            <p>{{Description}}.</p>
                        </div>
                    </div>
                    <div class="content__ctas">
                            <router-link class="button" exact :to=Button_link>
                            {{Button}}

                            </router-link>


                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

    import img from "@/assets/images/Spermcard.jpg"
    export default {
        data: function () {

            return {

                HasDarkBackgrounds: 'has-dark-background',
                Imag : img
            }
        }

        ,
        name: 'PageBlock',
        props: {
            BackgroundImage: {
                // default: 'Lucas'
            },




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

            },

            Title:{

                type: String,
                required: true
            },
            Button:{
                type: String,
                required: true
            },

            Button_link:{
                type: String,
                required: true
            },

            Description:{
                type: String,
                required: true
            }
        }
    }



</script>