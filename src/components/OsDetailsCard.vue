<template>
  <div class="text-center">
    <p class="text-uppercase" :class="{ 'text-white': darkTheme }">Modern chair</p>
    <h3 class="text-uppercase font-weight-bold" :class="{ 'text-white': darkTheme }">
      Ergonomic Chair
    </h3>
    <h4 class="text-center">
      <span :class="{ 'text-warning': darkTheme }">$99,00</span>
    </h4>
    <p :class="darkTheme ? 'text-white' : 'text-secondary'">
      A brand new office should always start with comfort, then you can jump to
      other accomodations
    </p>
    <div>
      <button
        class="text-uppercase btn"
        :class="darkTheme ? 'btn-dark-yellow' : 'btn-dark'"
      >
        Buy It
      </button>
    </div>
  </div>
</template>

<script>

export default {
  props: ['darkTheme'],
}
</script>
