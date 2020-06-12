<template>
  <div id="app">
    <os-navbar />

    <div class="d-flex flex-wrap align-items-center bg-light">
      <img
        class="col-10 col-md-3 d-block mx-auto"
        src="./assets/slide/ergonomic-chair.png"
        alt="ergonomic-chair"
      />

      <os-details-card class="col-md-7 h-50" />
    </div>
          <img
        class="col-10 col-md-3 d-block mx-auto"
        src="./assets/slide/ergonomic-chair.png"
        alt="ergonomic-chair"
      />
  </div>
</template>

<script>
import OsNavbar from './components/OsNavbar.vue'
import OsDetailsCard from './components/OsDetailsCard.vue'

export default {
  components: {
    OsNavbar,
    OsDetailsCard,
  },
}
</script>
