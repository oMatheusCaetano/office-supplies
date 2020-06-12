<template>
  <div class="bg-dark p-5 mt-5">
    <div class="row">
      <os-footer-list
        class="col-12 col-md-5 col-lg-2 mx-auto"
        v-for="list in lists"
        :key="list.title"
        :list="list"
      />
    </div>
  </div>
</template>

<script>
import OsFooterList from './OsFooterList.vue'

export default {
  components: {
    OsFooterList,
  },

  computed: {
    lists() {
      return this.$store.state.footerOptions
    },
  },
}
</script>

<style>
img {
  height: 30px;
}
</style>
