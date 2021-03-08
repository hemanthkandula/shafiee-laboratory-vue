<template>


    <div>


        <page-block
                button="Apply Now"
                button_link="/positions#apply-now"
                description=""
                title="Join Us"

                :background-image="joinus"



                :div-class="BlockCtaRight" :has-dark-background="DarkBackground"
                    :section-class=CalloutFullWidth></page-block>


        <br id="apply-now">

        <section class="group group--default    has-grey-background">

            <v-layout align-start justify-center row >



                <h1>Positions</h1>

            </v-layout>


            <v-layout align-center justify-start row fill-height>

                <v-flex xs10 offset-xs1>






                            <p>Shafiee group is an equal opportunity employer and is committed to increasing the
                                diversity of its group members. It welcomes applications from women, members of minority
                                groups, protected veterans and individuals with disabilities,
                              as well as from others who would bring additional dimensions to the group’s research
                                missions.</p>





                </v-flex>

            </v-layout>









            <div class="group__gallery-wrapper" id="post-doc-application">


                <div class="gallery gallery--content-card

      gallery--1-columns">

                    <div class="gallery__wrapper">


                        <div class="gallery__item">
                            <div class="card card--content    " data-card-type="card" >

                                <!--<router-link class="card__link" exact target="_blank" to="/apply">-->
                                <!--<a class="card__link" :onclick="callparent" ><span class="hidden-text">LINK </span></a>-->

                                <!--<a class="card__link"  @click="callparent" :title="title">-->
                                    <!--<span class="hidden-text">Postdoctoral Fellow / Research Scientist – Medical Devices</span></a>-->

                                <span class="hidden-text">Postdoctoral Fellow – Medical Devices, Point-of-care diagnostics</span>

                                <!--</router-link>-->


                                <div class="content     ">
                                    <div class="content__text">

                                        <div class="content__header">
                                            <div class="content__title has-icon">
                                                <span class="icon icon--full-time"></span>

                                              Postdoctoral Fellow – Medical Devices, Point-of-care diagnostics
                                            </div>

                                        </div>

                                        <div  v-bind:class="{ heightvalue: !expand }"
                                               class="content__body height_change ">


                                          <p>&nbsp;</p>
                                          <h4 style="text-align: left;"><strong>Position Summary</strong></h4>
                                          <p> We are currently seeking Postdoctoral Fellows with a strong background and interest in medical devices and
                                            point-of-care diagnostics to join a dynamic team of researchers with broad backgrounds in virology, chemistry,
                                            engineering, and computer programming for an exciting opportunity in the laboratory of Hadi Shafiee, Ph.D. at the
                                            Brigham and Women’s Hospital (BWH), Harvard Medical School (HMS). More information about the lab and the work being
                                            conducted can be found on <u><a href="https://shafieelab.bwh.harvard.edu/">Shafiee Lab</a></u> website.</p>

                                          <p> Located in Boston, MA, Brigham and Women's Hospital is a Harvard-affiliated teaching/research hospital and an
                                            international leader in providing high-quality healthcare in literally the majority of areas of medicine to our patients
                                            globally. It is a unique environment in fostering medical innovations with the goal of improving human lives.
                                            Due to our attention to patients’ needs and our focus on differentiation, BWH has been continuously ranked as a
                                            top hospital by US News and World Report in medical areas such as gynecology, surgery, cardiology, cancer,
                                            infectious diseases, neurosurgery, and rheumatology.
                                          </p>


                                          <p> We are currently looking for intellectually curious, creative problem solver Postdoctoral Fellows to assist in the
                                            development of low-cost, point-of-care diagnostics for rapid detection of infectious diseases through quantification
                                            of target bioagents, including biomarkers, bacterial pathogens, and viruses in biological samples.</p>

                                          <p>Ideal candidates will be self-driven with the ability to work closely with a team of experts with broad backgrounds in chemistry, virology, computer programing, and engineering. We believe that the key to success in achieving the goals of our interdisciplinary projects is teamwork.</p>
                                          <p>Ideal candidates will have a strong passion and interest in developing medical devices and point-of-care diagnostics. Experience in diagnostics and point-of-care detection particularly in infectious diseases is strongly preferred. Recent graduates are encouraged. We also encourage candidates with a strong passion for translational medicine and technology commercialization.</p>



                                          <h4><span style="color: #000000;">‪‪<strong>Responsibilities</strong></span></h4>
                                          <ul>
                                            <li>Develop, characterize, and validate novel point-of-care diagnostics using the advances in nanotechnology, microfluidics, chemistry, cellphone-based optical/electrical sensing, or machine learning.</li>

                                            <li>Conduct in-vitro diagnostic tests for system characterization and validation using patient body fluid samples such as blood, serum, urine, saliva, etc.</li>
                                            <li>Coordinate interdisciplinary projects with other lab members and other colleagues’ laboratories.</li>
                                            <li>Provide substantial intellectual contribution in the development, validation, and translation of diagnostic technologies developed in the lab.</li>

                                            <li>Continuously discuss the projects with the principal investigator and the members involved in specific projects to receive feedback.</li>

                                          </ul>


                                          <h4><span style="color: #000000;">‪‪<strong>Qualifications</strong></span></h4>

