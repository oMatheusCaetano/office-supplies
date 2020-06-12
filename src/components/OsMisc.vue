<template>
  <div class="p-5" id="misc">
    <h2 class="text-uppercase text-center my-3 ">Miscellanous</h2>
    <hr>
    <div class="row">
      <div
        class="my-4 mx-auto col-12 col-md-5 col-lg-4 text-center"
        v-for="(product, index) in products"
        :key="index"
      >
        <a href="#">
          <img class="bg-light" :src="product.imagePath" alt="product" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.miscItems
    },
  },
}
</script>

<style scoped>
img {
  transition: 200ms;
}

img:hover {
  transform: scale(1.1);
}
</style>
