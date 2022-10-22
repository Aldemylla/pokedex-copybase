<template>
  <li
    role="button"
    class="card"
    :style="{
      color: pokeTypeColor,
      background: pokeTypeColor,
      border: '2px solid ' + pokeTypeColor
    }"
    @click="routerHandler"
  >
    <!-- 
    The style is in inside html to get dynamic colors based on pokemon type
   -->
    <figure aria-labelledby="caption">
      <p class="pokemon-id">#{{ treatId(pokemonId) }}</p>
      <img :src="sprite" :alt="pokemonName" />
    </figure>
    <figcaption id="caption" class="pokemon-name">
      {{ pokemonName }}
    </figcaption>
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
    pokemonType: {
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

  data() {
    return {
      pokeTypeColor: `var(--poke-type-${this.pokemonType}`
    };
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

<style lang="scss" scoped>
.card {
  width: 200px;
  height: 200px;

  display: grid;
  grid-template-rows: 3fr 1fr;

  border-radius: 10px;

  cursor: pointer;

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  figure {
    width: 100%;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding: 5px;

    background: $white;

    border-radius: inherit;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    .pokemon-id {
      width: 100%;

      text-align: right;
      font-size: 1.1rem;
    }

    img {
      width: 100%;
      height: calc(100% - 1.1rem);

      position: absolute;
      bottom: calc(50% - 10px);
      left: 50%;

      transform: translate(-50%, 50%);

      object-fit: contain;
    }
  }

  .pokemon-name {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.5rem;
    color: $white;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 280px;
    height: 280px;

    figure > .pokemon-id {
      font-size: 1.35rem;
    }
    .pokemon-name {
      font-size: 1.75rem;
    }
  }

  @media only screen and (max-width: 480px) {
    width: 310px;
    height: 310px;

    figure > .pokemon-id {
      font-size: 1.6rem;
    }
    .pokemon-name {
      font-size: 2rem;
    }
  }
}
</style>
