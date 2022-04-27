<template>
  <div class="home px-5">
    <Intro />
     <b-container> 
         <b-row align-h="center" class="pt-5">
          <h2> {{ "cosas a las que le saco fotos".toUpperCase() }} </h2>
        </b-row>
     </b-container>
     <b-link v-for="p in projects" :key="p" :to="{ name: 'Gallery', params: {project: p, plist: projects} }"> 
      <b-container  class="mx-auto py-5">
         <Project :project="p"/>
      </b-container>  
     </b-link>
    
  
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Intro from '@/components/Intro.vue'
import Project from '@/components/Project.vue'

export default {
  name: 'Home',
  components: {
    Intro,
    Project
  },
  data () {
    return {
      projects : []
    }
  },
  mounted(){
    const context = require.context('@/assets', true, /\.jpg$/)
    
    //defino projects segun las carpetas que existen en en @/assets
    let a = context.keys().map( (key) => {
      let match = key.match(/\/(\w+)\//)
      if (match)
        return match[1]
      return null
    })
    
    this.projects = [...new Set( a.filter(e => e!=null) )]
    
  }
}
</script>
