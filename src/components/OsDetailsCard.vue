<template>
  <div class="text-center">
    <p class="text-uppercase" :class="{ 'text-white': darkTheme }">{{ product.type }}</p>
    <h3 class="text-uppercase font-weight-bold" :class="{ 'text-white': darkTheme }">
      {{ product.name }}
    </h3>
    <h4 class="text-center font-weight-bold">
      <span :class="{ 'text-warning': darkTheme }">${{ product.price }}</span>
    </h4>
    <p :class="darkTheme ? 'text-white' : 'text-secondary'">
      {{ product.description }}
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
  props: ['darkTheme', 'product'],
}
</script>
