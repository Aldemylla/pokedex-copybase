<template>
  <section class="pokemon__display">
    <img :src="sprite" alt="pokemonName" />
    <div>
      <PokemonType v-for="type in types" :key="type" :type="type" />
    </div>
  </section>
</template>

<script>
import PokemonType from './PokemonType.vue';
export default {
  components: { PokemonType },
  props: {
    pokemonName: {
      type: String,
      required: true
    },
    sprite: {
      type: String,
      required: true
    },
    types: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.pokemon__display {
  display: grid;
  justify-content: center;
  grid-template-rows: 60px auto;
  justify-items: center;

  img {
    width: 300px;
    transform: translateY(-80%);

    @media only screen and (max-width: 480px) {
      width: 250px;
    }
  }
}
</style>
