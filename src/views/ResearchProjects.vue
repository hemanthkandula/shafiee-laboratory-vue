<template>
    <section class="group group--default    has-grey-background">

        <div class="group__content-wrapper">


            <div class="content group__content    ">
                <div class="content__text">

                    <div class="content__header">
                        <h2 class="content__title ">
                            Research Projects
                        </h2>

                    </div>

                    <div class="content__body">
                        <p>text about it </p>
                    </div>
                </div>

            </div>
        </div>

        <div class="group__gallery-wrapper">




            <div class="gallery gallery--content-card

      gallery--3-columns



">

                <div class="gallery__wrapper">

                    <div :key="index" class="gallery__item " v-for="(col,index) in 6">
                        <div class="card card--content    " data-card-type="card">


                            <a class="card__link" href="/project-description" title="research Area 1" target="_blank">

                                <span class="hidden-text">research Area 1</span>
                            </a>




                            <div class="content     ">
                                <div class="content__text">

                                    <div class="content__header">
                                        <div class="content__title ">
                                            Research Project 1
                                        </div>

                                    </div>

                                    <div class="content__body">
                                        <p>Projects descrition</p>
                                    </div>
                                </div>
                                <div class="content__ctas">


                                    <router-link class="button" exact to='/project-description'>
                                        Explore Project


                                    </router-link>



                                </div>

                            </div>  </div>
                    </div>







                </div>
            </div>
        </div>

    </section>



</template>

<script>
    export default {
        name: "ResearchProjects",

    }
</script>

<style scoped>

</style>