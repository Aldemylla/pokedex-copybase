<template>
  <section>
    <img :src="sprite" alt="pokemonName" />
    <div class="types">
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
