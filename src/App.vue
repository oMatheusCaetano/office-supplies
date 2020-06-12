<template>
  <div id="home">
    <os-navbar />
    <os-carousel class="pt-5" />
    <div id="spaces">
      <os-space-selector />
    </div>
    <div id="misc">
      <os-misc />
    </div>
    <div id="discounts">
      <os-discounts />
    </div>
    <os-footer />
  </div>
</template>

<script>
import OsNavbar from './components/OsNavbar.vue'
import OsCarousel from './components/OsCarousel.vue'
import OsSpaceSelector from './components/OsSpaceSelector.vue'
import OsMisc from './components/OsMisc.vue'
import OsDiscounts from './components/OsDiscounts.vue'
import OsFooter from './components/OsFooter.vue'

export default {
  components: {
    OsNavbar,
    OsCarousel,
    OsSpaceSelector,
    OsMisc,
    OsDiscounts,
    OsFooter,
  },
}
</script>
