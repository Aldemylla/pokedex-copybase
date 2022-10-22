<template>
  <div v-if="pokemon" class="pokemon">
    <PokemonHeader :pokemon-name="pokemon.name" :pokemon-id="pokemon.id" />
    <main>
      <PokemonDisplay
        :sprite="pokemon.sprites.other['official-artwork'].front_default"
        :pokemon-name="pokemon.name"
        :types="pokemon.types.map((type) => type.type.name)"
      />
      <PokemonAbout
        :weight="pokemon.weight"
        :height="pokemon.height"
        :special-move="pokemon.moves[0].move.name"
      />
      <PokemonBaseStats :stats="pokemon.stats" />
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import PokemonHeader from '../components/pokemon/PokemonHeader.vue';
import PokemonDisplay from '../components/pokemon/PokemonDisplay.vue';
import PokemonAbout from '../components/pokemon/PokemonAbout.vue';
import PokemonBaseStats from '../components/pokemon/PokemonBaseStats.vue';

export default {
  components: { PokemonHeader, PokemonDisplay, PokemonAbout, PokemonBaseStats },

  computed: {
    ...mapGetters({
      error: 'getError',
      pokemon: 'getFilteredPokemon'
    })
  },

  watch: {
    error() {
      if (this.error && !this.pokemon) {
        this.$router.push({ path: '/error' });
      }
    }
  },

  created() {
    this.getPokemon();
  },

  methods: {
    ...mapActions(['getPokemon'])
  }
};
</script>
