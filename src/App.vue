<template>
  <div id="app">
    <os-navbar />
    <os-carousel />
    <img
      class="col-10 col-md-3 d-block mx-auto"
      src="./assets/slide/ergonomic-chair.png"
      alt="ergonomic-chair"
    />
  </div>
</template>

<script>
import OsNavbar from './components/OsNavbar.vue'
import OsCarousel from './components/OsCarousel.vue'

export default {
  components: {
    OsNavbar,
    OsCarousel,
  },
}
</script>
