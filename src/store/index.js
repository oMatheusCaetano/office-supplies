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

    spacesItems: [
      {
        imagePath: require('../assets/places/cabinets.png'),
        name: 'Warnock',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
      },
      {
        imagePath: require('../assets/places/conv-space.png'),
        name: 'Aston',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
      },
      {
        imagePath: require('../assets/places/reunion.png'),
        name: 'Kobe',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
      },
    ],

    miscItems: [
      {
        imagePath: require('../assets/misc/cabinets.png'),
      },
      {
        imagePath: require('../assets/misc/printer.png'),
      },
      {
        imagePath: require('../assets/misc/wooden-table.png'),
      },
      {
        imagePath: require('../assets/misc/lamp-1.png'),
      },
      {
        imagePath: require('../assets/misc/lamp-2.png'),
      },
      {
        imagePath: require('../assets/misc/lamp-3.png'),
      },
    ],
  },
})
