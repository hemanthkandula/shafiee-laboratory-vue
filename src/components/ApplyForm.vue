<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">


    <v-layout row justify-center>




        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <!--<template v-slot:activator="{ on }">-->
                <!--<v-btn color="primary" dark v-on="on">Open Dialog</v-btn>-->
            <!--</template>-->


            <v-card >
                <v-toolbar

                        scroll-target="#scrolling"
                        absolute

                        dark color="#254E70">
                    <v-btn icon dark @click="dialog = false">
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Shafiee Lab Application</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark flat @click="dialog = false">Submit</v-btn>
                    </v-toolbar-items>
                </v-toolbar>

                <div
                        id="scrolling"
                        class="scroll-y"
                >

                <div style="background-color: whitesmoke" >

                <v-container align-content-center
                             grid-list-md>

                    <v-card>

                        <vs-row>

                            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">

                                         <h3>Contact details</h3>
                            </vs-col>

                            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                        <v-text-field

                                v-model="firstname"

                                v-validate="'required'"




                                :error-messages="errors.collect('Firstname')"

                                data-vv-name="Firstname"

                                required

                                label="Legal Name*" >

                        </v-text-field>
                            </vs-col>

                                <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">

                                 <v-text-field

                                v-model="address"

                                v-validate="'required'"




                                :error-messages="errors.collect('Firstname')"

                                data-vv-name="address"

                                required

                                label="Address*" >

                        </v-text-field>

                                </vs-col>
                                <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">

                                <v-text-field

                                v-model="email"

                                v-validate="'required'"




                                :error-messages="errors.collect('email')"

                                data-vv-name="email"

                                required

                                label="Email*" >

                        </v-text-field>
                                </vs-col>
                                <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">

                                <v-text-field

                                v-model="phone"

                                v-validate="'required'"




                                :error-messages="errors.collect('phone')"

                                data-vv-name="phone"

                                required

                                label="Phone*" >

                        </v-text-field>
                                </vs-col>
                                <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">

                                <v-text-field

                                v-model="website"






                                data-vv-name="website"

                                required

                                label="Website" >

                        </v-text-field>
                                </vs-col>


                        </vs-row>

                    </v-card>


                    <v-spacer></v-spacer>

                    <br>



                    <v-card>
                        <vs-row>
                    <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                        <v-radio-group v-model="applying">
                            <div>Applying for?</div>

                            <v-radio :label="applyingpostion" :value="applyingpostion"></v-radio>



                        </v-radio-group>
                    </vs-col>

                        </vs-row>
                    </v-card>

                    <br>

                    <v-card>
                        <vs-row>

                            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">

                                <h3>Highest level of education

                                </h3>
                            </vs-col>




                            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                                <v-text-field

                                        v-model="schoolname"

                                        v-validate="'required'"




                                        :error-messages="errors.collect('schoolname')"

                                        data-vv-name="School name"

                                        required

                                        label="School name*" >

                                </v-text-field>
                            </vs-col>
                                <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                                    <v-text-field

                                            v-model="degree"

                                            v-validate="'required'"




                                            :error-messages="errors.collect('degree')"

                                            data-vv-name="degree"

                                            required

                                            label="Degree and Degree status *" >

                                    </v-text-field>
                                </vs-col>



                            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">

                                <v-text-field

                                        v-model="Major"

                                        v-validate="'required'"




                                        :error-messages="errors.collect('Major')"

                                        data-vv-name="Major"

                                        required

                                        label="Major/area of study*" >

                                </v-text-field>

                            </vs-col>
                            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">

                                <v-text-field

                                        v-model="Country"

                                        v-validate="'required'"




                                        :error-messages="errors.collect('Country')"

                                        data-vv-name="Country"

                                        required

                                        label="State and Country*" >

                                </v-text-field>
                            </vs-col>



                        </vs-row>











                    </v-card>

                    <br>
                    <v-spacer></v-spacer>


                    <v-card>
                        <vs-row>

                            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">

                                <h3>Work experience



                                </h3>
                            </vs-col>

                            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                                <v-radio-group v-model="work">
                                    <div>Applying for your first job? *</div>


                                    <v-radio label="Yes" value="Yes"></v-radio>
                                    <v-radio label="No" value="No"></v-radio>
                                </v-radio-group>
                            </vs-col>

                            <div v-if="work==='No'">

                                <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">

                                    <h4>Current Job details



                                    </h4>
                                </vs-col>
                                <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                                    <v-text-field

                                            v-model="Employer"

                                            v-validate="'required'"




                                            :error-messages="errors.collect('Employer')"

                                            data-vv-name="Employer"

                                            required

                                            label="Employer name*" >

                                    </v-text-field>
                                </vs-col>

                                <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">

                                    <v-text-field

                                            v-model="job"

                                            v-validate="'required'"




                                            :error-messages="errors.collect('job')"

                                            data-vv-name="job"

                                            required

                                            label="Job title*" >

                                    </v-text-field>

                                </vs-col>
                                <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">

                                    <v-text-field

                                            v-model="Years"

                                            v-validate="'required'"




                                            :error-messages="errors.collect('Years')"

                                            data-vv-name="Years"

                                            required

                                            label="Years of Experience*" >

                                    </v-text-field>
                                </vs-col>
                                <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">

                                    <v-textarea
                                            v-model="location"

                                            v-validate="'required'"

                                            data-vv-name="location"
                                            :error-messages="errors.collect('location')"

                                            solo
                                            required
                                            name="input-7-4"
                                            label="Write Address here."
                                            auto-grow
                                            value="" >


                                    </v-textarea>
                                </vs-col>

                            </div>







                        </vs-row>











                    </v-card>

                    <br>



                    <v-card>
                        <vs-row>

                            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">

                                <h3>Cover letter/other notes (optional)

                                </h3>

                            </vs-col>


                             <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">

                                    <v-textarea
                                            solo
                                            name="input-7-4"
                                            label="Write option cover letter here."
                                            auto-grow
                                            value="" >


                                    </v-textarea>

                                    </vs-col>







                        </vs-row>











                    </v-card>





                </v-container>






                </div>


                </div>
            </v-card>



        </v-dialog>
    </v-layout>
