<template>
    <div>
        <div class="gallery__item">
            <!--<div class="card card&#45;&#45;publication  card&#45;&#45;publication-list " data-card-type="list"-->
            <!--data-gen-art="" data-id="citation-285873181745812610519690736573110520935">-->
            <!--<a class="card__link" href="/research/pubs/"-->
            <!--v-bind:title="Title" ><span-->
            <!--class="hidden-text">{{Title}}</span></a>-->
            <!--<div class="card__image" data-gen-art-background=""><img height="100%" src="back" width="100%"></div>-->
            <!--<div class="card__link&#45;&#45;icon">-->
            <!--<a class="icon icon&#45;&#45;google-scholar card__link-search-scholar"-->
            <!--href="https://scholar.google.co.in/scholar?hl=en&as_sdt=0%2C22&q=DNA+engineered+micromotors+powered+by+metal+nanoparticles+for+motion+based+cellphone+diagnostics&btnG= target="-->
            <!--target="_blank">-->
            <!--<img alt="gs" src="../assets/icons/icon-google-scholar.svg"/>-->
            <!--</a>-->
            <!---->
            <!--<div class="card__link-tooltip">Google Scholar</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;<div class="card__link&#45;&#45;icon">&ndash;&gt;-->
            <!--&lt;!&ndash;<a class="icon icon&#45;&#45;copy card__link-copy-bibtex ng-scope" href="/" ng-controller="CopyController as CopyCtrl" ng-click="CopyCtrl.onClick($event, &#39;%40inproceedings%7B45826%2C%0Atitle%09%3D%20%7BNeural%20Architecture%20Search%20with%20Reinforcement%20Learning%7D%2C%0Aauthor%09%3D%20%7BBarret%20Zoph%20and%20Quoc%20V.%20Le%7D%2C%0Ayear%09%3D%20%7B2017%7D%2C%0AURL%09%3D%20%7Bhttps%3A//arxiv.org/abs/1611.01578%7D%0A%7D%0A%0A&#39;, true)" ng-class="{&#39;is-succeed&#39;: CopyCtrl.isSucceeded}">&ndash;&gt;-->
            <!---->
            <!--&lt;!&ndash;<img src="../assets/icons/icon-copy.svg" />&ndash;&gt;-->
            <!---->
            <!--&lt;!&ndash;</a>&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="card__link-tooltip">Copy BibTex</div>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--<div class="card__link&#45;&#45;icon card__link&#45;&#45;icon-abstract ng-scope" data-card-abstract=""-->
            <!--ng-controller="AbstractPreviewController as AbstractPreviewCtrl" onclick="abstractselect(this)">-->
            <!--<a class="icon icon&#45;&#45;info card__link-info" ng-click="AbstractPreviewCtrl.open($event)">-->
            <!---->
            <!--<img alt="info" src="../assets/icons/icon-info.svg"/>-->
            <!--</a>-->
            <!--<div class="card__link-tooltip">Preview Abstract</div>-->
            <!--<div class="card__link-abstract t&#45;&#45;card-description">-->
            <!--<a class="icon icon&#45;&#45;close card__link-abstract-close"-->
            <!--ng-click="AbstractPreviewCtrl.close($event)"></a>-->
            <!--<p> HIV-1 infection is a major-->
            <!--th threat in both developed and developing countries. The integration of mobile health-->
            <!--approaches and bioengineered catalytic motors can allow the development of sensitive and-->
            <!--portable technologies for HIV-1 management. Here, we report a platform that integrates-->
            <!--cellphone-based optical sensing, loop-mediated isothermal DNA amplification and micromotor-->
            <!--motion for molecular detection of HIV-1. The presence of HIV-1 RNA in a sample results in the-->
            <!--formation of large-sized amplicons that reduce the motion of motors. The change in the motors-->
            <!--motion can be accurately measured using a cellphone system as the biomarker for target nucleic-->
            <!--acid detection. The presented platform allows the qualitative detection of HIV-1 (n= 54) with-->
            <!--99.1% specificity and 94.6% sensitivity at a clinically relevant threshold value of 1000 virus-->
            <!--particles/ml. The cellphone system has the potential to enable …-->
            <!--</p>-->
            <!--&lt;!&ndash;<a href="">View details</a>&ndash;&gt;-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="content card__content ">-->
            <!--<div class="content__title">-->
            <!---->
            <!--<a class="card__title"  v-bind:href="Link" :title="Title">{{Title}}-->
            <!---->
            <!--</a>-->
            <!--</div>-->
            <!--<div class="content__body">-->
            <!--<p class="content__authors">-->
            <!---->
            <!--{{Authors}}-->
            <!---->
            <!--&lt;!&ndash;<span><a href="/research/people/" title="Author 1">Mohamed Shehata Draz</a></span>&ndash;&gt;-->
            <!--&lt;!&ndash;<span>, </span>&ndash;&gt;-->
            <!--&lt;!&ndash;<span><a href="/research/people/" title="Author 1">Kamyar Mehrabi Kochehbyoki </a></span>&ndash;&gt;-->
            <!--&lt;!&ndash;<span>, </span>&ndash;&gt;-->
            <!--&lt;!&ndash;<span><a href="/research/people/" title="Author 1">Anish Vasan</a></span>&ndash;&gt;-->
            <!--&lt;!&ndash;<span>, </span>&ndash;&gt;-->
            <!--&lt;!&ndash;<span><a href="/research/people/" title="Author 1">Dheerendranath Battalapalli</a></span>&ndash;&gt;-->
            <!--&lt;!&ndash;<span>, </span>&ndash;&gt;-->
            <!--&lt;!&ndash;<span><a href="/research/people/" title="Author 1">Aparna Sreeram</a></span>&ndash;&gt;-->
            <!--&lt;!&ndash;<span>, </span>&ndash;&gt;-->
            <!--&lt;!&ndash;<span><a href="/research/people/" title="Author 1">Manoj Kumar Kanakasabapathy</a></span>&ndash;&gt;-->
            <!--&lt;!&ndash;<span>, </span>&ndash;&gt;-->
            <!--&lt;!&ndash;<span><a href="/research/people/" title="Author 1">Shantanu Kallakuri</a></span>&ndash;&gt;-->
            <!--&lt;!&ndash;<span>, </span>&ndash;&gt;-->
            <!--&lt;!&ndash;<span><a href="/research/people/" title="Author 1">Athe Tsibris</a></span>&ndash;&gt;-->
            <!--&lt;!&ndash;<span>, </span>&ndash;&gt;-->
            <!--&lt;!&ndash;<span><a href="/research/people/" title="Author 1">Daniel R Kuritzkes</a></span>&ndash;&gt;-->
            <!--&lt;!&ndash;<span>, </span>&ndash;&gt;-->
            <!--&lt;!&ndash;<span><a href="/research/people/" title="Author 1">Hadi Shafiee</a></span>&ndash;&gt;-->
            <!--&lt;!&ndash;<span>, </span>&ndash;&gt;-->
            <!---->
            <!--</p>-->
            <!--<p class="content__venue">-->
            <!---->
            <!--<span-->
            <!--class="booktitle"><strong>{{Journal}}</strong></span><span>, </span> <span-->
            <!--class="year"> {{pubDate }}</span><span>, </span> <span class="year"> {{Volume}}}</span></p>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->

            <div class="card card--publication  card--publication-list " data-card-type="list">
                <a :href="Link" :title="Title" class="card__link"><span class="hidden-text">{{Title}}</span></a>
                <div class="card__image" data-gen-art-background="">
                    <img alt="back" height="100%" src="back" width="100%"></div>


                <div class="card__link--icon">

                    <a class="icon icon--google-scholar card__link-search-scholar"

                       :href =makehref(Title)
                       target="_blank">
                        <!--<img alt="GS" src="../assets/icons/icon-google-scholar.svg"/>-->
                        <img alt="info" src="../assets/icons/gs.jpg" width="26px" height="26px"/>

                    </a>

                    <div class="card__link-tooltip">Google Scholar</div>

                </div>


                <!--<div class="card__link&#45;&#45;icon">-->
                <!--<a class="icon icon&#45;&#45;copy card__link-copy-bibtex ng-scope" href="/" ng-controller="CopyController as CopyCtrl" ng-click="CopyCtrl.onClick($event, &#39;%40inproceedings%7B45826%2C%0Atitle%09%3D%20%7BNeural%20Architecture%20Search%20with%20Reinforcement%20Learning%7D%2C%0Aauthor%09%3D%20%7BBarret%20Zoph%20and%20Quoc%20V.%20Le%7D%2C%0Ayear%09%3D%20%7B2017%7D%2C%0AURL%09%3D%20%7Bhttps%3A//arxiv.org/abs/1611.01578%7D%0A%7D%0A%0A&#39;, true)" ng-class="{&#39;is-succeed&#39;: CopyCtrl.isSucceeded}">-->

                <!--<img src="./files/static/images/icons/icon-copy.svg" />-->

                <!--</a>-->
                <!--<div class="card__link-tooltip">Copy BibTex</div>-->
                <!--</div>-->

                <div class="card__link--icon card__link--icon-abstract   ng-scope"

                     v-bind:class="{ 'is-active': showMobileMenu }"
                     v-on:click="showMobileMenu = !showMobileMenu">

                    <a class="icon icon--info card__link-info">

                        <img alt="info" src="../assets/icons/icons-info.svg"/>
                    </a>
                    <div class="card__link-tooltip">Preview Abstract</div>
                    <div class="card__link-abstract t--card-description">
                        <a class="icon icon--close card__link-abstract-close"
                           ></a>
                        <p> {{ Description}}
                        </p>
                        <a :href=URL>View details</a>
                    </div>
                </div>


                <div class="content card__content ">
                    <div class="content__title">
                        <a :href="Link" class="card__title1" title="Pub Name">{{Title}}</a>
                    </div>
                    <div class="content__body">
                        <p class="content__authors" >

                            {{Authors}}


                            <!--<span><a href="/research/people/" title="Author 1">Mohamed Shehata Draz</a></span>-->
                            <!--<span>, </span>-->
                            <!--<span><a href="/research/people/" title="Author 1">Kamyar Mehrabi Kochehbyoki </a></span>-->
                            <!--<span>, </span>-->
                            <!--<span><a href="/research/people/" title="Author 1">Anish Vasan</a></span>-->
                            <!--<span>, </span>-->
                            <!--<span><a href="/research/people/" title="Author 1">Dheerendranath Battalapalli</a></span>-->
                            <!--<span>, </span>-->
                            <!--<span><a href="/research/people/" title="Author 1">Aparna Sreeram</a></span>-->
                            <!--<span>, </span>-->
                            <!--<span><a href="/research/people/" title="Author 1">Manoj Kumar Kanakasabapathy</a></span>-->
                            <!--<span>, </span>-->
                            <!--<span><a href="/research/people/" title="Author 1">Shantanu Kallakuri</a></span>-->
                            <!--<span>, </span>-->
                            <!--<span><a href="/research/people/" title="Author 1">Athe Tsibris</a></span>-->
                            <!--<span>, </span>-->
                            <!--<span><a href="/research/people/" title="Author 1">Daniel R Kuritzkes</a></span>-->
                            <!--<span>, </span>-->
                            <!--<span><a href="/research/people/" title="Author 1">Hadi Shafiee</a></span>-->
                            <!--<span>, </span>-->

                        </p>
                        <p class="content__venue">

                        <span class="booktitle">

                        <strong>{{Journal}}</strong></span> <span class="year"> {{Pubdate}},</span>

                            <span class="year"> Vol.{{Volume}}<span v-if="Issue!==''"> ({{Issue}}),</span>  pp{{Pages}}</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>


    </div>
