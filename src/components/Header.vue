<template>


  <header :class="{ 'is-open' : IsOpen} " class="ng-scope" id="headerone" ng-controller="HeaderController as headerCtrl"
          v-on:click="OpenNav">


    <div class="header__top">


      <a
              aria-controls="header__nav"

              aria-expanded="false"

              aria-label="Open the navigation drawer" class="header__hamburger">
        <div class="header__hamburger-burger"></div>
      </a>


      <a class="header__lockup">
        <router-link exact to="/">
          <div class="header__logo">

            <!--<img src="../assets/logo.png" alt="logo">-->


            <img alt="logo" height="39"
                 src="../assets/logo.png"
                 width="200">
            <!--</a>-->
          </div>
          <!--<div class="header__product">LAB</div>-->

        </router-link>
      </a>

                <nav aria-label="Navigation" class="header__nav" id="header__nav">


                    <a class="header__lockup">

                        <router-link exact to="/">
                            <div class="header__logo">
                                <img alt="logo" height="39"
                                     src="../assets/logo.png"
                                     width="200">


                            </div>
                        </router-link>

                    </a>



                    <div aria-level="1" class="header__item">

                        <router-link exact to="/">
                            <a class="header__link">
                                Home
                            </a>

                        </router-link>

                    </div>

                    <!--<div aria-level="1" class="header__item">-->

                        <!--<router-link exact to="/research">-->
                            <!--<a class="header__link">-->
                                <!--Research Projects-->
                            <!--</a>-->

                        <!--</router-link>-->

                    <!--</div>-->

                    <div aria-level="1" class="header__item">
                        <router-link exact to="/publications">
                            <a class="header__link">
                                Publications
                            </a>
                        </router-link>
                    </div>


                    <div aria-level="1" class="header__item">
                        <router-link exact to="/people">
                            <a class="header__link">
                                People
                            </a>
                        </router-link>
                    </div>


                    <div aria-level="1" class="header__item">
                        <router-link exact to="/positions">

                            <a class="header__link">
                                Positions


                            </a>


                        </router-link>
                    </div>





                    <div aria-level="1" class="header__item">
                        <router-link exact to="/#contact">
                            <a class="header__link">
                                Contact Us
                            </a>

                        </router-link>
                    </div>


                </nav>

      <div class="header__overlay"></div>
    </div>

  </header>


</template>

<script>


  // import pubs from '../assets/js/pubs'
export default {
  props: ['menuOpen'],


  data: function () {
    return {

      IsOpen: this.menuOpen

    }
  },

  name: 'Header',
  methods: {
    OpenNav: function () {
      // let IsOpen = parameters.IsOpen;


      this.IsOpen = this.IsOpen !== true;
    }
  }


}






</script>


<style>

  a {
    text-decoration: none;
  }


</style>



<!-- Add "scoped" attribute to limit CSS to this component only -->


