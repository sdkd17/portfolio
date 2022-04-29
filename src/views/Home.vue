<template>
  <div class="home px-5">
    <div v-if="ready">
      <Intro />
      <b-container> 
         <b-row align-h="center" class="pt-5">
          <h2> {{ "cosas a las que le saco fotos".toUpperCase() }} </h2>
        </b-row>
      </b-container>
      <b-link v-for="p in projects" :key="p.name" :to="{ name: 'Gallery', params: {project: p.name} }">
      <b-container  class="mx-auto py-5">
         <Project 
            :projectName="p.name"
            :imgSrc="p.img"
          />
      </b-container>  
     </b-link>  
    </div>
    
    <b-container v-else fluid class="py-5">
    <b-row class="py-5"> 
      <b-col> </b-col>
      <b-col class="text-center">
        <b-spinner class="m-2" small type="grow" variant="light"> </b-spinner>
        <b-spinner class="m-2" small type="grow" variant="light"> </b-spinner>
        <b-spinner class="m-2" small type="grow" variant="light"> </b-spinner>
      </b-col>
      <b-col> </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Intro from '@/components/Intro.vue'
import Project from '@/components/Project.vue'
import firebaseApp  from "@/firebaseInit.js";
import {ref, getStorage, list, listAll, getDownloadURL, getMetadata} from "firebase/storage"

export default {
  name: 'Home',
  components: {
    Intro,
    Project
  },
  data () {
    return {
      projects : [],
      ready: false
    }
  },
  async mounted(){


    const storage = getStorage(firebaseApp);

    const smallRef = ref(storage, "small")
    try{
      const res = await listAll(smallRef)
      //Name of folders must be correct
      res.prefixes.forEach( async (folderRef) => {
        let project = {}
        try {
          const resFiles = await list(folderRef, {maxResults: 1})
          const itemRef = resFiles.items.pop()
          try {
            const md = await getMetadata(itemRef)
            let match = md.fullPath.match(/\/(\w+)\//) //Name of files must be correct
            project.name = match[1]
          }catch(error) {
            console.error(error)
          } 
          
          try{
            const url = await getDownloadURL(itemRef)
            project.img = url
          } catch(error){
            console.error(error)
          } 
          this.projects.push(project)
        }catch(error){
          console.error(error)
        }
        
      })
    }catch(error){
      console.error(error)
    }

    this.ready = true;
    
  }
}
</script>
