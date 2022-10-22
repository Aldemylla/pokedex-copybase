<template>
  <main v-if="!!pokemons?.[0].id">
    <ol class="home__pokemons-list">
      <HomePokemonCard
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        :pokemon-id="pokemon.id"
        :pokemon-name="pokemon.name"
        :pokemon-type="pokemon.types[0].type.name"
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

<style lang="scss" scoped>
.home__pokemons-list {
  width: 80%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  margin: 20px auto;

  list-style: none;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
}
</style>
