<template>
  <div
    class="carousel slide"
    id="indicators"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#indicators"
        :class="{ active: index === 0}"
        :data-slide-to="index"
        :key="index"
        v-for="(product, index) in products"
      >
      </li>
    </ol>
    <div class="carousel-inner">
      <div
        class="carousel-item"
        :class="{ active: index === 0}"
        v-for="(product, index) in products"
        :key="index"
      >
        <div class="d-flex flex-wrap align-items-center bg-dark">
          <img
            class="img d-block mx-auto"
            :src="product.imagePath"
            :alt="product.imagePath"
          />

          <os-details-card class="col-md-7 h-50 pb-5" :darkTheme="true" :product="product" />
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#indicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </a>
    <a
      class="carousel-control-next"
      href="#indicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </a>
  </div>
</template>

<script>
import OsDetailsCard from './OsDetailsCard.vue'

export default {
  components: {
    OsDetailsCard,
  },
  computed: {
    products() {
      return this.$store.state.carouselItems
    },
  },
}
</script>
