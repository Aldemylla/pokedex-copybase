<template>
  <main v-if="!!pokemons?.[0].id">
    <ol>
      <HomePokemonCard
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        :pokemon-id="pokemon.id"
        :pokemon-name="pokemon.name"
        :sprite="pokemon.sprites.other['official-artwork'].front_default"
        :pokemon="pokemon"
      />
    </ol>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

import HomePokemonCard from './HomePokemonCard.vue';

export default {
  components: { HomePokemonCard },

  computed: {
    ...mapGetters({
      pokemons: 'getPokemons'
    })
  }
};
</script>
