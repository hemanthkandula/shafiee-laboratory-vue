<template>
    <div class="people">


        <page-block
                button="See people"
                button_link="/people#lab-members"
                description=""
                title="Our Team"

                :background-image="lab"

                :div-class="BlockCtaRight" :has-dark-background="DarkBackground"
                :section-class=CalloutFullWidth


                >

        </page-block>

        <!--:background-image="peopleimg"-->



        <section class="group group--default    ">


            <div class="group__gallery-wrapper">


                <div class="gallery gallery--quote




">

                    <div class="gallery__wrapper">


                        <div class="gallery__item">
                            <div class="quote quote--large quote--gallery quote--left">
                                <div class="quote__text">

                                    <div class="content__text">

                                        <div class="content__header">

                                            <div class="content__subtitle">
                                                Dr. Hadi Shafiee is a faculty member at the Division of Engineering in
                                                Medicine and
                                                Renal Division of Medicine at Brigham and Women’s Hospital, Harvard
                                                Medical School.
                                            </div>
                                        </div>

                                    </div>


                                </div>
                                <div class="quote__source">
                                    <div class="quote__image"
                                         v-bind:style="{ backgroundImage: 'url(' + HadiImage + ')' }"



                                        >


                                    </div>


                                    <div class="quote__details">
                                        <a class="quote__author" href="https://scholar.google.com/citations?hl=en&user=ikDTLNsAAAAJ" target="_blank">
                                            HADI SHAFIEE, PHD

                                        </a>

                                        <span class="quote__title">Principal Investigator</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>

            </div>

        </section>


        <section class="copy copy--sidebar article--big-lede ">


            <div class="copy__wrapper">


                <div class="content     ">
                    <div class="content__text">

                        <!--<div class="content__header">-->

                        <!--<div class="content__subtitle">-->
                        <!--Dr. Hadi Shafiee is a faculty member at the Division of Engineering in Medicine and-->
                        <!--Renal Division of Medicine at Brigham and Women’s Hospital, Harvard Medical School.-->
                        <!--</div>-->
                        <!--</div>-->

                        <div class="content__body">
                            <p> Dr. Shafiee graduated from Isfahan University of Technology, Iran (BSc) in 2001 and University of Tehran, Iran (MSc) in 2003 with degrees in Mechanical Engineering.
                                He received his Ph.D. in Biomedical Engineering and Mechanics from Virginia Polytechnique Institute and State University in 2010.
                                After receiving trainings in the development of devices for cell sorting and pathogen detection at Virginia Tech and
                                Harvard-MIT Division of Health Science and Technology, he started his own lab at BWH, HMS in 2014.
                                Dr. Shafiee’s lab strives to develop innovative diagnostic tools to address unmet clinical challenges through integrating biology/medicine,
                                micro- and nanotechnology, consumer electronics, and artificial intelligence. His work has been recognized by some of the major news outlets
                                including CNN, theguardian, Boston Globe, CBS News, STAT, New York Times, etc. He has mentored more than 60 postdoctoral research fellows,
                                and undergraduate and graduate students.</p>
                        </div>
                    </div>

                </div>
                <aside class="aside aside--quote ">
                    <div class="quote  quote--aside">
                        <div class="quote__text">
                            <p> With an emphasis on translational research, I hope to develop useful technologies that can make a difference in patients’ lives.
                                I also hope to train the next generation of bioengineers and scientists to work at the forefront of bioengineering and
                                regenerative medicine, and to expand the boundaries of this exciting field.
                            </p>
                        </div>
                        <div class="quote__source">
                            <div class="quote__image"
                                v-bind:style="{ backgroundImage: 'url(' + HadiImage + ')' }">


                            </div>
                            <!--<div>-->
                                <!--<vs-avatar size="large"-->
                                           <!--src="../assets/Hadi.jpg"/>-->
                            <!--</div>-->


                            <div class="quote__details">
            <span class="quote__author">
            Hadi Shafiee
          </span>

                                <span class="quote__title">Principal investigator </span>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>


        </section>

