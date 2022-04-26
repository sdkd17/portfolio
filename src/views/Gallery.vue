<template>
  <b-container fluid class="px-5" > 
    <b-row class="py-5 gallery-header"> 
      <b-col> 
        <b-link 
          :class="{active: project == 'Gente'}" 
          :to="{name: 'Gallery', params:{project: 'Gente'}}"
        >
          <h3> Galeria Gente </h3> 
        </b-link>
     </b-col>
      <b-col> 
        <b-link 
          :class="{active: project == 'Animales'}" 
          :to="{name: 'Gallery', params:{project: 'Animales'}}"
        >
          <h3> Galeria Animales </h3>
        </b-link>
      </b-col>
      <b-col >
        <b-link 
          :class="{active: project == 'Otros'}" 
          :to="{name: 'Gallery', params:{project: 'Otros'}}"
        >
          <h3> Galeria Otros </h3>
        </b-link>
      </b-col>
    </b-row>
    <b-row
      v-if="project == 'Otros'"     
      class="mx-auto"
    >
      <div class="gallery-container ">
        <div class="img-wrap my-3"  
          v-for="img in imgOtros" 
          :key="img"

        >
          <b-img 
            @click.prevent="handleModal(img)"
            :src="require(`@/assets/Otros${img}`)"
            thumbnail
        />
        </div>           
      </div>
    </b-row>

      <b-row
      v-if="project == 'Animales'"     
      class="mx-auto"
    >
      <div class="gallery-container">
        <div class="img-wrap my-3"  
          v-for="img in imgAnimales" 
          :key="img"
        >
          <b-img 
            @click.prevent="handleModal(img)"
            :src="require(`@/assets/Animales${img}`)"
            thumbnail
        />
        </div>           
      </div>
    </b-row>

    <b-row
      v-if="project == 'Gente'"     
      class="mx-auto"
    >
      <div class="gallery-container">
        <div class="img-wrap my-3"
          v-for="img in imgGente" 
          :key="img"
        >
          <b-img 
            @click.prevent="handleModal(img)"
            :src="require(`@/assets/Gente${img}`)"
            thumbnail
        />
        </div>           
      </div>
    </b-row>

    <b-modal
      v-model="modalShow"
      lazy 
      modal-class="modal"     
    >
      <b-container fluid class="mx-auto"> 
        <!-- <b-img 
          v-if="modalShow" 
          :src="require(`@/assets/Otros${imgSelected}`)" 
          alt="imagen" 
          thumbnail 
        /> -->
      </b-container>
    </b-modal>
  </b-container>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  name: 'Gallery',
  components: {

  },
  props: {
    project: {
      type: String,
      required: true
    } 
  },
  data(){
    return {
      imgGente: [],
      imgOtros: [],
      imgAnimales: [],
      modalShow: false,
      imgSelected: null,
      // activeGallery: this.props.project
    }
  },
  watch: {
    // project(newValue) {
    //   // console.log(newValue)
    // }
  },
  methods: {
    handleModal(img){
      this.modalShow = !this.modalShow
      this.imgSelected = img
      // console.log(img)
    }
  },
  mounted() {
  
    const context = require.context('@/assets/Otros', false, /\.jpg$/)
    
    this.imgOtros = context.keys().map( (key) => {
       return key.slice(1, key.length)
    })

    const context_a = require.context('@/assets/Animales', false, /\.jpg$/)
    
    this.imgAnimales = context_a.keys().map( (key) => {
       return key.slice(1, key.length)
    })

    const context_g = require.context('@/assets/Gente', false, /\.jpg$/)
    
    this.imgGente = context_g.keys().map( (key) => {
       return key.slice(1, key.length)
    })

    
  }
}
</script>
