<template>
  <div>
    <os-navbar />
    <os-carousel />
    <os-space-selector />
    <os-misc />
    <os-discounts />
  </div>
</template>

<script>
import OsNavbar from './components/OsNavbar.vue'
import OsCarousel from './components/OsCarousel.vue'
import OsSpaceSelector from './components/OsSpaceSelector.vue'
import OsMisc from './components/OsMisc.vue'
import OsDiscounts from './components/OsDiscounts.vue'

export default {
  components: {
    OsNavbar,
    OsCarousel,
    OsSpaceSelector,
    OsMisc,
    OsDiscounts,
  },
}
</script>
