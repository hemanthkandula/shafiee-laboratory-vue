<template>
    <div class="gallery__item">
        <div class="card card--content    " data-card-type="card" >

            <!--<router-link class="card__link" exact target="_blank" to="/apply">-->
            <!--<a class="card__link" :onclick="callparent" ><span class="hidden-text">LINK </span></a>-->

            <a class="card__link"  @click="callparent" :title="title">
                <span class="hidden-text">Software Engineer, AI/ML</span></a>

                <span class="hidden-text">{{ title}}</span>

            <!--</router-link>-->


            <div class="content     ">
                <div class="content__text">

                    <div class="content__header">
                        <div class="content__title has-icon">
                            <span class="icon icon--full-time"></span>

                            {{ title}}
                        </div>

                    </div>

                    <div class="content__body">
                        <p>


                            <br>
                            <br>
                            {{content}}

                        </p>
                    </div>
                </div>
                <div class="content__ctas">


                        <a class="button" href="mailto:"
                        >
                            <!--v-on:click="callparent"-->



                            Apply now
                        </a>

                </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'PositionCard',
        data: function () {

            return {

                dialog:{
                    type:Boolean,
                    default:true
                }
            }

        },
        props: {

            title: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            },

        },

        methods:{

            callparent:function () {

                // console.error('applydialog')

                this.$emit('applydialog', this.title)


            }
        }

    }
</script>
