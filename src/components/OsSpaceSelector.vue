<template>
  <div class="bg-light p-md-4 pb-5" id="spaces">
    <h2 class="text-uppercase text-center py-4">Spaces</h2>
    <div class="d-flex justify-content-around pb-4">
      <a
        class="text-uppercase h6"
        :class="{
          'p-2 border border-dark-yellow': product.name === currentSpace,
        }"
        v-for="(product, index) in products"
        :key="index"
        @click="currentSpace = product.name"
      >
        {{ product.name }}
      </a>
    </div>
    <div
      class="position-relative pb-lg-3"
      v-for="product in products"
      :key="product.name"
    >
      <transition enter-active-class="animate__animated animate__fadeIn">
        <div v-if="product.name === currentSpace">
          <div class="d-flex flex-wrap">
            <div class="col-12 col-lg-7">
              <img
                class="col-auto h-auto"
                :src="product.imagePath"
                alt="product-image"
              />
            </div>
            <os-details-card
              class="col-12 col-lg-5"
              :product="product"
              buttonType="explore"
            >
              <h3 class="text-uppercase border-bottom pb-3 text-dark-yellow">
                Series
              </h3>
            </os-details-card>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import OsDetailsCard from './OsDetailsCard.vue'

export default {
  components: {
    OsDetailsCard,
  },

  data: () => ({
    currentSpace: 'Warnock',
  }),

  computed: {
    products() {
      return this.$store.state.spacesItems
    },
  },
}
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