<!--                                          <h4>&nbsp;<strong>Qualifications</strong></h4>-->
                                          <ul>
                                            <li>    Ph.D. in Bioengineering, Chemistry, Mechanical Engineering, or related area.</li>
                                            <li>    Detail-oriented    </li>
                                            <li>    Excellent organizational skills    </li>
                                            <li>    Strong interpersonal skills with excellent verbal and written communication skills    </li>
                                            <li>    Self-driven    </li>
                                            <li>    Able to work independently and at the same time work closely with others    </li>
                                            <li>    Committed to developing high quality and reliable scientific and translational work</li>

                                          </ul>

                                          <p>All qualified applicants will receive consideration for employment without regard to race, color, religion, sex,
                                            sexual orientation, gender identity, national origin, disability, or protected veteran status.</p>
                                          <p>&nbsp;</p>
                                          <h4><strong>How to Apply:</strong> Please send your CV to <a href="mailto:hshafiee@bwh.harvard.edu">hshafiee@bwh.harvard.edu</a></h4>




                                        </div>


                                    </div>

                                    <!--<div class="search__category-intro-toggle t&#45;&#45;link" >Read More</div>-->
                                    <!--<div class="search__category-intro-toggle t&#45;&#45;link ng-hide">Less</div>-->
                                    <div class="content__ctas">


                                        <a class="button"

                                            v-on:click="Expand_position" >



                                            {{Expand_text}}
                                        </a>

                                    </div>

                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

            <div class="group__gallery-wrapper">


                <div class="gallery gallery--content-card

      gallery--2-columns">

                    <div class="gallery__wrapper">

                        <!--:onclick="applydialog(detail.Tittle)"-->
                        <!--<position-card-->
                                       <!--@applydialog="applydialog"-->
                                       <!--:content="detail.Content" :key="detail.Tittle" :link="detail.Link"-->
                                       <!--:title="detail.Tittle" v-for="detail in position"></position-card>-->
                        <position-card

                                :content="detail.Content" :key="detail.Tittle" :link="detail.Link"
                                :title="detail.Tittle" v-for="detail in position">


                        </position-card>


                    </div>
                </div>
            </div>

        </section>




        <apply-form :dialog="dialog" :applyingpostion="PositionApplying"></apply-form>




    </div>

</template>

