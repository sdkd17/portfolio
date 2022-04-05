<template>
  <div id="app">
    
      <b-navbar type="dark" fixed toogable="lg" class="py-4">
        
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mr-auto my-underline">
            <b-nav-item to="/"> <span> Home </span> </b-nav-item>
            <b-nav-item to="/about"> <span> About </span> </b-nav-item>
            <b-nav-item to="/contact"> <span> Contact </span> </b-nav-item>
          </b-navbar-nav>

          <b-navbar-brand class="mx-auto" href="#" >NavBar</b-navbar-brand>

          <b-navbar-nav class="ml-auto"> 
            <b-nav-item href="#"> Twitter </b-nav-item>
            <b-nav-item href="#"> Insta </b-nav-item>
          </b-navbar-nav>
        </b-collapse>

      </b-navbar>
    <router-view/>
  </div>
</template>


<style lang="scss">
  @import './assets/_custom.scss'
</style>

