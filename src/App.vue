<template>
  <div id="app">
  
    <b-navbar sticky type="light" toogable="lg" class="py-3 myNav">
      
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mr-auto my-underline">
          <b-nav-item to="/"> <span> Home </span> </b-nav-item>
          <b-nav-item to="/about"> <span> About </span> </b-nav-item>
          <b-nav-item to="/contact"> <span> Contact </span> </b-nav-item>
        </b-navbar-nav>

        <b-navbar-brand class="mx-auto" to="/" >Sergio Klein</b-navbar-brand>

        <b-navbar-nav class="ml-auto"> 
          <b-nav-item href="https://www.instagram.com/gersiok/" target="_blank"> 
            <b-icon icon="instagram"> </b-icon> 
          </b-nav-item>
          <!-- <b-nav-item href="#"> <b-icon icon="flickr"> </b-icon> </b-nav-item> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

      <router-view/>

    <footer>
      <b-container fluid class="footer">
        <b-row align-h="center">
          <b-link to="/contact"> Contact </b-link>
        </b-row>
        <b-row align-h="center">
          <p> Sergio Klein </p>
        </b-row>
        <b-row align-h="center">
          <b-link>  <b-icon icon="instagram"> </b-icon>  </b-link>
        </b-row>  
      </b-container>
    </footer>
  </div>
</template>


<style lang="scss">
  @import './assets/_custom.scss'
</style>