<!-- wbv;olwf/wrv   ########################-->




        <section id="lab-members" class="group group--default    has-grey-background">
            <v-layout align-center justify-center row fill-height>

                <h1 class="" >
                    LAB MEMBERS


                </h1>

            </v-layout>

            <div class="group__content-wrapper">


                <div class="content group__content    ">
                    <div class="content__text">

                        <div class="content__header">
                            <h2 class="content__title ">
                                Postdoctoral Fellows
                            </h2>

                        </div>

                        <!--<div class="content__body">-->
                            <!--<p> descroptio</p>-->
                        <!--</div>-->
                    </div>

                </div>
            </div>

            <div class="group__gallery-wrapper">




                <div class="gallery gallery--content-card

      gallery--3-columns



">

                    <div class="gallery__wrapper">





                        <div class="gallery__item" :key="index" v-for="(person ,index) in position_filtered['5']">

                            <div class="at-column" >
                                <ProfileCard :pro-image="geturl(person.img)" :pro-name="person.name">

                                </ProfileCard>


                            </div>


                        </div>




                    </div>
                </div>
            </div>




        </section>


        <section class="group group--default   ">


            <div class="group__content-wrapper">


                <div class="content group__content    ">
                    <div class="content__text">

                        <div class="content__header">
                            <h2 class="content__title ">

                                Research Staff
                            </h2>

                        </div>

                        <!--<div class="content__body">-->
                            <!--<p> descroptio</p>-->
                        <!--</div>-->
                    </div>

                </div>
            </div>

            <div class="group__gallery-wrapper">




                <div class="gallery gallery--content-card

      gallery--3-columns



">

                    <div class="gallery__wrapper">





                        <div class="gallery__item" :key="index" v-for="(person ,index) in position_filtered['6']">

                            <div class="at-column" >
                                <ProfileCard :pro-image="geturl(person.img)" :pro-name="person.name">

                                </ProfileCard>


                            </div>


                        </div>




                    </div>
                </div>
            </div>




        </section>


        <section class="group group--default    has-grey-background">


            <div class="group__content-wrapper">


                <div class="content group__content    ">
                    <div class="content__text">

                        <div class="content__header">
                            <h2 class="content__title ">
                                Student Researchers
                            </h2>

                        </div>

                        <!--<div class="content__body">-->
                            <!--<p> descroptio</p>-->
                        <!--</div>-->
                    </div>

                </div>
            </div>

            <div class="group__gallery-wrapper">




                <div class="gallery gallery--content-card

      gallery--3-columns



">

                    <div class="gallery__wrapper">





                        <div class="gallery__item" :key="index" v-for="(person ,index) in position_filtered['7']">

                            <div class="at-column" >
                                <ProfileCard :pro-image="geturl(person.img)" :pro-name="person.name">

                                </ProfileCard>


                            </div>


                        </div>




                    </div>
                </div>
            </div>




        </section>


        <!--<section  v-if="highschoolexist" class="group group&#45;&#45;default    ">-->


            <!--<div class="group__content-wrapper">-->


                <!--<div class="content group__content    ">-->
                    <!--<div class="content__text">-->

                        <!--<div class="content__header">-->
                            <!--<h2 class="content__title ">-->

                <!--High School Interns-->
                            <!--</h2>-->

                        <!--</div>-->

                        <!--<div class="content__body">-->
                            <!--<p> <br></p>-->
                        <!--</div>-->
                    <!--</div>-->

                <!--</div>-->
            <!--</div>-->

            <!--<div class="group__gallery-wrapper">-->




                <!--<div class="gallery gallery&#45;&#45;content-card-->

      <!--gallery&#45;&#45;3-columns-->



