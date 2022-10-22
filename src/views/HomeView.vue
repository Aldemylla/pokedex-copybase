<template>
  <div class="home__container">
    <HomeHeader />
    <HomeSearch />
    <HomePokemonsList />
    <HomeNav />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import HomeHeader from '@/components/home/HomeHeader.vue';
import HomeSearch from '@/components/home/HomeSearch.vue';
import HomePokemonsList from '@/components/home/HomePokemonsList.vue';
import HomeNav from '@/components/home/HomeNav.vue';

export default {
  components: { HomeHeader, HomeSearch, HomePokemonsList, HomeNav },

  created() {
    this.getInitialPage();
  },

  methods: {
    ...mapActions(['getInitialPage'])
  }
};
</script>

<style lang="scss">
.home {
  &__container {
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 20px;

    background: $background;
  }

  @media only screen and (max-width: 768px) {
    &__header {
      order: 1;
    }
    &__search {
      order: 2;
    }
    &__nav {
      order: 3;

      margin-top: 20px;
    }
    &__pokemons-list {
      order: 4;
    }
  }
}
</style>
