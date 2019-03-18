<template>

    <div>

<br>
        <br>
        <h3 style="text-align: center" class="content__title ">
            Contact Us
        </h3>

        <form @submit.prevent="submit" >

        <v-container grid-list-md>
        <v-layout wrap>
            <v-flex xs12 sm12 md6>
                <v-text-field

                        v-model="firstname"

                        v-validate="'required'"




                        :error-messages="errors.collect('Firstname')"

                        data-vv-name="Firstname"

                        required

                        label="First Name*" ></v-text-field>
            </v-flex>

            <v-flex xs12 sm12 md6>
                <v-text-field

                        v-validate="'required'"

                        v-model="lastname"

                        :error-messages="errors.collect('Lastname')"

                        data-vv-name="Lastname"

                        required

                        label="Last Name*"
                ></v-text-field>
            </v-flex>
            <v-flex xs12>
                <v-text-field
                        v-model="email"

                        v-validate="'required|email'"
                        :error-messages="errors.collect('email')"
                        data-vv-name="email"
                        required






                        label="Email*" ></v-text-field>
            </v-flex>


            <v-flex xs12 >
                <v-text-field

                        v-validate="'required'"

                        v-model="subject"

                        :error-messages="errors.collect('subject')"

                        data-vv-name="subject"

                        required

                        label="Subject*"
                ></v-text-field>
            </v-flex>



            <v-flex xs12>
                <v-textarea

                        :error-messages="errors.collect('message')"
                        v-model="message"
                        v-validate="'required'"
                        data-vv-name="message"

                        outline
                        name="input-7-4"
                        label="Message*"
                        value=""
                ></v-textarea>
            </v-flex>

            <v-btn raised  type="submit">submit</v-btn>
            <v-btn raised  @click="clear">clear</v-btn>


        </v-layout>
    </v-container>
    <small>*indicates required field</small>
        </form>


        <v-snackbar


                :color="color"


                v-model="snackbar"
                :bottom="true"
                :left="false"
                :multi-line="true"
                :right="true"
                :timeout="6000"
                :top="false"
                :vertical="false"
        >
            {{ text }}
            <v-btn
                    dark
                    flat
                    @click="snackbar = false"
            >
                Close
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
    // import Vue from 'vue'
    // import { VueReCaptcha } from 'vue-recaptcha-v3'
    //
    // Vue.use(VueReCaptcha, {siteKey: '6LfqfJcUAAAAAENlF5Rq8WAhI_H9pawTJP7N3k6X'})


    import axios from 'axios';

    export default {
        name: "ContactForm",

        $_ContactForm: {
            Validator: 'new'
        },

        data: function(){

            return{
            firstname: '',
            lastname: '',

            message: '',

                text:'',
                color:'',

                snackbar: false,


            email: '',

            dictionary: {
                attributes: {
                    email: 'E-mail Address'
                    // custom attributes
                },
                custom: {
                    lastname: {
                        required: () => 'Last Name can not be empty',
                        // custom messages
                    },
                    firstname: {
                        required: () => 'First Name can not be empty',
                        // custom messages
                    },

                    message: {
                        required: () => 'Message can not be empty',
                        // custom messages
                    },

                }
            }
            }
        },

        mounted () {
            this.$validator.localize('en', this.dictionary)
        },

        methods: {
            postNow: function() {
                // console.log(this.name);

                let data = new FormData();
                data.append('name',this.firstname+" "+this.lastname);
                data.append('email',this.email);
                data.append('subject','subject');

                data.append('message', this.message);


                axios.post('https://script.google.com/macros/s/AKfycbzbakA-lzRD8k28pnKyVzNjF_2NdkszW-yoCeDUuf7VJk9ghxkF/exec',


                    data

                ,  { headers: {
                        'Content-type': 'application/x-www-form-urlencoded',}
                    })
                    .then(function (response) {
                        this.color= 'green';
                        this.text= 'Message sent post'
                        // console.log(response);
                        response;
                    })
                    .catch(function (error) {
                        // console.log(error);
                        error;

                        this.color= 'red';
                        this.text= 'dailed'

                    });


            }


                ,
            submit () {

                this.$validator.validate().then(result => {

                    if (result) {
                        // do stuff if not valid.
                        //
                        // this.color= 'green';
                        // this.text= 'Message sent '
                        this.postNow()


                    }
                    else {

                        this.color= 'red';
                        this.text= 'error'



                    }

                    this.snackbar= true

                });


            },


            clear () {
                this.firstname = ''
                this.lastname = ''
                this.message = ''


                this.email = ''
                this.$validator.reset()
            }
        }
    }








</script>

<style scoped>

</style>