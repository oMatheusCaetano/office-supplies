import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carouselItems: [
      {
        price: 200.00,
        imagePath: require('../assets/slide/ergonomic-chair.png'),
        type: 'Modern Chair',
        name: 'Ergonomic Chair',
        description: 'A brand new office should always start with comfort, then you can jump to other accomodations',
      },
      {
        price: 99.00,
        imagePath: require('../assets/slide/writing-desk.png'),
        type: 'Basic Table',
        name: 'Writing Desk',
        description: 'Artful, functional, and elegant, this desk showcases a striking look and wonderful versatility for any use in the home',
      },
    ],
  },
})
