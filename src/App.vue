<template>
  <div id="app">
    <os-navbar />
    <os-carousel />
    <div class="p-2 p-md-4">
      <os-space-selector />
    </div>
  </div>
</template>

<script>
import OsNavbar from './components/OsNavbar.vue'
import OsCarousel from './components/OsCarousel.vue'
import OsSpaceSelector from './components/OsSpaceSelector.vue'

export default {
  components: {
    OsNavbar,
    OsCarousel,
    OsSpaceSelector,
  },
}
</script>
