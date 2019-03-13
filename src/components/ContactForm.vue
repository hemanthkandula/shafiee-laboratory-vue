<template>

    <div>

<br>
        <br>
        <h3 style="text-align: center" class="content__title ">
            Contact Us
        </h3>

        <form>

        <v-container grid-list-md>
        <v-layout wrap>
            <v-flex xs12 sm8 md6>
                <v-text-field
                        v-model="firstname"

                        v-validate="'required'"




                        :error-messages="errors.collect('Firstname')"

                        data-vv-name="Firstname"

                        required

                        label="First Name*" ></v-text-field>
            </v-flex>

            <v-flex xs12 sm8 md6>
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

            <v-btn raised  @click="submit">submit</v-btn>
            <v-btn raised  @click="clear">clear</v-btn>

        </v-layout>
    </v-container>
    <small>*indicates required field</small>
        </form>
    </div>
</template>

<script>



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
            submit () {
                console.error("validation")
                console.error(this.$validator.validateAll())



            },
            clear () {
                this.Firstname = ''
                this.Lastname = ''
                this.Message = ''


                this.email = ''
                this.$validator.reset()
            }
        }
    }








</script>

<style scoped>

</style>