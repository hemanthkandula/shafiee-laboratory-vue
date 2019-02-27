<template>
    <div>


        <section class="search search--default is-list-view is-ready" data-pk="">


            <div class="search__wrapper ">


                <vs-row>
                    <vs-col v-tooltip="'col - 4'" vs-align="center" vs-justify="center" vs-offset="4" vs-type="flex"
                            vs-w="4">
                        <h2 class="search__title">Publications</h2>

                        <div>
                            <p>
                                here
                            </p>
                            <article :key="idx" v-for="(publication, idx) in PublicationsDB">
                                <h1>{{ publication.name }}</h1>
                            </article>
                        </div>
                    </vs-col>
                </vs-row>

                <!--<div class="search__header">-->
                <!--<h2 class="search__title">Publications</h2>-->


                <!--</div>-->


                <!--<div class="filters search__filters">-->
                <!--<h5 class="filters__title"><span class="filters__reset"-->
                <!--ng-class="{'is-visible': !filterCtrl.isEmpty()}"><a href=""-->
                <!--ng-click="filterCtrl.resetFilters()">Reset filters</a></span>-->
                <!--</h5>-->

                <!--&lt;!&ndash;<div class="filter ng-scope is-active" data-filter="" id="year" style="height: 150px;">&ndash;&gt;-->
                <!--&lt;!&ndash;<button ng-click="filterCtrl.toggleFilter($event)" class="filter__title ng-binding">&ndash;&gt;-->
                <!--&lt;!&ndash;Year&ndash;&gt;-->
                <!--&lt;!&ndash;</button>&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="filter__list" data-filter-list="">&ndash;&gt;-->
                <!--&lt;!&ndash;<label data-filter-option="" ng-if="filterCtrl.doesFilterExists(filterType, optionKey)" ng-repeat="optionKey in ::filterContent" class="filter__label ng-scope">&ndash;&gt;-->
                <!--&lt;!&ndash;<input type="checkbox" class="filter__option" id="2019" ng-click="filterCtrl.filterBy($event, filterType, optionKey)">&ndash;&gt;-->

                <!--&lt;!&ndash;<span class="filter__option-title ng-binding">2019</span>&ndash;&gt;-->
                <!--&lt;!&ndash;<span class="filter__option-count ng-binding">2</span>&ndash;&gt;-->
                <!--&lt;!&ndash;</label>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&lt;!&ndash; end ngRepeat: (filterType, filterContent) in ::filterCtrl.getFilters() track by filterType &ndash;&gt;<div ng-class="{'is-disabled': filterCtrl.isFilterDisabled(filterContent)}" ng-repeat="(filterType, filterContent) in ::filterCtrl.getFilters() track by filterType" class="filter ng-scope" data-filter="" id="area" style="">&ndash;&gt;-->
                <!--&lt;!&ndash;<button ng-click="filterCtrl.toggleFilter($event)" class="filter__title ng-binding">&ndash;&gt;-->
                <!--&lt;!&ndash;Research areas&ndash;&gt;-->
                <!--&lt;!&ndash;</button>&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="filter__list" data-filter-list="">&ndash;&gt;-->


                <!--&lt;!&ndash;<label data-filter-option="" ng-if="filterCtrl.doesFilterExists(filterType, optionKey)" ng-repeat="optionKey in ::filterContent" class="filter__label ng-scope">&ndash;&gt;-->
                <!--&lt;!&ndash;<input type="checkbox" class="filter__option" id="research-area-algorithms-and-theory" ng-click="filterCtrl.filterBy($event, filterType, optionKey)">&ndash;&gt;-->

                <!--&lt;!&ndash;<span class="filter__option-title ng-binding">AI</span>&ndash;&gt;-->
                <!--&lt;!&ndash;<span class="filter__option-count ng-binding">724</span>&ndash;&gt;-->
                <!--&lt;!&ndash;</label>&ndash;&gt;-->


                <!--&lt;!&ndash;</div>&ndash;&gt;-->

                <!--&lt;!&ndash;</div>&ndash;&gt;-->

                <!--</div>-->


                <vs-row>
                    <vs-col v-tooltip="'col - 12'" vs-align="center" vs-justify="center" vs-offset="0" vs-type="flex"
                            vs-w="12">
                        <div class="search__main"
                        >


                            <!-- ngIf: 0 == countCtrl.countTotalResults() -->

                            <div class="search__cards">
                                <!-- ngRepeat: card in searchCtrl.getCurrentPage() -->


                                <SinglePublication></SinglePublication>


                                <a class="button" href="/positions/">
                                    page Block text here
                                </a>


                            </div>


                        </div>
                    </vs-col>
                </vs-row>

            </div>


        </section>
        <page-block :div-class="BlockHalfImage" :has-dark-background="NoDarkBackground"
                    :section-class=CalloutFullWidth></page-block>


    </div>
</template>

<script>
    import SinglePublication from "@/components/SinglePublication";
    import PageBlock from "@/components/PageBlock";
    import {db} from '../main'


    export default {
        name: "publications",
        components: {PageBlock, SinglePublication},
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

                BlockHalfImage: 'block--half-image',
                PublicationsDB: []
            }

        },
        firestore() {
            return {
                PublicationsDB: db.collection('publications').orderBy('createdAt')
            }
        }
    }
</script>

<style scoped>

</style>