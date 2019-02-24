<template>
    <div class="gallery__item">
        <div class="card card--publication  card--publication-list " data-card-type="list"
             data-gen-art="" data-id="citation-285873181745812610519690736573110520935">
            <a class="card__link" href="/research/pubs/"
               title="DNA engineered micromotors powered by metal nanoparticles for motion based cellphone diagnostics"><span
                    class="hidden-text">Pub 1</span></a>
            <div class="card__image" data-gen-art-background=""><img height="100%" src="back" width="100%"></div>
            <div class="card__link--icon">
                <a class="icon icon--google-scholar card__link-search-scholar"
                   href="https://scholar.google.co.in/scholar?hl=en&as_sdt=0%2C22&q=DNA+engineered+micromotors+powered+by+metal+nanoparticles+for+motion+based+cellphone+diagnostics&btnG= target="
                   target="_blank">
                    <img alt="gs" src="../assets/icons/icon-google-scholar.svg"/>
                </a>

                <div class="card__link-tooltip">Google Scholar</div>
            </div>
            <!--<div class="card__link&#45;&#45;icon">-->
            <!--<a class="icon icon&#45;&#45;copy card__link-copy-bibtex ng-scope" href="/" ng-controller="CopyController as CopyCtrl" ng-click="CopyCtrl.onClick($event, &#39;%40inproceedings%7B45826%2C%0Atitle%09%3D%20%7BNeural%20Architecture%20Search%20with%20Reinforcement%20Learning%7D%2C%0Aauthor%09%3D%20%7BBarret%20Zoph%20and%20Quoc%20V.%20Le%7D%2C%0Ayear%09%3D%20%7B2017%7D%2C%0AURL%09%3D%20%7Bhttps%3A//arxiv.org/abs/1611.01578%7D%0A%7D%0A%0A&#39;, true)" ng-class="{&#39;is-succeed&#39;: CopyCtrl.isSucceeded}">-->

            <!--<img src="../assets/icons/icon-copy.svg" />-->

            <!--</a>-->
            <!--<div class="card__link-tooltip">Copy BibTex</div>-->
            <!--</div>-->
            <div class="card__link--icon card__link--icon-abstract ng-scope" data-card-abstract=""
                 ng-controller="AbstractPreviewController as AbstractPreviewCtrl" onclick="abstractselect(this)">
                <a class="icon icon--info card__link-info" ng-click="AbstractPreviewCtrl.open($event)">

                    <img alt="info" src="../assets/icons/icon-info.svg"/>
                </a>
                <div class="card__link-tooltip">Preview Abstract</div>
                <div class="card__link-abstract t--card-description">
                    <a class="icon icon--close card__link-abstract-close"
                       ng-click="AbstractPreviewCtrl.close($event)"></a>
                    <p> HIV-1 infection is a major
                        th threat in both developed and developing countries. The integration of mobile health
                        approaches and bioengineered catalytic motors can allow the development of sensitive and
                        portable technologies for HIV-1 management. Here, we report a platform that integrates
                        cellphone-based optical sensing, loop-mediated isothermal DNA amplification and micromotor
                        motion for molecular detection of HIV-1. The presence of HIV-1 RNA in a sample results in the
                        formation of large-sized amplicons that reduce the motion of motors. The change in the motors
                        motion can be accurately measured using a cellphone system as the biomarker for target nucleic
                        acid detection. The presented platform allows the qualitative detection of HIV-1 (n= 54) with
                        99.1% specificity and 94.6% sensitivity at a clinically relevant threshold value of 1000 virus
                        particles/ml. The cellphone system has the potential to enable …
                    </p>
                    <a href="/research/pubs/pubid">View details</a>
                </div>
            </div>
            <div class="content card__content ">
                <div class="content__title">
                    <a class="card__title" href="/research/pubs/pubid" title="Pub Name">DNA engineered micromotors
                        powered by metal nanoparticles for motion based cellphone diagnostics</a>
                </div>
                <div class="content__body">
                    <p class="content__authors">
                        <span><a href="/research/people/" title="Author 1">Mohamed Shehata Draz</a></span>
                        <span>, </span>
                        <span><a href="/research/people/" title="Author 1">Kamyar Mehrabi Kochehbyoki </a></span>
                        <span>, </span>
                        <span><a href="/research/people/" title="Author 1">Anish Vasan</a></span>
                        <span>, </span>
                        <span><a href="/research/people/" title="Author 1">Dheerendranath Battalapalli</a></span>
                        <span>, </span>
                        <span><a href="/research/people/" title="Author 1">Aparna Sreeram</a></span>
                        <span>, </span>
                        <span><a href="/research/people/" title="Author 1">Manoj Kumar Kanakasabapathy</a></span>
                        <span>, </span>
                        <span><a href="/research/people/" title="Author 1">Shantanu Kallakuri</a></span>
                        <span>, </span>
                        <span><a href="/research/people/" title="Author 1">Athe Tsibris</a></span>
                        <span>, </span>
                        <span><a href="/research/people/" title="Author 1">Daniel R Kuritzkes</a></span>
                        <span>, </span>
                        <span><a href="/research/people/" title="Author 1">Hadi Shafiee</a></span>
                        <span>, </span>

                    </p>
                    <p class="content__venue"><span
                            class="booktitle"><strong>Nature Communications</strong></span><span>, </span> <span
                            class="year"> Oct 2018</span><span>, </span> <span class="year"> Vol 9 (1)</span></p>
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
                infoicon: InfoIcon
            }
        }
    }

</script>