<!--">-->

                    <!--<div class="gallery__wrapper">-->





                        <!--<div class="gallery__item" :key="index" v-for="(person ,index) in position_filtered['8']">-->

                            <!--<div class="at-column" >-->
                                <!--<ProfileCard :pro-image="geturl(person.img)" :pro-name="person.name">-->

                                <!--</ProfileCard>-->


                            <!--</div>-->


                        <!--</div>-->




                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->




        <!--</section>-->




        <!--<section class="group group&#45;&#45;pub    ">-->
            <!--<div class="group__wrapper">-->

                <!--<div class="group__content-wrapper">-->


                    <!--<div class="content group__content    ">-->
                        <!--<div class="content__text">-->

                            <!--<span class="content__brow">Alumni</span>-->
                            <!--<div class="content__header">-->
                                <!--<h2 class="content__title ">-->
                                    <!--Alumni-->
                                <!--</h2>-->

                            <!--</div>-->

                            <!--<div class="content__body">-->
                                <!--<p>Some thing about alumni</p>-->
                            <!--</div>-->
                        <!--</div>-->


                    <!--</div>-->
                <!--</div>-->

                <!--<div class="group__gallery-wrapper">-->


                    <!--<div class="gallery gallery&#45;&#45;pub gallery&#45;&#45;1-columns ">-->


                        <!--<vs-row>-->
                            <!--<vs-col v-tooltip="'col - 12'" vs-align="center" vs-justify="center" vs-offset="0"-->
                                    <!--vs-type="flex"-->
                                    <!--vs-w="12">-->
                                <!--<v-expansion-panel>-->
                                    <!--<v-expansion-panel-content>-->
                                        <!--<div slot="header">-->

                                            <!--<vs-row>-->
                                                <!--<vs-col v-tooltip="'col - 4'" vs-align="center" vs-justify="center"-->
                                                        <!--vs-offset="5" vs-type="flex" vs-w="4">-->
                                                    <!--<h2 class="search__title">Alumni</h2>-->
                                                <!--</vs-col>-->
                                            <!--</vs-row>-->

                                        <!--</div>-->


                                        <!--<vs-tabs vs-alignment="fixed" vs-position="top">-->
                                            <!--<vs-tab vs-label="Postdoctoral Fellows">-->

                                                <!--<div class="at-grid" data-column="4">-->

                                                    <!--<div :key="index" class="at-column" v-for="index in 3">-->
                                                        <!--<ProfileCard/>-->


                                                    <!--</div>-->


                                                <!--</div>-->


                                            <!--</vs-tab>-->


                                            <!--<vs-tab vs-label="Graduate Researchers">-->
                                                <!--<div class="at-grid" data-column="4">-->

                                                    <!--<div :key="index" class="at-column" v-for="index in 6">-->
                                                        <!--<div class="at-user">-->


                                                            <!--<div class="at-user__avatar"><img alt=""-->
                                                                                              <!--src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"/>-->
                                                            <!--</div>-->

                                                            <!--<div class="at-user__name">First Last</div>-->
                                                            <!--<div class="at-user__title">Position</div>-->
                                                            <!--<ul class="at-social">-->
                                                                <!--&lt;!&ndash;<li class="at-social__item"><a href="">&ndash;&gt;-->
                                                                <!--&lt;!&ndash;<svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">&ndash;&gt;-->
                                                                <!--&lt;!&ndash;<path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>&ndash;&gt;-->
                                                                <!--&lt;!&ndash;</svg></a></li>&ndash;&gt;-->

                                                                <!--<li class="at-social__item">-->
                                                                    <!--<a href="">-->
                                                                        <!--<img alt="" height="18"-->
                                                                             <!--src="images/google_scholar_1094619.png"-->
                                                                             <!--width="18"/>-->

                                                                    <!--</a>-->
                                                                <!--</li>-->
                                                                <!--<li class="at-social__item"><a href="">-->
                                                                    <!--<svg height="18" viewBox="0 0 24 24" width="18"-->
                                                                         <!--xmlns="http://www.w3.org/2000/svg">-->
                                                                        <!--<path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z"-->
                                                                              <!--fill-rule="evenodd"></path>-->
                                                                    <!--</svg>-->
                                                                <!--</a></li>-->
                                                                <!--<li class="at-social__item"><a href="">-->
                                                                    <!--<svg height="18" viewBox="0 0 24 24" width="18"-->
                                                                         <!--xmlns="http://www.w3.org/2000/svg">-->
                                                                        <!--<path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"-->
                                                                              <!--fill-rule="evenodd"></path>-->
                                                                    <!--</svg>-->
                                                                <!--</a></li>-->
                                                            <!--</ul>-->


                                                        <!--</div>-->
                                                    <!--</div>-->


                                                <!--</div>-->

                                            <!--</vs-tab>-->
                                            <!--<vs-tab vs-label="Undergraduate Researchers">-->
                                                <!--<div class="at-grid" data-column="4">-->

                                                    <!--<div :key="index" class="at-column" v-for="index in 8">-->
                                                        <!--<div class="at-user">-->


                                                            <!--<div class="at-user__avatar"><img alt=""-->
                                                                                              <!--src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"/>-->
                                                            <!--</div>-->

                                                            <!--<div class="at-user__name">First Last</div>-->
                                                            <!--<div class="at-user__title">Position</div>-->
                                                            <!--<ul class="at-social">-->
                                                                <!--&lt;!&ndash;<li class="at-social__item"><a href="">&ndash;&gt;-->
                                                                <!--&lt;!&ndash;<svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">&ndash;&gt;-->
                                                                <!--&lt;!&ndash;<path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>&ndash;&gt;-->
                                                                <!--&lt;!&ndash;</svg></a></li>&ndash;&gt;-->

                                                                <!--<li class="at-social__item">-->
                                                                    <!--<a href="">-->
                                                                        <!--<img alt="" height="18"-->
                                                                             <!--src="images/google_scholar_1094619.png"-->
                                                                             <!--width="18"/>-->

                                                                    <!--</a>-->
                                                                <!--</li>-->
                                                                <!--<li class="at-social__item"><a href="">-->
                                                                    <!--<svg height="18" viewBox="0 0 24 24" width="18"-->
                                                                         <!--xmlns="http://www.w3.org/2000/svg">-->
                                                                        <!--<path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z"-->
                                                                              <!--fill-rule="evenodd"></path>-->
                                                                    <!--</svg>-->
                                                                <!--</a></li>-->
                                                                <!--<li class="at-social__item"><a href="">-->
                                                                    <!--<svg height="18" viewBox="0 0 24 24" width="18"-->
                                                                         <!--xmlns="http://www.w3.org/2000/svg">-->
                                                                        <!--<path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"-->
                                                                              <!--fill-rule="evenodd"></path>-->
                                                                    <!--</svg>-->
                                                                <!--</a></li>-->
                                                            <!--</ul>-->


                                                        <!--</div>-->
                                                    <!--</div>-->


                                                <!--</div>-->
                                            <!--</vs-tab>-->
                                            <!--<vs-tab vs-label="High School Interns">-->
                                                <!--<div class="at-grid" data-column="4">-->

                                                    <!--<div :key="index" class="at-column" v-for="index in 2">-->
                                                        <!--<div class="at-user">-->


                                                            <!--<div class="at-user__avatar"><img alt=""-->
                                                                                              <!--src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"/>-->
                                                            <!--</div>-->

                                                            <!--<div class="at-user__name">First Last</div>-->
                                                            <!--<div class="at-user__title">Position</div>-->
                                                            <!--<ul class="at-social">-->
                                                                <!--&lt;!&ndash;<li class="at-social__item"><a href="">&ndash;&gt;-->
                                                                <!--&lt;!&ndash;<svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">&ndash;&gt;-->
                                                                <!--&lt;!&ndash;<path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>&ndash;&gt;-->
                                                                <!--&lt;!&ndash;</svg></a></li>&ndash;&gt;-->

                                                                <!--<li class="at-social__item">-->
                                                                    <!--<a href="">-->
                                                                        <!--<img alt="" height="18"-->
                                                                             <!--src="images/google_scholar_1094619.png"-->
                                                                             <!--width="18"/>-->

                                                                    <!--</a>-->
                                                                <!--</li>-->
                                                                <!--<li class="at-social__item"><a href="">-->
                                                                    <!--<svg height="18" viewBox="0 0 24 24" width="18"-->
                                                                         <!--xmlns="http://www.w3.org/2000/svg">-->
                                                                        <!--<path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z"-->
                                                                              <!--fill-rule="evenodd"></path>-->
                                                                    <!--</svg>-->
                                                                <!--</a></li>-->
                                                                <!--<li class="at-social__item"><a href="">-->
                                                                    <!--<svg height="18" viewBox="0 0 24 24" width="18"-->
                                                                         <!--xmlns="http://www.w3.org/2000/svg">-->
                                                                        <!--<path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"-->
                                                                              <!--fill-rule="evenodd"></path>-->
                                                                    <!--</svg>-->
                                                                <!--</a></li>-->
                                                            <!--</ul>-->


                                                        <!--</div>-->
                                                    <!--</div>-->


                                                <!--</div>-->
                                            <!--</vs-tab>-->
                                        <!--</vs-tabs>-->


                                    <!--</v-expansion-panel-content>-->
                                <!--</v-expansion-panel>-->
                            <!--</vs-col>-->


                        <!--</vs-row>-->


                    <!--</div>-->


                <!--</div>-->

            <!--</div>-->
        <!--</section>-->


        <section class="group group--pub  has-white-background  " >
            <v-layout align-center justify-center row fill-height>

                <h1 class=" ">
                    ALUMNI

                </h1>

            </v-layout>
            <div class="group__wrapper">


                <div class="group__content-wrapper">


                    <div class="content group__content    ">
                        <div class="content__text">

                            <!--<span class="content__brow">Alumni</span>-->
                            <!--<div class="content__header">-->

                            <!--</div>-->

                            <!--<div class="content__body">-->
                                <!--<p>Some thing about alumni</p>-->
                            <!--</div>-->
                        </div>


                    </div>
                </div>

                <div class="group__gallery-wrapper">


                    <div class="gallery gallery--pub gallery--1-columns ">


                        <div class="content__header">
                            <h3 class="content__title ">

                                Postdoctoral Fellows
                            </h3>

                        </div>

                        <virtual-list :size="40" :remain="8">


                            <div class="at-grid" data-column="4">

                                <div class="at-column" :key="index" v-for="(person ,index) in position_filtered['1']">
                                    <ProfileCardAlumni :pro-image="geturl(person.img)" :pro-name="person.name"
                                                       :pro-company="person.company"
                                                       :pro-position="person.position"
                                                       :pro-url="person.url">

                                    </ProfileCardAlumni>


                                </div>


                            </div>
                        </virtual-list>


                        <section class="group group--pub  has-white-background  ">

                        <div class="content__header">
                            <h3 class="content__title ">

                                Research Staff
                            </h3>

                        </div>
                        <virtual-list :size="40" :remain="16">


                            <div class="at-grid" data-column="4">

                                <div class="at-column" :key="index" v-for="(person ,index) in position_filtered['2']">
                                    <ProfileCardAlumni :pro-image="geturl(person.img)" :pro-name="person.name"
                                                       :pro-company="person.company"
                                                       :pro-position="person.position"
                                                       :pro-url="person.url">

                                    </ProfileCardAlumni>


                                </div>

                            </div>
                        </virtual-list>
                        </section >

                        <section class="group group--pub  has-white-background  ">

                        <div class="content__header">
                            <h3 class="content__title ">

                                Student Researchers
                            </h3>

                        </div>
                        <virtual-list :size="40" :remain="20">
                            <div class="at-grid" data-column="4">



                                <div class="at-column" :key="index" v-for="(person ,index) in position_filtered['3']">
                                    <ProfileCardAlumni :pro-image="geturl(person.img)" :pro-name="person.name"
                                                       :pro-company="person.company"
                                                       :pro-position="person.position"
                                                       :pro-url="person.url">

                                    </ProfileCardAlumni>

                                </div>




                            </div>
                        </virtual-list>

                        </section>



                        <!--<section class="group group&#45;&#45;pub  has-white-background  ">-->

                        <!--<div class="content__header">-->
                            <!--<h3 class="content__title ">-->

                                <!--High School Interns-->
                            <!--</h3>-->



                        <!--</div>-->
                        <!--<virtual-list :size="40" :remain="12">-->

                            <!--<div class="at-grid" data-column="4">-->

                                <!--<div class="at-column" :key="index" v-for="(person ,index) in position_filtered['4']">-->
                                    <!--<ProfileCardAlumni :pro-image="geturl(person.img)" :pro-name="person.name"-->
                                                       <!--:pro-company="person.company"-->
                                                       <!--:pro-position="person.position"-->
                                                       <!--:pro-url="person.url">-->

                                    <!--</ProfileCardAlumni>-->

                                <!--</div>-->


                            <!--</div>-->
                        <!--</virtual-list>-->

                        <!--</section>-->

                        <!--<vs-tabs vs-alignment="center" vs-position="right">-->
                            <!--<vs-tab vs-label="Postdoctoral Fellows">-->
                                <!--<virtual-list :size="40" :remain="12">-->


                                <!--<div class="at-grid" data-column="4">-->

                                    <!--<div class="at-column" :key="index" v-for="(person ,index) in position_filtered['1']">-->
                                        <!--<ProfileCardAlumni :pro-image="geturl(person.img)" :pro-name="person.name" :pro-url="person.url">-->

                                        <!--</ProfileCardAlumni>-->


                                    <!--</div>-->


                                <!--</div>-->
                                <!--</virtual-list>-->

                            <!--</vs-tab>-->
                            <!--<vs-tab vs-label="Research Staff">-->

                                <!--<virtual-list :size="40" :remain="12">-->


                                <!--<div class="at-grid" data-column="4">-->

                                    <!--<div class="at-column" :key="index" v-for="(person ,index) in position_filtered['2']">-->
                                        <!--<ProfileCardAlumni :pro-image="geturl(person.img)" :pro-name="person.name" :pro-url="person.url">-->

                                        <!--</ProfileCardAlumni>-->


                                    <!--</div>-->

                                <!--</div>-->
                                <!--</virtual-list>-->


                            <!--</vs-tab>-->
                            <!--<vs-tab vs-label="Student Researchers">-->
                                <!--<virtual-list :size="40" :remain="12">-->
                                <!--<div class="at-grid" data-column="4">-->



                                    <!--<div class="at-column" :key="index" v-for="(person ,index) in position_filtered['3']">-->
                                        <!--<ProfileCardAlumni :pro-image="geturl(person.img)" :pro-name="person.name" :pro-url="person.url">-->

                                        <!--</ProfileCardAlumni>-->


                                    <!--</div>-->




                                <!--</div>-->
                                <!--</virtual-list>-->


                            <!--</vs-tab>-->
                            <!--<vs-tab vs-label="High School Interns">-->
                                <!--<virtual-list :size="40" :remain="12">-->

                                <!--<div class="at-grid" data-column="4">-->

                                    <!--<div class="at-column" :key="index" v-for="(person ,index) in position_filtered['4']">-->
                                        <!--<ProfileCardAlumni :pro-image="geturl(person.img)" :pro-name="person.name" :pro-url="person.url">-->

                                        <!--</ProfileCardAlumni>-->


                                    <!--</div>-->


                                <!--</div>-->
                                <!--</virtual-list>-->

                            <!--</vs-tab>-->
                        <!--</vs-tabs>-->


                    </div>


                </div>

            </div>
        </section>


        <page-block   button="Positions"
                      button_link="/positions"
                      description=""
                      title="Join Us"


                      :background-image="joinus"
                      :div-class="BlockCtaRight" :has-dark-background="DarkBackground"
                    :section-class=CalloutGrid></page-block>




        <!--<v-snackbar-->


                <!--:color="color"-->


                <!--v-model="snackbar"-->
                <!--:bottom="true"-->
                <!--:left="false"-->
                <!--:multi-line="true"-->
                <!--:right="true"-->
                <!--:timeout="6000"-->
                <!--:top="false"-->
                <!--:vertical="false"-->
        <!--&gt;-->
            <!--{{ message }}-->
            <!--<v-btn-->
                    <!--dark-->
                    <!--flat-->
                    <!--@click="snackbar = false"-->
            <!--&gt;-->
                <!--Close-->
            <!--</v-btn>-->
        <!--</v-snackbar>-->




    </div>

