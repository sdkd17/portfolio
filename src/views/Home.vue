<template>
  <div class="home px-5">
    <Intro />
    <Work />
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
  }
}
</script>
