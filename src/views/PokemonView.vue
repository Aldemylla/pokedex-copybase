<template>
  <div
    v-if="pokemon"
    class="pokemon"
    :style="{
      background: pokeTypeColor,
      color: pokeTypeColor
    }"
  >
    <PokemonHeader :pokemon-name="pokemon.name" :pokemon-id="pokemon.id" />
    <main class="pokemon__main">
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
      <PokemonBaseStats
        :stats="pokemon.stats"
        :poke-type-color="pokeTypeColor"
      />
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
      pokemon: 'getFilteredPokemon',
      pokeTypeColor: 'getFilteredPokemonTypeColor'
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

<style lang="scss">
.pokemon {
  min-height: 100vh;

  padding: 1% 5% 5%;

  .pokemon__main {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    margin: auto;
    padding: 5%;

    border-radius: 8px;
    background: $white;

    h3 {
      font-weight: 600;
      font-size: 1.5rem;
    }
  }
}
</style>
