<template>
  <div>
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
