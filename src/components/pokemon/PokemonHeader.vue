<template>
  <header>
    <a href=""> {{ '<-' }} </a>
    <h1>{{ pokemonName }}</h1>
    <h2>#{{ treatId(pokemonId) }}</h2>
  </header>
</template>

<script>
export default {
  props: {
    pokemonName: {
      type: String,
      required: true
    },
    pokemonId: {
      type: Number,
      required: true
    }
  },
  methods: {
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
