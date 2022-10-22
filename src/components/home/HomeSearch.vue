<template>
  <section class="home__search">
    <h2 class="subtitle">
      {{ pokemonsCount }} Pokemons for you to choose your favorite
    </h2>
    <div class="search-bar">
      <img src="@/assets/icons/search.svg" alt="Search" />
      <input
        type="search"
        :value="search"
        placeholder="Search"
        @input="SET_SEARCH($event.target.value)"
        @keyup.enter="routerHandler"
      />
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState({
      search: (state) => state.pokemons.search
    }),
    ...mapGetters({
      pokemonsCount: 'getPokemonsCount'
    })
  },

  methods: {
    ...mapMutations(['SET_SEARCH']),

    routerHandler() {
      if (this.search) {
        this.$router.push({
          name: 'pokemon',
          params: { pokemonName: this.search }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.home__search {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .subtitle {
    font-size: 1.2rem;
    text-align: center;
    color: $dark-gray;
  }

  .search-bar {
    min-width: 190px;
    width: 60%;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    padding: 4px 8px;

    background: $white;

    border: 1px solid $light-gray;
    border-radius: 8px;

    img {
      height: 1.2rem;
    }

    input {
      width: 100px;

      font-size: 1.2rem;
      border: none;

      transition: all 0.2s ease-in-out;

      &::placeholder {
        text-align: center;
      }

      &:not(:placeholder-shown) {
        width: 100%;
      }

      &:focus {
        outline: none;
        width: 100%;
        text-align: left;

        &::placeholder {
          opacity: 0;
        }
      }
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1279px) {
    .search-bar {
      width: 70%;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    .search-bar {
      width: 80%;
    }
  }

  @media only screen and (max-width: 480px) {
    .search-bar {
      width: 95%;
    }
  }
}
</style>
