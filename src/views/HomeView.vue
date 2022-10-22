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

import HomeHeader from '@/components/HomeHeader.vue';
import HomeSearch from '@/components/HomeSearch.vue';
import HomePokemonsList from '@/components/HomePokemonsList.vue';
import HomeNav from '@/components/HomeNav.vue';

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

<style lang="scss" scoped>
.home__container {
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 30px 25px;

  background: $background;
}
</style>
