<template>
  <div v-if="ready">
    <b-container fluid class="px-5 pb-5" > 
      <b-row class="py-5 gallery-header"> 
        <b-col v-for="(p,i) in projects" :key="p.name + i"> 
          <!-- What the hell!! Why is this v-if needed -->
          <b-link v-if="p.name" 
            :to="{name: 'Gallery', params: { project: p.name } }"
          >
            <h3> Galeria {{p.name}} </h3> 
          </b-link>
       </b-col>
      </b-row>
      <!-- ********************************************************************************** -->
      <b-row    
        class="mx-auto"
      >
        <div
          class="gallery-container"
          >
          <div class="img-wrap my-3"
            v-for="img in currentProject" 
            :key="img"
            
          >
            <b-img 
              @click="handleModal(img)"
              :src="img"
              thumbnail
          />
          </div>           
        </div>
      </b-row>

      <b-modal
        v-model="modalShow"
        lazy 
        modal-class="modal"
        size="lg"
        hide-footer
      >
        <b-container fluid> 
          <b-img-lazy
            v-if="modalShow" 
            :src="imgSelected" 
            alt="imagen" 
            thumbnail 
          />
        </b-container>
      </b-modal>
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
import firebaseApp  from "@/firebaseInit.js";
import {ref, getStorage, list, listAll, getDownloadURL, getMetadata} from "firebase/storage"

export default {
  name: 'Gallery',
  components: {

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
      
    }
  },
  computed: {
    currentProject(){
      if (this.ready) {
        return this.projects.find((p) => p.name === this.project).imgs
      } else {
        return []
      }
    }
  },
  methods: {
    handleModal(img) {
      this.modalShow = !this.modalShow
      this.imgSelected = img.replace(/small/,'big')
      // console.log(img)
    }
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
