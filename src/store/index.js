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
        price: 180.00,
        imagePath: require('../assets/slide/kisng-computer-desk.png'),
        type: 'Gamer Desk',
        name: 'Kisng Gamer Desk',
        description: 'We know that having a dedicated gaming desk is a must. And it can not be any old desk. You need a smartly designed station that provides plenty of room for your monitor, console, keyboard, and mouse.',
      },
      {
        price: 99.00,
        imagePath: require('../assets/slide/writing-desk.png'),
        type: 'Basic Table',
        name: 'Writing Desk',
        description: 'Artful, functional, and elegant, this desk showcases a striking look and wonderful versatility for any use',
      },
    ],
  },
})
