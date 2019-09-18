<template>



    <v-card :elevation="15"
            class="mx-auto"
            max-width="344"
    >
        <v-img
                :src=CardLink
                height="200px"
        ></v-img>


    </v-card>

</template>

<script>
    export default {
        name: "GalleryCard",
        props: {
            CardLink:String ,
            CardName:String

        }
    }
</script>

<style scoped>

</style>