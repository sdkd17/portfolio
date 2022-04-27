<template>
  <b-container fluid class="px-5 pb-5" > 
    <b-row class="py-5 gallery-header"> 
      <b-col v-for="p in plist" :key="p"> 
        <b-link 
          :class="{active: p == project}" 
          :to="{name: 'Gallery', params:{project: p, plist: plist}}"
        >
          <h3> Galeria {{p}} </h3> 
        </b-link>
     </b-col>
      
    </b-row>
    <!-- ********************************************************************************** -->
    <b-row    
      class="mx-auto"
    >
      <div class="gallery-container ">
        <div class="img-wrap my-3"  
          v-for="img in imgShow" 
          :key="img"
        >
          <b-img 
            @click.prevent="handleModal(img)"
            :src="require(`@/assets${img}`)"
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
    },
    plist: {
      type: Array,
      required: true
    }
  },
  data(){
    return {
      imgs: [],
      imgShow: [],
      modalShow: false,
      imgSelected: null,
    }
  },
  watch: {
    "$route.params.project": {
      handler: function(newValue){
        if (this.imgs) {
          this.imgShow = this.imgs.filter( img => img.includes(newValue))
        }
      },
      deep: true,
      immediate: true
    }
  },

  methods: {
    handleModal(img){
      this.modalShow = !this.modalShow
      this.imgSelected = img
      // console.log(img)
    }
  },

  mounted() {
  
    const context = require.context('@/assets', true, /\.jpg$/)
    
    this.imgs = context.keys().map( (key) => {
       return key.slice(1, key.length)
    })

    this.imgShow = this.imgs.filter( img => img.includes(this.$route.params.project))

    
  }
}
</script>
