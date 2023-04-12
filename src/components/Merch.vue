<template>
  <section class="c-merch">
      <h2 class="c-merch__title -js-animated-title">MERCH</h2>
      <div id="merch_three" class="c-merch__container">
      </div>
  </section>
</template>

<script>
import { Merch } from '@/assets/script/classes/Merch.js';

export default {
  name: 'Merch',
  data() {
    return {
      merch: {},
    }
  },
  methods: {
    start() {
      const merch = document.querySelector('.c-merch');
      merch.style.opacity = 1;
      this.merch.start = true;
    }
  },
  mounted() {
    this.merch = new Merch(
      document.querySelector('#merch_three'),
      document.querySelector('.c-merch'), 
      () => {
        this.$emit('merch-loaded');
      });  
    }
}
</script>

<style lang="scss">
.c-merch {

  opacity: 0;
  position: relative;
  width: 100%;
  margin-top: 20vh;
  height: 1000vh;
  justify-content: center;

  &__container {
    position: sticky;
    top: 0;
    width: 100vw;
    height: 110vh;
  }

  &__title {
    position: sticky;
    top: 10rem;
    font-size: 10rem;
    width: fit-content;
    height: fit-content;
    color: white;
    display: block;
    margin: 0rem auto;
    text-align: center;
  }
}
</style>