</template>
<script>

    import InfoIcon from "@/assets/icons/icon-info.svg"
    import GoogleScholarIcon from "@/assets/icons/icon-google-scholar.svg"

    export default {
        name: 'SinglePublication',
        data: function () {
            return {
                googlescholaricon: GoogleScholarIcon,
                infoicon: InfoIcon,

                showMobileMenu: false


            }
        },
        methods:{
          makehref:function (title) {

              const gs = 'https://scholar.google.co.in/scholar?q=';

              title = title.replace(/\s+/g, '+')

              return gs+title;




          }
        },
        props: {
            Authors: {
                type: String,
                required: true
            },

            Link: {
                type: String,
                required: true
            },

            Title: {

                type: String,
                required: true

            }, Journal: {

                type: String,
                required: true

            },
            Volume: {

                type: String,
                required: true
            },
            Issue: {

                type: String,
                required: true
            },
            Pages: {

                type: String,
                required: true
            },

            Pubdate: {

                type: String,
                required: true

            },
            Description: {
                type: String,
                required: true
            },


        URL: {
            type: String,
            required: true
        }


        }
    }

</script>

<style scoped>

    @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto');
    .card__title1 {
        font-family: 'Roboto', sans-serif;
        /*color: #000;*/


    }

.content__authors {
    font-family: 'Roboto', sans-serif;

}
    .year{

        font-family: 'Roboto', sans-serif;

    }

    .booktitle{
        font-family: 'Exo', sans-serif;

    }

    a,
    .t--link {
        color: #000;
        font-weight: 500;
        position: relative;
        text-decoration: none;
        -webkit-text-decoration-color: rgba(66, 133, 244, 0);
        text-decoration-color: rgba(66, 133, 244, 0);
        transition: color .25s linear, -webkit-text-decoration-color .25s linear;
        transition: text-decoration-color .25s linear, color .25s linear;
        transition: text-decoration-color .25s linear, color .25s linear, -webkit-text-decoration-color .25s linear
    }


    .search.is-list-view .card .card__link-search-scholar:hover,
    .search.is-list-view .card .card__link-copy-bibtex:hover,
    .search.is-list-view .card .card__link-info:hover,
    .card.card--publication-list .card__link-search-scholar:hover,
    .search.is-list-view .card.card--publication .card__link-search-scholar:hover,
    .card.card--publication-list .card__link-copy-bibtex:hover,
    .search.is-list-view .card.card--publication .card__link-copy-bibtex:hover,
    .card.card--publication-list .card__link-info:hover,
    .search.is-list-view .card.card--publication .card__link-info:hover {
        opacity: 0.7
        
    }




</style>
