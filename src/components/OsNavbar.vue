<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light py-3 position-fixed w-100 shadow-sm"
  >
    <a class="navbar-brand d-flex align-items-center" href="/">
      <img src="../assets/logo.png" alt="logo-image" />
      <h1 class="text-uppercase h4 ml-2">
        <span class="font-weight-bold mr-2">Office</span>
        <span class="text-dark-yellow">Supplies</span>
      </h1>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse text-uppercase justify-content-end"
      id="navbarNav"
    >
      <ul class="navbar-nav h6">
        <li class="nav-item">
          <a class="nav-link text-black" href="#home" v-smooth-scroll>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-black" href="#spaces" v-smooth-scroll
            >Spaces</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-black" href="#misc" v-smooth-scroll
            >Miscellaneous</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-black" href="#discounts" v-smooth-scroll
            >Discounts</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-black" href="#">About</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  z-index: 1;
}
</style>