</template>

<script>

    import PageBlock from "@/components/PageBlock";
    import ProfileCard from "@/views/ProfileCard";
    import ProfileCardAlumni from "@/views/ProfileCardAlumni";
    import hadi from "@/assets/images/hadi-hd.jpg"
    // import cheerio from 'cheerio'
    // import axios from 'axios';
    import joinus from "@/assets/images/joinus1.jpg"




    import fs from '@/db/fs'


    import peopleimg from '@/assets/images/people-eng.jpg'
    import lab2 from "@/assets/images/lab2.jpg"


    export default {
        name: "people",
        data: function () {
            return {

                baseurl:'/people-assets/',
                joinus:joinus,
                highschoolexist:true,
                lab:lab2,



                // snackbar:false,
                //
                // message: '',

                HadiImage: hadi,

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



                peopleDB:[],
                position_filtered:[],
                peopleimg:peopleimg
            }
        },

        components: {ProfileCardAlumni, ProfileCard, PageBlock},

        watch:{




            peopleDB:function () {


                this.position_filtered = this.groupBy(this.peopleDB, 'tag');

                this.highschoolexist = this.checkhighexists();

                // this.message = this.position_filtered['1'];
                //
                //
                // this.snackbar = true






            }
        },



        methods:{


            checkhighexists:function(){
                return this.position_filtered['8'].length !== 0;
            },

            geturl:function(url){

                return this.baseurl+url



            },






            filternames:function (position) {

               // let position_filtered = this.groupBy(this.NewsDB,'position');



               return this.position_filtered[position]


                // switch (position) {
                //
                //     case 1:
                //
                //         break;
                //     case 2:
                //         position;
                //         break;
                //     case 3:
                //         position;
                //         break;
                //     case 4:
                //         position;
                //         break;
                //     case 5:
                //         position;
                //         break;
                //     case 6:
                //         position;
                //         break;
                //     case 7:
                //         position;
                //         break;
                //     case 8:
                //         position;
                //         break;
                //
                //
                //
                //
                //
                // }

            },


            groupBy:function(objectArray, property) {

                return objectArray.reduce(function (acc, obj)
                    {
                        var key = obj[property];
                        if (!acc[key]) {
                            acc[key] = [];
                        }
                        acc[key].push(obj);
                        return acc;
                    },
                    {});
            }





        }
        ,

        firestore() {






            return {
                peopleDB: fs.collection('People').orderBy('id')


            }

        }
    }
