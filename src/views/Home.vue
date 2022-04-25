<template>
  <div class="home px-5">
    <Intro />
     <b-container> 
         <b-row align-h="center" class="pt-5">
          <h2> {{ "cosas a las que le saco fotos".toUpperCase() }} </h2>
        </b-row>
     </b-container>
     <b-link v-for="p in projects" :key="p" :to="{ name: 'Gallery', params: {project: p} }"> 
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
      projects : ['Gente', 'Animales', 'Otros']
    }
  }
}
</script>
