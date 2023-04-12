<template>
  <section class="c-club">
      <h2 class="c-club__title -js-animated-title">LE CLUB</h2> 
      <p class="c-club__text -js-sticky-text -t-1">
        Depuis plus d’un an, on vibre ensemble. Aujourd’hui, on peut vibrer ensemble sous les mêmes couleurs. Notre premier maillot Unified Champions voit le jour. 
        Unified Champions, c’est un club. C’est une manière de vivre ses années étudiantes différemment. Maintenant, c’est également une nouvelle manière de s’habiller.
      </p>
      <p class="c-club__text -js-sticky-text -t-2">
        Soutenez Unified Champions Club en cours de sport, à la salle, et dans la vie de tous les jours. Devenez un champion. 
      </p>
  </section>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { StickyText } from '@/assets/script/classes/StickyText.js';

export default {
  name: 'Club',
  methods: {
    start() {
      const club = document.querySelector('.c-club');
      club.style.opacity = 1;

      const text1 = document.querySelector('.-js-sticky-text.-t-1');
      const text2 = document.querySelector('.-js-sticky-text.-t-2');

      const stickyText1 = new StickyText(text1, club, {start: 0.05, end: 0.4});
      const stickyText2 = new StickyText(text2, club, {start: 0.6, end: 0.8});

      const color = '#9988FF80'

      gsap.registerPlugin(ScrollTrigger);
      // ScrollTrigger.create({
      //   id:"background-color",
      //   trigger: club,
      //   start: 'top 0%',
      //   end: 'bottom 100%',
      //   onEnter: () => this.changeBg(color),
      //   onLeave: () => this.changeBg('#00000000'),
      //   onEnterBack: () => this.changeBg(color),
      //   onLeaveBack: () => this.changeBg('#00000000'),
      // });
    },
    changeBg(color) {
      document.querySelector('.c-club').style.backgroundColor = color;
    }
  },
}
</script>

<style lang="scss">
.c-club {
  opacity: 0;
  width: 100%;
  margin-top: 20vh;
  height: 400vh;
  padding: 15vh;
  transition: 300ms ease-in;
  background-color: #00000000;

  &__title {
    display: block;
    position: sticky;
    top: 10rem;
    width: fit-content;
    height: fit-content;

    margin: 0rem auto;

    font-size: 10rem;
    color: white;
  }

  &__text {
    position: sticky;
    width: 50%;
    font-size: 1.8rem;
    color: white;

    &.-t-1 {
      top: 50vh;
    }
    &.-t-2 {
      top: 60vh;
    }
    
  }
}
</style>