</script>

<style scoped>


    .group--pub .group__gallery-wrapper {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }



    .at-section__title {
        margin: 0 0 70px;
        color: #000;
        font-family: 'Roboto', sans-serif;
        font-size: 3.5rem;
        font-weight: 300;
        line-height: 2.625rem;
        text-align: center;
    }

    .at-grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        background: #FFF;
        border: 1px solid #E2E9ED;
    }

    .at-grid[data-column="1"] .at-column {
        width: 100%;
        max-width: 100%;
        min-width: 100%;
        flex-basis: 100%;
    }

    .at-grid[data-column="2"] .at-column {
        width: 50%;
        max-width: 50%;
        min-width: 50%;
        flex-basis: 50%;
    }

    .at-grid[data-column="3"] .at-column {
        width: 33.3333333333%;
        max-width: 33.3333333333%;
        min-width: 33.3333333333%;
        flex-basis: 33.3333333333%;
    }

    .at-grid[data-column="4"] .at-column {
        width: 25%;
        max-width: 25%;
        min-width: 25%;
        flex-basis: 25%;
    }

    .at-grid[data-column="5"] .at-column {
        width: 20%;
        max-width: 20%;
        min-width: 20%;
        flex-basis: 20%;
    }

    .at-grid[data-column="6"] .at-column {
        width: 16.6666666667%;
        max-width: 16.6666666667%;
        min-width: 16.6666666667%;
        flex-basis: 16.6666666667%;
    }

    .at-grid[data-column="7"] .at-column {
        width: 14.2857142857%;
        max-width: 14.2857142857%;
        min-width: 14.2857142857%;
        flex-basis: 14.2857142857%;
    }

    .at-grid[data-column="8"] .at-column {
        width: 12.5%;
        max-width: 12.5%;
        min-width: 12.5%;
        flex-basis: 12.5%;
    }

    .at-grid[data-column="9"] .at-column {
        width: 11.1111111111%;
        max-width: 11.1111111111%;
        min-width: 11.1111111111%;
        flex-basis: 11.1111111111%;
    }

    .at-column {
        z-index: 0;
        position: relative;
        background: #FFF;
        box-shadow: 0 0 0 1px #E2E9ED;
        padding: 10px;
        box-sizing: border-box;
        transition: box-shadow 0.2s ease, z-index 0s 0.2s ease, -webkit-transform 0.2s ease;
        transition: box-shadow 0.2s ease, transform 0.2s ease, z-index 0s 0.2s ease;
        transition: box-shadow 0.2s ease, transform 0.2s ease, z-index 0s 0.2s ease, -webkit-transform 0.2s ease;
    }

    .at-column:before {
        content: "";
        display: block;
        padding-top: 100%;
    }

    .at-column:hover {
        z-index: 1;
        box-shadow: 0 8px 50px rgba(0, 0, 0, 0.2);
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
        transition: box-shadow 0.2s ease, z-index 0s 0s ease, -webkit-transform 0.2s ease;
        transition: box-shadow 0.2s ease, transform 0.2s ease, z-index 0s 0s ease;
        transition: box-shadow 0.2s ease, transform 0.2s ease, z-index 0s 0s ease, -webkit-transform 0.2s ease;
    }

    .at-column:hover .at-social {
        margin: 16px 0 0;
        opacity: 1;
    }

    @media (max-width: 800px) {
        .at-column {
            width: 50% !important;
            max-width: 50% !important;
            min-width: 50% !important;
            flex-basis: 50% !important;
        }
    }

    @media (max-width: 600px) {
        .at-column {
            width: 100% !important;
            max-width: 100% !important;
            min-width: 100% !important;
            flex-basis: 100% !important;
        }
    }

    .at-user {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        -webkit-transform: translate(0, -50%);
        transform: translate(0, -50%);
        text-align: center;
    }

    .at-user__avatar {
        width: 98px;
        height: 98px;
        border-radius: 100%;
        margin: 0 auto 20px;
        overflow: hidden;
    }

    .at-user__avatar img {
        display: block;
        width: 100%;
        max-width: 100%;
    }

    .at-user__name {
        color: #313435;
        font-family: 'Roboto', sans-serif;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 2.625rem;
    }

    .at-user__title {
        color: #6F808A;
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        line-height: 2.375rem;
    }

    .at-social {
        margin: 0 0 -18px;
        opacity: 0;
        transition: margin 0.2s ease, opacity 0.2s ease;
    }

    .at-social__item {
        display: inline-block;
        margin: 0 10px;
    }

    .at-social__item a {
        display: block;
    }

    .at-social__item svg {
        fill: #515F65;
        display: block;
        height: 18px;
        transition: fill 0.2s ease;
    }

    .at-social__item svg:hover {
        fill: #788D96;
    }

    body {
        background: #FFF;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .container {
        max-width: 1170px;
        width: 100%;
        margin: 100px auto;
        padding: 0 20px;
        box-sizing: border-box;
        -webkit-transform-origin: top center;
        transform-origin: top center;
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
    }


















    .region-about .section-heading{width:84vw;text-align:center;margin:0 auto;padding:80px 8vw;}
    @media all and (min-width:768px){
        .region-about .section-heading{padding:100px 8vw;}
    }
    @media all and (min-width:1281px){
        .region-about .section-heading{padding:140px 8vw;}
    }
    .region-about .executive-team .section-heading .title{font-weight:500;line-height:1.1em;font-family:'Clarkson',Helvetica,sans-serif;font-size:30px;margin:0;-webkit-margin-before:.83em;-webkit-margin-after:.83em;-webkit-margin-start:0;-webkit-margin-end:0;}
    @media all and (min-width:768px){
        .region-about .executive-team .section-heading .title{font-family:'Clarkson',Helvetica,sans-serif;font-size:34px;}
    }
    @media all and (min-width:1281px){
        .region-about .executive-team .section-heading .title{font-family:'Clarkson',Helvetica,sans-serif;font-size:40px;}
    }



</style>