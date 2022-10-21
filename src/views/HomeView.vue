<template>
  <div>
    <HomeHeader />
    <HomeSearch />
    <HomePokemonsList />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import HomeHeader from '@/components/HomeHeader.vue';
import HomeSearch from '@/components/HomeSearch.vue';
import HomePokemonsList from '@/components/HomePokemonsList.vue';

export default {
  components: { HomeHeader, HomeSearch, HomePokemonsList },

  created() {
    this.getInitialPage();
  },

  methods: {
    ...mapActions(['getInitialPage'])
  }
};
</script>
