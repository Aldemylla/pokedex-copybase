<template>
  <section>
    <p>{{ pokemonsCount }} Pokemons for you to choose your favorite</p>
    <div>
      <img src="@/assets/icons/search.svg" alt="Search icon" />
      <input
        type="search"
        :value="search"
        @input="SET_SEARCH($event.target.value)"
        @keyup.enter="routerHandler"
      />
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState({
      search: (state) => state.pokemons.search
    }),
    ...mapGetters({
      pokemonsCount: 'getPokemonsCount'
    })
  },

  methods: {
    ...mapMutations(['SET_SEARCH']),

    routerHandler() {
      if (this.search) {
        this.$router.push({
          name: 'pokemon',
          params: { pokemonName: this.search }
        });
      }
    }
  }
};
</script>