</template>

<script>
    export default {
        name: "ApplyForm",
        data () {
            return {
                // dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
                radios: 'Duckduckgo',

                work:'Yes',
                Edu: 'Yes',

                dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
                applying:"Postdoctoral Position"


            }
    },
        props:{

            dialog: {
                type: Boolean,
                required: true,
                default:true
            },applyingpostion: {
                type: String,
                required: true,
                default:'Postdoctoral Position'
            },
        }


    }
</script>

<style scoped>


    .clearfix:before, .clearfix:after { content: " "; display: table; }
    .clearfix:after { clear: both; }


    *, *:after, *:before { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }


    .container > header {
        width: 90%;
        max-width: 69em;
        margin: 0 auto;
        padding: 2.875em 1.875em 1.875em;
    }

    .container > header h1 {
        font-size: 2.125em;
        line-height: 1.3;
        margin: 0 0 0.6em 0;
        float: left;
        font-weight: 400;
    }

    .container > header > span {
        display: block;
        position: relative;
        z-index: 9999;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5em;
        padding: 0 0 0.6em 0.1em;
    }

    .container > header > span span:after {
        width: 30px;
        height: 30px;
        left: -12px;
        font-size: 50%;
        top: -8px;
        font-size: 75%;
        position: relative;
    }

    .container > header > span span:hover:before {
        content: attr(data-content);
        text-transform: none;
        text-indent: 0;
        letter-spacing: 0;
        font-weight: 300;
        font-size: 110%;
        padding: 0.8em 1em;
        line-height: 1.2;
        text-align: left;
        left: auto;
        margin-left: 4px;
        position: absolute;
        color: #47a3da;
        background: #fff;
    }

    .container > header nav {
        float: right;
        text-align: center;
    }

    .container > header nav a {
        display: inline-block;
        position: relative;
        text-align: left;
        width: 2.5em;
        height: 2.5em;
        background: #47a3da;
        border-radius: 50%;
        margin: 0 0.1em;
        border: 4px solid #fff;
    }

    .container > header nav a > span {
        display: none;
    }

    .container > header nav a:hover:before {
        content: attr(data-info);
        color: #000;
        position: absolute;
        width: 600%;
        top: 120%;
        text-align: right;
        right: 0;
        pointer-events: none;
    }

    .container > header nav a:hover {
        background: #000000;
    }

    .bp-icon:after {
        font-family: 'bpicons';
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        text-align: center;
        color: #000;
        -webkit-font-smoothing: antialiased;
    }

    .container > header nav .bp-icon:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        line-height: 2;
        text-indent: 0;
    }

    .container > header nav a:hover:after {
        color: #47a3da;
    }

    .bp-icon-next:after {
        content: "\e000";
    }
    .bp-icon-drop:after {
        content: "\e001";
    }
    .bp-icon-archive:after {
        content: "\e002";
    }
    .bp-icon-about:after {
        content: "\e003";
    }
    .bp-icon-prev:after {
        content: "\e004";
    }

    .main {
        width: 100%;
        padding: 0 2em 3em;
        max-width: 100em;
    }

    @media screen and (max-width: 55em) {

        .container > header h1,
        .container > header nav {
            float: none;
        }

        .container > header > span,
        .container > header h1 {
            text-align: center;
        }

        .container > header nav {
            margin: 0 auto;
        }

        .container > header > span {
            text-indent: 30px;
        }
    }







    /*##########################################################*/



    .gform {
        position: relative;
    }

    /* Clearfix hack by Nicolas Gallagher: http://nicolasgallagher.com/micro-clearfix-hack/ */
    .gform:before,
    .gform:after {
        content: " "; display: table;
    }

    .gform:after {
        clear: both;
    }

    .cbp-mc-column {
        width: 33%;
        padding: 10px 30px;
        float: left;
    }

    .gform label {
        display: block;
        padding: 40px 5px 5px 2px;
        font-size: 1.1em;
        text-transform: uppercase;
        letter-spacing: 1px;
        cursor: pointer;
    }

    .gform input,
    .gform textarea,
    .gform select {
        font-family: 'Lato', Calibri, Arial, sans-serif;
        line-height: 1.5;
        font-size: 1.4em;
        padding: 5px 10px;
        color: black;
        display: block;
        width: 100%;
        background: transparent;
    }

    .gform input,
    .gform textarea {
        border: 3px solid grey;
    }

    .gform textarea {
        min-height: 200px;
    }

    .gform input:focus,
    .gform textarea:focus,
    .gform label:active + input,
    .gform label:active + textarea {
        outline: none;
        border: 3px solid grey;
    }

    .gform select:focus {
        outline: none;
    }

    ::-webkit-input-placeholder { /* WebKit browsers */
        color: grey;
        font-style: italic;
    }

    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: grey;
        font-style: italic;
    }

    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: grey;
        font-style: italic;
    }

    :-ms-input-placeholder { /* Internet Explorer 10+ */
        color: grey;
        font-style: italic;
    }

    .cbp-mc-submit-wrap {
        text-align: center;
        padding-top: 40px;
        clear: both;
    }

    .gform input.cbp-mc-submit {
        background: grey;
        border: none;
        color: black;
        width: auto;
        cursor: pointer;
        text-transform: uppercase;
        display: inline-block;
        padding: 15px 30px;
        font-size: 1.1em;
        border-radius: 2px;
        letter-spacing: 1px;
    }

    .gform input.cbp-mc-submit:hover {
        background: #1478b1;
    }

    @media screen and (max-width: 70em) {
        .cbp-mc-column {
            width: 50%;
        }
        .cbp-mc-column:nth-child(3) {
            width: 100%;
        }
    }

    @media screen and (max-width: 48em) {
        .cbp-mc-column {
            width: 100%;
            padding: 10px;
        }
    }
</style>