<template>
  <li role="button" @click="routerHandler">
    <p>#{{ treatId(pokemonId) }}</p>
    <img :src="sprite" :alt="pokemonName" />
    <p>{{ pokemonName }}</p>
  </li>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true
    },
    pokemonName: {
      type: String,
      required: true
    },
    sprite: {
      type: String,
      required: true
    },
    pokemon: {
      type: Object,
      required: true
    }
  },

  methods: {
    routerHandler() {
      this.$router.push({
        name: 'pokemon',
        params: { pokemonName: this.pokemonName }
      });
    },

    treatId(value) {
      const idLength = String(value).length;
      if (idLength === 2) {
        return `0${value}`;
      }
      if (idLength === 1) {
        return `00${value}`;
      }
      return value;
    }
  }
};
</script>
