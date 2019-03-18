<template>


    <div>


        <page-block
                button="Positions"
                button_link="/positions"
                description="Something to  Join Us"
                title="Join Us"

                :div-class="BlockCtaRight" :has-dark-background="DarkBackground"
                    :section-class=CalloutFullWidth></page-block>


        <section class="group group--default    has-grey-background">


            <vs-row>
                <vs-col v-tooltip="'col - 4'" vs-align="center" vs-justify="center" vs-offset="5" vs-type="flex"
                        vs-w="4">
                    <h1 class="search__title">Positions</h1>

                </vs-col>
            </vs-row>


            <div class="group__content-wrapper">


                <vs-row>
                    <vs-col v-tooltip="'col - 8'" vs-align="center" vs-justify="center" vs-offset="2" vs-type="flex"
                            vs-w="8">
                        <div class="content__body">
                            <p>Shafiee group is an equal opportunity employer and is committed to increasing the
                                diversity of its group members. It welcomes applications from women, members of minority
                                groups, protected veterans and individuals with disabilities
                                , as well as from others who would bring additional dimensions to the group’s research
                                missions.</p>
                        </div>

                    </vs-col>
                </vs-row>


            </div>


            <div class="group__gallery-wrapper">


                <div class="gallery gallery--content-card

      gallery--2-columns">

                    <div class="gallery__wrapper">


                        <position-card :content="detail.Content" :key="detail.Tittle" :link="detail.Link"
                                       :title="detail.Tittle" v-for="detail in position"></position-card>


                    </div>
                </div>
            </div>

        </section>




        <apply-form></apply-form>




    </div>

</template>

<script>
    import PageBlock from "@/components/PageBlock";
    import PositionCard from "@/views/PositionCard";
    import ApplyForm from "@/components/ApplyForm";

    export default {
        name: "positions",
        components: {ApplyForm, PositionCard, PageBlock},
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
        }
    }

</script>

