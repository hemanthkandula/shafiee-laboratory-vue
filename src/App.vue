<template>
  <div id="app">


    <div>

      <Header msg="Welcome to Shafiee Lab"/>

    </div>
    <div>
      <main class="section-wrapper">
        <router-view>


        </router-view>
      </main>
    </div>


    <AppFooter/>
    <!--<div id="nav">-->
    <!--<router-link to="/">Home</router-link> |-->
    <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->




  </div>
</template>


<script>
  // @ is an alias to /src
  import Header from './components/Header'
  import AppFooter from "@/AppFooter";

  export default {
    name: 'App',
    components: {
      AppFooter,
      Header
    }
  }



</script>


<style>
  /*@import './assets/css/custom.css';*/


  a {
    text-decoration: none;
  }


</style>