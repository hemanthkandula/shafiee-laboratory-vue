<template>

    <section class="group group--pub    ">
        <div class="group__wrapper">


            <div class="group__content-wrapper">
                <div class="content group__content    ">
                    <div class="content__text">
                        <span class="content__brow">Publications</span>
                        <div class="content__header">
                            <h2 class="content__title ">
                                Recent research publications
                            </h2>
                        </div>
                        <div class="content__body">
                            <p> research papers</p>
                        </div>
                    </div>
                    <div class="content__ctas">
                        <a class="button" href="/research/pubs/">
                            See our publications
                        </a>
                    </div>
                </div>
            </div>

            <div class="group__gallery-wrapper">
                <div class="gallery gallery--pub
                     gallery--1-columns">
                    <div class="gallery__wrapper">


                        <SinglePublication/>
                        <SinglePublication/>
                        <SinglePublication/>


                    </div>
                </div>
            </div>
        </div>
    </section>


</template>

<script>
    import SinglePublication from "@/components/SinglePublication";

    export default {
        props: {
            tweet: Object
        },
        name: "RecentPubications",
        components: {SinglePublication},
        data: function () {
            return {
                tweets: null
            };
        }
    }
</script>

