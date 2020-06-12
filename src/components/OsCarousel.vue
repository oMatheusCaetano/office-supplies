<template>
  <div
    class="carousel slide"
    id="indicators"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        class="active"
        data-target="#indicators"
        data-slide-to="0">
      </li>
      <li data-target="#indicators" data-slide-to="1"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="d-flex flex-wrap align-items-center bg-dark">
          <img
            class="img d-block mx-auto "
            src="../assets/slide/ergonomic-chair.png"
            alt="ergonomic-chair"
          />

          <os-details-card class="col-md-7 h-50 pb-5" :darkTheme="true" />
        </div>
      </div>
      <div class="carousel-item">
        <div class="d-flex flex-wrap align-items-center bg-dark">
          <img
            class="img col-12 col-md-4 d-block mx-auto"
            src="../assets/slide/writing-desk.png"
            alt="writing-desk"
          />

          <os-details-card class="col-md-7 h-50 pb-5" :darkTheme="true" />
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
}
</script>

<style></style>
