<template>
    <div>
    <section :class="SectionClass" class="callout  ">
        <div :class="[HasDarkBackground? HasDarkBackgrounds: '',HasLightBackground_mobile? HasLightBackgrounds_mobile: '', DivClass ]"
             class="block   has-mobile-bg">

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
                                {{title}}
                            </h3>

                        </div>
                        <div class="content__body">
                            <p>{{Description}}</p>
                        </div>
                    </div>
                    <div v-if="ButtonExist" class="content__ctas">
                            <router-link class="button" exact :to=button_link>
                            {{button}}

                            </router-link>


                    </div>
                </div>
            </div>



        </div>
    </section>



   






    </div>

</template>
<script>

    import img from "@/assets/images/Spermcard.jpg"



    export default {
        data: function () {

            return {

                HasDarkBackgrounds: 'has-dark-background',
                HasLightBackgrounds_mobile: 'has-light-mobile-bg ',

                Imag : img
            }
        }

        ,
        name: 'PageBlock',
        props: {
            BackgroundImage: {
                // default: 'Lucas'
            },
            ButtonExist: {
                default: true
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
            HasLightBackground_mobile: {
                type: Boolean,

            },

            title:{

                type: String,
                required: true
            },
            button:{
                type: String,
                required: true
            },

            button_link:{
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