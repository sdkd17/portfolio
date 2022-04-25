<template>
  
    <div v-if="project == 'Otros'">
      <div class="gallery-container">
        <img 
            v-for="img in imgOtros" 
            :key='img'
            :src="require(`@/assets/Otros${img}`)"
          /> 
          
      </div>
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  // 

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
      imgAnimales: [] 
    }
  },
  mounted() {
    const context = require.context('@/assets/Otros/', false, /\.jpg$/)
    
    this.imgOtros = context.keys().map( (key) => {
       return key.slice(1, key.length)
    })

    
  }
}
</script>
