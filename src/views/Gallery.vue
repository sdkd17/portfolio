<template>
  <div v-if="ready">
    <b-container fluid class="px-5 pb-5" > 
      <b-row class="py-5 gallery-header"> 
        <b-col v-for="(p,i) in projects" :key="p.name + i"> 
          <!-- What the hell!! Why is this v-if needed -->
          <b-link v-if="p.name"
            :class="{active: p.name === project}"
            :to="{name: 'Gallery', params: { project: p.name } }"
          >
            <h3> Galeria {{p.name}} </h3> 
          </b-link>
       </b-col>
      </b-row>
      <!-- ********************************************************************************** -->
      <b-row class="mx-auto">
        <GalleryContainer :imgs="currentProjectShow" />
      </b-row> 

      <b-row> 
        <b-button-toolbar key-nav class="mx-auto p-5">
          <b-button-group class="mr-2">
            <b-button @click="goToFirstPage()">&laquo;</b-button>
            <b-button @click="prevPage()">&lsaquo;</b-button>
          </b-button-group>
          <b-button-group>
            <b-button 
              v-for="i in Math.ceil(currentProject.length/perPage)" 
              :key="project+i"
              :class="{active: currentPage === (i-1)}"
              @click="changeCurrentPage(i-1)"
            >
             {{ i }}
            </b-button>
            
          </b-button-group>
          <b-button-group class="ml-2">
            <b-button @click="nextPage()">&rsaquo;</b-button>
            <b-button @click="goToLastPage()" >&raquo;</b-button>
          </b-button-group>
        </b-button-toolbar>
      </b-row>
    </b-container>
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
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import GalleryContainer from '@/components/GalleryContainer.vue'
import firebaseApp  from "@/firebaseInit.js";
import {ref, getStorage, list, listAll, getDownloadURL, getMetadata} from "firebase/storage"

export default {
  name: 'Gallery',
  components: {
    GalleryContainer
  },
  props: {
    project: {
      type: String,
      required: true
    },
  },
  data(){
    return {
      projects: [],
      modalShow: false,
      imgSelected: '',
      ready: false,
      currentPage: 0,
      perPage: 9,
    }
  },
  watch: {
    project: function() {
      this.currentPage = 0
    }
  },
  computed: {
    currentProject(){
      if (this.ready) {
        return this.projects.find((p) => p.name === this.project).imgs
      } else {
        return []
      }
    },
    currentProjectShow(){
      if (this.ready){
        return this.currentProject.slice(this.perPage*this.currentPage, this.perPage*this.currentPage+this.perPage)
      } else {
        return []
      }
      
    }
  },
  methods: {
    
    changeCurrentPage(page) {
      this.currentPage = page
    },
    goToFirstPage(){
      this.currentPage = 0
    },
    goToLastPage(){
      this.currentPage = Math.floor(this.currentProject.length/this.perPage)
    },
    prevPage(){
      if (this.currentPage > 0) 
        this.currentPage = this.currentPage - 1
    },
    nextPage(){
      if (this.currentPage < Math.floor(this.currentProject.length/this.perPage)){
        this.currentPage = this.currentPage + 1
      }
    },

  },

  async mounted() {
    
    const storage = getStorage(firebaseApp)
    const smallRef = ref(storage, "small")
    
    try{
      const res = await listAll(smallRef)
      for (const folderRef of res.prefixes) {
        let project = {name: "", imgs:[]}
        try{
          const resFiles = await list(folderRef)

          await Promise.all(resFiles.items.map( async (itemRef) => {
            try {
              const md = await getMetadata(itemRef)
              if ( project.name === "" ){
                let match = md.fullPath.match(/\/(\w+)\//)
                project.name = match[1]
              }  
            }catch(error){
              console.error(error)
            }

            try{
              const url = await getDownloadURL(itemRef)  
              project.imgs.push(url)
            }catch(error){
              console.error(error)
            }
          }))
        }catch(error) {
          console.error(error)
        }
        this.projects.push(project)  
      }
    }catch(error) {
      console.error(error)
    }
    this.ready = true
  }
}
</script>
