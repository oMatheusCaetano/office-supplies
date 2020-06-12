<template>
  <div class="text-center pt-4 pb-3">
    <div
      class="text-uppercase text-white font-weight-bold mb-3"
      v-if="list.title === 'Office Supplies'"
    >
      <img class="rounded-circle mr-1" src="../assets/logo.png" alt="logo" />
      Office
      <span class="text-dark-yellow">Supplies</span>
    </div>
    <div
      class="text-uppercase text-white font-weight-bold border-left border-dark-yellow mb-3"
    >
      {{ list.title !== 'Office Supplies' ? list.title : '' }}
    </div>
    <div class="d-flex flex-column">
      <a
        class="text-light-gray text-decoration-none"
        href="#"
        v-for="item in list.list"
        :key="item"
      >
        {{ item }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],
}
</script>
