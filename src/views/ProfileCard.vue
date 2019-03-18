<template>
    <div class="at-user">


        <div class="at-user__avatar"><img alt=""
                                          :src=ProImage />
        </div>

        <div class="at-user__name">{{ ProName }}</div>
        <!--<div class="at-user__title">Position</div>-->


    </div>
</template>
<script>
    export default {
        name: 'ProfileCard',
        props:{

            ProName: {
                type: String,
                // required: true
            },
            ProImage: {
                type: String,
                // required: true
            },

        }

    }
</script>
<style scoped>


    .at-column:hover .at-social {
        margin: 16px 0 0;
        opacity: 1;
    }

    @media (max-width: 800px) {
    }

    @media (max-width: 600px) {
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
        width: 50%;
        height: 50%;
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


</style>