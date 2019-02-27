<template>
    <div class="gallery__item">
        <div class="card card--content    " data-card-type="card">

            <router-link class="card__link" exact target="_blank" to="/apply">


                <span class="hidden-text">{{ title}}</span>

            </router-link>


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

                    <router-link exact to="/apply">
                        <a class="button"
                        >

                            Apply now
                        </a>
                    </router-link>

                </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'PositionCard',
        data: function () {

            return {}

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
            }
        }

    }
</script>
