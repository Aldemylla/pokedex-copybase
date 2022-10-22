<template>
  <header class="pokemon__header">
    <div class="title__container">
      <a href="#">
        <img src="@/assets/icons/pokemon_back_arrow.svg" alt="" />
      </a>
      <h1>{{ pokemonName }}</h1>
    </div>
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

<style lang="scss" scoped>
.pokemon__header {
  height: 250px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin: auto;
  padding: 20px 0;

  color: $white;

  .title__container {
    display: flex;
    align-items: center;
    gap: 10px;

    h1 {
      font-weight: 600;
      text-transform: capitalize;
    }

    a {
      display: flex;
      align-items: center;
    }
  }
  h2 {
    font-weight: 600;
  }
}
</style>