<script>
    import PageBlock from "@/components/PageBlock";
    import PositionCard from "../views/PositionCard";
    import ApplyForm from "@/components/ApplyForm";
    import joinus from "@/assets/images/joinus1.jpg"

    export default {
        name: "positions",
        components: {ApplyForm, PositionCard, PageBlock},
        data: function () {
            return {
                dialog:false,

                CalloutFullWidth: 'callout--fullwidth',
                CalloutGrid: 'callout--grid',

                BlockHalfSize: 'block--half-size',
                BlockRight: 'block--default-right',
                BlockLeft: 'block--default-left',

                BlockCtaLeft: 'block--cta-left',
                BlockCtaRight: 'block--cta-right',
                DarkBackground: true,
                NoDarkBackground: false,
                joinus:joinus,
                Expand_text:'Read More',

                expand:false,

                BlockHalfImage: 'block--half-image',
                PositionApplying: '',
                position_Postdoctoral_Fellow : [

                    {

                        Tittle: 'Postdoctoral positions',
                        Content: "<p><strong>Position Summary</strong></p>\n" +
                            "<p>‪‪We are interested in bringing together specialized knowledge from various scientific and engineering disciplines and applying them to solve real-life issues. One of our major focuses is developing and translating micro/nanotechnologies with clinical diagnostic applications in medicine and biology. &nbsp;</p>\n" +
                            "<p>&nbsp;</p>\n" +
                            "<p>We are currently looking for eager Research Scientists or Postdoctoral Fellows to assist in the development of low-cost, point-of-care diagnostics for rapid detection of infectious diseases/cancer through quantification of target bioagents, including biomarkers, bacterial pathogens, and viruses in biological samples such as whole blood, urine, and saliva. The successful candidates will be intimately involved in every stage of the biosensing device development, including the design, prototyping, optimization, and validation.</p>\n" +
                            "<p>&nbsp;</p>\n" +
                            "<p>Functioning very independently and leading highly interdisciplinary and complex bioengineering projects by daily mentorship of research technicians and undergraduate and graduate research trainees with broad backgrounds in engineering, biology, computer programing, and infectious diseases. The Postdoc / Research Scientist will also perform high level, complex research experiments. On a regular basis, s/he will contribute to scientific literature, reports, and presentations. Investigates, creates and develops new methods and technologies for research advancement.</p>\n" +
                            "<p>&nbsp;</p>\n" +
                            "<p>In addition to helping the Principal Investigator (PI) to achieve the aims of the currently active projects in the lab, the Postdoc / Research Scientist helps the PI to continuously develop novel ideas and open up new lines of relevant research in the lab with the potential in securing future funding from different sources such as NIH, DoD, NSF, etc. S/he will also help the PI in the translational aspect of the projects and technologies developed in the lab.</p>\n" +
                            "<p>‪‪<strong>Responsibilities</strong></p>\n" +
                            "<ul>\n" +
                            "<li>‪‪Develop microfluidic devices for point-of-care detection of infectious diseases</li>\n" +
                            "<li>Design and develop diagnostic assays (immunoassays and nucleic acid tests)</li>\n" +
                            "<li>Strong passion and experience in nano and microtechnologies</li>\n" +
                            "<li>Independently leads interdisciplinary teams with backgrounds in engineering and biology.</li>\n" +
                            "</ul>\n" +
                            "<ul>\n" +
                            "<li>Work closely with a range of scientists to design experimental protocols and develop workflows and pipelines for bioengineering projects that involves developing mobile health diagnostics and digital health systems.&nbsp;</li>\n" +
                            "<li>Researches, develops, designs, executes and interprets research experiments.</li>\n" +
                            "<li>Contributes for scientific literature, reports and presentations.</li>\n" +
                            "<li>Investigates, creates, and develops new methods and technologies for research advancement.</li>\n" +
                            "<li>Write/review reports, proposals, invention disclosures, and scientific articles</li>\n" +
                            "<li>Supervises undergraduate and graduate students and research technicians and provides training and troubleshooting to colleagues.</li>\n" +
                            "<li>Develops new lines of research in medicine specially at the interface of nanotechnology, consumer electronics, and machine learning.</li>\n" +
                            "</ul>\n" +
                            "<p>&nbsp;</p>\n" +
                            "<p><strong>Requirements</strong></p>\n" +
                            "<ul>\n" +
                            "<li>‪‪Ph.D./MS in relevant field with experience in diagnostics, microfluidic systems, microfabrication, nanotechnology, and immunoassays.</li>\n" +
                            "<li>‪‪Strong communicational and organizational skills for collaborating with interdisciplinary teams of engineers, biologists, and virologists.</li>\n" +
                            "<li>‪‪Experience with electrochemical/optical biosensors</li>\n" +
                            "<li>‪Creativity, self-starter, tough-minded, self-confident, and attention to details</li>\n" +
                            "</ul>\n" +
                            "<p>&nbsp;</p>\n" +
                            "<p><strong>Additional Desirable Skills</strong></p>\n" +
                            "<ul>\n" +
                            "<li>‪‪Prior graduate-level research in areas such as cell biology, microbiology, genetics, biochemistry, molecular biology, etc.</li>\n" +
                            "<li>Passion and experience in image processing, programming, and medical device prototyping.</li>\n" +
                            "<li>Experience in a variety of techniques used in nanotechnology such as Uv-vis spectroscopy, FTIR spectroscopy, ICPMass spectroscopy, TEM, SEM, etc.</li>\n" +
                            "<li>Experience in the development of portable optical-based sensors</li>\n" +
                            "<li>Proficiency in biochemical assays, immunochemistry, polymerase chain reaction (PCR), loop-mediated isothermal amplification (LAMP), ELISA, and cell culture.</li>\n" +
                            "<li>Experience in developing surface chemistry protocols on microfluidic devices.</li>\n" +
                            "<li>Experience with real-time target protein/nanoparticle detection on-chip</li>\n" +
                            "<li>Experience with 3D modern rapid prototyping tools (3D printing, PDMS, laser cutter, etc)</li>\n" +
                            "<li>Proficiency in statistical analysis methods, including Bland Altman. Experience working with statistical analysis software such as prism and Minitab</li>\n" +
                            "</ul>"
                        ,Link: ''
                    },





                ],


                position: [

                    {

                        Tittle: 'Postdoctoral positions',
                        Content: 'We are seeking highly motivated Postdoctoral Fellow applicants with strong experimental background and proven expertise in microfluidics, point-of-care diagnostics, infectious disease detection, treatment, and treatment monitoring, and cancer research, and outstanding track record of publications, great interpersonal and teamwork competencies. The position is available immediately for one year with the possibility of renewal contingent on performance. Postdoc applicants with fellowships are highly desirable. The successful candidate for this position will benefit from the diverse multidisciplinary environment in our laboratory including nanotechnology, biomaterials, bio-sensing, and microfabrication. \n' +
                            '\n' +
                            'Please include a one-page cover letter detailing your suitability and qualifications for the post, your curriculum vitae (including publication list and the contact information of three references). Applicants should send this as a single pdf file through email to Dr. Shafiee (hshafiee@bwh.harvard.edu) \n' +
                            '\n' +
                            'Please use Postdoc Applicant in the subject line when applying for the position',
                        Link: ''
                    },


                    {

                        Tittle: 'Graduate Students ' + '&' + ' Graduate Assistants',
                        Content: 'We always welcome outstanding and passionate researchers with strong academic or research backgrounds to' +
                            ' apply and join our research team.' +
                            ' Research assistants can be students pursuing a Bachelor’s or Master’s in related fields.' +
                            ' Recent graduates interested with a strong inclination to research are also welcome to apply.' +
                            ' A minimum of 6 months availability is required, while 1 year availability is preferred.' +

                            'To apply please contact Dr. Shafiee through email (hshafiee@bwh.harvard.edu) with a motivation ' +
                            'letter and curriculum vitae including two references.' +

                            'Please use Research Assistant application in the subject line when applying for the position',
                        Link: '<a href="mailto:hshafiee@bwh.harvard.edu">hshafiee@bwh.harvard.edu</a>'
                    },

                    {

                        Tittle: 'Undergraduate Students',
                        Content: 'We always welcome outstanding and passionate researchers with strong academic or research backgrounds to apply and join our research team. Research assistants can be students pursuing a Bachelor’s or Master’s in related fields. Recent graduates interested with a strong inclination to research are also welcome to apply. A minimum of 6 months availability is required, while 1 year availability is preferred.\n' +
                            '\n' +
                            'To apply please contact Dr. Shafiee through email (hshafiee@bwh.harvard.edu) with a motivation letter and curriculum vitae including two references.\n' +
                            ' \n' +
                            'Please use Research Assistant application in the subject line when applying for the position',
                        Link: '<a href="mailto:hshafiee@bwh.harvard.edu">hshafiee@bwh.harvard.edu</a>'
                    },

                    {

                        Tittle: 'High School Interns',
                        Content: 'We always welcome outstanding and passionate researchers with strong academic or research backgrounds to apply and join our research team. Research assistants can be students pursuing a Bachelor’s or Master’s in related fields. Recent graduates interested with a strong inclination to research are also welcome to apply. A minimum of 6 months availability is required, while 1 year availability is preferred.\n' +
                            '\n' +
                            'To apply please contact Dr. Shafiee through email (hshafiee@bwh.harvard.edu) with a motivation letter and curriculum vitae including two references.\n' +
                            ' \n' +
                            'Please use Research Assistant application in the subject line when applying for the position',
                        Link: '<a href="mailto:hshafiee@bwh.harvard.edu">hshafiee@bwh.harvard.edu</a>'
                    }


                ]
            }
        },

        methods:{
            applydialog:function (variable) {
                this.PositionApplying = variable;
                this.dialog=  !this.dialog
            },
            Expand_position:function () {

                this.expand = !this.expand;
                    if(this.expand){
                        this.Expand_text = "Read Less"
                    }
                    else {this.Expand_text = "Read More"

                        if(this.$route.fullPath === "/positions#post-doc-application")
                        {this.$router.push({ path: '/positions#apply-now' })}
                        else {this.$router.push({ path: '/positions#post-doc-application' })}



                    }

            }
        }
    }

</script>

<style scoped>

    .height_change{
        color: #80868b;
        overflow: hidden;
        transition: max-height .5s cubic-bezier(0.4, 0, 0.2, 1);
        width: 85%;
        will-change: max-height
    }
    .heightvalue{

        max-height: 825px;

    }

</style>

