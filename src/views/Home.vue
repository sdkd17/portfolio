<template>
  <div class="home px-5">
    <Intro />
    <b-container fluid class="mx-0 p-5"> 
      <Work :work="works[0]"/>
      <Work :work="works[1]"/>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Intro from '@/components/Intro.vue'
import Work from '@/components/Work.vue'

export default {
  name: 'Home',
  components: {
    Intro,
    Work
  },
  data () {
    return {
      works : ['sombrero', 'perro']
    }
  }
}
</script>
