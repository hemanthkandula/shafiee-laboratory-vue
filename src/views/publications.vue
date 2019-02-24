<template>
    <div>
        <section class="search search--default is-list-view is-ready" data-pk="">
            <div class="search__wrapper ">

                <div class="search__header">
                    <h2 class="search__title">Publications</h2>
                </div>

                <div class="filters search__filters">
                    <h5 class="filters__title"><span class="filters__reset"
                                                     ng-class="{'is-visible': !filterCtrl.isEmpty()}"><a href=""
                                                                                                         ng-click="filterCtrl.resetFilters()">Reset filters</a></span>
                    </h5>

                    <!--<div class="filter ng-scope is-active" data-filter="" id="year" style="height: 150px;">-->
                    <!--<button ng-click="filterCtrl.toggleFilter($event)" class="filter__title ng-binding">-->
                    <!--Year-->
                    <!--</button>-->
                    <!--<div class="filter__list" data-filter-list="">-->
                    <!--<label data-filter-option="" ng-if="filterCtrl.doesFilterExists(filterType, optionKey)" ng-repeat="optionKey in ::filterContent" class="filter__label ng-scope">-->
                    <!--<input type="checkbox" class="filter__option" id="2019" ng-click="filterCtrl.filterBy($event, filterType, optionKey)">-->

                    <!--<span class="filter__option-title ng-binding">2019</span>-->
                    <!--<span class="filter__option-count ng-binding">2</span>-->
                    <!--</label>-->
                    <!--</div>-->
                    <!--</div>&lt;!&ndash; end ngRepeat: (filterType, filterContent) in ::filterCtrl.getFilters() track by filterType &ndash;&gt;<div ng-class="{'is-disabled': filterCtrl.isFilterDisabled(filterContent)}" ng-repeat="(filterType, filterContent) in ::filterCtrl.getFilters() track by filterType" class="filter ng-scope" data-filter="" id="area" style="">-->
                    <!--<button ng-click="filterCtrl.toggleFilter($event)" class="filter__title ng-binding">-->
                    <!--Research areas-->
                    <!--</button>-->
                    <!--<div class="filter__list" data-filter-list="">-->


                    <!--<label data-filter-option="" ng-if="filterCtrl.doesFilterExists(filterType, optionKey)" ng-repeat="optionKey in ::filterContent" class="filter__label ng-scope">-->
                    <!--<input type="checkbox" class="filter__option" id="research-area-algorithms-and-theory" ng-click="filterCtrl.filterBy($event, filterType, optionKey)">-->

                    <!--<span class="filter__option-title ng-binding">AI</span>-->
                    <!--<span class="filter__option-count ng-binding">724</span>-->
                    <!--</label>-->


                    <!--</div>-->

                    <!--</div>-->

                </div>


                <div class="search__main"
                     ng-class="{'is-cards-fading-out': searchCtrl.cardsFadingOut, 'is-cards-fading-in': searchCtrl.cardsFadingIn}">


                    <!-- ngIf: 0 == countCtrl.countTotalResults() -->

                    <div class="search__cards">
                        <!-- ngRepeat: card in searchCtrl.getCurrentPage() -->


                        <SinglePublication></SinglePublication>


                        <a class="button" href="/positions/">
                            page Block text here
                        </a>


                    </div>


                </div>
            </div>


        </section>
        <page-block :div-class="BlockHalfImage" :has-dark-background="NoDarkBackground"
                    :section-class=CalloutFullWidth></page-block>


    </div>
</template>

<script>
    import SinglePublication from "@/components/SinglePublication";
    import PageBlock from "@/components/PageBlock";

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

                BlockHalfImage: 'block--half-image'
            }

        }
    }
</script>

<style scoped>

</style>