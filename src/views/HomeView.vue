<template>
<div class="l-landing-page">
  <main>
    <LoadingPage v-if="loading" />
    <Header ref="header"/>
    <Hero ref="hero"/>
    <Club ref="club"/>
    <Merch v-on:merch-loaded="handleLoading('merch')" ref="merch"/>
    <!-- 
    <Universite />
    <Talent />
    -->
  <Background v-on:background-loaded="handleLoading('background')" ref="background"/>

    </main>
</div>
</template>

<script>
import LoadingPage from '../components/LoadingPage.vue';
import Header from '@/components/Header.vue';
import Background from '@/components/Background.vue';
import Hero from '@/components/Hero.vue';
import Club from '@/components/Club.vue';
import Merch from '../components/Merch.vue';
// import Universite from '../components/Universite.vue';
// import Talent from '@/components/Talent.vue';
import { AnimatedTitle } from '@/assets/script/AnimatedTitle.js';
import { StickyText } from '@/assets/script/classes/StickyText.js';

export default {
  name: 'HomeView',
  data() {
    return {
      loader: [],
      loading: true
    }
  },
  components: {
    Header,
    Hero,
    Club,
    Background,
    Merch,

    // Talent,
    // Universite,
    LoadingPage
  },
  methods: {
    handleLoading(component) {
      this.loader[component] = true;
      if (Object.values(this.loader).every(value => value === true)) {
        this.loading = false;
        this.start();
      }
    },
    start() {
      console.log('all files loaded -> ', this.loader);
        document.querySelectorAll('.-js-animated-title').forEach(title => {
          console.log(title);
          const animatedTitle = new AnimatedTitle(title);
        });
        this.$refs.background.start();
        this.$refs.header.start();
        this.$refs.hero.start();
        this.$refs.club.start();
        this.$refs.merch.start();
    }
  },
  mounted() {
    const components = [
      "background",
      "merch",
    ];
    components.forEach(component => {
      this.loader[component] = false;
    });
  }
}
</script>

<style lang="scss">
$blur-white: rgba(255, 255, 255, 0.1);
$blur-purple : rgba(164, 33, 240, 0.1);
$white: #fff;

body {
  background-color: rgb(0, 0, 0);
}
.l-landing-page {
  width: 100%;
  min-height: 100vh;
}
</style>