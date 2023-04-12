<template>
  <section class="c-talent">
    <div class="c-talent__wrapper">
      <div class="c-talent__container -is-right-top">
        <h2 class="c-animated-title">Montrez votre talent</h2>
      </div>
      <div class="c-talent__container -is-left-bottom">
        <h2 class="c-animated-title">Participer tenter gagner</h2>
        <p>Rejoignez l’un des nombreux tournois organisés par notre association et prouver votre force</p>
        <a href="#">L'arène</a>
      </div>
      <img class="c-talent__image" src="@/assets/img/talent.png" alt="Photographie d'un clavier gaming">
    </div>
  </section>
</template>

<script>

export default {
  name: 'Talent',
  // mounted() {
  //   document.querySelectorAll('.c-animated-title').forEach(title => {
  //     const animatedTitle = new AnimatedTitle(title);
  //     console.log(animatedTitle);
  //   });
  // }
}
</script>

<style lang="scss">
.c-talent {
  width: 100%;
  height: 300vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &__wrapper {
    width: 100%;
    height: fit-content;
    max-width: 100rem;
    position: relative;
  }
  &__container {
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    &.-is-right-top {
      top: 0;
      right: 0;
    }
    &.-is-left-bottom {
      bottom: 0;
      left: 0;
    }
  }
  &__image {
    aspect-ratio: 42/38;
    max-width: 42rem;
    width: 100%;
    margin: 0 auto;
  }
}
.c-animated-title {

  $font-size: 6rem;
  $line-height: $font-size * 1.1;
  font-family: 'StretchPro';
  line-height: $line-height;
    
  font-size: $font-size;
  display: flex;
  flex-direction: column;
    
  text-transform: uppercase;
  height: fit-content;
  color: white;

    &__word {
      overflow: hidden;
      height: $line-height;
    }
    &__letter {
      display: inline-block;
    }
}
</style>