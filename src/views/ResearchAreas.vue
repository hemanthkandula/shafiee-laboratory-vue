<template>
    <section class="group group--default    ">

        <div class="group__content-wrapper">


            <div class="content group__content    ">
                <div class="content__text">

                    <div class="content__header">
                        <h2 class="content__title ">
                            Research areas
                        </h2>

                    </div>

                </div>

            </div>
        </div>

        <div class="group__gallery-wrapper">


            <div class="gallery gallery--bar

      gallery--2-columns



">

                <div class="gallery__wrapper">


                    <div :key="index" class="gallery__item " v-for="(col,index) in 4">
                        <div class="bar  is-active bar--expandable bar--icon ng-scope"
                             ng-controller="ToggleController as expandCtrl">
                            <a class="bar__bar is-active" ng-class="{'is-active': expandCtrl.active}"
                               ng-click="expandCtrl.toggle($event)">
                                <span class="bar__icon icon icon--augmented-learning"></span>
                                <h4 class="bar__title">
                                    Research Area name </h4>
                                <span class="icon icon--expandable"></span>
                            </a>

                            <div class="bar__body" ng-class="{'is-active': expandCtrl.active}"
                                 ng-style="expandCtrl.active ? {'height': expandCtrl.barHeight} : {}"
                                 style="height: 124px;">


                                <div class="content     ">
                                    <div class="content__text">

                                        <div class="content__header">

                                        </div>

                                        <div class="content__body">
                                            <p>Talk about research area</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    </section>
</template>
<script>
    export default {
        name: 'ResearchAreas'
    }
</script>