<template>
  <section class="c-hero">
      <div class="c-hero__wrapper">
          <div class="c-hero__container">
            <span class="c-hero__subtitle -js-animated-title">WE ARE</span>
          </div>
          <!-- <div class="c-hero__three" id="united-champion-canvas">
            <h1 class="c-hero__title -is-three" id="united-three">UNITEED</h1>
            <h1 class="c-hero__title -is-three" id="champion-three">CHAMPION</h1>
          </div> -->
          <div class="c-hero__container">
            <h1 class="c-hero__title -js-animated-title">UNIFIED CHAMPIONS</h1>
          </div>
      </div>
  </section>
  </template>
  
  <script>
  import { CustomText } from '@/assets/script/classes/three-text.js';
  import UnitedURL from '@/assets/textures/texts/UNITEED.png';
  import ChampionURL from '@/assets/textures/texts/CHAMPION.png';
  
  export default {
    name: 'Hero',
    methods: {
      start() {
        const hero = document.querySelector('.c-hero');
        hero.style.opacity = 1;

        // const renderUnited = new CustomText(document.querySelector('#united-three'), UnitedURL);
        // const renderChampion = new CustomText(document.querySelector('#champion-three'), ChampionURL);
      }
    },
  }
  </script>
  
  <style lang="scss">
  .c-hero {
    opacity: 0;

    width: 95%;
    margin: 0 auto;
    padding: 100px 0;
    min-height: 100vh;

    &__wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    
    &__container {
      // width: 50%;
      height: fit-content;
    }

    &__title {
      font-size: 10rem;
      width: fit-content;
      height: fit-content;
      color: white;
      display: block;
      position: relative;
      margin: 0rem auto;
      text-align: center;
    }
    
    &__subtitle {
      display: block;
      font-size: 3.6rem;
      color: white;
      // padding: 8rem 8rem 4rem 0;
      margin: 14% auto 0 auto;
      text-align: center;
    }





    // &__three {
    //   align-self: flex-end;
    //   justify-self: flex-end;
    // }
    
    // &__title.-is-three {
    //   font-family: 'StretchPro';
    //   font-size: 14rem;
    //   width: fit-content;
    //   height: fit-content;
    //   color: white;
    //   display: block;
    //   position: relative;
    //   margin-top: 40px;
    //   // color: black;  
    //   & > canvas {
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     opacity: 1;
    //   }
    // }
  }
  
  
  </style>